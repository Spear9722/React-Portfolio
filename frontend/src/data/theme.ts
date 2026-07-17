import { createTheme } from "@mui/material/styles";

// Blueprint palette, pulled straight out of the original design tokens.
const bg = "#0A1F38";
const surface = "#10294A";
const line = "#2E5A8C";
const cyan = "#6EE7DE";
const amber = "#F2A65A";
const text = "#EAF2FB";
const muted = "#8FA6C4";

const mono = '"IBM Plex Mono", monospace';
const sans = '"IBM Plex Sans", sans-serif';

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: { default: bg, paper: surface },
    primary: { main: cyan, contrastText: "#06231F" },
    secondary: { main: amber, contrastText: "#412402" },
    text: { primary: text, secondary: muted },
    divider: line,
  },
  shape: { borderRadius: 6 },
  typography: {
    fontFamily: sans,
    h1: { fontFamily: mono, fontWeight: 600 },
    h2: { fontFamily: mono, fontWeight: 600 },
    h3: { fontFamily: mono, fontWeight: 600 },
    h4: { fontFamily: mono, fontWeight: 600 },
    h5: { fontFamily: mono, fontWeight: 600 },
    h6: { fontFamily: mono, fontWeight: 600 },
    overline: {
      fontFamily: mono,
      letterSpacing: "2px",
      color: cyan,
    },
    button: {
      fontFamily: mono,
      textTransform: "none",
      letterSpacing: ".3px",
    },
    caption: { fontFamily: mono },
    body1: { color: muted },
    body2: { color: muted },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: bg,
          backgroundImage: `
            linear-gradient(rgba(110,180,230,0.09) 1px, transparent 1px),
            linear-gradient(90deg, rgba(110,180,230,0.09) 1px, transparent 1px),
            linear-gradient(rgba(110,180,230,0.16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(110,180,230,0.16) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px, 24px 24px, 120px 120px, 120px 120px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "rgba(10, 31, 56, 0.86)",
          backdropFilter: "blur(6px)",
          borderBottom: `1px solid ${line}`,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: `1px solid ${line}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 4 },
        containedPrimary: {
          "&:hover": { backgroundColor: "#8ff0e8" },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: mono,
          fontSize: "11.5px",
          borderRadius: 4,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: line },
      },
    },
  },
});
