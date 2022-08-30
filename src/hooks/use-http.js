const useHttp = () => {
	const sendRequest = async (requestConfig, applyData, applyError) => {
		try {
			const response = await fetch(requestConfig.url, {
				method: requestConfig.method ? requestConfig.method : "GET",
				headers: requestConfig.headers ? requestConfig.headers : {},
				body: requestConfig.body ? requestConfig.body : null,
			});

			if (!response.ok) {
				throw new Error("Http Error");
			}
			const data = await response.json();
			applyData(data);
		} catch (error) {
			applyError(error);
		}
	};

	return {
		sendRequest,
	};
};

export default useHttp;
