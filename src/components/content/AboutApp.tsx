'use client';
import { motion, Variants } from 'framer-motion';
import SpeechBubble from '@/components/shared/SpeechBubble';
import Link from 'next/link';
import { images } from '@/lib/constants/images/index';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.2, // kolejne dymki pojawiają się co 0.15s
		},
	},
};

const bubbleVariants: Variants = {
	hidden: { opacity: 0, y: 20, scale: 0.7 },
	show: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: 'spring' as const, // <-- tutaj ważne: 'as const'
			stiffness: 300,
			damping: 20,
		},
	},
};

export default function AboutApp() {
	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="show"
			className="flex flex-col items-start pb-6 px-6 md:px-3 md:items-end gap-5 w-full md:w-full order-2 md:order-1"
		>
			<div className="w-full flex items-center justify-end gap-2 mb-4 text-center md:text-right">
				<div>
					<p className="text-black font-normal text-center md:text-right text-2xl">
						How I built It?
					</p>
					<Link href={'/app-flow'} className="text-zinc-600">
						System Architecture and Technical Highlights.
					</Link>
				</div>
				<Avatar className="size-10">
					<AvatarImage src={images.avatar} />
					<AvatarFallback>M</AvatarFallback>
				</Avatar>
				{/* <p className="text-myZinc3 text-[15px]">
          A modular, type-safe architecture built with Appwrite, DI Graph, and secure PayPal integration through serverless Functions.
        </p> */}
			</div>

			{[
				{
					text: "Hi! 🖐️ It's me! I want to share how I built my Estate app.",
					dir: 'left',
					self: 'start',
				},
				{
					text: 'I designed with a modular C4-inspired architecture - all business logic is injected via a custom DI Graph instead of direct imports. Zero tight coupling.',
					dir: 'right',
					self: 'end',
				},
				{
					text: 'Actions follow Repository Pattern - abstracting Appwrite SDK into reusable services. UI never touches backend logic directly.',
					dir: 'left',
					self: 'start',
				},
				{
					text: 'Sensitive logic moved from client to Appwrite Functions - PayPal transactions and data validation now handled securely on server side.',
					dir: 'right',
					self: 'end',
				},
				{
					text: 'Optimized Appwrite queries with indexed filters and lazy fetching via Zustand state. Zero overfetching.',
					dir: 'left',
					self: 'start',
				},
				{
					text: 'Implemented custom FetchLogger middleware - tracing requests, measuring latency and handling retries for unstable connections.',
					dir: 'right',
					self: 'end',
				},
				{
					text: 'Utilities, validators and constants organized as Cross-Cutting Layer - pure functions, framework-agnostic and fully testable.',
					dir: 'right',
					self: 'start',
				},
			].map((bubble, index) => (
				<motion.div
					key={index}
					variants={bubbleVariants}
					className={`w-full flex ${
						bubble.self === 'start' ? 'justify-start' : 'justify-end'
					}`}
				>
					<SpeechBubble
						text={bubble.text}
						direction={bubble.dir as 'left' | 'right'}
						className="text-[15px]"
					/>
				</motion.div>
			))}
		</motion.div>
	);
}

// import SpeechBubble from '@/components/shared/SpeechBubble';

// export default function AboutApp() {
// 	return (
// 		<div className="flex flex-col items-start pb-6 px-3 md:items-end gap-5 w-full md:w-full order-2 md:order-1">
// 			<div className='w-full'>
// 				<p className="text-zinc-600 font-normal text-left text-lg">
// 					System Architecture & Technical Highlights Security.
// 				</p>
// 			</div>
// 			<SpeechBubble
// 				text="Hi! 🖐️ It's me! I want to share how I created my app."
// 				className="text-[15px]"
// 			/>

// 			<SpeechBubble
// 				text="I designed with a modular C4-inspired architecture — all business logic is injected via a custom DI Graph instead of direct imports. Zero tight coupling."
// 				direction="right"
// 				className="text-[15px] self-start"
// 			/>

// 			<SpeechBubble
// 				text="Actions follow Repository Pattern – abstracting Appwrite SDK into reusable services. UI never touches backend logic directly."
// 				direction="left"
// 				className="text-[15px] self-end"
// 			/>

// 			<SpeechBubble
// 				text="Sensitive logic moved from client to Appwrite Functions – PayPal transactions and data validation now handled securely on server side."
// 				direction="right"
// 				className="text-[15px] self-start"
// 			/>

// 			<SpeechBubble
// 				text="Optimized Appwrite queries with indexed filters and lazy fetching via Zustand state. Zero overfetching."
// 				direction="left"
// 				className="text-[15px] self-end"
// 			/>

// 			<SpeechBubble
// 				text="Implemented custom FetchLogger middleware – tracing requests, measuring latency and handling retries for unstable connections."
// 				direction="right"
// 				className="text-[15px] self-start"
// 			/>

// 			<SpeechBubble
// 				text="Utilities, validators and constants organized as Cross-Cutting Layer – pure functions, framework-agnostic and fully testable."
// 				direction="right"
// 				className="text-[15px] self-end"
// 			/>
// 		</div>
// 	);
// }
