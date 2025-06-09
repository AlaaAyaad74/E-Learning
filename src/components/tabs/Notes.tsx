import {
  Box,
  TextField,
  IconButton,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
  Button,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import CustomEditor from "./CustomEditor";
import courses from "../../../data/courses";

function timeToSeconds(time: string): number {
  const [minutes, seconds] = time.split(":").map(Number);
  return minutes * 60 + seconds;
}

function isValidTimestamp(timestamp: string, duration: string): boolean {
  return timeToSeconds(timestamp) <= timeToSeconds(duration);
}

function getVideoIdFromURL(): string | null {
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  const lastSegment = pathParts[pathParts.length - 1];

  const isValid = courses.some((course) =>
    course.sections.some((section) =>
      section.videos.some((video) => video.id === lastSegment)
    )
  );

  return isValid ? lastSegment : null;
}

function getLectureInfo(videoId: string | null) {
  for (const course of courses) {
    for (const section of course.sections) {
      for (let i = 0; i < section.videos.length; i++) {
        const video = section.videos[i];
        if (video.id === videoId) {
          return {
            label: `${section.title} - Lesson ${i + 1}`,
            value: video.id,
            duration: video.duration,
          };
        }
      }
    }
  }
  return null;
}

export default function Notes() {
  const [isEditing, setIsEditing] = useState(false);
  const [note, setNote] = useState("");
  const [timestamp, setTimestamp] = useState("0:15");
  const [sort, setSort] = useState("recent");
  const [notesList, setNotesList] = useState<
    {
      timestamp: string;
      content: string;
      createdAt: string;
    }[]
  >([]);

  const videoId = getVideoIdFromURL();
  const lectureInfo = getLectureInfo(videoId);
  const lectureDuration = lectureInfo?.duration || "00:00";

  useEffect(() => {
    if (videoId) {
      const stored = localStorage.getItem(`notes-${videoId}`);
      if (stored) {
        setNotesList(JSON.parse(stored));
      } else {
        setNotesList([]);
      }
    }
  }, [videoId]);

  const handleSave = () => {
    if (!videoId) return;
    if (!isValidTimestamp(timestamp, lectureDuration)) {
      alert("Timestamp exceeds video duration.");
      return;
    }

    const newNote = {
      timestamp,
      content: note,
      createdAt: new Date().toISOString(),
    };

    const updatedNotes = [...notesList, newNote];
    localStorage.setItem(`notes-${videoId}`, JSON.stringify(updatedNotes));
    setNotesList(updatedNotes);
    setNote("");
    setIsEditing(false);
  };

  const handleSortChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  const sortedNotes = [...notesList].sort((a, b) =>
    sort === "recent"
      ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  return (
    <Box sx={{ backgroundColor: "white", p: 2 }}>
      {isEditing ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 2 }}>
          <TextField
            value={timestamp}
            size="small"
            sx={{ width: "80px" }}
            onChange={(e) => setTimestamp(e.target.value)}
            label="Timestamp"
          />

          <CustomEditor value={note} onChange={setNote} />

          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
            <Button onClick={() => setIsEditing(false)}>Cancel</Button>
            <Button
              variant="contained"
              onClick={handleSave}
              disabled={!note.trim()}
              sx={{
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
            >
              Save Note
            </Button>
          </Box>
        </Box>
      ) : (
        <Box sx={{ display: "flex", gap: 1, mb: 2, alignItems: "center" }}>
          <TextField
            fullWidth
            placeholder={`Create a new note at ${timestamp}`}
            variant="outlined"
            size="small"
            onClick={() => setIsEditing(true)}
          />
          <IconButton
            sx={{ color: "black", border: "1px solid #ccc", borderRadius: 1 }}
            onClick={() => setIsEditing(true)}
          >
            <AddIcon />
          </IconButton>
        </Box>
      )}

      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <FormControl fullWidth size="small">
          <InputLabel>Sort by</InputLabel>
          <Select value={sort} label="Sort by" onChange={handleSortChange}>
            <MenuItem value="recent">Most Recent</MenuItem>
            <MenuItem value="oldest">Oldest</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ mt: 2 }}>
        {sortedNotes.length === 0 ? (
          <Typography>No notes for this video yet.</Typography>
        ) : (
          sortedNotes.map((n, idx) => (
            <Box
              key={idx}
              sx={{
                mb: 2,
                p: 2,
                border: "1px solid #eee",
                borderRadius: 2,
                backgroundColor: "#fafafa",
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                ⏱ {n.timestamp}
              </Typography>
              <Typography
                variant="body2"
                dangerouslySetInnerHTML={{ __html: n.content }}
              />
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
}
