import type { Resource } from "@/types/content";
import { asset } from "@/lib/asset";

export const resources: Resource[] = [
  {
    id: "chem-48-notebooks",
    tag: "Chem 48",
    title: "Jupyter Notebooks for Computations in Chemistry",
    description:
      "A computational chemistry course built on Google Colab notebooks that let first-year undergraduates discover chemical concepts.",
    url: "https://github.com/yluo-hmc/Chem-48-Computations-in-Chemistry",
  },
  {
    id: "science-cookbook",
    tag: "YSC 1223",
    title: "The Science of Everyday Cooking: A Cookbook",
    description:
      "A cookbook developed from students' final projects in Science of Everyday Cooking at Yale-NUS College.",
    url: asset("/resources/yale-nus-science-cookbook.pdf"),
  },
];
