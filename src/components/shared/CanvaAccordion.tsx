'use client';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import CanvaEmbededItem from './CanvaEmbededItem';
import { canvaDiagrams } from '@/lib/appFlow';

export default function CanvaAccordion() {
	const arr = canvaDiagrams.map((i) => i.title);
	return (
		<Accordion type="multiple" className="w-full" defaultValue={arr}>
			{canvaDiagrams.map((i) => (
				<AccordionItem value={i.title} key={i.title} className='border-b-myZinc2'>
					<AccordionTrigger className="font-semibold xs:text-sm sm:text-base py-3 bg-myZinc px-4">
						{i.title}
					</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-4 items-center">
						<CanvaEmbededItem src={i.activeUrl} />
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
