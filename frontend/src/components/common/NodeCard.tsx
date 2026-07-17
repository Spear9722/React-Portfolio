import React from "react";
import {
  Box,
  Card,
  CardContent,
  Stack,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";

export interface NodeCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  accent?: "primary" | "secondary";
  sx?: SxProps<Theme>;
}

export default function NodeCard({
  icon,
  title,
  subtitle,
  children,
  accent = "primary",
  sx,
}: NodeCardProps): React.ReactElement {
  return (
    <Card
      variant="outlined"
      sx={{
        position: "relative",
        height: "100%",
        overflow: "hidden",
        ...sx,
      }}
    >
      {/* Accent bar */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 3,
          bgcolor: `${accent}.main`,
        }}
      />

      <CardContent sx={{ p: 3.25 }}>
        <Stack
          direction="row"
          spacing={1.75}
          alignItems="flex-start"
          sx={{ mb: 2 }}
        >
          {/* Icon */}
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: 1.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: `${accent}.main`,
              color:
                accent === "primary"
                  ? "primary.contrastText"
                  : "secondary.contrastText",
              opacity: 0.9,
              flexShrink: 0,
            }}
          >
            {icon}
          </Box>

          {/* Heading */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontSize: 17,
                color: "text.primary",
                lineHeight: 1.2,
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
                display: "block",
                mt: 0.25,
              }}
            >
              {subtitle}
            </Typography>
          </Box>
        </Stack>

        {/* Card Content */}
        {children}
      </CardContent>
    </Card>
  );
}