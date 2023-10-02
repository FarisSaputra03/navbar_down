import Image from "next/image";
import Hero from "@/components/hero";
import Contact from "@/components/contact";
import Blog from "@/components/blog";
export default function Home() {
  return (
   <>
    <Hero/>
    <Contact/>
    <Blog/>
   </>
  );
}
