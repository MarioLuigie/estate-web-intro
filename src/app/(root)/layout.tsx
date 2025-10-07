import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col min-h-screen relative">
			<Header classes='sticky top-0 left-0 z-50 bg-background'/>
			<Main>{children}</Main>
			<Footer />
		</div>
	);
}
