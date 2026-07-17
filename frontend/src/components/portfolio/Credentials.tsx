import React from "react";
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import {
  ShieldCheck,
  GitBranch,
} from "lucide-react";

import Reveal from "../common/Reveal";
import Eyebrow from "../common/Eyebrow";

import {
  certifications,
  education,
  Credential,
} from "../../data/credentials";


function CredentialList({
  items,
  icon,
}: {
  items: Credential[];
  icon: React.ReactNode;
}): React.ReactElement {
  return (
    <List>
      {items.map((credential) => (
        <ListItem
          key={credential.title}
          sx={{
            borderBottom:
              "1px solid",

            borderColor:
              "divider",

            py: 1.5,
          }}
        >

          <ListItemIcon
            sx={{
              minWidth: 34,
            }}
          >
            {icon}
          </ListItemIcon>


          <ListItemText
            primary={credential.title}
            secondary={credential.organization}
            primaryTypographyProps={{
              fontSize: 14,
              color:
                "text.primary",
            }}
            secondaryTypographyProps={{
              fontSize: 12.5,
              fontFamily:
                "IBM Plex Mono, monospace",
            }}
          />

        </ListItem>
      ))}
    </List>
  );
}


export default function Credentials(): React.ReactElement {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 8,
      }}
      id="credentials"
    >

      {/* Header */}
      <Reveal>

        <Eyebrow>
          Credentials
        </Eyebrow>

        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xs: 24,
              md: 32,
            },
            color:
              "text.primary",

            mb: 5,
          }}
        >
          Certifications & education
        </Typography>

      </Reveal>


      <Grid
        container
        spacing={5}
      >

        {/* Certifications */}
        <Grid
          item
          xs={12}
          md={6}
        >

          <Reveal>

            <CredentialList
              items={certifications}
              icon={
                <ShieldCheck
                  size={18}
                  color="#6EE7DE"
                />
              }
            />

          </Reveal>

        </Grid>


        {/* Education */}
        <Grid
          item
          xs={12}
          md={6}
        >

          <Reveal delay={100}>

            <CredentialList
              items={education}
              icon={
                <GitBranch
                  size={18}
                  color="#F2A65A"
                />
              }
            />

          </Reveal>

        </Grid>

      </Grid>

    </Container>
  );
}