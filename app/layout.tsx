// import type { Metadata } from "next";
// import "./globals.css";
// import { Exo } from "next/font/google";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// // Load Exo font
// const exo = Exo({
//   subsets: ["latin"],
//   weight: ["200","300","400", "700"],
//   display: "swap",
// });

// export const metadata: Metadata = {
//   title: "3rafique Communication",
//   description: "Production, Distribution & Promotion Company in Lagos",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={exo.className}>
//       {/* Apply Exo font globally */}
//       <body className="bg-secondary text-dark">
//         <Navbar />
//         <main className="min-h-screen">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import "./globals.css";
import { Exo } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Load Exo font
const exo = Exo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "3rafique Communication",
  description: "Production, Distribution & Promotion Company in Lagos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={exo.className}>
      {/* Apply Exo font globally */}
      <body className="bg-secondary text-dark">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="min-h-screen pt-16">
          {" "}
          {/* Add padding-top to avoid overlap */}
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
