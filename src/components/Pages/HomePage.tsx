import Videos from '@/components/content/Videos';
import videos from '@/lib/constants/videos';
import AboutApp from '@/components/content/AboutApp';
import Image from 'next/image';
import { onboardImage } from '@/lib/images';

export default function HomePage() {
	return (
		<div className="flex flex-col items-center justify-start my-7 w-full">
			{/* Main grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8 items-start justify-items-center w-full max-w-6xl mb-8">
				{/* Video column */}
				<div className="flex justify-center w-full md:w-auto order-1 md:order-2">
					<Videos src={videos.estate_video} />
				</div>

				{/* Speech column */}
				<AboutApp />
			</div>
			<div className="mb-6">
				<Image
					src={onboardImage.path}
					alt={onboardImage.name}
					width={1920}
					height={800}
					className="rounded-2xl"
				/>
			</div>
		</div>
	);
}

// import Videos from '@/components/content/Videos';
// import videos from '@/lib/constants/videos';
// import SpeechBubble from '@/components/shared/SpeechBubble'; // zakładam, że masz już ten komponent

// export default function HomePage() {
// 	return (
// 		<div className="flex items-start justify-center pt-4">
// 			{/* Main grid */}
// 			<div
// 				className="
//           grid
//           grid-cols-1 md:grid-cols-2
//           gap-8
//           items-center
//           justify-items-center
//           w-full max-w-5xl
//         "
// 			>
// 				{/* Speech column */}
// 				<div className="flex flex-col items-start md:items-end gap-4 w-full md:w-auto">
// 					<SpeechBubble text="Cześć! 👋 Jestem po lewej stronie." />
// 					<SpeechBubble text="Kiedy ekran jest wąski, będę pod wideo!" direction="right" />
// 				</div>

// 				{/* Video column */}
// 				<div className="flex justify-center w-full md:w-auto">
// 					<Videos src={videos.estate_video} />
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// import Videos from '@/components/content/Videos';
// import videos from '@/lib/constants/videos';

// export default function HomePage() {
// 	return (
// 		<div className='bg-red-300'>
//       <div></div> {/* Kolumna z dymkami po lewej stronie */}
// 			<Videos src={videos.estate_video} />{/* Kolumna z Video po prawej stronie */}
// 		</div>
// 	);
// }
