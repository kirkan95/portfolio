import React from "react";

const skillGroups = [
  {
    label: "Languages",
    skills: ["JavaScript", "Python", "HTML/CSS", "GraphQL"],
  },
  {
    label: "Frameworks",
    skills: ["React", "D3.js", "Mapbox GL JS", "Vite", "pandas"],
  },
  {
    label: "AI & Data",
    skills: [
      "OpenAI GPT-4o",
      "RAG architecture",
      "Supabase",
      "prompt engineering",
    ],
  },
  {
    label: "Tooling",
    skills: ["Jenkins CI/CD", "ffmpeg", "Google APIs", "AWS S3", "QGIS"],
  },
];

const Skills = () => {
  return (
    <div className="mx-5 mt-8 mb-2">
      <div className="space-y-2">
        {skillGroups.map(({ label, skills }) => (
          <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
            <span className="lato-bold text-xs text-accent uppercase tracking-widest w-28 shrink-0 pt-0.5">
              {label}
            </span>
            <span className="lato-regular text-slate-600">
              {skills.join(", ")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
