export type MoodItem = {
  id: string;
  time: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
};

export const moodItems: MoodItem[] = [
  { id: "morning", time: "07:30", title: "朝の一杯", description: "ゆっくり今日を始めたいときに", icon: "☀", image: "/images/generated/mood-morning.png", alt: "朝の窓辺に置かれたラテの演出イメージ" },
  { id: "commute", time: "12:15", title: "移動の途中", description: "気分を軽やかに変えたいときに", icon: "↗", image: "/images/generated/mood-commute.png", alt: "移動途中のベンチに置かれたテイクアウトカップの演出イメージ" },
  { id: "break", time: "15:00", title: "ひと休み", description: "甘い時間を楽しみたいときに", icon: "✦", image: "/images/generated/mood-break.png", alt: "果実のドリンクと焼き菓子でひと休みする演出イメージ" },
  { id: "evening", time: "19:10", title: "一日の終わり", description: "ほっと自分に戻りたいときに", icon: "☾", image: "/images/generated/mood-evening.png", alt: "夜の窓辺でコーヒーを楽しむ演出イメージ" },
];
