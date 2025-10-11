'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Logo from '@/components/shared/Logo';
import { ROUTES } from '@/lib/paths';
import Menu from '@/components/content/Menu';

export default function Header({ classes }: { classes?: string }) {
	return (
		<header
			className={cn(
				'w-full border-b border-b-zinc-300 min-h-16 flex justify-center py-2',
				classes
			)}
		>
			<div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-end md:justify-between px-4 md:px-10 gap-4">
				<div className="flex items-center justify-start gap-4 w-full">
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
				<Menu />
			</div>
		</header>
	);
}
