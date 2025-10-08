import Videos from '@/components/content/Videos';
import videos from '@/lib/constants/videos';
import SpeechBubble from '@/components/shared/SpeechBubble';

export default function HomePage() {
	return (
		<div className="flex items-start justify-center my-7 w-full">
			{/* Main grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8 items-start justify-items-center w-full max-w-6xl">
				{/* Video column */}
				<div className="flex justify-center w-full md:w-auto order-1 md:order-2">
					<Videos src={videos.estate_video} />
				</div>

				{/* Speech column */}
				<div className="flex flex-col items-start pb-6 px-3 md:items-end gap-5 w-full md:w-full order-2 md:order-1">
					<div>
						<p className="text-zinc-600 font-normal text-left text-lg">
							System Architecture & Technical Highlights Security.
						</p>
					</div>
					<SpeechBubble
						text="Hi! 👋 I'm Mariusz and that`s my app."
						className="text-[15px]"
					/>

					<SpeechBubble
						text="App designed with a modular C4-inspired architecture — all business logic is injected via a custom DI Graph instead of direct imports. Zero tight coupling."
						direction="right"
						className="text-[15px] self-start"
					/>

					<SpeechBubble
						text="Actions follow Repository Pattern – abstracting Appwrite SDK into reusable services. UI never touches backend logic directly."
						direction="left"
						className="text-[15px] self-end"
					/>

					<SpeechBubble
						text="Sensitive logic moved from client to Appwrite Functions – PayPal transactions and data validation now handled securely on server side."
						direction="right"
						className="text-[15px] self-start"
					/>

					<SpeechBubble
						text="Optimized Appwrite queries with indexed filters and lazy fetching via Zustand state. Zero overfetching."
						direction="left"
						className="text-[15px] self-end"
					/>

					<SpeechBubble
						text="Implemented custom FetchLogger middleware – tracing requests, measuring latency and handling retries for unstable connections."
						direction="right"
						className="text-[15px] self-start"
					/>

					<SpeechBubble
						text="Utilities, validators and constants organized as Cross-Cutting Layer – pure functions, framework-agnostic and fully testable."
						direction="right"
						className="text-[15px] self-end"
					/>
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
