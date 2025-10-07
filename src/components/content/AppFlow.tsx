// import icons from '@/lib/constants/icons';
// import Image from 'next/image';
// import ImageAccordion from '@/components/shared/ImageAccordion';
import CanvaAccordion from '@/components/shared/CanvaAccordion';
// import { diagrams } from '@/lib/appFlow';
import { canvaDiagrams } from '@/lib/appFlow';

export default function AppFlow() {
	return (
		<div className="w-full max-w-5xl mx-auto flex flex-col items-center pt-8 px-6">
			<p className="text-center font-regular">App Flow | <span className='font-bold text-xl'>C4 MODEL</span>.</p>
			<p className="text-center px-6 text-myZinc3">
				Represents the application architecture, component interactions, and
				data flow.
			</p>
			{/* <div className='mt-8'>
				<Image src={icons.mind_map} alt="Icon" width={100} height={100} />
			</div> */}
			<div className='w-full mt-10'>
				{/* <ImageAccordion data={diagrams} /> */}
				<CanvaAccordion />
			</div>
		</div>
	);
}
