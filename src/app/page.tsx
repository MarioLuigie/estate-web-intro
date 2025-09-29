'use client'

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full bg-white text-black [font-family:var(--font-geist-sans)]">
      {/* Header */}
      <header className="w-full max-w-5xl p-10 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold tracking-tight">Estate - Mobile React Native Application</h1>
        <p className="text-gray-500 mt-3 text-xl">Screen Gallery and Video Demo</p>
      </header>

      {/* Content */}
      <div className="w-full flex flex-col items-center justify-center gap-16 py-12 px-4">
        {/* Gallery */}
        <section className="w-full max-w-5xl text-center">
          <h2 className="text-2xl font-semibold mb-6">Screen Gallery</h2>
          <div className="flex items-center justify-center gap-4">
            {/* <Button variant="outline" size="icon" onClick={() => scroll("left")} className="rounded-full shadow-sm">
              <ChevronLeft className="w-5 h-5" />
            </Button> */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar w-full max-w-3xl px-2"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <Card key={n} className="min-w-[220px] flex-shrink-0 shadow-md rounded-2xl border border-gray-200">
                  <CardContent className="p-3 flex items-center justify-center">
                    <Image
                      src={`/screens/screen${n}.png`}
                      alt={`Screen ${n}`}
                      width={220}
                      height={440}
                      className="rounded-xl border border-gray-100"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* <Button variant="outline" size="icon" onClick={() => scroll("right")} className="rounded-full shadow-sm">
              <ChevronRight className="w-5 h-5" />
            </Button> */}
          </div>
        </section>

        {/* Video */}
        <section className="w-full max-w-5xl text-center">
          <h2 className="text-2xl font-semibold mb-6">Video Demo</h2>
          <div className="aspect-video w-full max-w-3xl mx-auto border border-gray-200 rounded-2xl overflow-hidden shadow-md">
            <video controls className="w-full h-full">
              <source src="/demo.mp4" type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-5xl p-6 text-center border-t border-gray-200 text-gray-500 text-sm">
        © {new Date().getFullYear()} Estate - Mobile Booking React Native Application | Mariusz Łotocki
      </footer>
    </main>
  );
}
