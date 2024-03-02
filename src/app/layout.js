import "@/app/globals.css";
import NavBar from "@/app/components/NavBar/NavBar";

export const metadata = {
  title: "Fermín Solaberrieta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="mx-5">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
