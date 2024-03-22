import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Figtree } from "next/font/google";
import SideBar from "@/components/SideBar";
import SupabaseProviders from "@/providers/Supabase.provider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";

const font = Figtree({ subsets: ['latin']})

export const metadata: Metadata = {
  title: "Spotify",
  description: "Listen music app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <SupabaseProviders><UserProvider><ModalProvider /><SideBar>{children}</SideBar></UserProvider></SupabaseProviders>
        </body>
    </html>
  );
}
