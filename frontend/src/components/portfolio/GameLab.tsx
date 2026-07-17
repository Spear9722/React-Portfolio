import React from "react";
import {
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import Reveal from "../common/Reveal";
import Eyebrow from "../common/Eyebrow";

import { projects } from "../../data/projects";

export default function GameLab(): React.ReactElement {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 8,
      }}
      id="lab"
    >
      {/* Header */}
      <Reveal>
        <Eyebrow>
          Personal Builds
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
          Game dev & AI lab
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: "62ch",
            mb: 5,
          }}
        >
          Where I test ideas that do not fit inside a client sprint —
          mostly Unity and Unreal projects with a reinforcement-learning
          focus.
        </Typography>
      </Reveal>


      {/* Projects */}
      <Grid
        container
        spacing={3}
      >
        {projects.map((project, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={project.title}
          >

            <Reveal
              delay={index * 80}
            >

              <Card
                variant="outlined"
                sx={{
                  height: "100%",
                }}
              >

                <CardContent
                  sx={{
                    p: 3,
                  }}
                >

                  {/* Category */}
                  <Typography
                    variant="caption"
                    sx={{
                      color:
                        "secondary.main",

                      letterSpacing:
                        "1px",

                      textTransform:
                        "uppercase",
                    }}
                  >
                    {project.tag}
                  </Typography>


                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: 16,

                      color:
                        "text.primary",

                      mt: 0.5,

                      mb: 1,
                    }}
                  >
                    {project.title}
                  </Typography>


                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: 13.5,

                      mb: 1.5,
                    }}
                  >
                    {project.description}
                  </Typography>


                  {/* Tech Stack */}
                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    useFlexGap
                    spacing={1}
                  >
                    {project.tools.map(
                      (tool) => (
                        <Chip
                          key={tool}
                          label={tool}
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

                </CardContent>

              </Card>

            </Reveal>

          </Grid>
        ))}

      </Grid>
    </Container>
  );
}