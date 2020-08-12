export const fetchRequest = (requestBody: any, url: string) => {
	return fetch(url , {
		method: 'POST',
		body: JSON.stringify(requestBody),
		headers: {
			'Content-Type': 'application/json'
		},
	});
};

