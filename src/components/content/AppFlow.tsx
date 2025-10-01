import icons from '@/lib/constants/icons';
import Image from 'next/image';

export default function AppFlow() {
	return (
		<div className="w-full flex flex-col items-center pt-16">
			<p className="text-center font-semibold">App Flow | mind map in development.</p>
			<p className="text-center px-6">
				Represents the application architecture, component interactions, and
				data flow.
			</p>
			<div className='mt-8'>
				<Image src={icons.mind_map} alt="Icon" width={100} height={100} />
			</div>
		</div>
	);
}
