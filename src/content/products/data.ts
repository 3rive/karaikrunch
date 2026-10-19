export interface Product {
  id: string;
  name: string;
  category: "Traditional sweet" | "Traditional savoury";
  image: string;
  imageAlt: string;
}

export const products: Product[] = [
  {
    id: "adhirasam",
    name: "Adhirasam",
    category: "Traditional sweet",
    image: "/images/Adhi_Orig.jpeg",
    imageAlt: "Traditional adhirasam sweets stacked in a woven basket",
  },
  {
    id: "chinna-seedai",
    name: "Chinna Seedai",
    category: "Traditional savoury",
    image: "/images/Seedai.jpeg",
    imageAlt: "Small, round seedai snacks served in a bowl",
  },
  {
    id: "maavu-urundai",
    name: "Maavu Urundai",
    category: "Traditional sweet",
    image: "/images/ML_orig.jpeg",
    imageAlt: "Maavu urundai piled in a brass bowl",
  },
  {
    id: "managolam",
    name: "Managolam",
    category: "Traditional savoury",
    image: "/images/Managolam.jpeg",
    imageAlt: "Golden Managolam snack pieces",
  },
  {
    id: "seepu-seedai",
    name: "Seepu Seedai",
    category: "Traditional savoury",
    image: "/images/Seepu.jpeg",
    imageAlt: "Ridged Seepu Seedai arranged on a brass plate",
  },
  {
    id: "sweet-seedai",
    name: "Sweet Seedai",
    category: "Traditional sweet",
    image: "/images/sseedai.jpeg",
    imageAlt: "Sweet seedai served in a brass bowl",
  },
  {
    id: "murukku",
    name: "Murukku",
    category: "Traditional savoury",
    image: "/images/Murukku.jpeg",
    imageAlt: "Golden murukku coils arranged on a brass plate",
  },
  {
    id: "laddu",
    name: "Laddu",
    category: "Traditional sweet",
    image: "/images/Laddu.jpeg",
    imageAlt: "Round laddus served on a brass plate",
  },
];
