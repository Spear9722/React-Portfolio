import React from "react";
import {
  Container,
  Divider,
  Stack,
} from "@mui/material";

export default function Footer(): React.ReactElement {
  const year = new Date().getFullYear();

  return (
    <>
      <Divider />

      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          flexWrap="wrap"
          sx={{
            py: 2.75,
            fontFamily: "IBM Plex Mono, monospace",
            fontSize: 12,
            color: "text.secondary",
          }}
        >
          <span>
            &copy; {year} Sean Pearce &middot; Dallas&ndash;Fort Worth Metroplex
          </span>

          <span>
            schematic_rev.3 &middot; built with React + MUI
          </span>
        </Stack>
      </Container>
    </>
  );
}