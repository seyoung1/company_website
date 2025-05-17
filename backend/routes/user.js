/**
 * 사용자(User) 관련 라우터
 *
 * - POST   /signup         : 회원가입
 * - POST   /login          : 로그인
 * - POST   /logout         : 로그아웃
 * - DELETE /delete/:userId : 사용자 삭제
 * - POST   /verify-token   : 토큰 검증
 */

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User1");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const {
  SUCCESS: SUC_CODE,
  CLIENT_ERROR: CE_CODE,
  SERVER_ERROR: SE_CODE,
} = require("../constants/statusCode");
const { SERVER_ERROR: SE_MES } = require("../constants/errorMessage");

/**
 * 회원가입 처리
 * @route POST /signup
 * @group User
 * @param {string} username.body.required - 사용자명
 * @param {string} password.body.required - 비밀번호
 * @returns {object} 201 - 회원가입 성공 메시지
 * @returns {object} 400 - 이미 존재하는 사용자
 * @returns {object} 500 - 서버 오류
 */
router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res
        .status(CE_CODE.BAD_REQUEST)
        .json({ message: "이미 존재하는 사용자입니다." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      password: hashedPassword,
    });

    await user.save();
    res
      .status(SUC_CODE.CREATED)
      .json({ message: "회원가입이 완료되었습니다." });
  } catch (error) {
    res
      .status(SE_CODE.INTERNAL_SERVER_ERROR)
      .json({ message: "서버 오류가 발생했습니다." });
    console.log(error);
  }
});

/**
 * 로그인 처리
 * @route POST /login
 * @group User
 * @param {string} username.body.required - 사용자명
 * @param {string} password.body.required - 비밀번호
 * @returns {object} 200 - 로그인 성공 및 사용자 정보
 * @returns {object} 401 - 인증 실패(사용자 없음, 비밀번호 오류, 비활성화 등)
 * @returns {object} 500 - 서버 오류
 */
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username }).select("+password");

    if (!user) {
      return res
        .status(CE_CODE.UNAUTHORIZED)
        .json({ message: "사용자를 찾을 수 없습니다." });
    }

    if (!user.isActive) {
      return res
        .status(CE_CODE.UNAUTHORIZED)
        .json({ message: "비활성화된 계정입니다. 관리자에게 문의하세요" });
    }

    if (user.isLoggedIn) {
      return res
        .status(CE_CODE.UNAUTHORIZED)
        .json({ message: "이미 다른 기기에서 로그인되어 있습니다." });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      // 로그인 실패
      user.failedLoginAttempts += 1;
      user.lastLoginAttempt = new Date();

      if (user.failedLoginAttempts >= 5) {
        user.isActive = false;
        await user.save();
        return res.status(CE_CODE.UNAUTHORIZED).json({
          message: "비밀번호를 5회 이상 틀려 계정이 비활성화되었습니다.",
        });
      }
      await user.save();

      return res.status(CE_CODE.UNAUTHORIZED).json({
        message: "비밀번호가 일치하지 않습니다.",
        remainingAttempts: 5 - user.failedLoginAttempts,
      });
    }

    // 로그인 성공
    user.failedLoginAttempts = 0;
    user.lastLoginAttempt = new Date();
    user.isLoggedIn = true;

    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      const ipAddress = response.data.ip;
      user.ipAddress = ipAddress;
    } catch (error) {
      console.error("IP 주소를 가져오는 중 오류 발생:", Error.message);
    }

    await user.save();

    // JWT 토큰 생성
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    console.log(token);

    // 토큰 쿠키 설정
    res.cookie("token", token, {
      httpOnly: true,
      secure: "false",
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
    });

    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    res.json({ user: userWithoutPassword });
  } catch (error) {
    console.error("서버 오류:", error.message);
    res
      .status(SE_CODE.INTERNAL_SERVER_ERROR)
      .json(SE_MES.INTERNAL_SERVER_ERROR);
  }
});

/**
 * 로그아웃 처리
 * @route POST /logout
 * @group User
 * @returns {object} 200 - 로그아웃 성공 메시지
 * @returns {object} 400 - 이미 로그아웃된 상태
 * @returns {object} 500 - 서버 오류
 */
router.post("/logout", async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res
        .status(CE_CODE.BAD_REQUEST)
        .json({ message: "이미 로그아웃된 상태입니다." });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId);

      if (user) {
        user.isLoggedIn = false;
        await user.save();
      }
    } catch (error) {
      console.log("토큰 검증 오류: ", error.message);
    }

    res.clearCookie("token", {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });

    res.json({ message: "로그아웃되었습니다." });
  } catch (error) {
    console.log("로그아웃 오류: ", error.message);
    res
      .status(SE_CODE.INTERNAL_SERVER_ERROR)
      .json(SE_MES.INTERNAL_SERVER_ERROR);
  }
});

/**
 * 사용자 삭제
 * @route DELETE /delete/:userId
 * @group User
 * @param {string} userId.path.required - 사용자 ID
 * @returns {object} 200 - 삭제 성공 메시지
 * @returns {object} 404 - 사용자 없음
 * @returns {object} 500 - 서버 오류
 */
router.delete("/delete/:userId", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);
    if (!user) {
      return res
        .status(CE_CODE.NOT_FOUND)
        .json({ message: "사용자를 찾을 수 없습니다." });
    }
    res.json({ message: "사용자가 성공적으로 삭제되었습니다." });
  } catch (error) {
    res
      .status(SE_CODE.INTERNAL_SERVER_ERROR)
      .json(SE_CODE.INTERNAL_SERVER_ERROR);
  }
});

/**
 * 토큰 검증
 * @route POST /verify-token
 * @group User
 * @returns {object} 200 - 토큰 유효 및 사용자 정보
 * @returns {object} 400 - 토큰 없음
 * @returns {object} 401 - 유효하지 않은 토큰
 */
router.post("/verify-token", (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(CE_CODE.BAD_REQUEST)
      .json({ isValid: false, message: "토큰이 없습니다." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.status(SUC_CODE.OK).json({ isValid: true, user: decoded });
  } catch (error) {
    return res
      .status(CE_CODE.UNAUTHORIZED)
      .json({ isValid: false, message: "유효하지 않은 토큰입니다." });
  }
});

module.exports = router;
