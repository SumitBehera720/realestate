import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SK Realtech | Find your new home today",
  description:
    "The real estate company you can trust to keep it real. Selling, Resale, Commercial properties and more in Bengaluru.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@200;300;400;500;600&family=Montserrat:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          async
        ></script>
      </head>
      <body className="bg-[#050505] text-[#ffffff] selection:bg-[#c5a059] selection:text-black antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
