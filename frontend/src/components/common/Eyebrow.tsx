import React from "react";
import { Box, SxProps, Theme, Typography } from "@mui/material";

export interface EyebrowProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

export default function Eyebrow({
  children,
  sx,
}: EyebrowProps): React.ReactElement {
  return (
    <Typography
      variant="overline"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        mb: 1.5,
        letterSpacing: "0.12em",
        color: "text.secondary",
        ...sx,
      }}
    >
      <Box
        component="span"
        sx={{
          width: 18,
          height: 1,
          bgcolor: "primary.main",
          display: "inline-block",
          flexShrink: 0,
        }}
      />

      {children}
    </Typography>
  );
}