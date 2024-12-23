import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#6A605C] container mx-auto px-12 py-4">
      <Header />
    </main>    
  );
}
