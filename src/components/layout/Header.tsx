'use client';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
	const router = useRouter();
	const pathname = usePathname(); // hook do aktualnej ścieżki

	const menuItems = [
		{ label: 'Home', path: '/' },
		{ label: 'Screens', path: '/screens' },
		{ label: 'App Flow', path: '/app-flow' },
	];

	return (
		<header className="w-full border-b border-b-zinc-300 min-h-16 flex justify-center py-2">
			<div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-end justify-between px-4 md:px-10 gap-4">
				<Link href={'/'}>
					<div>
						<h1 className="text-center md:text-left text-2xl lg:text-3xl font-bold">
							Estate
						</h1>
						<p className="text-center md:text-left md:text-sm text-md font-normal text-zinc-400">
							Presentation of the Real Estate Mobile App
						</p>
					</div>
				</Link>

				<div className="flex gap-2">
					{menuItems.map((item) => {
						const isActive = pathname === item.path;
						return (
							<Button
								key={item.path}
								className={`cursor-pointer text-md hover:text-zinc-500 px-2 ${
									isActive ? 'bg-white text-zinc-400' : ''
								}`}
								variant="default"
								onClick={() => router.push(item.path)}
							>
								{item.label}
							</Button>
						);
					})}
				</div>
			</div>
		</header>
	);
}
