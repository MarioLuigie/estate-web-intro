export default function Main({ children }: { children: React.ReactNode }) {
	return (
		<main className="mx-auto w-full grow bg-background max-w-6xl px-4">
			{children}
		</main>
	)
}