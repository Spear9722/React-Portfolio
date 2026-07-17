import React from "react";
import {
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import {
  Terminal,
  Boxes,
  Cloud,
  Cpu,
  Gamepad2,
} from "lucide-react";

import Reveal from "../common/Reveal";
import Eyebrow from "../common/Eyebrow";

import { skillGroups } from "../../data/skills";


const icons = {
  Languages: <Terminal size={13} />,
  Frameworks: <Boxes size={13} />,
  "Cloud & DevOps": <Cloud size={13} />,
  "AI & ML": <Cpu size={13} />,
  "Game Development": <Gamepad2 size={13} />,
};


export default function Skills(): React.ReactElement {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 8,
      }}
      id="skills"
    >

      {/* Header */}
      <Reveal>
        <Eyebrow>
          Skill Matrix
        </Eyebrow>

        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xs: 24,
              md: 32,
            },
            color: "text.primary",
            mb: 5,
          }}
        >
          Tools of the trade
        </Typography>
      </Reveal>


      {/* Skill Groups */}
      <Grid
        container
        spacing={4}
      >

        {skillGroups.map((group, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={group.label}
          >

            <Reveal
              delay={index * 60}
            >

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{
                  mb: 1.75,
                }}
              >

                {icons[group.label as keyof typeof icons]}

                <Typography
                  variant="overline"
                  sx={{
                    mb: 0,
                  }}
                >
                  {group.label}
                </Typography>

              </Stack>


              <Stack
                direction="row"
                flexWrap="wrap"
                useFlexGap
                spacing={1}
              >

                {group.items.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    variant="outlined"
                    sx={{
                      borderColor:
                        "divider",

                      color:
                        "text.secondary",
                    }}
                  />
                ))}

              </Stack>

            </Reveal>

          </Grid>
        ))}

      </Grid>

    </Container>
  );
}