import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const origin = `${protocol}://${host}`;
  const title = "スターバックス コーヒー ジャパン｜季節のおすすめと定番メニュー（営業用サンプル）";
  const description = "季節のおすすめから定番のラテ、フラペチーノ®まで。気分に合う一杯を見つけて、近くのスターバックスを探せる営業用サンプルLP。";

  return {
    title,
    description,
    robots: { index: false, follow: false },
    openGraph: {
      title,
      description,
      type: "website",
      url: origin,
      locale: "ja_JP",
      images: [{ url: `${origin}/og.png`, width: 1731, height: 909, alt: "今日は、どんな一杯にする？" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
