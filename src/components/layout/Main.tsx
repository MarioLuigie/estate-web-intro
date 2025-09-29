export default function Main({ children }: { children: React.ReactNode }) {
	return (
		<main className="mx-auto w-full grow bg-zinc-100">
			{children}
		</main>
	)
}