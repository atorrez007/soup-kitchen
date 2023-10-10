export type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
};

export const Products: Product[] = [
  {
    id: 1,
    title: "Minestrone",
    desc: "beans, chili, you name it!",
    img: "/imgsrc",
    price: 12.99,
  },
  {
    id: 2,
    title: "Chicken Tortilla",
    desc: "chicken, tortilla, you name it!",
    img: "/imgsrc",
    price: 13.99,
  },
  {
    id: 2,
    title: "Split Pea",
    desc: "Split, Pea, you name it!",
    img: "/imgsrc",
    price: 11.99,
  },
];

export const reduxProductFiller: Product[] = [
  {
    id: 999,
    title: "Missing No.",
    desc: "278398574042367slkhdg",
    img: "/imgsrc",
    price: 99.99,
  },
];

export const otherReduxProductFiller: Product = {
  id: 467,
  title: "Cheese.",
  desc: "jkkjhkjhkhjk",
  img: "/imgsrc",
  price: 1.0,
};
