'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
// import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

const screens = [
	{ name: '1', path: '/screens/1.jpg' },
	{ name: '2', path: '/screens/2.jpg' },
	{ name: '3', path: '/screens/3.jpg' },
	{ name: '4', path: '/screens/4.jpg' },
	{ name: '5', path: '/screens/5.jpg' },
	{ name: '6', path: '/screens/6.jpg' },
	{ name: '7', path: '/screens/7.jpg' },
	{ name: '8', path: '/screens/8.jpg' },
	{ name: '9', path: '/screens/9.jpg' },
	{ name: '10', path: '/screens/10.jpg' },
	{ name: '11', path: '/screens/11.jpg' },
	{ name: '12', path: '/screens/12.jpg' },
	{ name: '13', path: '/screens/13.jpg' },
	{ name: '14', path: '/screens/14.jpg' },
	{ name: '15', path: '/screens/15.jpg' },
	{ name: '16', path: '/screens/16.jpg' },
	{ name: '17', path: '/screens/17.jpg' },
	{ name: '18', path: '/screens/18.jpg' },
	{ name: '19', path: '/screens/19.jpg' },
	{ name: '20', path: '/screens/20.jpg' },
	{ name: '21', path: '/screens/21.jpg' },
	{ name: '22', path: '/screens/22.jpg' },
	{ name: '23', path: '/screens/23.jpg' },
	{ name: '24', path: '/screens/24.jpg' },
	{ name: '25', path: '/screens/25.jpg' },
	{ name: '26', path: '/screens/26.jpg' },
	{ name: '27', path: '/screens/27.jpg' },
	{ name: '28', path: '/screens/28.jpg' },
	{ name: '29', path: '/screens/29.jpg' },
	{ name: '30', path: '/screens/30.jpg' },
	{ name: '31', path: '/screens/31.jpg' },
	{ name: '32', path: '/screens/32.jpg' },
	{ name: '33', path: '/screens/33.jpg' },
	{ name: '34', path: '/screens/34.jpg' },
	{ name: '35', path: '/screens/35.jpg' },
	{ name: '36', path: '/screens/36.jpg' },
	{ name: '37', path: '/screens/37.jpg' },
	{ name: '38', path: '/screens/38.jpg' },
	{ name: '39', path: '/screens/39.jpg' },
	{ name: '40', path: '/screens/40.jpg' },
	{ name: '41', path: '/screens/41.jpg' },
	{ name: '42', path: '/screens/42.jpg' },
	{ name: '43', path: '/screens/43.jpg' },
	{ name: '44', path: '/screens/44.jpg' },
];

export default function Home() {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: 'left' | 'right') => {
		if (scrollRef.current) {
			const { clientWidth } = scrollRef.current;
			scrollRef.current.scrollBy({
				left: direction === 'left' ? -clientWidth : clientWidth,
				behavior: 'smooth',
			});
		}
	};

	return (
		<main className="flex flex-col items-center justify-start min-h-screen w-full bg-white text-black [font-family:var(--font-geist-sans)]">
			{/* Header */}
			<header className="w-full max-w-5xl p-10 text-center border-b border-gray-200">
				<h1 className="text-4xl font-bold tracking-tight">
					Estate - Mobile React Native Application
				</h1>
				<p className="text-gray-500 mt-3 text-xl">
					Screen Gallery and Video Demo
				</p>
			</header>

			{/* Content */}
			<div className="w-full flex flex-col items-center justify-center gap-16 py-12 px-4">
				{/* Gallery */}
				{/* <section className="w-full max-w-5xl text-center">
          <h2 className="text-2xl font-semibold mb-6">Screen Gallery</h2>
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" size="icon" onClick={() => scroll("left")} className="rounded-full shadow-sm">
              <ChevronLeft className="w-5 h-5" />
            </Button>
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
            <Button variant="outline" size="icon" onClick={() => scroll("right")} className="rounded-full shadow-sm">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </section> */}
				{/* <div className='bg-red-300 min-w-[300px] flex justify-center items-center'>
					<Carousel
						opts={{ align: 'start' }}
						className="w-full min-w-[360px] max-w-5xl h-full"
					>
						<CarouselContent className="w-full min-w-[360px] max-w-3xl aspect-auto h-full">
							{screens.map((screen) => (
								<CarouselItem key={screen.name} className="basis-1/1 flex justify-center h-full">
									<div className="p-1">
										<Card className="w-auto h-full bg-zinc-100 p-0 border-0">
											<CardContent className="h-full w-full flex items-center justify-center p-0">
												<Image
													src={`/screens/${screen.name}.jpg`}
													alt={`Screen - ${screen.name}`}
													width={220}
													height={440}
													className="rounded-xl border border-gray-100"
												/>
											</CardContent>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div> */}

				<div className="relative w-full min-w-[360px] max-w-5xl mx-auto">
					{/* overflow-visible tutaj pozwala aby absolutnie pozycjonowane strzałki nie były przycinane */}
					<Carousel
						opts={{ align: 'start' }}
						className="relative overflow-visible"
					>
						{/* CarouselContent jako flex container; gap + padding dają przestrzeń między itemami */}
						<CarouselContent className="flex gap-3 px-3 py-2">
							{screens.map((screen) => (
								// ważne: flex-none powoduje, że elementy mają stałą szerokość (nie 'auto')
								// responsywne width: 1 element na mobile, 2 na sm, 3 na md, 4 na lg (dostosuj)
								<CarouselItem
									key={screen.name}
									className="flex-none w-full sm:w-1/1 sm:aspect-auto px-1 h-full"
								>
									<div className="h-full">
										<Card className="w-full h-full p-0 border-0">
											<CardContent className="h-full w-full flex items-center justify-center p-2">
												{/* wrapper z aspect ratio -> Image z fill będzie skalować się responsywnie */}
												<div className="relative w-full max-w-[360px] aspect-[9/20]">
													<Image
														src={`/screens/${screen.name}.jpg`}
														alt={`Screen - ${screen.name}`}
														fill
														sizes="(max-width: 360px) 100vw, (max-width: 1024px) 50vw, 33vw"
														className="object-cover rounded-xl border border-gray-100"
													/>
												</div>
											</CardContent>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>

						{/* Strzałki absolutne — dzięki parent .relative i .overflow-visible nigdy nie zostaną przycięte */}
						<CarouselPrevious
							className="absolute left-2 top-1/2 -translate-y-1/2 z-50 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow hover:bg-white"
							aria-label="Previous"
						/>
						<CarouselNext
							className="absolute right-2 top-1/2 -translate-y-1/2 z-50 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow hover:bg-white"
							aria-label="Next"
						/>
					</Carousel>
				</div>

				{/* Video */}
				{/* <section className="w-full max-w-5xl text-center">
					<h2 className="text-2xl font-semibold mb-6">Video Demo</h2>
					<div className="aspect-video w-full max-w-3xl mx-auto border border-gray-200 rounded-2xl overflow-hidden shadow-md">
						<video controls className="w-full h-full">
							<source src="/demo.mp4" type="video/mp4" />
							Your browser does not support video playback.
						</video>
					</div>
				</section> */}
			</div>

			{/* Footer */}
			<footer className="w-full max-w-5xl p-6 text-center border-t border-gray-200 text-gray-500 text-sm">
				© {new Date().getFullYear()} Estate - Mobile Booking React Native
				Application | Mariusz Łotocki
			</footer>
		</main>
	);
}
