import Navbar from "@/components/all-components/Navbar";
import Hero from "@/components/all-components/Hero";
import About from "@/components/all-components/About";
import Curriculum from "@/components/all-components/Curriculum";
import Process from "@/components/all-components/Process";
import Outcomes from "@/components/all-components/Outcomes";
import Faq from "@/components/all-components/Faq";
import CallToAction from "@/components/all-components/CallToAction";
import Application from "@/components/all-components/Application";
import Footer from "@/components/all-components/Footer";
import Interactions from "@/components/all-components/Interactions";
export default function Page() {
  return <div className="shell" id="home"><Navbar /><main><Hero /><About /><Curriculum /><Process /><Outcomes /><Faq /><CallToAction /><Application /></main><Footer /><Interactions /></div>;
}
