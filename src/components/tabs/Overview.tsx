import { Box, Stack, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArticleIcon from "@mui/icons-material/Article";
import courses from "../../../data/courses";
import { useParams } from "react-router-dom";

const Overview = () => {
  const { id } = useParams();
  console.log(id);
  const course = courses.find((course) => course.id === id);
  if (!course) return <h1>Overview not added yet</h1>;
  return (
    <Box sx={{ px: 2, py: 3 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        A Practical Guide To Anyone Starting A Career As A Scrum Master Helping
        Them Tackle Many Daily Situations
      </Typography>

      <Stack
        direction="row"
        spacing={3}
        alignItems="center"
        sx={{ flexWrap: "wrap", mb: 2 }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <SchoolIcon fontSize="small" />
          <Typography variant="body2">{course?.views}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <StarBorderIcon fontSize="small" />
          <Typography variant="body2">{course?.level}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <MenuBookIcon fontSize="small" />
          <Typography variant="body2">{course?.sections.length}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <ArticleIcon fontSize="small" />
          <Typography variant="body2">
            {Math.round(
              course.sections.reduce((acc, section) => {
                return (
                  acc +
                  section.videos.reduce((acc, video) => {
                    const [mins, secs] = video.duration.split(":").map(Number);
                    return acc + mins * 60 + secs;
                  }, 0)
                );
              }, 0) / 60
            )}{" "}
            mins
          </Typography>
        </Stack>
      </Stack>

      <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
        Description:
      </Typography>
      <Typography variant="body2" color="text.secondary">
        This course is a practical guide for people who are starting a career as
        a scrum master, or it’s also suitable for the teams adopting an Agile
        mindset to have a daily and practical guide to help them in their daily
        challenges and lead them towards continuous improvement.
      </Typography>
    </Box>
  );
};

export default Overview;
