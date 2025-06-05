
import { Box, Button, Stack } from "@mui/material";
import ReactPlayer from "react-player";

type PlayerProps = {
  url: string | null;
  onEnded: () => void;
  onNext: () => void;
  onPrev: () => void;
};

const Player = ({ url, onEnded, onNext, onPrev }: PlayerProps) => (
  <Box
    sx={{
      position: "relative",
      paddingTop: "56.25%", // 16:9 aspect ratio
    }}
  >
    <ReactPlayer
      url={url || ""}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
      }}
      playing={true}
      controls={true}
      width="100%"
      height="100%"
      onEnded={onEnded}
    />
    {/* Control Buttons */}
    <Stack
      direction="row"
      spacing={4}
      sx={{
        width: "98%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 10,
        justifyContent: "space-between",
      }}
    >
      <Button
        variant="contained"
        sx={{
          bgcolor: "white",
          width: 30,
          height: 30,
          borderRadius: "50%",
          p: 0,
          boxShadow: "none",
          minWidth: 30,
          minHeight: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={onPrev}
      >
       <img src="/angle_left.svg" alt="arrow-back" style={{width: 20, height: 20}} /> 
      </Button>
      <Button
        variant="contained"
        sx={{
          bgcolor: "white",
          width: 30,  
          height: 30,
          borderRadius: "50%",
          p: 0,
          boxShadow: "none",
          minWidth: 30,
          minHeight: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={onNext}
      >
        <img src="/angle_right.svg" alt="arrow-forward" style={{width: 20, height: 20}} />
      </Button>
    </Stack>
  </Box>
);

export default Player;
