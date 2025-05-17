/**
 * HTTP 상태 코드별 에러 메시지 정의
 *
 * - 1xx: INFORMATIONAL (정보)
 * - 2xx: SUCCESS (성공)
 * - 3xx: REDIRECTION (리다이렉션)
 * - 4xx: CLIENT_ERROR (클라이언트 오류)
 * - 5xx: SERVER_ERROR (서버 오류)
 */

/** *HTTP 상태 코드 메세지 객체
 *
 * @typedef {Object} ErrorMessages
 * @property {Object} INFORMATIONAL - 1xx: 정보 응답 메시지
 * @property {Object} INFORMATIONAL.CONTINUE - 100: "계속 진행하세요."
 * @property {Object} INFORMATIONAL.SWITCHING_PROTOCOLS - 101: "프로토콜을 전환합니다."
 * @property {Object} INFORMATIONAL.PROCESSING - 102: "처리 중입니다."
 * @property {Object} INFORMATIONAL.EARLY_HINTS - 103: "초기 힌트입니다."
 *
 * @property {Object} SUCCESS - 2xx: 성공 메시지
 * @property {Object} SUCCESS.OK - 200: "성공적으로 처리되었습니다."
 * @property {Object} SUCCESS.CREATED - 201: "문의가 성공적으로 등록되었습니다."
 * @property {Object} SUCCESS.ACCEPTED - 202: "요청이 승인되었습니다."
 * @property {Object} SUCCESS.NON_AUTHORITATIVE_INFORMATION - 203: "신뢰할 수 없는 정보입니다."
 * @property {Object} SUCCESS.NO_CONTENT - 204: "내용이 없습니다."
 * @property {Object} SUCCESS.RESET_CONTENT - 205: "내용이 초기화되었습니다."
 * @property {Object} SUCCESS.PARTIAL_CONTENT - 206: "일부 내용입니다."
 * @property {Object} SUCCESS.MULTI_STATUS - 207: "다중 상태입니다."
 * @property {Object} SUCCESS.ALREADY_REPORTED - 208: "이미 보고되었습니다."
 * @property {Object} SUCCESS.IM_USED - 226: "IM이 사용되었습니다."
 *
 * @property {Object} REDIRECTION - 3xx: 리다이렉션 메시지
 * @property {Object} REDIRECTION.MULTIPLE_CHOICES - 300: "여러 선택지가 있습니다."
 * @property {Object} REDIRECTION.MOVED_PERMANENTLY - 301: "영구적으로 이동되었습니다."
 * @property {Object} REDIRECTION.FOUND - 302: "찾았습니다."
 * @property {Object} REDIRECTION.SEE_OTHER - 303: "다른 위치를 참조하세요."
 * @property {Object} REDIRECTION.NOT_MODIFIED - 304: "수정되지 않았습니다."
 * @property {Object} REDIRECTION.USE_PROXY - 305: "프록시를 사용하세요."
 * @property {Object} REDIRECTION.TEMPORARY_REDIRECT - 307: "임시로 리다이렉트됩니다."
 * @property {Object} REDIRECTION.PERMANENT_REDIRECT - 308: "영구적으로 리다이렉트됩니다."
 *
 * @property {Object} CLIENT_ERROR - 4xx: 클라이언트 오류 메시지
 * @property {Object} CLIENT_ERROR.BAD_REQUEST - 400: "잘못된 요청입니다."
 * @property {Object} CLIENT_ERROR.UNAUTHORIZED- 401: "토큰이 없습니다."
 * @property {Object} CLIENT_ERROR.PAYMENT_REQUIRED - 402: "결제가 필요합니다."
 * @property {Object} CLIENT_ERROR.FORBIDDEN - 403: "유효하지 않은 토큰입니다."
 * @property {Object} CLIENT_ERROR.NOT_FOUND - 404: "문의를 찾을 수 없습니다."
 * @property {Object} CLIENT_ERROR.METHOD_NOT_ALLOWED - 405: "허용되지 않은 메서드입니다."
 * @property {Object} CLIENT_ERROR.NOT_ACCEPTABLE - 406: "허용되지 않는 요청입니다."
 * @property {Object} CLIENT_ERROR.PROXY_AUTHENTICATION_REQUIRED - 407: "프록시 인증이 필요합니다."
 * @property {Object} CLIENT_ERROR.REQUEST_TIMEOUT - 408: "요청 시간이 초과되었습니다."
 * @property {Object} CLIENT_ERROR.CONFLICT - 409: "충돌이 발생했습니다."
 * @property {Object} CLIENT_ERROR.GONE - 410: "더 이상 사용할 수 없습니다."
 * @property {Object} CLIENT_ERROR.LENGTH_REQUIRED - 411: "길이가 필요합니다."
 * @property {Object} CLIENT_ERROR.PRECONDITION_FAILED - 412: "사전 조건이 실패했습니다."
 * @property {Object} CLIENT_ERROR.PAYLOAD_TOO_LARGE - 413: "페이로드가 너무 큽니다."
 * @property {Object} CLIENT_ERROR.URI_TOO_LONG - 414: "URI가 너무 깁니다."
 * @property {Object} CLIENT_ERROR.UNSUPPORTED_MEDIA_TYPE - 415: "지원하지 않는 미디어 타입입니다."
 * @property {Object} CLIENT_ERROR.RANGE_NOT_SATISFIABLE - 416: "범위를 만족할 수 없습니다."
 * @property {Object} CLIENT_ERROR.EXPECTATION_FAILED - 417: "예상에 실패했습니다."
 * @property {Object} CLIENT_ERROR.IM_A_TEAPOT - 418: "나는 찻주전자입니다."
 * @property {Object} CLIENT_ERROR.MISDIRECTED_REQUEST - 421: "잘못된 요청입니다."
 * @property {Object} CLIENT_ERROR.UNPROCESSABLE_ENTITY - 422: "처리할 수 없는 엔터티입니다."
 * @property {Object} CLIENT_ERROR.LOCKED - 423: "잠겨 있습니다."
 * @property {Object} CLIENT_ERROR.FAILED_DEPENDENCY - 424: "의존성 오류가 발생했습니다."
 * @property {Object} CLIENT_ERROR.TOO_EARLY - 425: "너무 이른 요청입니다."
 * @property {Object} CLIENT_ERROR.UPGRADE_REQUIRED - 426: "업그레이드가 필요합니다."
 * @property {Object} CLIENT_ERROR.PRECONDITION_REQUIRED - 428: "사전 조건이 필요합니다."
 * @property {Object} CLIENT_ERROR.TOO_MANY_REQUESTS - 429: "요청이 너무 많습니다."
 * @property {Object} CLIENT_ERROR.REQUEST_HEADER_FIELDS_TOO_LARGE - 431: "요청 헤더가 너무 큽니다."
 * @property {Object} CLIENT_ERROR.UNAVAILABLE_FOR_LEGAL_REASONS - 451: "법적 사유로 사용할 수 없습니다."
 *
 * @property {Object} SERVER_ERROR - 5xx: 서버 오류 메시지
 * @property {Object} SERVER_ERROR.INTERNAL_SERVER_ERROR - 500: "서버 에러가 발생했습니다."
 * @property {Object} SERVER_ERROR.NOT_IMPLEMENTED - 501: "구현되지 않았습니다."
 * @property {Object} SERVER_ERROR.BAD_GATEWAY - 502: "잘못된 게이트웨이입니다."
 * @property {Object} SERVER_ERROR.SERVICE_UNAVAILABLE - 503: "서비스를 사용할 수 없습니다."
 * @property {Object} SERVER_ERROR.GATEWAY_TIMEOUT - 504: "게이트웨이 시간 초과입니다."
 * @property {Object} SERVER_ERROR.HTTP_VERSION_NOT_SUPPORTED - 505: "지원하지 않는 HTTP 버전입니다."
 * @property {Object} SERVER_ERROR.VARIANT_ALSO_NEGOTIATES - 506: "변형 협상 오류입니다."
 * @property {Object} SERVER_ERROR.INSUFFICIENT_STORAGE - 507: "저장 공간이 부족합니다."
 * @property {Object} SERVER_ERROR.LOOP_DETECTED - 508: "루프가 감지되었습니다."
 * @property {Object} SERVER_ERROR.NOT_EXTENDED - 510: "확장이 필요합니다."
 * @property {Object} SERVER_ERROR.NETWORK_AUTHENTICATION_REQUIRED - 511: "네트워크 인증이 필요합니다."
 */

