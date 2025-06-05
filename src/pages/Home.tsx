import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import CardCourse from "../components/card_course/CardCourse";
import { courses } from "../../data/courses";

function Home() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Youth App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container
        sx={{
          margin: "2rem auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
          gap: 4,
        }}
      >
        {courses.map((course) => (
          <CardCourse key={course.id} course={course} />
        ))}
      </Container>
    </>
  );
}

export default Home;
