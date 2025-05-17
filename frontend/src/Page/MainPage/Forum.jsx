import { Link } from "react-router-dom";

/**
 * Forum 컴포넌트
 *
 * 업무 게시판 섹션을 렌더링합니다.
 *
 * - 최근 게시물 목록을 표시합니다.
 * - "전체보기" 버튼을 통해 전체 게시판으로 이동할 수 있습니다.
 *
 * @returns {JSX.Element} 업무 게시판 섹션 컴포넌트
 */
const Forum = () => {
  const dummyPosts = [
    {
      _id: 1,
      number: 1,
      title: "첫 번째 게시물",
      views: 120,
      fileUrl: ["file1"],
      createdAt: "2023-01-01",
    },
    {
      _id: 2,
      number: 2,
      title: "두 번째 게시물",
      views: 95,
      fileUrl: [],
      createdAt: "2023-01-05",
    },
    {
      _id: 3,
      number: 3,
      title: "세 번째 게시물",
      views: 70,
      fileUrl: ["file2", "file3"],
      createdAt: "2023-01-10",
    },
    {
      _id: 4,
      number: 4,
      title: "네 번째 게시물",
      views: 50,
      fileUrl: [],
      createdAt: "2023-01-15",
    },
    {
      _id: 5,
      number: 5,
      title: "다섯 번째 게시물",
      views: 30,
      fileUrl: ["file4"],
      createdAt: "2023-01-20",
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-28 lg:py-0 max-w-6xl">
        {/* 게시판 제목 */}
        <div className="text-center mb-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            업무 게시판
          </h2>
        </div>

        {/* 게시판 설명 */}
        <div className="flex justify-end mb-4">
          <Link
            to="/board"
            className="px-5 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2 border border-gray-200"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            전체보기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* 게시물 리스트 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {dummyPosts.length === 0 ? (
            // 게시물이 없을 때
            <div className="p-6 text-center text-gray-500">
              최근 게시물이 없습니다.
            </div>
          ) : (
            // 게시물이 있을 때
            dummyPosts.map((post) => <PostItem key={post._id} post={post} />)
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * **PostItem 컴포넌트**
 * - 단일 게시물을 렌더링합니다.
 *
 * @param {Object} post - 게시물 데이터
 * @param {number} post.number - 게시물 번호
 * @param {string} post.title - 게시물 제목
 * @param {number} post.views - 조회수
 * @param {string[]} post.fileUrl - 첨부 파일 URL 배열
 * @param {string} post.createdAt - 게시물 생성 날짜
 * @returns {JSX.Element} 게시물 아이템 컴포넌트
 */
const PostItem = ({ post }) => (
  <div className="border-b border-gray-200 last:border-b-0 hover:bg-blue-50 transition-colors duration-300">
    <div className="p-6 flex items-center justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-gray-500 text-sm">No. {post.number}</span>
          <span className="text-gray-500 text-sm">조회수: {post.views}</span>
          {post.fileUrl.length > 0 && (
            <span className="text-gray-500 text-sm">
              파일: {post.fileUrl.length}
            </span>
          )}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
          {post.title}
        </h3>
        <div className="mt-2 text-gray-500">{post.createdAt}</div>
      </div>
      <div className="ml-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  </div>
);

export default Forum;
