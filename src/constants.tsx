import styled from "styled-components"

export const BaseContentContainer = styled.div`
  font-size: 32px;
  display: flex;
`

export type Technology = {
  name: string
  shortDescriptor: string
  longDescriptor: string
  icon?: string
}

export const TechnologiesArray: Technology[] = [
  {
    name: "Java",
    shortDescriptor: "Extensive use of Java 8+ for backend development",
    longDescriptor:
      "Extensive use of Java 8+ for backend development using Jackson, Jersey, Gradle, and Tomcat. Experience using Java as a controller layer in a MVC architecture and to write Oracle SQL queries.",
  },
  {
    name: "Modern Javascript & Typescript",
    shortDescriptor:
      "Most of my experience involves writing JS or TS in some form or another.",
    longDescriptor:
      "Most of my experience involves writing JS or TS in some form or another. Have used vanilla JS, but mostly write JS/TS using some form of SPA framework. Understand async programming with JS/TS using async/await, Promises, Observables, etc.",
  },
  {
    name: "Object Oriented Programming",
    shortDescriptor: "Firm grasp of OO concepts and modern OO design.",
    longDescriptor:
      "Firm grasp of OO concepts and modern OO design. Know and have implemented common OO Patterns such as Factory, Builder, Singleton, etc. Strong preference for using builder patterns for objects, especially in REST environs.",
  },
  {
    name: "REST Frameworks",
    shortDescriptor:
      "Basic understanding and experience using RESTful web layers.",
    longDescriptor:
      "Basic understanding and experience using RESTful web layers. Majority of experience using Jersey for RESTful web layer.",
  },
  {
    name: "Microservices",
    shortDescriptor: "Experience using and building consumers and providers.",
    longDescriptor:
      "Experience using and building consumers and providers. Mostly experience using them as endpoints in a front-end environment and working across teams to maintain and build microservices.",
  },
  {
    name: "Angular",
    shortDescriptor:
      "Extensive experience with AngularJS (1.x) and Angular 6+.",
    longDescriptor:
      "Extensive experience with AngularJS (1.x) and Angular 6+. Have handled upgrades and refactoring from JS to TS, helped build entire features using Angular and was in charge of maintaining a Common UI Component Library for two sister projects at GTRI.",
  },
  {
    name: "React",
    shortDescriptor:
      "Learned React as I went at Grindr and feel very comfortable with it.",
    longDescriptor:
      "Learned React as I went at Grindr and feel very comfortable with it. Built custom UI components for the Grindr Web UI, including a multi-part input for security codes. Experience using styled components and MUI libraries. Minor experience using Mobx for state management. Experience using Vite and CRA for project building. This website is built with React and Styled Components :)",
  },
  {
    name: "Git (Command Line)",
    shortDescriptor:
      "Extensive experience with git via git command line tools.",
    longDescriptor:
      "Extensive experience with git via git command line tools. Have rarely used GUI git tools to manage local repos and changes, and have used git command line to manage remote repos as well.",
  },
  {
    name: "CLI Tools",
    shortDescriptor:
      "Experience using CLI tools including ng-cli, Vite, Create React App, Unix commands, and nodejs.",
    longDescriptor:
      "Experience using CLI tools including ng-cli, Vite, Create React App, Unix commands, and nodejs. Experience in RHEL, Ubuntu, and MacOS using Unix/Linux command line tools.",
  },
  {
    name: "Modern HTML5/CSS3",
    shortDescriptor:
      "Extensive experience using modern HTML5 and CSS3 technologies.",
    longDescriptor:
      "Extensive experience using modern HTML5 and CSS3 technologies. Experience with CSS Flexbox, Grid, Animations, Media Queries, reactive CSS techniques, and pre-processors.",
  },
  {
    name: "LESS/SASS/SCSS",
    shortDescriptor:
      "Extensive experience using common CSS Pre-processors and pre-compilers.",
    longDescriptor:
      "Extensive experience using common CSS Pre-processors and pre-compilers. Most of my experience is with LESS and React Styled Components, but understand the general concepts of pre-processors.",
  },
  {
    name: "Javascript Unit Testing (Jest, Jasmine)",
    shortDescriptor:
      "Experience writing full coverage unit tests in for Javascript/Typescript code.",
    longDescriptor:
      "Experience writing full coverage unit tests in for Javascript/Typescript code. Experience writing unit tests for Angular JS, Angular 6+, and React using a variety of methods including virtual DOMs. Experienced in writing unit tests to cover major and edge use cases.",
  },
  {
    name: "Atlassian Project Management Tools",
    shortDescriptor:
      "Extensive experience using Jira, Confluence, and other Atlassian suite tools to manage work.",
    longDescriptor:
      "Extensive experience using Jira, Confluence, and other Atlassian suite tools to manage work. Managed and worked with sprint/Kanban boards, writing and maintaining tickets, and updating wiki's with walkthroughs for students and new developers.",
  },
  {
    name: "CI/CD Tools",
    shortDescriptor:
      "Experience using tools such as Jenkins, SonarQube, and GitHub Actions to manage build pipelines.",
    longDescriptor:
      "Experience using tools such as Jenkins, SonarQube, and GitHub Actions to manage build pipelines. Experienced in using CI/CD tools to manage code quality and deploy releases.",
  },
]
