export default async function Header() {
	return (
		<header className="w-full flex flex-row justify-center items-center border-b border-b-zinc-300 min-h-24">
			<div className="w-full max-w-7xl flex items-center justify-between px-10 py-4">
				<div>
					<h1 className="text-4xl font-bold">Estate</h1>
					<p className="text-xl font-normal text-zinc-400">
						Presentation of the Real Estate Mobile App
					</p>
				</div>
				<div>
					<p className="text-xl font-normal text-zinc-800">
						React Native + Expo
					</p>
					<p className="text-xl font-normal text-zinc-800">
						Appwrite BaaS
					</p>
				</div>
			</div>
		</header>
	);
}
