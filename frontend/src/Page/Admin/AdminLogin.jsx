import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

/**
 * **AdminLogin 컴포넌트**
 *
 * 관리자 로그인 페이지를 렌더링합니다.
 *
 * - 로그인 폼을 통해 관리자 인증을 처리합니다.
 * - 인증 성공 시 관리자 페이지로 리다이렉트합니다.
 * - 인증 실패 시 에러 메시지를 표시합니다.
 *
 * @returns {JSX.Element} 관리자 로그인 페이지 컴포넌트
 */
const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  /**
   * 입력 필드 변경 핸들러
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - 입력 이벤트
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    console.log(formData);
  };

  /**
   * 로그인 폼 제출 핸들러
   *
   * @param {React.FormEvent<HTMLFormElement>} e - 폼 제출 이벤트
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        formData,
        {
          withCredentials: true,
        }
      );

      if (response.data.user) {
        navigate("/admin/posts");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "로그인에 실패했습니다.";
      const remainingAttempts = error.response?.data?.remainingAttempts;

      setError({
        message: errorMessage,
        remainingAttempts: remainingAttempts,
      });
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-2xl shadow-xl">
        {/* 로그인 페이지 헤더 */}
        <div>
          <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
            관리자 로그인
          </h2>
          <p className="mt-2 text-center text-lg text-gray-600">
            관리자 전용 페이지입니다.
          </p>
        </div>

        {/* 로그인 입력 필드 */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {[
              {
                id: "username",
                type: "text",
                label: "관리자 아이디",
                value: formData.username,
              },
              {
                id: "password",
                type: "password",
                label: "관리자 비밀번호",
                value: formData.password,
              },
            ].map((field) => (
              <InputField
                id={field.id}
                name={field.id}
                type={field.type}
                label={field.label}
                placeholder={field.label}
                value={field.value}
                onChange={handleChange}
                required
              />
            ))}
          </div>

          {/* 에러 메시지 */}
          {error && (
            <div className="bg-red-50 text-red-500 p-4 rounded-lg text-base font-bold text-center">
              {typeof error === "string" ? error : error.message}
              {error.remainingAttempts !== undefined && (
                <div className="mt-1">
                  남은 시도 횟수: {error.remainingAttempts}회
                </div>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full items-center px-4 py-3 border-transparent rounded-lg text-white bg-blue-600 hover:bg-blue-700 font-medium transition-colors duration-300"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

/**
 * **InputField 컴포넌트**
 *
 * - 입력 필드를 렌더링합니다.
 *
 * @param {Object} props - 입력 필드 속성
 * @param {string} props.id - 필드 ID
 * @param {string} props.name - 필드 이름
 * @param {string} props.type - 입력 타입
 * @param {string} props.label - 필드 라벨
 * @param {string} props.placeholder - 플레이스홀더 텍스트
 * @param {string} props.value - 입력 값
 * @param {Function} props.onChange - 입력 변경 핸들러
 * @param {boolean} props.required - 필수 여부
 * @returns {JSX.Element} 입력 필드 컴포넌트
 */
const InputField = ({
  id,
  name,
  type,
  label,
  placeholder,
  value,
  onChange,
  required,
}) => (
  <div>
    <label htmlFor={id} className="block text-xm font-medium text-gray-700">
      {label}
    </label>
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
      placeholder={placeholder}
    />
  </div>
);

export default AdminLogin;
