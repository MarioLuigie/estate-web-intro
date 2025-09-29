'use client';
// components
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
// import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';

export default function CustomCarousel() {
	return (
		<Carousel
			className="w-full max-w-4xl"
			opts={{
				loop: true,
			}}
			plugins={[
				Autoplay({
					delay: 6000,
					stopOnInteraction: true,
					stopOnMouseEnter: true,
				}),
			]}
		>
			<CarouselContent>
				{[1, 2, 3, 4, 5].map((n) => (
					<CarouselItem key={n}>
						<Card className="min-w-[220px] flex-shrink-0 shadow-md rounded-2xl border border-gray-200">
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
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
