import React from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
} from "@mui/material";
import { X as CloseIcon } from "lucide-react";

import { navigationLinks } from "../../data/navigation";

export interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({
  open,
  onClose,
}: MobileDrawerProps): React.ReactElement {
  return (
    <Drawer
      anchor="top"
      open={open}
      onClose={onClose}
    >
      <Box
        sx={{
          bgcolor: "background.default",
          p: 3,
        }}
      >
        <Stack
          direction="row"
          justifyContent="flex-end"
        >
          <IconButton
            aria-label="Close navigation"
            onClick={onClose}
          >
            <CloseIcon size={18} />
          </IconButton>
        </Stack>

        <Stack
          spacing={2}
          sx={{
            mt: 1,
          }}
        >
          {navigationLinks.map((link) => (
            <Button
              key={link.href}
              href={link.href}
              onClick={onClose}
              sx={{
                justifyContent: "flex-start",
                color: "text.secondary",
                fontSize: 15,
              }}
            >
              {link.label}
            </Button>
          ))}
        </Stack>
      </Box>
    </Drawer>
  );
}