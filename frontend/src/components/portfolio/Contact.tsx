import React from "react";

import {
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import {
  ChevronDown,
  ExternalLink,
} from "lucide-react";

import Reveal from "../common/Reveal";
import Eyebrow from "../common/Eyebrow";


export default function Contact(): React.ReactElement {
  return (
    <Container
      maxWidth="md"
      sx={{
        py: 10,
        textAlign: "center",
      }}
      id="contact"
    >

      <Reveal>

        {/* Header */}
        <Eyebrow>
          <span>
            Open to work
          </span>
        </Eyebrow>


        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xs: 26,
              md: 38,
            },

            color:
              "text.primary",

            mb: 2,
          }}
        >
          Let's build the next node together.
        </Typography>


        <Typography
          variant="body1"
          sx={{
            maxWidth:
              "50ch",

            mx:
              "auto",

            mb:
              4,
          }}
        >
          Looking for cloud, AI/LLM, or full-stack engineering roles —
          open to on-site, hybrid, and remote opportunities across the
          Dallas–Fort Worth Metroplex and beyond.
        </Typography>


        {/* Buttons */}
        <Stack
          direction="row"
          spacing={1.75}
          justifyContent="center"
          flexWrap="wrap"
          useFlexGap
          sx={{
            mb: 6,
          }}
        >

          <Button
            variant="contained"
            color="primary"
            href="https://www.linkedin.com/in/shpearce"
            target="_blank"
            rel="noreferrer"
            endIcon={
              <ExternalLink size={14} />
            }
          >
            Connect on LinkedIn
          </Button>


          <Button
            variant="outlined"
            color="inherit"
            href="#experience"
            sx={{
              borderColor:
                "divider",
            }}
            endIcon={
              <ChevronDown size={14} />
            }
          >
            Review experience
          </Button>

        </Stack>

      </Reveal>

    </Container>
  );
}