'use client';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';

type ImageAccordionProps = {
	title: string;
	imageUrl: string;
}[];

export default function ImageAccordion({
	data,
}: {
	data: ImageAccordionProps;
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
					<AccordionTrigger className="font-semibold text-md bg-myZinc p-4 cursor-pointer">
						{i.title}
					</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-4 text-balance items-center">
						{i.imageUrl ? (
							<Image
								src={i.imageUrl}
								alt="Image"
								width={1920}
								height={1200}
								className="w-xl h-auto"
							/>
						) : (
							<p>Content in development</p>
						)}
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
