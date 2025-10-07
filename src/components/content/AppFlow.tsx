import CanvaAccordion from '@/components/shared/CanvaAccordion';
import { canvaDiagrams } from '@/lib/appFlow';
import icons from '@/lib/constants/icons';
import Image from 'next/image';

export default function AppFlow() {
	return (
		<div className="w-full max-w-5xl mx-auto flex flex-col items-center pt-8 px-6">
			<div className="flex gap-2 items-center mb-4">
				<p className="text-center font-semibold">
					System Architecture |{' '}
					<span className="font-bold text-xl">C4 Model</span>.
				</p>
				<Image src={icons.mind_map} alt="Icon" width={50} height={50} />
			</div>
			<p className="text-center px-6 text-myZinc3">
				Illustrates the application architecture, component interactions,
				security layers, and data flow.
			</p>
			<div className="w-full mt-6">
				<CanvaAccordion data={canvaDiagrams} />
			</div>
		</div>
	);
}
