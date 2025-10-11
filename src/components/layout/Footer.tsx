'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="relative w-full mt-2">
			{/* gradientowa linia */}
			<div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-myZinc2 to-transparent opacity-60" />

			{/* główny kontener footera */}
			<div className="relative z-10 backdrop-blur-md bg-background/80 border-t border-myZinc2/50">
				<div className="max-w-6xl mx-auto px-4 md:px-10 py-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
					{/* Sekcja 1 — opis projektu */}
					<div>
						<h3 className="text-lg md:text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
							Real Estate Mobile App
						</h3>
						<p className="text-sm text-muted-foreground leading-relaxed">
							An interactive documentation and concept presentation of a
							real estate mobile platform.
						</p>
					</div>

					<div>
						{/* Sekcja 2 — linki społecznościowe */}
						<div className="flex flex-col items-center md:items-end mb-3">
							<h3 className="text-lg font-semibold mb-0">Connect</h3>
							<div className="flex gap-6">
								<Link
									href="https://github.com/MarioLuigie"
									target="_blank"
									className="group relative flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									<div className="p-2 rounded-full bg-myZinc/40 group-hover:bg-myZinc/70 transition-all">
										<Github className="w-5 h-5" />
									</div>
									<span className="hidden sm:inline-block">
										GitHub
									</span>
								</Link>
								<Link
									href="https://www.linkedin.com/in/mariusz-%C5%82otocki-509791257/"
									target="_blank"
									className="group relative flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									<div className="p-2 rounded-full bg-myZinc/40 group-hover:bg-myZinc/70 transition-all">
										<Linkedin className="w-5 h-5" />
									</div>
									<span className="hidden sm:inline-block">
										LinkedIn
									</span>
								</Link>
							</div>
						</div>

						{/* Sekcja 3 — kontakt */}
						<div className="flex flex-col items-center md:items-end">
							<h3 className="text-lg font-semibold mb-0">Contact</h3>
							<a
								href="mailto:mk.lotocki@gmail.com"
								className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								<div className="p-2 rounded-full bg-myZinc/40 group-hover:bg-myZinc/70 transition-all">
									<Mail className="w-5 h-5" />
								</div>
								mk.lotocki@gmail.com
							</a>
						</div>
					</div>
				</div>

				{/* dolna linia copyright */}
				<div className="border-t border-myZinc2/40 mt-2 py-4 text-center text-xs text-muted-foreground">
					© {new Date().getFullYear()} Mariusz Łotocki | All rights
					reserved.
				</div>
			</div>
		</footer>
	);
}

// 'use client';

// import { Github, Linkedin, Mail } from 'lucide-react';
// import Link from 'next/link';

// export default function Footer() {
// 	return (
// 		<footer className="w-full border-t border-myZinc2 bg-background text-foreground py-10 px-6 mt-10">
// 			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
// 				{/* Sekcja 1 — opis */}
// 				<div>
// 					<h3 className="text-lg font-semibold mb-2">
// 						Real Estate Mobile App
// 					</h3>
// 					<p className="text-sm text-muted-foreground">
// 						Presentation and documentation of a modern real estate mobile
// 						application — architecture, flow, and UI concepts.
// 					</p>
// 				</div>

// 				{/* Sekcja 2 — linki społecznościowe */}
// 				<div>
// 					<h3 className="text-lg font-semibold mb-2">Connect</h3>
// 					<div className="flex justify-center md:justify-start gap-4 mt-2">
// 						<Link
// 							href="https://github.com/mariuszlotocki"
// 							target="_blank"
// 							className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
// 						>
// 							<Github className="w-4 h-4" />
// 							GitHub
// 						</Link>
// 						<Link
// 							href="https://linkedin.com/in/mariuszlotocki"
// 							target="_blank"
// 							className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
// 						>
// 							<Linkedin className="w-4 h-4" />
// 							LinkedIn
// 						</Link>
// 					</div>
// 				</div>

// 				{/* Sekcja 3 — kontakt */}
// 				<div>
// 					<h3 className="text-lg font-semibold mb-2">Contact</h3>
// 					<p className="text-sm text-muted-foreground flex justify-center md:justify-start items-center gap-2">
// 						<Mail className="w-4 h-4" />
// 						<a
// 							href="mailto:mk.lotocki@gmail.com"
// 							className="hover:text-foreground transition-colors"
// 						>
// 							mk.lotocki@gmail.com
// 						</a>
// 					</p>
// 				</div>
// 			</div>

// 			{/* Linia i copyright */}
// 			<div className="border-t border-myZinc2 mt-8 pt-4 text-center text-xs text-muted-foreground">
// 				© {new Date().getFullYear()} Mariusz Łotocki — All rights reserved.
// 			</div>
// 		</footer>
// 	);
// }

// export default function Footer() {
// 	return (
// 		<footer className="w-full p-6 py-4 text-center border-t border-gray-200 text-gray-500 text-sm">
// 			{new Date().getFullYear()} | Presentation of the Real Estate Mobile App
// 			<p>Creator and developer</p>
// 			<p>Mariusz Łotocki | mk.lotocki@gmail.com</p>
// 		</footer>
// 	);
// }
