import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Paper,
  Typography,
  Divider,
  Box,
  Chip,
  Skeleton,
  IconButton,
  Snackbar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { format } from "date-fns";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShareIcon from "@mui/icons-material/Share";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

const PostHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(2),
  gap: theme.spacing(2),
}));

const SinglePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postResponse = await axios.get(
          `http://localhost:8080/api/post/${id}`
        );
        setPost(postResponse.data);

        // 상품 정보도 함께 불러오기
        if (postResponse.data.productID) {
          const productRes = await axios.get(
            `http://localhost:8080/api/products/${postResponse.data.productID}`
          );
          setProduct(productRes.data.product);
        }
      } catch (error) {
        console.error("게시글 로딩 실패:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleFileDownload = (fileUrl) => {
    window.open(fileUrl, "_blank");
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setOpenSnackbar(true);
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 14 }}>
        <StyledPaper elevation={2}>
          <Skeleton variant="text" height={60} />
          <Skeleton variant="text" width="60%" />
          <Divider sx={{ my: 3 }} />
          <Skeleton variant="rectangular" height={200} />
        </StyledPaper>
      </Container>
    );
  }

  if (!post) {
    return (
      <Container maxWidth="lg" sx={{ py: 14 }}>
        <StyledPaper elevation={2}>
          <Typography variant="h5" color="error" align="center">
            게시글을 찾을 수 없습니다.
          </Typography>
        </StyledPaper>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 14 }}>
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <IconButton onClick={() => navigate(-1)} aria-label="뒤로가기">
          <ArrowBackIcon />
        </IconButton>
        <IconButton onClick={handleShare} aria-label="공유하기">
          <ShareIcon />
        </IconButton>
      </Box>

      <StyledPaper elevation={2}>
        <PostHeader>
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
              <Typography variant="body2" color="text.secondary">
                No. {post?.number}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <VisibilityIcon
                  sx={{ fontSize: 18, color: "text.secondary" }}
                />
                <Typography variant="body2" color="text.secondary">
                  {post?.views}
                </Typography>
              </Box>
            </Box>
            <Typography variant="h5" component="h1" gutterBottom>
              {post?.title}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, color: "text.secondary" }}>
              <Typography variant="body2">
                {post?.createdAt && !isNaN(new Date(post.createdAt))
                  ? format(new Date(post.createdAt), "yyyy-MM-dd HH:mm:ss")
                  : "날짜 정보 없음"}
              </Typography>
            </Box>
          </Box>
        </PostHeader>

        {/* 상품 태그 표시 */}
        {product && (
          <Box sx={{ mb: 2 }}>
            <Chip
              icon={<LocalOfferIcon />}
              label={product.name}
              color="primary"
              variant="outlined"
              sx={{ fontWeight: "bold" }}
            />
          </Box>
        )}

        <Divider sx={{ my: 3 }} />

        <Box sx={{ my: 4 }}>
          <div
            dangerouslySetInnerHTML={{ __html: post?.renderedContent || "" }}
            style={{ lineHeight: 1.8, fontSize: "1.2rem" }}
          />
        </Box>

        {post?.fileUrl && post.fileUrl.length > 0 && (
          <Box sx={{ mt: 4, p: 2, bgcolor: "grey.50", borderRadius: 1 }}>
            <Typography variant="subtitle2" gutterBottom>
              첨부파일
            </Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {post.fileUrl.map((file, index) => (
                <Chip
                  key={index}
                  label={file.split("/").pop()}
                  variant="outlined"
                  clickable
                  onClick={() => handleFileDownload(file)}
                  icon={<FileDownloadIcon />}
                  sx={{
                    "&:hover": { bgcolor: "grey.200" },
                    "& .MuiChip-icon": { fontSize: 20 },
                  }}
                />
              ))}
            </Box>
          </Box>
        )}
      </StyledPaper>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSnackbar(false)}
        message="URL이 클립보드에 복사되었습니다"
      />
    </Container>
  );
};

export default SinglePost;
