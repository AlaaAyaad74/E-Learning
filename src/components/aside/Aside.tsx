import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  Collapse,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { Close, ExpandLess } from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";
import { PlayArrow } from "@mui/icons-material";
import { courses } from "../../../data/courses";

interface AsideProps {
  openSectionIndex: number;
  setOpenSectionIndex: (index: number) => void;
  currentSectionIndex: number;
  setCurrentSectionIndex: (index: number) => void;
  currentVideoIndex: number;
  setCurrentVideoIndex: (index: number) => void;
  selectedVideo: string | null;
  setSelectedVideo: (video: string | null) => void;
  completedVideos: string[];
  setOpenAside: (open: boolean) => void;
  openAside: boolean;
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
}: AsideProps) {
  const handleVideoSelect = (sectionIdx: number, videoIdx: number) => {
    setCurrentSectionIndex(sectionIdx);
    setCurrentVideoIndex(videoIdx);
    setSelectedVideo(courses[0].sections[sectionIdx].videos[videoIdx].url);
  };

  return (
    <>
      {openAside && (
        <Box
          className="aside-animation"
          sx={{
            borderLeft: "1px solid #e6e6e6",
            maxHeight: "100vh",
            borderBottom: "1px solid #e6e6e6",
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
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Course Content
            </Typography>
            <Close
              onClick={() => setOpenAside(false)}
              sx={{ cursor: "pointer" }}
            />
          </Box>
          <List>
            {courses[0].sections.map((section, sectionIdx) => {
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
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontSize: "14px", lineHeight: "14px" }}
                        >
                          {completedCount}/{section.videos.length} videos
                        </Typography>
                      </Box>
                      {openSectionIndex === sectionIdx ? (
                        <Box
                          width={20}
                          height={20}
                          borderRadius={50}
                          bgcolor={"#C0C0C0"}
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <ExpandLess
                            sx={{ color: "white", fontSize: "18px" }}
                          />
                        </Box>
                      ) : (
                        <Box
                          width={20}
                          height={20}
                          borderRadius={50}
                          bgcolor={"#C0C0C0"}
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <ExpandMore
                            sx={{ color: "white", fontSize: "18px" }}
                          />
                        </Box>
                      )}
                    </ListItemButton>
                  </ListItem>
                  <Collapse
                    in={openSectionIndex === sectionIdx}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {section.videos.map((video, videoIdx) => (
                        <Box
                          key={video.id}
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            pl: 6,
                            cursor: "pointer",
                            position: "relative",
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
                              borderLeft: "2px solid lightgray",
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
                                fontWeight: "bold",
                                lineHeight: "12px",
                                color: "#C0C0C0",
                              }}
                              primary={video.title}
                            />
                            <Typography
                              sx={{
                                fontSize: "14px",
                                lineHeight: "10px",
                                color: "#C0C0C0",
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
                      ))}
                    </List>
                  </Collapse>
                </Box>
              );
            })}
          </List>
        </Box>
      )}
      {!open && (
        <Box>
          <Typography variant="h4">Course Content</Typography>
        </Box>
      )}
    </>
  );
}

export default Aside;
