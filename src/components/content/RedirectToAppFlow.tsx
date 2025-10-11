'use client';

import { ROUTES } from '@/lib/paths';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function RedirectToAppFlow() {
	return (
		<Link href={ROUTES.appFlow}>
			<motion.div
				className="mt-4 md:mt-8 w-full text-center text-[14px] sm:text-lg text-myZinc3 cursor-pointer"
				animate={{ scale: [1, 1.1, 1] }}
				transition={{
					duration: 1.4,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			>
				<p>More about used System Architecture</p>
				<p>
					{'< '}click here!{' >'}
				</p>
			</motion.div>
		</Link>
	);
}
