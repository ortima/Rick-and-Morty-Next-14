export default function Loading() {
	return (
		<div className="sm:gap-15 flex flex-col gap-10 sm:flex sm:flex-col">
			<div className="flex flex-col gap-10 sm:flex sm:flex-row sm:gap-10">
				<aside className="w-full sm:w-[450px]">
					<div className="h-[300px] w-full animate-pulse rounded-md bg-gray-200" />{" "}
				</aside>
				<div className="flex flex-col justify-between text-base text-gray-900 max-sm:gap-5 md:text-[20px]">
					<div className="mb-4 h-14 w-full animate-pulse rounded-lg bg-gray-300 text-4xl md:text-5xl">
						<span className="invisible">text text text text text</span>
					</div>
					<div className="mb-4 flex animate-pulse items-center rounded-lg bg-gray-300"></div>
					<div className="mb-2 h-5 w-1/3 animate-pulse rounded-lg bg-gray-300"></div>
					<div className="mb-2 h-5 w-1/4 animate-pulse rounded-lg bg-gray-300"></div>
					<div className="mb-2 h-5 w-1/2 animate-pulse rounded-lg bg-gray-300"></div>
					<div className="mb-2 h-5 w-1/2 animate-pulse rounded-lg bg-gray-300"></div>
					<div className="mb-2 h-5 w-1/3 animate-pulse rounded-lg bg-gray-300"></div>
				</div>
			</div>
			<div className="flex flex-wrap gap-3 border-t-4 pt-10 text-gray-900">
				{[...Array(20)].map((_, index) => (
					<div
						key={index}
						className="animate-pulse rounded-2xl bg-gray-300 p-2"
					>
						<span className="text-gray-400"></span>
						<span className="text-orange-400"></span>
						<span className="text-gray-400"></span>
					</div>
				))}
			</div>
		</div>
	);
}
