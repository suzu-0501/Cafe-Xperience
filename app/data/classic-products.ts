export type ClassicProduct = {
  id: string;
  name: string;
  category: string;
  tone: string;
};

export const classicProducts: ClassicProduct[] = [
  { id: "starbucks-latte", name: "スターバックス ラテ", category: "ESPRESSO", tone: "latte" },
  { id: "soy-latte", name: "ソイ ラテ", category: "PLANT BASED", tone: "soy" },
  { id: "almond-latte", name: "アーモンドミルク ラテ", category: "PLANT BASED", tone: "almond" },
  { id: "cappuccino", name: "カプチーノ", category: "ESPRESSO", tone: "cappuccino" },
  { id: "cafe-mocha", name: "カフェ モカ", category: "CHOCOLATE", tone: "mocha" },
  { id: "americano", name: "カフェ アメリカーノ", category: "ESPRESSO", tone: "americano" },
  { id: "caramel-frappuccino", name: "キャラメル フラペチーノ®", category: "FRAPPUCCINO®", tone: "caramel" },
  { id: "matcha-frappuccino", name: "抹茶 クリーム フラペチーノ®", category: "FRAPPUCCINO®", tone: "matcha" },
];
