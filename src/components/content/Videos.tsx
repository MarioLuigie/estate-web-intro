'use client';
import { Volume2 } from 'lucide-react';
import { SquarePlay } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function Videos({ src }: { src: string }) {
	const videosVariants: Variants = {
		hidden: { opacity: 0, y: 20, scale: 0.7 },
		show: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: 'spring' as const,
				stiffness: 300,
				damping: 20,
			},
		},
	};

	return (
		<section className="max-w-[360px]">
			{/* Title */}
			<div className="flex flex-row items-start justify-center px-10 gap-2">
				<p className="text-black font-normal text-center text-xl">
					Video Presentation
				</p>
				<Volume2 color="#525252" />
				<SquarePlay color="#525252" />
			</div>
			{/* Video */}
			<motion.div
				variants={videosVariants}
				initial="hidden"
				animate="show"
				className="w-full mb-6 mt-3 aspect-[9/16] mx-auto border border-gray-200 rounded-2xl overflow-hidden shadow-xl"
			>
				<video
					controls
					controlsList="nodownload"
					onContextMenu={(e) => e.preventDefault()}
					className="w-full h-full object-contain"
				>
					<source src={src} type="video/mp4" />
					Your browser does not support video playback.
				</video>
			</motion.div>
				{/* <div className="w-full my-6 aspect-[9/16] mx-auto border border-gray-200 rounded-2xl overflow-hidden shadow-xl">
					<video
						controls
						controlsList="nodownload"
						onContextMenu={(e) => e.preventDefault()}
						className="w-full h-full object-contain"
					>
						<source src={src} type="video/mp4" />
						Your browser does not support video playback.
					</video>
				</div> */}
		</section>
	);
}
