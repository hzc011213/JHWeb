import Navbar from "@/components/Navbar";
import ThemeToggleButton from "@/components/ThemeToggleButton";

export default function Home() {
  return (
    <main className="home-screen relative min-h-screen overflow-hidden">
      <div aria-hidden="true" className="home-screen__scrim absolute inset-0" />
      <Navbar />
      <div className="fixed right-8 top-4 z-60 lg:right-16">
        <ThemeToggleButton />
      </div>
    </main>
  );
}
