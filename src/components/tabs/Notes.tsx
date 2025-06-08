// import {
//   Box,
//   TextField,
//   IconButton,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
//   Typography,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import { useState } from "react";

// export default function NotesControls() {
//   const [lecture, setLecture] = useState("");
//   const [sort, setSort] = useState("");

//   return (
//     <Box sx={{ backgroundColor: "#f9f9f9", p: 2 }}>
//       {/* Note Input and Add Button */}
//       <Box sx={{ display: "flex", gap: 1, mb: 2, alignItems: "center" }}>
//         <TextField
//           fullWidth
//           placeholder="Create a new note at 3:14"
//           variant="outlined"
//           size="small"
//         />
//         <IconButton
//           color="primary"
//           sx={{ border: "1px solid #ccc", borderRadius: 1 }}
//         >
//           <AddIcon />
//         </IconButton>
//       </Box>

//       {/* Filters */}
//       <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
//         <FormControl fullWidth size="small">
//           <InputLabel>All lectures</InputLabel>
//           <Select
//             value={lecture}
//             label="All lectures"
//             onChange={(e) => setLecture(e.target.value)}
//           >
//             <MenuItem value="all">All Lectures</MenuItem>
//             <MenuItem value="lecture1">Lecture 1</MenuItem>
//             <MenuItem value="lecture2">Lecture 2</MenuItem>
//           </Select>
//         </FormControl>

//         <FormControl fullWidth size="small">
//           <InputLabel>Sort by</InputLabel>
//           <Select
//             value={sort}
//             label="Sort by"
//             onChange={(e) => setSort(e.target.value)}
//           >
//             <MenuItem value="recent">Most Recent</MenuItem>
//             <MenuItem value="oldest">Oldest</MenuItem>
//           </Select>
//         </FormControl>
//       </Box>

//       {/* Instructional Text */}
//       <Typography variant="body2" color="textSecondary">
//         Click the "Create a new note" box, the "+" button, or press "B" to make
//         your first note
//       </Typography>
//     </Box>
//   );
// }
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
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function NotesControls() {
  const [isEditing, setIsEditing] = useState(false);
  const [lecture, setLecture] = useState("");
  const [sort, setSort] = useState("");
  const [note, setNote] = useState("");
  const [timestamp] = useState("3:14"); // simulate current video timestamp

  const handleSave = () => {
    console.log("Saved note:", note);
    setIsEditing(false);
    setNote("");
  };

  return (
    <Box sx={{ backgroundColor: "#f9f9f9", p: 2 }}>
      {/* Editable Note */}
      {isEditing ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 2 }}>
          <TextField
            value={timestamp}
            size="small"
            sx={{ width: "80px" }}
            InputProps={{ readOnly: true }}
          />

          <ReactQuill value={note} onChange={setNote} theme="snow" />

          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
            <Button onClick={() => setIsEditing(false)}>Cancel</Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              disabled={!note.trim()}
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
            color="primary"
            sx={{ border: "1px solid #ccc", borderRadius: 1 }}
            onClick={() => setIsEditing(true)}
          >
            <AddIcon />
          </IconButton>
        </Box>
      )}
 
      {/* Dropdown Filters */}
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <FormControl fullWidth size="small">
          <InputLabel>All lectures</InputLabel>
          <Select
            value={lecture}
            label="All lectures"
            onChange={(e) => setLecture(e.target.value)}
          >
            <MenuItem value="all">All Lectures</MenuItem>
            <MenuItem value="lecture1">Lecture 1</MenuItem>
            <MenuItem value="lecture2">Lecture 2</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth size="small">
          <InputLabel>Sort by</InputLabel>
          <Select
            value={sort}
            label="Sort by"
            onChange={(e) => setSort(e.target.value)}
          >
            <MenuItem value="recent">Most Recent</MenuItem>
            <MenuItem value="oldest">Oldest</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {!isEditing && (
        <Typography variant="body2" color="textSecondary">
          Click the "Create a new note" box, the "+" button, or press "B" to
          make your first note
        </Typography>
      )}
    </Box>
  );
}
