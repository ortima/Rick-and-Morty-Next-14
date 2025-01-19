export const getUniqueRandomIds = (size: number, maxId: number): number[] => {
	const res = new Set<number>();

	while (res.size < size) {
		const randomId = Math.floor(Math.random() * maxId) + 1;
		res.add(randomId);
	}

	return Array.from(res);
};
