'use client';
import { Volume2 } from 'lucide-react';
import { SquarePlay } from 'lucide-react';

export default function Videos({ src }: { src: string }) {
	return (
		<section className="max-w-[360px]">
			{/* Title */}
			<div className="flex flex-row items-start justify-center px-10 gap-2">
				<p className="text-zinc-600 font-normal text-center text-lg">
					Video Preview
				</p>
				<Volume2 color="#525252" />
				<SquarePlay color="#525252" />
			</div>
			{/* Video */}
			<div className="w-full my-6 aspect-[9/16] mx-auto border border-gray-200 rounded-2xl overflow-hidden shadow-md">
				<video
					controls
					controlsList="nodownload"
					onContextMenu={(e) => e.preventDefault()}
					className="w-full h-full object-contain"
				>
					<source src={src} type="video/mp4" />
					Your browser does not support video playback.
				</video>
			</div>
		</section>
	);
}
