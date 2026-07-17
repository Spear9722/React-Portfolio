import React from "react";
import {
  Chip,
  Container,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";

import Reveal from "../common/Reveal";
import Eyebrow from "../common/Eyebrow";

import {
  experienceData,
} from "../../data/experience";

export default function Experience(): React.ReactElement {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 8,
      }}
      id="experience"
    >

      {/* Header */}
      <Reveal>
        <Eyebrow>
          Deploy Log
        </Eyebrow>

        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xs: 24,
              md: 32,
            },
            color: "text.primary",
            mb: 1,
          }}
        >
          Experience
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: "62ch",
            mb: 3,
          }}
        >
          Each role, in the order it shipped.
        </Typography>
      </Reveal>


      {/* Timeline */}
      <Timeline
        sx={{
          p: 0,

          "& .MuiTimelineItem-root:before": {
            flex: 0,
            padding: 0,
          },
        }}
      >

        {experienceData.map((entry, index) => (
          <TimelineItem
            key={entry.role}
          >

            {/* Desktop Date */}
            <TimelineOppositeContent
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },

                flex: 0.28,

                color: "text.secondary",

                fontFamily:
                  "IBM Plex Mono, monospace",

                fontSize: 12,

                pt: 1.5,
              }}
            >
              {entry.time}
            </TimelineOppositeContent>


            {/* Timeline Node */}
            <TimelineSeparator>

              <TimelineDot
                sx={{
                  bgcolor:
                    "background.default",

                  border:
                    "2px solid",

                  borderColor:
                    "primary.main",

                  boxShadow:
                    "none",
                }}
              />

              {index <
                experienceData.length - 1 && (
                <TimelineConnector
                  sx={{
                    bgcolor:
                      "divider",
                  }}
                />
              )}

            </TimelineSeparator>


            {/* Content */}
            <TimelineContent
              sx={{
                pb: 5,
              }}
            >

              <Reveal
                delay={index * 80}
              >

                {/* Mobile Date */}
                <Typography
                  sx={{
                    display: {
                      xs: "block",
                      sm: "none",
                    },

                    fontFamily:
                      "IBM Plex Mono, monospace",

                    fontSize: 12,

                    color:
                      "primary.main",

                    mb: 0.5,
                  }}
                >
                  {entry.time}
                </Typography>


                <Typography
                  variant="h6"
                  sx={{
                    fontSize: 18,
                    color:
                      "text.primary",
                  }}
                >
                  {entry.role}
                </Typography>


                <Typography
                  variant="caption"
                  sx={{
                    display:
                      "block",

                    color:
                      "text.secondary",

                    fontSize:
                      13.5,

                    mb:
                      1.75,
                  }}
                >
                  {entry.organization}
                </Typography>


                <List dense>
                  {entry.bullets.map(
                    (bullet) => (
                      <ListItem
                        key={bullet}
                        sx={{
                          display:
                            "list-item",

                          listStyleType:
                            "disc",

                          pl: 0,

                          ml: 2.5,

                          py: 0.4,
                        }}
                      >

                        <Typography
                          variant="body2"
                          sx={{
                            fontSize:
                              14.5,
                          }}
                        >
                          {bullet}
                        </Typography>

                      </ListItem>
                    )
                  )}
                </List>


                {/* Skills */}
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  useFlexGap
                  spacing={1}
                  sx={{
                    mt: 1.5,
                  }}
                >
                  {entry.tags.map(
                    (tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor:
                            "divider",

                          color:
                            "text.secondary",
                        }}
                      />
                    )
                  )}
                </Stack>

              </Reveal>

            </TimelineContent>

          </TimelineItem>
        ))}

      </Timeline>

    </Container>
  );
}