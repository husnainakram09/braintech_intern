"use client";
import Navbar from "@/src/ui/navbar";
import HeroSection from "@/components/home/HeroSection";
import About from "@/components/about";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Team from "@/components/Team";
import Blog from "@/components/blog";
import Testimonial from "@/components/testimonial";
import ContactUs from "@/components/contact-us";
import Footer from "@/src/ui/Footer";
import { Box, Center } from "@chakra-ui/react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main style={{ position: "relative" }}>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <Team />
      <Blog />
      <Testimonial />
      <ContactUs />
      <Footer />
      <Center
        pos={"fixed"}
        bottom={10}
        right={10}
        className="to-top"
        h={"50px"}
        w={"50px"}
        borderRadius={"100%"}
        cursor={"pointer"}
        bgImage={"linear-gradient(90deg,#03228f 0%,#0e73e4 100%)"}
        onClick={() => router.push("/#home")}
      >
        <MdKeyboardArrowUp style={{ color: "white", fontSize: 24 }} />
      </Center>
    </main>
  );
}
