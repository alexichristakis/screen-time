import invert from "lodash/invert";

export const colors = {
  orange: "#FA6400",
  lightblue: "#64D2FF",
  darkblue: "#007FFF",
  magenta: "#FB00FF",
  green: "#49E020",
  purple: "#5E5CE6",
  yellow: "#FFD60A",
  red: "#E02020",
  grayBlue: "#C6E2FF",
  pink: "#FF6FA6"
};

export const options = [
  { value: "social", label: "social networking" },
  { value: "entertainment", label: "entertainment" },
  { value: "productivity", label: "productivity" },
  { value: "reading", label: "reading & reference" },
  { value: "creativity", label: "creativity & arts" },
  { value: "games", label: "games" },
  { value: "education", label: "education" },
  { value: "health", label: "health & fitness" }
];

export const categoryToColor = {
  social: colors.darkblue,
  productivity: colors.orange,
  reading: colors.grayBlue,
  games: colors.magenta,
  entertainment: colors.yellow,
  creativity: colors.purple,
  education: colors.green,
  notifications: colors.red,
  health: colors.pink,
  pickups: colors.lightblue
};

export const colorToCategory = invert(categoryToColor);
