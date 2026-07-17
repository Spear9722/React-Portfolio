import React from "react";
import {
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import Reveal from "../common/Reveal";
import Eyebrow from "../common/Eyebrow";

const specSheet = [
  ["Location", "Dallas–Fort Worth, TX"],
  ["Experience", "3+ yrs full stack, 4–5 yrs IT"],
  ["Cloud", "AWS · IBM Cloud"],
  ["AI Focus", "LLM integration, WatsonX"],
  ["Side Focus", "Unity · Unreal · RL"],
];

export default function About(): React.ReactElement {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 8,
      }}
    >
      <Grid
        container
        spacing={5}
      >
        {/* About Text */}
        <Grid
          item
          xs={12}
          md={7}
        >
          <Reveal>
            <Eyebrow>
              Profile
            </Eyebrow>

            <Typography
              variant="h2"
              sx={{
                fontSize: 26,
                color: "text.primary",
                mb: 2,
              }}
            >
              From helpdesk tickets to AI pipelines
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 2,
              }}
            >
              I started in a university IT helpdesk resetting
              passwords and provisioning access. That grew into
              two and a half years at IBM shipping full-stack
              applications for higher-education and telecom
              clients, and leading the team that put an
              AI-powered support chatbot into production on IBM
              Cloud.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 2,
              }}
            >
              Today I split my time between React/TypeScript
              frontends, Java and Python backends, and the AWS
              infrastructure underneath them — with FERPA and HIPAA
              compliance built into the process rather than bolted
              on.
            </Typography>

            <Typography variant="body1">
              Outside of client work, I build small game projects
              in Unity and Unreal Engine, which is where most of my
              hands-on reinforcement-learning experiments happen.
            </Typography>
          </Reveal>
        </Grid>

        {/* Spec Sheet */}
        <Grid
          item
          xs={12}
          md={5}
        >
          <Reveal delay={120}>
            <Card
              variant="outlined"
              sx={{
                p: 3,
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  display: "block",
                  mb: 2,
                }}
              >
                Spec Sheet
              </Typography>

              {specSheet.map(([label, value]) => (
                <Stack
                  key={label}
                  direction="row"
                  justifyContent="space-between"
                  sx={{
                    py: 1.1,
                    borderBottom: "1px dashed",
                    borderColor: "divider",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: 13,
                    }}
                  >
                    {label}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: 13,
                      color: "text.primary",
                      textAlign: "right",
                    }}
                  >
                    {value}
                  </Typography>
                </Stack>
              ))}

              {/* Status */}
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{
                  py: 1.1,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: 13,
                  }}
                >
                  Status
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontSize: 13,
                    color: "primary.main",
                  }}
                >
                  Open to work
                </Typography>
              </Stack>
            </Card>
          </Reveal>
        </Grid>
      </Grid>
    </Container>
  );
}