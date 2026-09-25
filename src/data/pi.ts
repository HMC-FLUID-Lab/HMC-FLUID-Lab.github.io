import type { PI, EducationRow, TimelineRow } from "@/types/content";
import { asset } from "@/lib/asset";

export const pi: PI = {
  name: "Bilin Zhuang",
  title: "Assistant Professor of Chemistry",
  affiliation: "Harvey Mudd College",
  email: "bzhuang@g.hmc.edu",
  cvUrl: asset("/bilin_zhuang_cv_2024jun.pdf"),
  tagline:
    "Soft-matter chemical physics — statistical thermodynamics and field-theoretic approaches to liquids, solutions, polyelectrolyte brushes, and phase separation, with undergraduates at Harvey Mudd College.",
  bio: [
    "I'm an Assistant Professor of Chemistry at Harvey Mudd College, where I lead the Zhuang Group. In the setting of a liberal arts college, I collaborate with young scientists on a range of projects, trying to understand the complex correlations and structure in liquids and to develop new tools to model them.",
    "Before coming to Mudd in 2023, I spent three years on the faculty of Yale-NUS College in Singapore, while also working as a Scientist at the Institute of High Performance Computing (A*STAR). Over the years, my students and I have worked on theories of polar and polarizable liquids, ways to describe the structure of water, polyelectrolyte brushes in salt solutions, and liquid–liquid phase separation.",
    "I have also had the fortune to teach a range of interesting courses, from statistical thermodynamics to the science of everyday cooking (and bread!). I always welcome comments and exchanges about these courses, so feel free to reach out.",
    "Before all this, I did my Ph.D. in Chemistry at Caltech with Professor Zhen-Gang Wang, working on dipolar liquids and their mixtures with field-theoretic approaches, and my B.A. in Physics and Chemistry at Wellesley College, where I received the APS Leroy Apker Award.",
  ],
  portrait: asset("/images/bilin.jpg"),
};

export const education: EducationRow[] = [
  {
    year: "2010–2016",
    title: "Ph.D. in Chemistry",
    org: "California Institute of Technology, Pasadena, CA, USA",
    dissertation:
      "Dipolar Liquids and Their Mixtures: Equilibrium and Nonequilibrium Properties with Field-Theoretic Approaches",
    advisor: "Prof. Zhen-Gang Wang",
  },
  {
    year: "2006–2009",
    title: "B.A. in Physics and Chemistry",
    org: "Wellesley College, Wellesley, MA, USA",
    dissertation:
      "Thermodynamics of Ising Systems of the Triangular Kagome Lattice and Small-Model Approximations to Geometrically Frustrated Systems",
    advisor: "Prof. Courtney Lannert",
  },
];

export const appointments: TimelineRow[] = [
  {
    year: "2023–",
    title: "Assistant Professor of Chemistry",
    org: "Harvey Mudd College, Claremont, CA, USA",
  },
  {
    year: "2020–2023",
    title: "Assistant Professor of Chemistry",
    org: "Yale-NUS College, Singapore",
  },
  {
    year: "2017–2022",
    title: "Scientist (joint appointment from 2020)",
    org: "Institute of High Performance Computing, A*STAR, Singapore",
  },
];

/** Kept as the flat union of education + appointments for callers that want one list. */
export const affiliations: TimelineRow[] = [...appointments, ...education];

export const awards: TimelineRow[] = [
  {
    year: "2023",
    title: "NSF CAREER Award",
    org: "National Science Foundation, USA",
  },
  {
    year: "2022",
    title: "Yale-NUS Teaching Enhancement Grant",
    org: "Yale-NUS College",
  },
  {
    year: "2020",
    title: "AME Young Individual Research Grant",
    org: "A*STAR, Singapore",
    note: "Role: PI",
  },
  {
    year: "2018",
    title: "SERC Career Development Award",
    org: "Science and Engineering Research Council, A*STAR",
    note: "Role: PI",
  },
  {
    year: "2009",
    title: "Leroy Apker Award",
    org: "American Physical Society",
  },
  {
    year: "2009",
    title: "Phyllis J. Fleming Prize for Distinction in Physics",
    org: "Wellesley College",
  },
  {
    year: "2009",
    title: "Jean V. Crawford Prize in Chemistry",
    org: "Wellesley College",
  },
  {
    year: "2008",
    title: "Jerome A. Schiff Fellowship",
    org: "Wellesley College",
  },
  {
    year: "2006",
    title: "National Science Scholarship (BS–PhD)",
    org: "A*STAR, Singapore",
  },
  {
    year: "2006",
    title: "Institute of Physics Singapore Gold Medal",
    org: "Institute of Physics, Singapore",
  },
];
