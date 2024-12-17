const serverUrl = 'http://localhost:8000';

export const postApi = async (body, path, url = serverUrl) => {
    let token = localStorage.getItem('jwt-token');
    const rawResponse = await fetch(`${url}${path}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            authorization: 'Bearer ' + token,
            'is-az': 'yes',
        },
        credentials: 'include',
        body: JSON.stringify(body),
    });
    return await rawResponse.json();
};