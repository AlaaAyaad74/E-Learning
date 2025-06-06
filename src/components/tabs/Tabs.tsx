import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import Reviews from "./Reviews";
import FAQs from "./FAQs";
import Announcements from "./Announcements";

type TabPanelProps = {
  children: React.ReactNode;
  value: number;
  index: number;
};

function TabPanel({
  children,
  value,
  index,
  ...other
}: TabPanelProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function TabsWithContent() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        aria-label="custom full-width tabs"
        TabIndicatorProps={{ style: { display: "none" } }}
        sx={{
          borderBottom: "1px solid #ccc",
        }}
      >
        {["Overview", "Notes", "Announcements", "FAQs", "Reviews"].map(
          (label, index) => (
            <Tab
              key={label}
              label={label}
              id={`tab-${index}`}
              sx={{
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: "bold",
                border: "1px solid #ccc",
                borderBottom: "none",
                backgroundColor: value === index ? "#F5F5F5" : "transparent",
                borderRadius: 0,
                color: value === index ? "gray !important" : "black",
              }}
            />
          )
        )}
      </Tabs>

      <TabPanel value={value} index={0}>
        This is the Overview content.
      </TabPanel>
      <TabPanel value={value} index={1}>
        Here are your Notes.
      </TabPanel>
      <TabPanel
        value={value}
        index={2}
        style={{ backgroundColor: "#F5F5F5", padding: "0px" }}
      >
        <Announcements />
      </TabPanel>
      <TabPanel
        value={value}
        index={3}
        style={{ backgroundColor: "#F5F5F5", padding: "0px" }}
      >
        <FAQs />
      </TabPanel>
      <TabPanel
        value={value}
        index={4}
        style={{ backgroundColor: "#F5F5F5", padding: "0px" }}
      >
        <Reviews />
      </TabPanel>
    </Box>
  );
}
