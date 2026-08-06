import "./globals.css";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <Toaster
          position="top-center"
          richColors
          toastOptions={{
            style: {
              width: "min(90vw, 420px)",
            },
          }}
        />
      </body>
    </html>
  );
}