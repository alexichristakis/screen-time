export const colors = {
  orange: "#FA6400",
  lightblue: "#32C5FF",
  darkblue: "#002AFF",
  magenta: "#B620E0",
  green: "#49E020",
  purple: "#4532FF",
  yellow: "#E0C620"
};

export const options = [
  { value: "social", label: "social networking" },
  { value: "entertainment", label: "entertainment" },
  { value: "productivity", label: "productivity" },
  { value: "reading", label: "reading & reference" },
  { value: "creativity", label: "creativity & arts" },
  { value: "games", label: "games" },
  { value: "education", label: "education" }
];

export const categoryToColor = {
  social: colors.orange,
  productivity: colors.lightblue,
  reading: colors.magenta,
  games: colors.darkblue,
  entertainment: colors.yellow,
  creativity: colors.purple,
  education: colors.green
};
