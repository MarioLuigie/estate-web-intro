import icons from '@/lib/constants/icons';
import Image from 'next/image';
import CustomAccordion from '@/components/shared/CustomAccordion';

export default function AppFlow() {
	return (
		<div className="w-full max-w-5xl mx-auto flex flex-col items-center pt-16 px-6">
			<p className="text-center font-semibold">App Flow | mind map in development.</p>
			<p className="text-center px-6">
				Represents the application architecture, component interactions, and
				data flow.
			</p>
			<div className='mt-8'>
				<Image src={icons.mind_map} alt="Icon" width={100} height={100} />
			</div>
			<div className='w-full'>
				<CustomAccordion />
			</div>
		</div>
	);
}
