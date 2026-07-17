import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import {
  ChevronDown,
  ExternalLink,
} from "lucide-react";

import Eyebrow from "../common/Eyebrow";
import BlueprintGraph from "../graphics/BlueprintGraph";

export default function Hero(): React.ReactElement {
  return (
    <Container
      maxWidth="lg"
      sx={{
        pt: {
          xs: 6,
          md: 11,
        },
        pb: 8,
      }}
    >
      <Grid
        container
        spacing={5}
        alignItems="center"
      >
        {/* Left Side */}
        <Grid
          item
          xs={12}
          md={6.5}
        >
          <Eyebrow>
            Full Stack Engineer / Dallas–Fort Worth
          </Eyebrow>

          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: 34,
                md: 54,
              },
              lineHeight: 1.08,
              letterSpacing: "-0.5px",
              color: "text.primary",
              mb: 2,
            }}
          >
            Building{" "}
            <Box
              component="span"
              sx={{
                color: "primary.main",
              }}
            >
              cloud-native
            </Box>{" "}
            systems, wiring{" "}
            <Box
              component="span"
              sx={{
                color: "primary.main",
              }}
            >
              AI
            </Box>{" "}
            into products, and shipping game worlds on the side.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: "46ch",
              mb: 3.5,
              fontSize: 16,
            }}
          >
            Three-plus years architecting REST APIs and cloud
            infrastructure for higher education and enterprise
            clients, leading an AI support chatbot build at IBM,
            and prototyping reinforcement-learning agents in
            Unity and Unreal Engine after hours.
          </Typography>

          <Stack
            direction="row"
            spacing={1.75}
            flexWrap="wrap"
            useFlexGap
          >
            <Button
              variant="contained"
              color="primary"
              href="#experience"
              endIcon={<ChevronDown size={14} />}
            >
              View the Deploy Log
            </Button>

            <Button
              variant="outlined"
              color="inherit"
              href="#contact"
              endIcon={<ExternalLink size={14} />}
              sx={{
                borderColor: "divider",
              }}
            >
              Get in Touch
            </Button>
          </Stack>
        </Grid>

        {/* Right Side */}
        <Grid
          item
          xs={12}
          md={5.5}
        >
          <BlueprintGraph />
        </Grid>
      </Grid>
    </Container>
  );
}