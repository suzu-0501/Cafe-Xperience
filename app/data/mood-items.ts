export type MoodItem = {
  id: string;
  time: string;
  title: string;
  description: string;
  icon: string;
  tone: "morning" | "commute" | "break" | "evening";
};

export const moodItems: MoodItem[] = [
  { id: "morning", time: "07:30", title: "朝の一杯", description: "ゆっくり今日を始めたいときに", icon: "☀", tone: "morning" },
  { id: "commute", time: "12:15", title: "移動の途中", description: "気分を軽やかに変えたいときに", icon: "↗", tone: "commute" },
  { id: "break", time: "15:00", title: "ひと休み", description: "甘い時間を楽しみたいときに", icon: "✦", tone: "break" },
  { id: "evening", time: "19:10", title: "一日の終わり", description: "ほっと自分に戻りたいときに", icon: "☾", tone: "evening" },
];
