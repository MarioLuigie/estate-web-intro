import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { screens } from '@/lib/images';

export default function HomePage() {
	return (
		<div className='flex flex-col items-center'>
			<div className="max-w-7xl flex flex-col text-black [font-family:var(--font-geist-sans)]">
				<p className="text-zinc-700 mt-8 font-normal text-xl align-left">
					Screen Gallery
				</p>
				{/* Content */}
				<div className="w-full h-full flex flex-col items-center justify-center gap-16 py-3 px-4">
					{/* Screens */}
					<div className="relative w-full min-w-[360px] max-w-5xl mx-auto rounded-2xl overflow-hidden">
						<Carousel
							opts={{ align: 'start' }}
							className="relative overflow-visible"
						>
							<CarouselContent className="flex gap-0 px-3 py-2 -ml-0 mt-0 grow">
								{screens.map((screen) => (
									<CarouselItem
										key={screen.name}
										className="flex-none w-full sm:w-1/1 sm:aspect-auto px-1 h-full p-0"
									>
										<div className="h-full">
											<Card className="w-full h-full p-0 rounded-none border-0 py-0 shadow-none">
												<CardContent className="h-full w-full flex items-center justify-center p-2 border-0">
													<div className="relative w-full max-w-[350px] aspect-[9/20]">
														<Image
															src={`/screens/${screen.name}.jpg`}
															alt={`Screen - ${screen.name}`}
															fill
															sizes="(max-width: 360px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
								className="absolute left-6 top-1/2 -translate-y-1/2 z-50 inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-100/90 shadow-lg hover:bg-zinc-200 border-1 border-zinc-200 cursor-pointer"
								aria-label="Previous"
							/>
							<CarouselNext
								className="absolute right-6 top-1/2 -translate-y-1/2 z-50 inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-100/90 shadow-lg hover:bg-zinc-200 border-1 border-zinc-200 cursor-pointer"
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
			</div>
		</div>
	);
}
