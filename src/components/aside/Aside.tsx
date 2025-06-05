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
  currentSectionIndex,
  setCurrentSectionIndex,
  currentVideoIndex,
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
        <Box className="aside-animation">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
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
                      backgroundColor: "#eee",
                    }}
                  >
                    <Box>
                      <PlayArrow
                        sx={{
                          fontSize: "2rem",
                          color: "white",
                          padding: "4px",
                          borderRadius: "50%",
                          bgcolor: "gray",
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
                          sx={{ fontSize: "1.1rem", fontWeight: "bold" }}
                        >
                          {section.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {completedCount}/{section.videos.length} videos
                        </Typography>
                      </Box>
                      {openSectionIndex === sectionIdx ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
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
                              left: 36,
                              zIndex: 1000,
                            }}
                          >
                            <PlayArrow
                              sx={{
                                fontSize: "1.5rem",
                                color: "white",
                                padding: "2px",
                                borderRadius: "50%",
                                bgcolor: "gray",
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
                              pl: 3,
                              cursor: "pointer",
                              backgroundColor:
                                currentSectionIndex === sectionIdx &&
                                currentVideoIndex === videoIdx
                                  ? "#e0e0e0"
                                  : "inherit",
                              "&:hover": {
                                backgroundColor: "lightgray",
                              },
                            }}
                            onClick={() =>
                              handleVideoSelect(sectionIdx, videoIdx)
                            }
                          >
                            <ListItemText primary={video.title} />
                            <p>{video.duration}</p>
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
