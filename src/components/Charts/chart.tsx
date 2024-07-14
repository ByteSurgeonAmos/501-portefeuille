"use client";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  {
    subject: "JavaScript",
    A: 100,
    B: 0,
    C: 0,
    fullMark: 100,
  },
  {
    subject: "Python",
    A: 0,
    B: 70,
    C: 0,
    fullMark: 100,
  },
  {
    subject: "R",
    A: 0,
    B: 30,
    C: 0,
    fullMark: 100,
  },
  {
    subject: "Java",
    A: 0,
    B: 0,
    C: 60,
    fullMark: 100,
  },
  {
    subject: "Solidity",
    A: 0,
    B: 0,
    C: 50,
    fullMark: 100,
  },
  {
    subject: "PHP",
    A: 0,
    B: 0,
    C: 10,
    fullMark: 100,
  },

  {
    subject: "TypeScript",
    A: 90,
    B: 0,
    C: 0,
    fullMark: 100,
  },
];

const ProgrammingLanguagesRadarChart = () => (
  <ResponsiveContainer width="100%" height={600}>
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 100]} />
      <Radar
        name="JavaScript"
        dataKey="A"
        stroke="#FF4560"
        fill="#FF4560"
        fillOpacity={0.6}
      />
      <Radar
        name="Python"
        dataKey="B"
        stroke="#FF6347"
        fill="#FF6347"
        fillOpacity={0.6}
      />
      <Radar
        name="Java"
        dataKey="C"
        stroke="#FF7F50"
        fill="#FF7F50"
        fillOpacity={0.6}
      />
      <Radar
        name="Solidity"
        dataKey="C"
        stroke="#FFD700"
        fill="#FFD700"
        fillOpacity={0.6}
      />
      <Radar
        name="PHP"
        dataKey="C"
        stroke="#ADFF2F"
        fill="#ADFF2F"
        fillOpacity={0.6}
      />
      <Radar
        name="R"
        dataKey="B"
        stroke="#00FA9A"
        fill="#00FA9A"
        fillOpacity={0.6}
      />
      <Radar
        name="TypeScript"
        dataKey="C"
        stroke="#1E90FF"
        fill="#1E90FF"
        fillOpacity={0.6}
      />
      <Legend />
    </RadarChart>
  </ResponsiveContainer>
);

export default ProgrammingLanguagesRadarChart;
