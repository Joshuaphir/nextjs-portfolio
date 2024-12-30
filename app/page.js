import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import ProjectSection from "./components/ProjectSection";
import Services from "./components/Service";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#2E5077] container mx-auto ">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <ProjectSection />
      </div>
    </main>    
  );
}
