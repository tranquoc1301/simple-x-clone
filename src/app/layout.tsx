import "./globals.css";
import LeftBar from "@/components/LeftBar";
import RightBar from "@/components/RightBar";
import { ImageKitProvider } from "@imagekit/next";
import localFont from "next/font/local";

const chirp = localFont({
  src: [
    { path: "../../public/fonts/chirp-regular-web.woff", weight: "400" },
    { path: "../../public/fonts/chirp-medium-web.woff", weight: "500" },
    { path: "../../public/fonts/chirp-bold-web.woff", weight: "700" },
  ],
  variable: "--font-chirp",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={chirp.variable}>
      <head></head>
      <body>
        <ImageKitProvider urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}>
          <main className="font-family-chirp">
            <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto flex justify-between">
              <section
                aria-label="Left Sidebar"
                className="px-2 xsm:px-4 xxl:px-8"
              >
                <LeftBar />
              </section>
              <section
                aria-label="Main Content"
                className="flex-1 lg:min-w-[600px] border-x-[1px] border-border-gray"
              >
                {children}
              </section>
              <section
                aria-label="Right Sidebar"
                className="hidden lg:flex ml-4 md:ml-8 flex-1"
              >
                <RightBar />
              </section>
            </div>
          </main>
        </ImageKitProvider>
      </body>
    </html>
  );
}
