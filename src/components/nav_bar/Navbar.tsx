import { ArrowBack, Menu } from "@mui/icons-material";
import { Box } from "@mui/material";

function Navbar({
  openAside,
  setOpenAside,
}: {
  openAside: boolean;
  setOpenAside: (open: boolean) => void;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        backgroundColor: "#e0e0e0",
        padding: "1rem",
        justifyContent: "space-between",
      }}
    >
      <a
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          color: "#FFF",
          textDecoration: "none",
        }}
      >
        <ArrowBack />
        Back to courses
      </a>
      {!openAside && (
        <Menu
          onClick={() => setOpenAside(true)}
          sx={{ cursor: "pointer", color: "white" }}
        />
      )}
    </Box>
  );
}

export default Navbar;
