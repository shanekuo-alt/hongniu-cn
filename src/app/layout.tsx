import type { Metadata } from "next";
import { Epilogue, Manrope } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hongniu-cn.vercel.app"),
  title: "红牛 | 中国企业的 AI 营销顾问",
  description:
    "为中国小微企业量身定制的广告方案。您的本地市场，您的语言，您的计划。",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: "红牛 | 中国企业的 AI 营销顾问",
    description:
      "为中国小微企业量身定制的广告方案。您的本地市场，您的语言，您的计划。",
    url: "https://hongniu-cn.vercel.app",
    siteName: "红牛",
    locale: "zh_CN",
    type: "website",
    // TODO: Replace with dedicated 1200x630 OG image once final copy is locked
    images: [
      {
        url: "/assets/hongniu-logo.png",
        width: 1200,
        height: 630,
        alt: "红牛 AI 营销平台",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "红牛 | 中国企业的 AI 营销顾问",
    description:
      "为中国小微企业量身定制的广告方案。您的本地市场，您的语言，您的计划。",
    images: ["/assets/hongniu-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${epilogue.variable} ${manrope.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
