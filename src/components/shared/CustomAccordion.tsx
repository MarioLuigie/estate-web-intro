'use client'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';

export default function CustomAccordion() {
  const [isAllClosed, setIsAllClosed] = useState<boolean>(false);
  
	return (
		<Accordion
			type="multiple"
			className="w-full"
			defaultValue={['item-1', 'item-2', 'item-3', 'item-4']}
		>
			<AccordionItem value="item-1">
				<AccordionTrigger className="font-semibold text-md py-2">
					C1 - System Context Diagram
				</AccordionTrigger>
				<AccordionContent className="flex flex-col gap-4 text-balance">
					<p>Test</p>
					<p>Test</p>
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item-2">
				<AccordionTrigger className="font-semibold text-md py-2">
					C2 - High Level Container Diagram
				</AccordionTrigger>
				<AccordionContent className="flex flex-col gap-4 text-balance">
					<p>Test</p>
					<p>Test</p>
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item-3">
				<AccordionTrigger className="font-semibold text-md py-2">
					C3 - Component Diagram
				</AccordionTrigger>
				<AccordionContent className="flex flex-col gap-4 text-balance">
					<p>Test</p>
					<p>Test</p>
				</AccordionContent>
			</AccordionItem>

			<AccordionItem value="item-4">
				<AccordionTrigger className="font-semibold text-md py-2">
					C4 - Code Diagram
				</AccordionTrigger>
				<AccordionContent className="flex flex-col gap-4 text-balance">
					<p>Test</p>
					<p>Test</p>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
