import Image from "next/image";
import { Monitor, Tablet, Printer } from "lucide-react";

const integrations = [
  { type: "icon", icon: Monitor, label: "PC / Laptop" },
  { type: "icon", icon: Tablet, label: "Runner App" },
  { type: "icon", icon: Printer, label: "Printer Thermal" },
  { type: "image", src: "/images/logodoku.png", label: "DOKU" },
];

export function IntegrationTree() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {integrations.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center gap-2.5"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-border bg-muted">
            {item.type === "icon" && item.icon ? (
              <item.icon className="h-6 w-6 stroke-[1.5] text-foreground/60" />
            ) : (
              <Image
                src={item.src!}
                alt={item.label}
                width={36}
                height={36}
                className="rounded-md object-contain"
              />
            )}
          </div>
          <span className="text-[11px] font-medium text-muted-foreground">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
