import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import Reviews from "./Reviews";
import FAQs from "./FAQs";
import Announcements from "./Announcements";
import Notes from "./Notes";
import Overview from "./Overview";

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
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

export default function TabsWithContent() {
  const [value, setValue] = useState(0);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
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
        className="res_flex"
        sx={{
          borderBottom: "1px solid #ccc",
          gap: "8px",
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
        <Overview />
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
        style={{ backgroundColor: "#F5F5F5", padding: "0px" }}
      >
        <Notes />
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
