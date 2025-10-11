'use client';

import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Menu() {
	const router = useRouter();
	const pathname = usePathname(); // hook do aktualnej ścieżki

	const menuItems = [
		{ label: 'Home', path: '/' },
		{ label: 'Screens', path: '/screens' },
		{ label: 'System Architecture', path: '/app-flow' },
	];

	return (
		<div className="flex flex-col items-center xxs:flex-row xxs:gap-3 xss:items-end">
			{menuItems.map((item) => {
				const isActive = pathname === item.path;
				return (
					<motion.div
						key={item.path}
						whileHover={{ scale: 1.15 }} // efekt powiększenia
						whileTap={{ scale: 0.9 }} // kliknięcie (opcjonalnie)
						transition={{ type: 'spring', stiffness: 300 }}
					>
						<Button
							className={`cursor-pointer text-md hover:text-zinc-500 px-2 ${
								isActive ? 'bg-white text-black font-bold' : ''
							}`}
							variant="default"
							onClick={() => router.push(item.path)}
						>
							{item.label}
						</Button>
					</motion.div>
				);
			})}
		</div>
	);
}
