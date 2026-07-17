import React from "react";
import {
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import {
  Cloud,
  Cpu,
} from "lucide-react";

import Reveal from "../common/Reveal";
import Eyebrow from "../common/Eyebrow";
import NodeCard from "../common/NodeCard";

interface FocusCard {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  items: string[];
}

const focusCards: FocusCard[] = [
  {
    title: "Cloud & Infrastructure",
    subtitle: "aws.ec2 · rds · docker · ci_cd",
    icon: <Cloud size={20} />,
    items: [
      "Architected and managed AWS infrastructure (EC2, RDS) for multi-application deployments serving thousands of end users.",
      "Containerized services with Docker and Docker Swarm, building CI/CD pipelines that removed manual steps from every release.",
      "Held production systems to FERPA and HIPAA standards across every higher-education engagement.",
      "Migrated legacy workloads from on-prem to cloud-native architectures on IBM Cloud and AWS.",
    ],
  },
  {
    title: "AI & LLM Integration",
    subtitle: "watsonx · assistant · llm_pipeline",
    icon: <Cpu size={20} />,
    items: [
      "Led the team that designed and shipped an AI-powered IT support chatbot on IBM Cloud.",
      "Integrated WatsonX and Watson Assistant through a custom LLM pipeline that resolved common issues before human escalation.",
      "Cut IT ticket volume and improved first-response time by automating the front line of support.",
      "Carried that pipeline thinking into personal projects, including reinforcement-learning experiments.",
    ],
  },
];

export default function Focus(): React.ReactElement {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 8,
      }}
      id="focus"
    >
      {/* Section Header */}
      <Reveal>
        <Eyebrow>
          Focus Modules
        </Eyebrow>

        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xs: 24,
              md: 32,
            },
            color: "text.primary",
            mb: 1,
          }}
        >
          Cloud systems and AI integration
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: "62ch",
            mb: 5,
          }}
        >
          The two disciplines that anchor my day-to-day engineering
          work.
        </Typography>
      </Reveal>


      {/* Cards */}
      <Grid
        container
        spacing={3.5}
      >
        {focusCards.map((card, index) => (
          <Grid
            item
            xs={12}
            md={6}
            key={card.title}
          >
            <Reveal delay={index * 120}>
              <NodeCard
                icon={card.icon}
                title={card.title}
                subtitle={card.subtitle}
              >
                <List
                  dense
                  sx={{
                    pl: 0,
                  }}
                >
                  {card.items.map((item) => (
                    <ListItem
                      key={item}
                      sx={{
                        display: "list-item",
                        listStyleType: "disc",
                        pl: 0,
                        ml: 2.5,
                        py: 0.5,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: 14,
                        }}
                      >
                        {item}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </NodeCard>
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}