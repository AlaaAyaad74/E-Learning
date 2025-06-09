import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import courses from "../../data/courses";
import Player from "../components/video_player/Player";
import Aside from "../components/aside/Aside";
import Navbar from "../components/nav_bar/Navbar";
import TabsComponent from "../components/tabs/Tabs";

function CourseSections() {
  const { id: courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);

  const [openSectionIndex, setOpenSectionIndex] = useState<number>(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(
    course?.sections[0].videos[0].url || null
  );
  const [completedVideos, setCompletedVideos] = useState<string[]>([]);
  const [openAside, setOpenAside] = useState(false);
  const navigate = useNavigate();

  if (!course) return <Typography>Course not found</Typography>;

  const handleVideoSelect = (sectionIdx: number, videoIdx: number) => {
    const video = course.sections[sectionIdx].videos[videoIdx];
    setCurrentSectionIndex(sectionIdx);
    setCurrentVideoIndex(videoIdx);
    setSelectedVideo(video.url || null);
    setOpenSectionIndex(sectionIdx);
    navigate(`/course/${courseId}/video/${video.id}`);
  };

  const handleVideoEnd = () => {
    const currentVideo =
      course.sections[currentSectionIndex].videos[currentVideoIndex];

    if (!completedVideos.includes(currentVideo.id)) {
      setCompletedVideos((prev) => [...prev, currentVideo.id]);
    }

    const currentSection = course.sections[currentSectionIndex];
    const isLastVideoInSection =
      currentVideoIndex === currentSection.videos.length - 1;
    const isLastSection = currentSectionIndex === course.sections.length - 1;

    if (!isLastVideoInSection) {
      handleVideoSelect(currentSectionIndex, currentVideoIndex + 1);
    } else if (!isLastSection) {
      handleVideoSelect(currentSectionIndex + 1, 0);
    } else {
      console.log("Course completed!");
    }
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: !openAside ? "1fr" : "2fr 1fr",
        gap: 2,
      }}
    >
      <Box>
        <Navbar setOpenAside={setOpenAside} openAside={openAside} />
        <Player onEnded={handleVideoEnd} />
        <TabsComponent />
      </Box>
      <Aside
        openSectionIndex={openSectionIndex}
        setOpenSectionIndex={setOpenSectionIndex}
        setCurrentSectionIndex={setCurrentSectionIndex}
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
