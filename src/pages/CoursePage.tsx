import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { courses } from "../../data/courses";
import Player from "../components/video_player/Player";
import Aside from "../components/aside/Aside";
import Navbar from "../components/nav_bar/Navbar";

function CourseSections() {
  const [openSectionIndex, setOpenSectionIndex] = useState<number>(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(
    courses[0].sections[0].videos[0].url || null
  );
  const [completedVideos, setCompletedVideos] = useState<string[]>([]);

  const handleVideoSelect = (sectionIdx: number, videoIdx: number) => {
    const video = courses[0].sections[sectionIdx].videos[videoIdx];
    setCurrentSectionIndex(sectionIdx);
    setCurrentVideoIndex(videoIdx);
    setSelectedVideo(video.url || null);
    setOpenSectionIndex(sectionIdx);
  };

  const handleVideoEnd = () => {
    const currentVideo =
      courses[0].sections[currentSectionIndex].videos[currentVideoIndex];

    if (!completedVideos.includes(currentVideo.id)) {
      setCompletedVideos((prev) => [...prev, currentVideo.id]);
    }

    const currentSection = courses[0].sections[currentSectionIndex];
    const isLastVideoInSection =
      currentVideoIndex === currentSection.videos.length - 1;
    const isLastSection =
      currentSectionIndex === courses[0].sections.length - 1;

    if (!isLastVideoInSection) {
      handleVideoSelect(currentSectionIndex, currentVideoIndex + 1);
    } else if (!isLastSection) {
      handleVideoSelect(currentSectionIndex + 1, 0);
    } else {
      console.log("Course completed!");
    }
  };

  const handleVideoPrev = () => {
    if (currentVideoIndex > 0) {
      handleVideoSelect(currentSectionIndex, currentVideoIndex - 1);
    } else if (currentSectionIndex > 0) {
      const prevSectionIndex = currentSectionIndex - 1;
      const lastVideoIndex =
        courses[0].sections[prevSectionIndex].videos.length - 1;
      handleVideoSelect(prevSectionIndex, lastVideoIndex);
    }
  };
  const [openAside, setOpenAside] = useState(true);
  return (
    <Box
      sx={{
        display: "grid  ",
        gridTemplateColumns: !openAside ? "1fr" : "2fr 1fr",
        gap: 2,
      }}
    >
      <Box>
        <Navbar setOpenAside={setOpenAside} openAside={openAside} />
        <Player
          url={selectedVideo}
          onEnded={handleVideoEnd}
          onNext={handleVideoEnd}
          onPrev={handleVideoPrev}
        />
        <Typography variant="h4">{courses[0].title}</Typography>
        <Typography variant="body1">{courses[0].description}</Typography>
      </Box>
      <Aside
        openSectionIndex={openSectionIndex}
        setOpenSectionIndex={setOpenSectionIndex}
        currentSectionIndex={currentSectionIndex}
        setCurrentSectionIndex={setCurrentSectionIndex}
        currentVideoIndex={currentVideoIndex}
        setCurrentVideoIndex={setCurrentVideoIndex}
        selectedVideo={selectedVideo}
        setSelectedVideo={setSelectedVideo}
        completedVideos={completedVideos}
        setOpenAside={setOpenAside}
        openAside={openAside}
      />
    </Box>
  );
}

export default CourseSections;