/** @type {ErrorMessages} */
const ERROR_MESSAGES = {
  INFORMATIONAL: {
    CONTINUE: { message: "계속 진행하세요." },
    SWITCHING_PROTOCOLS: { message: "프로토콜을 전환합니다." },
    PROCESSING: { message: "처리 중입니다." },
    EARLY_HINTS: { message: "초기 힌트입니다." },
  },
  SUCCESS: {
    OK: { message: "성공적으로 처리되었습니다." },
    CREATED: { message: "문의가 성공적으로 등록되었습니다." },
    ACCEPTED: { message: "요청이 승인되었습니다." },
    NON_AUTHORITATIVE_INFORMATION: { message: "신뢰할 수 없는 정보입니다." },
    NO_CONTENT: { message: "내용이 없습니다." },
    RESET_CONTENT: { message: "내용이 초기화되었습니다." },
    PARTIAL_CONTENT: { message: "일부 내용입니다." },
    MULTI_STATUS: { message: "다중 상태입니다." },
    ALREADY_REPORTED: { message: "이미 보고되었습니다." },
    IM_USED: { message: "IM이 사용되었습니다." },
  },
  REDIRECTION: {
    MULTIPLE_CHOICES: { message: "여러 선택지가 있습니다." },
    MOVED_PERMANENTLY: { message: "영구적으로 이동되었습니다." },
    FOUND: { message: "찾았습니다." },
    SEE_OTHER: { message: "다른 위치를 참조하세요." },
    NOT_MODIFIED: { message: "수정되지 않았습니다." },
    USE_PROXY: { message: "프록시를 사용하세요." },
    TEMPORARY_REDIRECT: { message: "임시로 리다이렉트됩니다." },
    PERMANENT_REDIRECT: { message: "영구적으로 리다이렉트됩니다." },
  },
  CLIENT_ERROR: {
    BAD_REQUEST: { message: "잘못된 요청입니다." },
    UNAUTHORIZED: { message: "토큰이 없습니다." },
    PAYMENT_REQUIRED: { message: "결제가 필요합니다." },
    FORBIDDEN: { message: "유효하지 않은 토큰입니다." },
    NOT_FOUND: { message: "문의를 찾을 수 없습니다." },
    METHOD_NOT_ALLOWED: { message: "허용되지 않은 메서드입니다." },
    NOT_ACCEPTABLE: { message: "허용되지 않는 요청입니다." },
    PROXY_AUTHENTICATION_REQUIRED: { message: "프록시 인증이 필요합니다." },
    REQUEST_TIMEOUT: { message: "요청 시간이 초과되었습니다." },
    CONFLICT: { message: "충돌이 발생했습니다." },
    GONE: { message: "더 이상 사용할 수 없습니다." },
    LENGTH_REQUIRED: { message: "길이가 필요합니다." },
    PRECONDITION_FAILED: { message: "사전 조건이 실패했습니다." },
    PAYLOAD_TOO_LARGE: { message: "페이로드가 너무 큽니다." },
    URI_TOO_LONG: { message: "URI가 너무 깁니다." },
    UNSUPPORTED_MEDIA_TYPE: { message: "지원하지 않는 미디어 타입입니다." },
    RANGE_NOT_SATISFIABLE: { message: "범위를 만족할 수 없습니다." },
    EXPECTATION_FAILED: { message: "예상에 실패했습니다." },
    IM_A_TEAPOT: { message: "나는 찻주전자입니다." },
    MISDIRECTED_REQUEST: { message: "잘못된 요청입니다." },
    UNPROCESSABLE_ENTITY: { message: "처리할 수 없는 엔터티입니다." },
    LOCKED: { message: "잠겨 있습니다." },
    FAILED_DEPENDENCY: { message: "의존성 오류가 발생했습니다." },
    TOO_EARLY: { message: "너무 이른 요청입니다." },
    UPGRADE_REQUIRED: { message: "업그레이드가 필요합니다." },
    PRECONDITION_REQUIRED: { message: "사전 조건이 필요합니다." },
    TOO_MANY_REQUESTS: { message: "요청이 너무 많습니다." },
    REQUEST_HEADER_FIELDS_TOO_LARGE: { message: "요청 헤더가 너무 큽니다." },
    UNAVAILABLE_FOR_LEGAL_REASONS: {
      message: "법적 사유로 사용할 수 없습니다.",
    },
  },
  SERVER_ERROR: {
    INTERNAL_SERVER_ERROR: { message: "서버 에러가 발생했습니다." },
    NOT_IMPLEMENTED: { message: "구현되지 않았습니다." },
    BAD_GATEWAY: { message: "잘못된 게이트웨이입니다." },
    SERVICE_UNAVAILABLE: { message: "서비스를 사용할 수 없습니다." },
    GATEWAY_TIMEOUT: { message: "게이트웨이 시간 초과입니다." },
    HTTP_VERSION_NOT_SUPPORTED: { message: "지원하지 않는 HTTP 버전입니다." },
    VARIANT_ALSO_NEGOTIATES: { message: "변형 협상 오류입니다." },
    INSUFFICIENT_STORAGE: { message: "저장 공간이 부족합니다." },
    LOOP_DETECTED: { message: "루프가 감지되었습니다." },
    NOT_EXTENDED: { message: "확장이 필요합니다." },
    NETWORK_AUTHENTICATION_REQUIRED: { message: "네트워크 인증이 필요합니다." },
  },
};

module.exports = ERROR_MESSAGES;
