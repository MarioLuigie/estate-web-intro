import Videos from '@/components/content/Videos';
import videos from '@/lib/constants/videos';
import AboutApp from '@/components/content/AboutApp';
import Image from 'next/image';
import { onboardImage, logasImage } from '@/lib/images';
import icons from '@/lib/constants/icons';
import Link from 'next/link';
import { ROUTES } from '@/lib/paths';
import RedirectToAppFlow from '../content/RedirectToAppFlow';

export default function HomePage() {
	return (
		<div className="flex flex-col items-center justify-start mb-7 mt-10 w-full">
			{/* Main grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8 items-start justify-items-center w-full max-w-6xl mb-8">
				{/* Video column */}
				<div className="flex justify-center w-full md:w-auto order-1 md:order-2 mt-0 md:mt-16">
					<Videos src={videos.estate_video} />
				</div>

				{/* Speech column */}
				<AboutApp />
			</div>
			<div>
				<Link href={ROUTES.appFlow}>
					<div className="mb-0 sm:mb-4 shadow-xl rounded-2xl mx-2 sm:mx-4">
						<Image
							src={onboardImage.path}
							alt={onboardImage.name}
							width={1920}
							height={800}
							className="rounded-2xl"
						/>
					</div>
				</Link>

				<RedirectToAppFlow />
			</div>

			<div className="mb-0 md:mb-4 mt-10 md:mt-18 max-w-[700px]">
				<h2 className="text-black text-xl md:text-3xl font-regular text-center mb-2 sm:mb-4">
					Used Technologies
				</h2>
				<Image
					src={logasImage.path}
					alt={logasImage.name}
					width={1920}
					height={800}
					className="rounded-2xl"
				/>
			</div>

			<div className="mb-0 md:mb-4 mt-10 md:mt-18 max-w-[700px]">
				<h2 className="text-black text-xl md:text-3xl font-regular text-center mb-0">
					API Integrations
				</h2>
				<div className="flex gap-4 items-center justify-center w-full">
					<div className="flex-1 max-w-[200px]">
						<Image
							src={icons.paypal}
							alt="PayPal"
							width={600}
							height={600}
							className="w-full h-auto rounded-2xl"
						/>
					</div>
					<div className="flex-1 max-w-[200px]">
						<Image
							src={icons.googleMaps}
							alt="Google Maps"
							width={600}
							height={600}
							className="w-full h-auto rounded-2xl"
						/>
					</div>
				</div>
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
