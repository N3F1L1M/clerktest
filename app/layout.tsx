import { type Metadata } from "next";
import { ClerkProvider} from "@clerk/nextjs";
import { esMX } from "@clerk/localizations";

import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Clerk Next.js Quickstart",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={esMX}>

    <html lang="en">
      <body className="flex flex-wrap border-red-700 border-2" >
         
       

        <header className="w-screen  border-amber-400 border-2">
          
            <Navbar /> 
            
              </header>

      

             <main className="w-screen flex flex-wrap border-amber-700 border-2"> 
              <Sidebar />
        
        
                        {children}

            </main>

       

        <footer className="w-screen border-b-red-500 border-2">Pie de página</footer>

      </body>
    </html>
     
    </ClerkProvider>
  );
}
