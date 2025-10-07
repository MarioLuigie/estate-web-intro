import { images } from "@/lib/constants/images";
import { canvaUrls } from "@/lib/paths";

export const diagrams = [
	{
		title: 'C1 - System Context Diagram',
		imageUrl: images.c1_model,
	},
  	{
		title: 'C2 - High Level Container Diagram',
		imageUrl: images.c2_model,
	},
  	{
		title: 'C3 - Component Diagram',
		imageUrl: images.c3_model,
	},
  	{
		title: 'C4 - Code Diagram',
		imageUrl: '',
	},
];

export const canvaDiagrams = [
	{
		title: 'C1 - System Context Diagram',
		activeUrl: canvaUrls.c1_url,
	},
  	{
		title: 'C2 - High Level Container Diagram',
		activeUrl: canvaUrls.c2_url,
	},
  	{
		title: 'C3 - Component Diagram',
		activeUrl: canvaUrls.c3_url,
	},
  	{
		title: 'C4 - Code Diagram',
		activeUrl: canvaUrls.c4_url,
	},
];
