export function cache<D = any>(name: string, exp: number) {
	const storeId = `cache:${encodeURIComponent(name)}`;

	const setData = (data: D) => {
		localStorage.setItem(
			storeId,
			JSON.stringify({
				exp_time: Date.now() + exp,
				data
			})
		);
	};

	return async (callback: () => D | Promise<D>): Promise<D> => {
		const metadata = localStorage.getItem(storeId);

		if (metadata) {
			const parsedMetadata = JSON.parse(metadata) as {
				exp_time: number;
				data: D;
			};

			if (parsedMetadata.exp_time > Date.now()) {
				return parsedMetadata.data;
			}
		}

		const data = await callback();
		setData(data);
		return data;
	};
}
