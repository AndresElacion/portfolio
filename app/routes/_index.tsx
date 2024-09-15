import type { MetaFunction } from "@remix-run/node";
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
// import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="container lg:container mx-auto text-center lg:text-start relative">
        <Nav />
        <Hero />
        <Skills />
        <Featured />
        <Projects />
      </div>
    </div>
  );
}