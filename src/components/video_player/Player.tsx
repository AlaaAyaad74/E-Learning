import { Box, Button, Stack } from "@mui/material";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import courses from "../../../data/courses";

const Player = ({ onEnded }: { onEnded: () => void }) => {
  const { id, videoId } = useParams<{ id: string; videoId: string }>();
  const navigate = useNavigate();
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [prevNext, setPrevNext] = useState<{
    prev: string | null;
    next: string | null;
  }>({
    prev: null,
    next: null,
  });

  useEffect(() => {
    let found = false;

    for (const course of courses) {
      if (course.id !== id) continue;

      for (const section of course.sections) {
        const index = section.videos.findIndex((v) => v.id === videoId);
        if (index !== -1) {
          const currentVideo = section.videos[index];
          setVideoUrl(currentVideo.url);

          setPrevNext({
            prev: section.videos[index - 1]?.id || null,
            next: section.videos[index + 1]?.id || null,
          });

          found = true;
          break;
        }
      }

      if (found) break;
    }

    if (!found) {
      setVideoUrl(null);
      setPrevNext({ prev: null, next: null });
    }
  }, [id, videoId]);

  return (
    <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
      <ReactPlayer
        url={videoUrl || ""}
        style={{ position: "absolute", top: 0, left: 0 }}
        playing
        controls
        width="100%"
        height="100%"
        onEnded={onEnded}
      />

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
          disabled={!prevNext.prev}
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
          onClick={() =>
            prevNext.prev && navigate(`/course/${id}/video/${prevNext.prev}`)
          }
        >
          <img
            src="/angle_left.svg"
            alt="arrow-back"
            style={{ width: 20, height: 20 }}
          />
        </Button>

        <Button
          variant="contained"
          disabled={!prevNext.next}
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
          onClick={() =>
            prevNext.next && navigate(`/course/${id}/video/${prevNext.next}`)
          }
        >
          <img
            src="/angle_right.svg"
            alt="arrow-forward"
            style={{ width: 20, height: 20 }}
          />
        </Button>
      </Stack>
    </Box>
  );
};

export default Player;
