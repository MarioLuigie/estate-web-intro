import CanvaAccordion from '@/components/shared/CanvaAccordion';
import { canvaDiagrams } from '@/lib/appFlow';

export default function AppFlow() {
	return (
		<div className="w-full max-w-5xl mx-auto flex flex-col items-center pt-8 px-6">
			<p className="text-center font-semibold">System Architecture | <span className='font-bold text-xl'>C4 Model</span>.</p>
			<p className="text-center px-6 text-myZinc3">
				Illustrates the application architecture, component interactions, security layers, and data flow.
			</p>
			<div className='w-full mt-10'>
				<CanvaAccordion data={canvaDiagrams}/>
			</div>
		</div>
	);
}
