export default async function Header() {
	return (
		<header className="w-full border-b border-b-zinc-300 min-h-18 flex justify-center">
			<div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-between px-4 md:px-10 py-4 gap-4">
				<div>
					<h1 className="text-left text-2xl lg:text-3xl font-bold">
						Estate
					</h1>
					<p className="md:text-md text-xl font-normal text-zinc-400">
						Presentation of the Real Estate Mobile App
					</p>
				</div>
				<div className="text-center md:text-right">
					<p className="text-md lg:text-xl font-normal text-zinc-800">
						React Native + Expo
					</p>
					<p className="text-md lg:text-xl font-normal text-zinc-800">
						Appwrite BaaS
					</p>
				</div>
			</div>
		</header>
	);
}
