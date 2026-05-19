import { ReactNode } from "react";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import './globals.css'

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <html lang="it" className={cn("font-sans", geist.variable)}>
      <body>
        <main className="">
          {children}
        </main>
      </body>
    </html>
  )
}
