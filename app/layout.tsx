import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoreMath Academy | Toán song ngữ và luyện thi quốc tế",
  description:
    "Lộ trình học Toán cá nhân hóa, lớp học song ngữ và luyện thi SAT, SSAT, ISEE cùng CoreMath Academy.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
