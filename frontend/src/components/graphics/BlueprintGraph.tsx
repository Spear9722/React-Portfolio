import React from "react";
import { Box, useTheme } from "@mui/material";

interface NodeProps {
  x: number;
  y: number;
  title: string;
  subtitle: string;
  accent?: "primary" | "secondary";
}

interface WireProps {
  d: string;
}

function Wire({ d }: WireProps): React.ReactElement {
  const theme = useTheme();

  return (
    <path
      d={d}
      fill="none"
      stroke={theme.palette.divider}
      strokeWidth={1.6}
      strokeDasharray="6 6"
      className="wire"
    />
  );
}

function Node({
  x,
  y,
  title,
  subtitle,
  accent = "primary",
}: NodeProps): React.ReactElement {
  const theme = useTheme();

  const stroke =
    accent === "primary"
      ? theme.palette.primary.main
      : theme.palette.secondary.main;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width="230"
        height="80"
        rx="6"
        fill={theme.palette.background.paper}
        stroke={stroke}
        strokeWidth="1.2"
        strokeOpacity={accent === "primary" ? 0.6 : 1}
      />

      <circle
        cx={x}
        cy={y + 40}
        r="4"
        fill={stroke}
      />

      <text
        x={x + 22}
        y={y + 34}
        fill={theme.palette.text.primary}
        fontFamily="IBM Plex Mono, monospace"
        fontSize="15"
        fontWeight="600"
      >
        {title}
      </text>

      <text
        x={x + 22}
        y={y + 55}
        fill={theme.palette.text.secondary}
        fontFamily="IBM Plex Mono, monospace"
        fontSize="11"
      >
        {subtitle}
      </text>
    </g>
  );
}

export default function BlueprintGraph(): React.ReactElement {
  const theme = useTheme();

  return (
    <Box
      component="svg"
      viewBox="0 0 900 460"
      role="img"
      aria-label="Blueprint diagram connecting Sean Pearce to Cloud Systems, AI & LLM Integration, and Game Development."
      sx={{
        width: "100%",
        height: "auto",
        overflow: "visible",
      }}
    >
      <style>
        {`
          .wire {
            animation: dash 3.5s linear infinite;
          }

          @keyframes dash {
            to {
              stroke-dashoffset: -120;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .wire {
              animation: none;
            }
          }
        `}
      </style>

      {/* Connections */}
      <Wire d="M 260 230 C 340 230, 340 110, 470 100" />
      <Wire d="M 260 230 C 340 230, 340 230, 470 230" />
      <Wire d="M 260 230 C 340 230, 340 350, 470 360" />

      {/* Main Node */}
      <g>
        <rect
          x="70"
          y="185"
          width="190"
          height="90"
          rx="6"
          fill={theme.palette.background.paper}
          stroke={theme.palette.primary.main}
          strokeWidth="1.2"
        />

        <text
          x="90"
          y="220"
          fill={theme.palette.text.primary}
          fontFamily="IBM Plex Mono, monospace"
          fontSize="15"
          fontWeight="600"
        >
          SEAN_PEARCE
        </text>

        <text
          x="90"
          y="242"
          fill={theme.palette.text.secondary}
          fontFamily="IBM Plex Mono, monospace"
          fontSize="11"
        >
          full_stack_engineer.node
        </text>

        <circle
          cx="260"
          cy="230"
          r="4"
          fill={theme.palette.primary.main}
        />
      </g>

      {/* Cloud */}
      <Node
        x={470}
        y={60}
        title="CLOUD_SYSTEMS"
        subtitle="AWS · IBM Cloud · Docker"
      />

      {/* AI */}
      <Node
        x={470}
        y={190}
        title="AI // LLM_INTEGRATION"
        subtitle="WatsonX · Assistant Pipelines"
      />

      {/* Game Development */}
      <Node
        x={470}
        y={320}
        title="GAME_DEV_LAB"
        subtitle="Unity · Unreal · Q-Learning"
        accent="secondary"
      />
    </Box>
  );
}