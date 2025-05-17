/**
 * 문의(Contact) 관련 라우터
 *
 * - POST   /         : 문의 등록
 * - GET    /         : 문의 전체 조회
 * - GET    /:id      : 문의 상세 조회
 * - PUT    /:id      : 문의 상태 수정
 * - DELETE /:id      : 문의 삭제
 */

const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const jwt = require("jsonwebtoken");
const {
  SUCCESS: SUC_CODE,
  CLIENT_ERROR: CE_CODE,
  SERVER_ERROR: SE_CODE,
} = require("../constants/statusCode");
const {
  SUCCESS: SUC_MES,
  CLIENT_ERROR: CE_MES,
  SERVER_ERROR: SE_MES,
} = require("../constants/errorMessage");

/**
 * 서버 에러 처리 함수
 * @param {Error} error - 발생한 에러 객체
 * @param {import("express").Response} res - Express Response 객체
 */
const handdleServerError = (error, res) => {
  console.log(error);
  res.status(SE_CODE.INTERNAL_SERVER_ERROR).json(SE_MES.INTERNAL_SERVER_ERROR);
};

/**
 * JWT 토큰 인증 미들웨어
 * @param {import("express").Request} req - Express Request 객체
 * @param {import("express").Response} res - Express Response 객체
 * @param {Function} next - 다음 미들웨어 함수
 */
const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(CE_CODE.UNAUTHORIZED).json(CE_MES.UNAUTHORIZED);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(CE_CODE.FORBIDDEN).json(CE_MES.FORBIDDEN);
  }
};

/**
 * 문의 등록
 * @route POST /
 * @group Contact
 * @param {string} name.body.required - 이름
 * @param {string} email.body.required - 이메일
 * @param {string} phone.body - 전화번호
 * @param {string} message.body - 문의 내용
 * @param {string} status.body - 상태
 * @returns {object} 201 - 등록 성공 메시지
 * @returns {object} 500 - 서버 에러
 */
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message, status } = req.body;

    const contact = new Contact({
      name,
      email,
      phone,
      message,
      status,
    });

    await contact.save();
    res.status(SUC_CODE.CREATED).json(SUC_MES.CREATED);
  } catch (error) {
    handdleServerError(error, res);
  }
});

/**
 * 문의 전체 조회
 * @route GET /
 * @group Contact
 * @returns {Array<Contact>} 200 - 문의 목록
 * @returns {object} 500 - 서버 에러
 */
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    handdleServerError(error, res);
  }
});

/**
 * 문의 상세 조회
 * @route GET /:id
 * @group Contact
 * @param {string} id.path.required - 문의 ID
 * @returns {Contact.model} 200 - 문의 정보
 * @returns {object} 404 - 문의 없음
 * @returns {object} 500 - 서버 에러
 */
router.get("/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(CE_CODE.NOT_FOUND).json(CE_MES.NOT_FOUND);
    }
    res.json(contact);
  } catch (error) {
    handdleServerError(error, res);
  }
});

/**
 * 문의 상태 수정
 * @route PUT /:id
 * @group Contact
 * @param {string} id.path.required - 문의 ID
 * @param {string} status.body.required - 상태
 * @returns {object} 200 - 수정 성공 메시지 및 문의 정보
 * @returns {object} 404 - 문의 없음
 * @returns {object} 500 - 서버 에러
 */
router.put("/:id", async (req, res) => {
  try {
    const { status } = req.body;

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!contact) {
      return res.status(CE_CODE.NOT_FOUND).json(CE_MES.NOT_FOUND);
    }

    res.json({ message: "문의 상태가 성공적으로 수정되었습니다.", contact });
  } catch (error) {
    handdleServerError(error, res);
  }
});

/**
 * 문의 삭제
 * @route DELETE /:id
 * @group Contact
 * @param {string} id.path.required - 문의 ID
 * @returns {object} 200 - 삭제 성공 메시지
 * @returns {object} 404 - 문의 없음
 * @returns {object} 500 - 서버 에러
 */
router.delete("/:id", async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(CE_CODE.NOT_FOUND).json(CE_MES.NOT_FOUND);
    }
    res.json({ message: "문의가 성공적으로 삭제되었습니다." });
  } catch (error) {
    handdleServerError(error, res);
  }
});

module.exports = router;
