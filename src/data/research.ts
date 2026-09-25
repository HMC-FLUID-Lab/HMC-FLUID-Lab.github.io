import type { Thrust } from "@/types/content";
import { asset } from "@/lib/asset";

export const research: Thrust[] = [
  {
    slug: "hybrid-particle-field-simulation",
    title: "Hybrid Adaptive Particle-Field Simulation Method for Solvated Systems",
    summary:
      "A simulation method that keeps atomistic detail only where it matters — treating solvent as particles near a macromolecule and as a field elsewhere — to make large solvated systems tractable.",
    fullDescription: [
      "All-atom simulations are great for studying how molecules interact, but they get very expensive for large molecules in solution, like the DNA in our bodies, because of all the solvent around them.",
      "We are developing a hybrid adaptive particle-field method that keeps full atomistic detail only near the macromolecule and treats the solvent farther away as a field. The two regions adapt to the molecule's shape on the fly, with no hard boundary between them, so we can simulate large molecules in solution much faster.",
    ],
    image: asset("/images/research/hybrid-particle-field.png"),
    imageAlt:
      "A polymer chain surrounded by nearby water molecules, fading into a blue continuous background.",
    keyPublicationDois: [],
  },
  {
    slug: "kidney-filtration",
    title: "How Large Is Too Large? Deciphering the Rule for Molecular Size in Kidney Filtration",
    summary:
      "Why do large, flexible molecules like dextran pass the kidney’s filtration barrier while smaller, globular albumin is retained? We look for the physical rule behind glomerular size selectivity.",
    fullDescription: [
      "More than 10% of the world’s population is affected by kidney disease, and many cases originate from problems with the glomerulus, the filtration unit of the nephron. The kidney glomerulus filters blood into the urine, allowing water, sugar, and metabolic waste to pass through, while keeping essential proteins in blood without clogging the filter. It is not well understood why larger, flexible molecules such as dextran can pass through this filtration barrier, whereas smaller but globular proteins like albumin are mostly retained.",
      "Several sub-projects are possible: (1) Can we quantitatively measure the effective size of macromolecules in kidney filtration? (2) Can we elucidate the physical mechanisms underlying proteinuria and chronic kidney disease? (3) How do biological forces and fluid flow influence glomerular filtration?",
    ],
    keyPublicationDois: [],
    image: asset("/images/research/kidney-filtration.png"),
    imageAlt:
      "Cross-section of the glomerular filtration barrier: podocyte foot processes, basement membrane, and endothelium, with albumin retained in blood and dextran passing into urine.",
  },
  {
    slug: "polar-liquids-field-theory",
    title: "Statistical Field Theory for Polar and Polarizable Liquids",
    summary:
      "Field-theoretic approaches to the complex correlations of polar and polarizable liquids — derivations are tedious, but the resulting expressions are often simple.",
    fullDescription: [
      "We use statistical field techniques to develop theories that can account for the complex correlations in polar and polarizable liquids. While the derivation is tedious, the resulting analytical expression is often simple.",
      "Two key results from this thrust: a more accurate expression for the liquid dielectric constant, and a quantitative description of the like-dissolves-like principle for predicting liquid miscibility.",
    ],
    keyPublicationDois: [
      "10.1126/sciadv.abe7275",
      "10.1063/1.5046511",
    ],
    image: asset("/images/research/polar-liquids.webp"),
    imageAlt:
      "Schematic of a Na+ cation surrounded by oriented solvent dipoles in concentric shells.",
  },
  {
    slug: "water-structure",
    title: "Understanding Water Structure",
    summary:
      "Water exhibits unusual properties — including a density maximum at 4 °C — and may behave as a mixture of distinct structural arrangements. We develop tools to identify these phases.",
    fullDescription: [
      "Water exhibits unusual properties compared to typical liquids — most famously a maximum density at 4 °C rather than continuous expansion upon heating. We explore whether water behaves as a mixture of distinct structural arrangements, and develop mathematical measures that identify these two phases.",
      "Together with experimental collaborators, we have decoded a percolation-like phase transition in water near 330 K using upconverting-nanoparticle thermometry as a structural ruler.",
    ],
    keyPublicationDois: [
      "10.1021/acs.jpclett.0c02147",
      "10.1021/acs.jpclett.4c00044",
    ],
    image: asset("/images/research/water-structure.png"),
    imageAlt:
      "Tetrahedral arrangement of four water molecules connected by hydrogen bonds.",
  },
  {
    slug: "polyelectrolyte-brushes",
    title: "Polyelectrolyte Brushes in Salt Solutions",
    summary:
      "How does ion valency control polyelectrolyte brush conformations? These brushes underpin adhesives, lubricants, and superhydrophobic coatings.",
    fullDescription: [
      "Polyelectrolyte brushes — dense layers of charged polymers grafted to a surface — change conformation dramatically with the ionic environment. We build unified theories for how solvent quality and ion valency together set brush morphology.",
      "Recent work covers zwitterionic peptide brush sequence-structure relationships, ion-adsorption-driven nonelectrostatic attractions, and synergistic regulation by solvent quality and trivalent ions.",
    ],
    keyPublicationDois: [
      "10.1016/j.giant.2025.100363",
      "10.1021/acs.macromol.2c01464",
      "10.1021/acs.macromol.1c01229",
    ],
    image: asset("/images/research/polyelectrolyte-brushes.png"),
    imageAlt:
      "Polyelectrolyte brush with counterions and a plot of brush height versus salt concentration for +1, +2, +3 ion valencies.",
  },
];
