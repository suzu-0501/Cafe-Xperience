export type SeasonalProduct = {
  id: string;
  number: string;
  mood: string;
  name: string;
  description: string;
  image: string;
  alt: string;
};

export const seasonalProducts: SeasonalProduct[] = [
  {
    id: "orange-mango-frappuccino",
    number: "01",
    mood: "濃厚に、果実を楽しむ",
    name: "ぎゅぎゅっと オレンジ ＆ マンゴー フラペチーノ®",
    description: "オレンジの果肉感とマンゴーのコクを、ひと口にぎゅっと。",
    image: "/images/orange-frappuccino.jpg",
    alt: "ぎゅぎゅっと オレンジ＆マンゴー フラペチーノの商品写真",
  },
  {
    id: "orange-mango-chillax",
    number: "02",
    mood: "シュワっと、軽やかに",
    name: "チラックス ソーダ オレンジ ＆ マンゴー",
    description: "果実とゼリー、心地よい炭酸が重なる爽快な一杯。",
    image: "/images/orange-chillax.jpg",
    alt: "チラックス ソーダ オレンジ＆マンゴーの商品写真",
  },
  {
    id: "orange-mango-tea",
    number: "03",
    mood: "ティーで、すっきりと",
    name: "クラフト ジューシー オレンジ ＆ マンゴー ティー",
    description: "ジューシーな果実と、ほどよい渋みのブラックティー。",
    image: "/images/orange-tea.jpg",
    alt: "クラフト ジューシー オレンジ＆マンゴー ティーの商品写真",
  },
];
