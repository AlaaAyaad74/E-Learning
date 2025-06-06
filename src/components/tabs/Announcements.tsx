import { Box, Typography } from "@mui/material";

function Announcements() {
  return (
    <Box sx={{ backgroundColor: "white", padding: "1rem 0" }}>
      <Typography
        variant="h6"
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          textAlign: "center",
          mb: "20px",
        }}
      >
        No announcements posted yet
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "18px",
          textAlign: "center",
          lineHeight: "26px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        The instructor hasn't added any announcements to this course yet.
        Announcements are used to inform you of updates or additions to the
        course.
      </Typography>
    </Box>
  );
}

export default Announcements;
