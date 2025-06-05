import { Box, Link, Button, CardMedia } from "@mui/material";
import type { ICourse } from "../../../interfaces";

function CardCourse({ course }: { course: ICourse }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        // border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        paddingBottom: "20px",
      }}
    >
      <CardMedia
        component="img"
        src={course.image}
        alt={course.title}
        sx={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      />
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <p>{course.views} views</p>
        <Link href={`/course/${course.id}`}>
          <Button variant="contained">View Course</Button>
        </Link>
      </Box>
    </Box>
  );
}

export default CardCourse;
