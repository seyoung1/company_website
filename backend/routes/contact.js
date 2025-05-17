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
 */
const handleServerError = (error, res) => {
  console.error(error);
  res.status(SE_CODE.INTERNAL_SERVER_ERROR).json(SE_MES.INTERNAL_SERVER_ERROR);
};

/**
 * JWT 인증 미들웨어
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
 */
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message, status } = req.body;

    const contact = new Contact({ name, email, phone, message, status });
    await contact.save();

    res.status(SUC_CODE.CREATED).json(SUC_MES.CREATED);
  } catch (error) {
    handleServerError(error, res);
  }
});

/**
 * 문의 전체 조회
 * @route GET /
 */
router.get("/", authenticateToken, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    handleServerError(error, res);
  }
});

/**
 * 문의 상세 조회
 * @route GET /:id
 */
router.get("/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(CE_CODE.NOT_FOUND).json(CE_MES.NOT_FOUND);
    }
    res.json(contact);
  } catch (error) {
    handleServerError(error, res);
  }
});

/**
 * 문의 상태 수정
 * @route PUT /:id
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
    handleServerError(error, res);
  }
});

/**
 * 문의 삭제
 * @route DELETE /:id
 */
router.delete("/:id", async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(CE_CODE.NOT_FOUND).json(CE_MES.NOT_FOUND);
    }

    res.json({ message: "문의가 성공적으로 삭제되었습니다." });
  } catch (error) {
    handleServerError(error, res);
  }
});

module.exports = router;
