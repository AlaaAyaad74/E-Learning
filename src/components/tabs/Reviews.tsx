import { Box, Pagination, Rating, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
const ratings = [
  {
    rating: 5,
    percentage: 90,
  },
  {
    rating: 4,
    percentage: 5,
  },
  {
    rating: 3,
    percentage: 2,
  },
  {
    rating: 2,
    percentage: 2,
  },
  {
    rating: 1,
    percentage: 2,
  },
];
function Reviews() {
  const [page, setPage] = useState(1);
  return (
    <Box>
      <Typography variant="h6">Comments</Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography variant="h6" sx={{ fontSize: "2.4rem", fontWeight: 600 }}>
          4.0
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Rating
            name="read-only"
            value={4}
            readOnly
            size="large"
            sx={{
              color: "#F6B40A",
              stroke: "#F6B40A",
              "& .MuiRating-icon": {
                color: "#F6B40A",
                stroke: "#F6B40A",
              },
            }}
          />
          <Typography
            variant="body1"
            sx={{ color: "gray", fontSize: "0.95rem", fontWeight: 500 }}
          >
            based on 100 ratings
          </Typography>
        </Box>
      </Box>
      {/* Ratings Bars */}
      <Box sx={{ marginTop: "30px" }}>
        {ratings.map((rating) => (
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              marginBottom: "10px",
            }}
            key={rating.rating}
          >
            <Rating
              name="read-only"
              value={rating.rating}
              readOnly
              size="small"
              sx={{
                color: "#F6B40A",
                stroke: "#F6B40A",
                "& .MuiRating-icon": {
                  color: "#F6B40A",
                  stroke: "#F6B40A",
                },
              }}
            />
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, fontSize: "1.2rem" }}
            >
              {rating.percentage}%
            </Typography>
            <Box
              sx={{
                height: "10px",
                width: "100%",
                maxWidth: "650px",
                bgcolor: "#EAEAEA",
              }}
            >
              <Box
                sx={{
                  height: "10px",
                  width: `${rating.percentage}%`,
                  bgcolor: "#F6B40A",
                }}
              ></Box>
            </Box>
          </Box>
        ))}
      </Box>
      {/* Comments */}
      <AnimatePresence mode="wait">
        <motion.div
          key={page} // important for triggering AnimatePresence
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {Array.from({ length: 9 })
            .slice((page - 1) * 3, page * 3)
            .map((_, index) => (
              <Box
                sx={{
                  marginTop: "40px",
                  display: "flex",
                  gap: 2,
                  maxWidth: "800px",
                }}
                key={index}
              >
                <img
                  src="/profile.webp"
                  alt="user"
                  width={65}
                  height={65}
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                    flexGrow: 0,
                  }}
                />
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6">Alaa Ayaad</Typography>
                    <Typography variant="body1" sx={{ color: "gray" }}>
                      October 03, 2022
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "1rem", color: "gray", mt: 1 }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quisquam, quos. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quos. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quisquam, quos.
                  </Typography>
                </Box>
              </Box>
            ))}
        </motion.div>
      </AnimatePresence>
      <Pagination
        count={3}
        sx={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          "& .MuiPaginationItem-root": {
            color: "gray",
            "&.Mui-selected": {
              backgroundColor: "black",
              color: "white",
            },
          },
        }}
        page={page}
        onChange={(_, value) => {
          setPage(value);
        }}
      />
    </Box>
  );
}

export default Reviews;
