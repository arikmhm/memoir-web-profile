import { Hero } from "@/components/sections/hero";
import { Product } from "@/components/sections/product";
import { Gallery } from "@/components/sections/gallery";
import { Advantages } from "@/components/sections/advantages";
import { Timeline } from "@/components/sections/timeline";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { ReceiptDivider } from "@/components/layout/receipt-divider";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <div className="relative z-10 bg-background">
        <Product />
        <Advantages />
        <Timeline />
        <Gallery />
        <Pricing />
        <ReceiptDivider />
        <Faq />
        <ReceiptDivider />
        <Cta />
      </div>
    </main>
  );
}
