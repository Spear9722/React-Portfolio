import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Terminal } from "lucide-react";

import MobileDrawer from "./MobileDrawer";
import { navigationLinks } from "../../data/navigation";

export default function Navbar(): React.ReactElement {
  const [mobileOpen, setMobileOpen] = useState(false);

  const openDrawer = (): void => {
    setMobileOpen(true);
  };

  const closeDrawer = (): void => {
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            py: 1,
          }}
        >
          {/* Logo */}
          <Stack
            direction="row"
            spacing={1.25}
            alignItems="center"
          >
            <Box
              sx={{
                width: 34,
                height: 34,
                border: "1px solid",
                borderColor: "primary.main",
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                fontFamily: "IBM Plex Mono, monospace",
                color: "primary.main",
                userSelect: "none",
              }}
            >
              SP
            </Box>

            <Typography
              sx={{
                fontFamily: "IBM Plex Mono, monospace",
                letterSpacing: ".5px",
                fontSize: 14,
              }}
            >
              SEAN_PEARCE.SCHEMATIC
            </Typography>
          </Stack>

          {/* Desktop Navigation */}
          <Stack
            direction="row"
            spacing={3}
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            {navigationLinks.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                sx={{
                  color: "text.secondary",
                  fontSize: 13,
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Stack>

          {/* Mobile Menu */}
          <IconButton
            aria-label="Open navigation"
            onClick={openDrawer}
            sx={{
              display: {
                xs: "inline-flex",
                md: "none",
              },
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 1,
            }}
          >
            <Terminal size={16} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <MobileDrawer
        open={mobileOpen}
        onClose={closeDrawer}
      />
    </>
  );
}