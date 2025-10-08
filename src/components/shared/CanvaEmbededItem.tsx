'use client';

import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function CanvaEmbededItem({ src }: { src: string }) {
	const [loaded, setLoaded] = useState(false);
	return (
		<div
			style={{
				position: 'relative',
				width: '100%',
				paddingTop: '0',
				marginTop: '0',
				marginBottom: '0',
				overflow: 'hidden',
				borderRadius: '8px',
				willChange: 'transform',
			}}
			className="h-[210px] xs:h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
		>
			{!loaded && (
				<div className="flex flex-col justify-center items-center h-full w-full">
					<p className="text-xl text-myZinc2 mb-4">Loading...</p>
					<div className="flex flex-wrap justify-center gap-2">
						{/* row 1 - 3 rects */}
						{[1, 2, 3].map((_, idx) => (
							<div
								key={`row1-${idx}`}
								className="flex flex-col items-center w-[30%] min-w-[100px] xs:w-[28%] sm:w-[25%]"
							>
								<Skeleton className="h-[25%] sm:h-[30%] min-h-[20px] max-h-[70px] w-full rounded-xl bg-myZinc2" />
							</div>
						))}

						{/* row 2 - 1 rec in the middle */}
						<div className="flex justify-center w-full mt-4">
							<div className="flex flex-col items-center w-[30%] min-w-[100px]">
								<Skeleton className="h-[25%] min-h-[20px] max-h-[70px] w-full rounded-xl bg-myZinc2" />
							</div>
						</div>

						{/* row 3 - 3 rects */}
						{[1, 2, 3].map((_, idx) => (
							<div
								key={`row3-${idx}`}
								className="flex flex-col items-center w-[30%] min-w-[100px] xs:w-[28%] sm:w-[25%] mt-4"
							>
								<Skeleton className="h-[25%] min-h-[20px] max-h-[70px] w-full rounded-xl bg-myZinc2" />
							</div>
						))}
					</div>
				</div>
			)}
			<iframe
				loading="lazy"
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					top: 0,
					left: 0,
					border: 'none',
					padding: 0,
					margin: 0,
				}}
				src={src}
				allowFullScreen
				onLoad={() => setLoaded(true)}
			/>
		</div>
	);
}
