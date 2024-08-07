// src/utils/api.js

// src/utils/api.js

export async function fetchData(endpoint, options = {}) {
    const url = `${import.meta.env.VITE_BACKEND_URL}${endpoint}`;
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };

    console.log('Request URL:', url);
    console.log('Request Method:', options.method || 'GET');
    console.log('Request Headers:', headers);
    if (options.body) {
        console.log('Request Body:', options.body);
    }

    const response = await fetch(url, {
        ...options,
        headers,
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} (${response.statusText})`);
    }

    const data = await response.json();
    return data;
}

