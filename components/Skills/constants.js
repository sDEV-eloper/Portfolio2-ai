import html from "@/public/images/code_icon/html.png";
import css from "@/public/images/code_icon/css.png";
import js from "@/public/images/code_icon/js.png";
import reactjs from "@/public/images/code_icon/react.png";
import c from "@/public/images/code_icon/c.png";
import sql from "@/public/images/code_icon/sql.png";
import java from "@/public/images/code_icon/java.png";
import bootstrap from "@/public/images/code_icon/boots.png";
import sass from "@/public/images/code_icon/sass.png";
import tailwind from "@/public/images/code_icon/tailwind.png";
import nextjs from "@/public/images/code_icon/nextjs.png";
import mongodb from "@/public/images/code_icon/mongodb.png";
import nodejs from "@/public/images/code_icon/nodejs.png";
import strapi from "@/public/images/code_icon/strapi.png";
import postman from "@/public/images/code_icon/postman.png";
import typescript from "@/public/images/code_icon/typescript.png";
import slack from "@/public/images/code_icon/slack.png";
import git from "@/public/images/code_icon/git.png";
import github from "@/public/images/code_icon/github2.png";

export const skillsList = [
  {
    id: 1,
    name: "HTML",
    logo: html,
  },
  {
    id: 2,
    name: "CSS",
    logo: css,
  },
  {
    id: 3,
    name: "JAVASCRIPT",
    logo: js,
  },
  {
    id: 4,
    name: "REACTJS",
    logo: reactjs,
  },
  {
    id: 5,
    name: "TAILWIND CSS",
    logo: tailwind,
  },
  {
    id: 6,
    name: "SASS",
    logo: sass,
  },
  {
    id: 13,
    name: "STRAPI",
    logo: strapi,
  },
  {
    id: 7,
    name: "C",
    logo: c,
  },
  {
    id: 8,
    name: "JAVA",
    logo: java,
  },
  {
    id: 11,
    name: "NODEJS",
    logo: nodejs,
  },
  {
    id: 9,
    name: "SQL",
    logo: sql,
  },
  {
    id: 10,
    name: "NEXTJS",
    logo: nextjs,
  },

  {
    id: 14,
    name: "POSTMAN",
    logo: postman,
  },
  {
    id: 15,
    name: "SLACK",
    logo: slack,
  },
  {
    id: 16,
    name: "TYPESCRIPT",
    logo: typescript,
  },
  {
    id: 17,
    name: "BOOTSTRAP",
    logo: bootstrap,
  },
  {
    id: 12,
    name: "MONGODB",
    logo: mongodb,
  },
  {
    id: 18,
    name: "GIT",
    logo: git,
  },
  {
    id: 19,
    name: "GITHUB",
    logo: github,
  },
];

export const mainTech = skillsList.filter((skill) =>
  [
    "HTML",
    "CSS",
    "SASS",
    "TAILWIND CSS",
    "JAVASCRIPT",
    "TYPESCRIPT", 
    "REACTJS",
    "NEXTJS",
    "GIT",
    "JAVA",
  ].includes(skill.name)
);

export const familiarTech = skillsList.filter((skill) =>
  ["BOOTSTRAP","C", "NODEJS", "SQL","POSTMAN"].includes(
    skill.name
  )
);
