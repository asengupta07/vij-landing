"use client";

import Link from "next/link";
import { GL } from "./gl";
import { Pill } from "./pill";
import { Button } from "./ui/button";
import { useState } from "react";

export function Hero() {
  const [hovering, setHovering] = useState(false);
  return (
    <div className="flex flex-col h-svh justify-between pb-40">
      <GL hovering={hovering} />

      <div className="pb-16 mt-auto text-center relative">
        <Pill className="mb-6">OPEN SOURCE</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          Open‑source error monitoring <br />
          for <i className="font-light">JavaScript</i>
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[440px] mx-auto">
          Lightweight SDK + self‑hosted dashboard. Own your telemetry.
        </p>

        <Link className="contents max-sm:hidden" href="https://www.npmjs.com/package/vij-sdk">
          <Button
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Install vij‑sdk]
          </Button>
        </Link>
        <Link className="contents sm:hidden" href="https://www.npmjs.com/package/vij-sdk">
          <Button
            size="sm"
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Install vij‑sdk]
          </Button>
        </Link>
      </div>
    </div>
  );
}
