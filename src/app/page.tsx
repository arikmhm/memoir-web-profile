import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Gallery } from "@/components/sections/gallery";
import { Story } from "@/components/sections/story";
import { Showcase } from "@/components/sections/showcase";
import { Timeline } from "@/components/sections/timeline";
import { Features } from "@/components/sections/features";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <About />
      <Story />
      <Showcase />
      <Timeline />
      <Features />
      <Gallery />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta />
    </main>
  );
}
