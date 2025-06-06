import {
  Box,
  Collapse,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { styled } from "@mui/system";

const RotatingIcon = styled(ExpandMore)(({ rotate }) => ({
  transition: "transform 0.3s ease",
  transform: rotate ? "rotate(180deg)" : "rotate(0deg)",
}));

function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What Does Royalty Free Mean?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
    },
    {
      question:
        "What is the difference between a Royalty Free and a Copyrighted Image?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in.",
    },
    {
      question: "Can I use these images for commercial purposes?",
      answer:
        "Yes, most royalty-free images can be used commercially, but always check the specific license of the image.",
    },
    {
      question: "Can I use these images for commercial purposes?",
      answer:
        "Yes, most royalty-free images can be used commercially, but always check the specific license of the image.",
    },

    {
      question: "Can I use these images for commercial purposes?",
      answer:
        "Yes, most royalty-free images can be used commercially, but always check the specific license of the image.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Box>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <Box
            key={index}
            sx={{
              width: "100%",
              bgcolor: "white",
              mb: 2,
              borderRadius: "10px",
              padding: "8px",
            }}
          >
            <ListItem
              onClick={() => handleToggle(index)}
              sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
            >
              <ListItemText
                primary={
                  <Typography fontWeight={600}>{faq.question}</Typography>
                }
              />
              <RotatingIcon rotate={isOpen ? 1 : 0} />
            </ListItem>

            <Collapse in={isOpen} timeout="auto" unmountOnExit>
              <Box px={2} pb={2}>
                <Typography sx={{ color: "#555555", fontSize: "18px" }}>
                  {faq.answer}
                </Typography>
              </Box>
            </Collapse>
          </Box>
        );
      })}
    </Box>
  );
}

export default FAQs;
