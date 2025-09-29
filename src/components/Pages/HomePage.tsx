import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { screens } from "@/lib/images";

export default function HomePage() {
  return (
    <div className="w-full">
      <div className="max-w-5xl mx-auto text-black [font-family:var(--font-geist-sans)]">
        <p className="text-zinc-700 mt-4 font-normal text-center text-xl px-10">Screen Gallery</p>

        {/* Content */}
        <div className="w-full flex flex-col items-center justify-center gap-16 py-3 px-4">
          {/* Screens */}
          <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-visible">
            <Carousel
              opts={{ align: "center" }}
              className="relative overflow-visible"
            >
              <CarouselContent className="flex">
                {screens.map((screen) => (
                  <CarouselItem
                    key={screen.name}
                    className="basis-full flex justify-center min-w-0"
                  >
                    {/* wewnętrzny wrapper kontroluje rozmiar obrazka */}
                    <div className="w-full max-w-[300px] min-w-[260px] aspect-[9/20]">
                      <Card className="w-full h-full p-0 rounded-none border-0 shadow-none">
                        <CardContent className="h-full w-full flex items-center justify-center p-2">
                          <div className="relative w-full h-full">
                            <Image
                              src={`/screens/${screen.name}.jpg`}
                              alt={`Screen - ${screen.name}`}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-cover rounded-xl border border-zinc-300 shadow-lg"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
							
              <CarouselPrevious
                className="absolute left-6 top-1/2 -translate-y-1/2 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-100/90 shadow-lg hover:bg-zinc-200 border border-zinc-200 cursor-pointer"
                aria-label="Previous"
              />
              <CarouselNext
                className="absolute right-6 top-1/2 -translate-y-1/2 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-100/90 shadow-lg hover:bg-zinc-200 border border-zinc-200 cursor-pointer"
                aria-label="Next"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}


