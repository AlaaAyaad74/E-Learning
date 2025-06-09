import { useParams, useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  Collapse,
  ListItemText,
  Checkbox,
} from "@mui/material";
import { PlayArrow, ExpandLess, ExpandMore, Close } from "@mui/icons-material";
import courses from "../../../data/courses";

interface AsideProps {
  openSectionIndex: number;
  setOpenSectionIndex: (index: number) => void;
  setCurrentSectionIndex: (index: number) => void;
  setCurrentVideoIndex: (index: number) => void;
  setSelectedVideo: (url: string) => void;
  completedVideos: string[];
  setOpenAside: (open: boolean) => void;
  openAside: boolean;
  selectedVideo: string | null;
}

function Aside({
  openSectionIndex,
  setOpenSectionIndex,
  setCurrentSectionIndex,
  setCurrentVideoIndex,
  setSelectedVideo,
  completedVideos,
  setOpenAside,
  openAside,
  selectedVideo,
}: AsideProps) {
  const { id: courseId } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === courseId);
  if (!course) return <Typography>Course not found</Typography>;

  const handleVideoSelect = (sectionIdx: number, videoIdx: number) => {
    const video = course.sections[sectionIdx].videos[videoIdx];
    navigate(`/course/${courseId}/video/${video.id}`);
    setCurrentSectionIndex(sectionIdx);
    setCurrentVideoIndex(videoIdx);
    setSelectedVideo(video.url);
  };

  return (
    <>
      {openAside && (
        <Box
          className="aside-animation"
          sx={{
            position: { xs: "fixed", md: "static", lg: "static" },
            top: { xs: 0 },
            left: { xs: openAside ? 0 : "-100%" },
            width: "100%",
            height: "100vh",
            zIndex: { xs: 1200, md: 1200, lg: "auto" },
            backgroundColor: "#fff",
            borderLeft: { lg: "1px solid #e6e6e6" },
            borderBottom: "1px solid #e6e6e6",
            transition: "left 0.3s ease-in-out",
            overflowY: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem",
              borderBottom: "1px solid #e6e6e6",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
            >
              {course.title}
            </Typography>
            <Close
              onClick={() => setOpenAside(false)}
              sx={{ cursor: "pointer" }}
            />
          </Box>

          <List>
            {course.sections.map((section, sectionIdx) => {
              const completedCount = section.videos.filter((video) =>
                completedVideos.includes(video.id)
              ).length;

              return (
                <Box key={section.id}>
                  <ListItem
                    disablePadding
                    sx={{
                      cursor: "pointer",
                      paddingLeft: "1rem",
                      background:
                        "linear-gradient(180deg, rgba(187, 150, 150, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)",
                    }}
                  >
                    <Box>
                      <PlayArrow
                        sx={{
                          fontSize: "1.25rem",
                          color: "white",
                          padding: "4px",
                          borderRadius: "50%",
                          bgcolor: "#C0C0C0",
                        }}
                      />
                    </Box>
                    <ListItemButton
                      onClick={() => setOpenSectionIndex(sectionIdx)}
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            lineHeight: "18px",
                          }}
                        >
                          {section.title}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "15px",
                          }}
                        >
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: "14px", lineHeight: "14px" }}
                          >
                            {completedCount}/{section.videos.length} videos
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: "14px", lineHeight: "14px" }}
                          >
                            {Math.round(
                              section.videos.reduce((acc, video) => {
                                const [mins, secs] = video.duration
                                  .split(":")
                                  .map(Number);
                                return acc + mins * 60 + secs;
                              }, 0) / 60
                            )}{" "}
                            mins
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        width={20}
                        height={20}
                        borderRadius={50}
                        bgcolor={"#C0C0C0"}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        {openSectionIndex === sectionIdx ? (
                          <ExpandLess
                            sx={{ color: "white", fontSize: "18px" }}
                          />
                        ) : (
                          <ExpandMore
                            sx={{ color: "white", fontSize: "18px" }}
                          />
                        )}
                      </Box>
                    </ListItemButton>
                  </ListItem>

                  <Collapse
                    in={openSectionIndex === sectionIdx}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {section.videos.map((video, videoIdx) => {
                        const isCurrent = selectedVideo === video.url;
                        return (
                          <Box
                            key={video.id}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              pl: 6,
                              cursor: "pointer",
                              position: "relative",
                              backgroundColor: isCurrent
                                ? "#f0f4ff"
                                : "transparent",
                            }}
                          >
                            <Box
                              sx={{
                                position: "absolute",
                                left: 41,
                                zIndex: 1000,
                              }}
                            >
                              <PlayArrow
                                sx={{
                                  fontSize: "1.1rem",
                                  color: "white",
                                  padding: "2px",
                                  borderRadius: "50%",
                                  bgcolor: "#C0C0C0",
                                }}
                              />
                            </Box>
                            <ListItem
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "start",
                                alignItems: "start",
                                borderLeft: isCurrent
                                  ? "3px solid #3f51b5"
                                  : "2px solid lightgray",
                                padding: "0px 4px 0px 20px !important",
                                cursor: "pointer",
                              }}
                              onClick={() =>
                                handleVideoSelect(sectionIdx, videoIdx)
                              }
                            >
                              <ListItemText
                                sx={{
                                  fontSize: "17.5px",
                                  fontWeight: isCurrent ? "bold" : "normal",
                                  lineHeight: "12px",
                                  color: isCurrent ? "#3f51b5" : "#C0C0C0",
                                }}
                                primary={video.title}
                              />
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  lineHeight: "10px",
                                  color: isCurrent ? "#3f51b5" : "#C0C0C0",
                                }}
                              >
                                {video.duration}
                              </Typography>
                            </ListItem>
                            <Checkbox
                              checked={completedVideos.includes(video.id)}
                              disabled
                              color="default"
                            />
                          </Box>
                        );
                      })}
                    </List>
                  </Collapse>
                </Box>
              );
            })}
          </List>
        </Box>
      )}
    </>
  );
}

export default Aside;
