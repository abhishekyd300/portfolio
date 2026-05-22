import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: "Abhishek Yadav | Full-Stack Developer Portfolio",
  description:
    "Abhishek Yadav — Full-Stack Developer, MERN Stack Engineer, AWS Certified Cloud Practitioner. Portfolio showcasing projects, skills, and achievements.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>{children}</body>
    </html>
  );
}
