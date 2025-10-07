'use client';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import CanvaEmbededItem from './CanvaEmbededItem';

type CanvaAccordionProps = {
	title: string;
	activeUrl: string;
}[];

export default function CanvaAccordion({
	data,
}: {
	data: CanvaAccordionProps;
}) {
	const arr = data.map((i) => i.title);
	return (
		<Accordion type="multiple" className="w-full" defaultValue={arr}>
			{data.map((i) => (
				<AccordionItem
					value={i.title}
					key={i.title}
					className="border-b-myZinc2"
				>
					<AccordionTrigger className="font-semibold xs:text-sm sm:text-base py-3 bg-myZinc px-4 text-myZinc3">
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
