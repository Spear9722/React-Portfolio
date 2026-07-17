import React from "react";

import {
  Box,
  Container,
  Divider,
  Stack,
} from "@mui/material";

import Navbar from "../components/layout/Navbar";

import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Focus from "../components/portfolio/Focus";
import Experience from "../components/portfolio/Experience";
import GameLab from "../components/portfolio/GameLab";
import Skills from "../components/portfolio/Skills";
import Credentials from "../components/portfolio/Credentials";
import Contact from "../components/portfolio/Contact";


export default function SeanPearcePortfolio(): React.ReactElement {
  return (
    <Box>

      {/* Navigation */}
      <Navbar />


      {/* Main Portfolio Sections */}
      <main>

        <Hero />

        <About />

        <Focus />

        <Experience />

        <GameLab />

        <Skills />

        <Credentials />

        <Contact />

      </main>


      {/* Footer */}
      <Divider />

      <Container
        maxWidth="lg"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          flexWrap="wrap"
          sx={{
            py: 2.75,

            fontFamily:
              "IBM Plex Mono, monospace",

            fontSize:
              12,

            color:
              "text.secondary",
          }}
        >

          <span>
            © 2026 Sean Pearce · Dallas–Fort Worth Metroplex
          </span>


          <span>
            schematic_rev.3 · built with React + MUI
          </span>

        </Stack>

      </Container>

    </Box>
  );
}