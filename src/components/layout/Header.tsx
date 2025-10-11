'use client';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Logo from '@/components/shared/Logo';
import { ROUTES } from '@/lib/paths';

export default function Header({ classes }: { classes?: string }) {
	const router = useRouter();
	const pathname = usePathname(); // hook do aktualnej ścieżki

	const menuItems = [
		{ label: 'Home', path: '/' },
		{ label: 'Screens', path: '/screens' },
		{ label: 'System Architecture', path: '/app-flow' },
	];

	return (
		<header
			className={cn(
				'w-full border-b border-b-zinc-300 min-h-16 flex justify-center py-2',
				classes
			)}
		>
			<div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-end md:justify-between px-4 md:px-10 gap-4">
				<div className="flex items-center justify-start gap-4 w-full bg-red-300">
					<Logo isAppName={false} />
					<Link href={ROUTES.home}>
						<div>
							<h1 className="text-left text-3xl lg:text-3xl font-bold">
								Estate
							</h1>
							<p className="text-left md:text-sm text-md font-normal">
								Presentation{' '}
								<span className="hidden sm:inline">
									of the Real Estate Mobile App
								</span>
								<span className="sm:hidden"> of App</span>
							</p>
						</div>
					</Link>
				</div>

				<div className="flex flex-col xxs:flex-row xxs:gap-2">
					{menuItems.map((item) => {
						const isActive = pathname === item.path;
						return (
							<Button
								key={item.path}
								className={`cursor-pointer text-md hover:text-zinc-500 px-2 ${
									isActive ? 'bg-white text-black font-bold' : ''
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
