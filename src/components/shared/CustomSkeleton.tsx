import { Skeleton } from "@/components/ui/skeleton";

export default function CustomSkeleton() {
	return (
		<div className="flex flex-col justify-center items-center h-full w-full">
			<Skeleton className="h-[125px] w-[75%] rounded-xl bg-myZinc2" />
			<div className="space-y-2 mt-2 w-[75%]">
				<Skeleton className="h-4 w-full bg-myZinc2" />
				<Skeleton className="h-4 w-[75%] bg-myZinc2" />
			</div>
		</div>
	);
}
