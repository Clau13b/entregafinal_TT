const MOCKAPI_URL = 'https://691a58632d8d7855756e7810.mockapi.io/productos'; 


const handleResponse = async (response) => {
    
    if (!response.ok) {
        let errorBody = await response.text();
        try {
            errorBody = JSON.parse(errorBody);
        } catch (e) {
            
        }
        
        const error = new Error(`Error de red: ${response.status} - ${response.statusText}`);
        error.status = response.status;
        error.body = errorBody;
        return Promise.reject(error);
    }
    
    
    
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
        return response.json();
    }
    return {}; 
};


export const getProducts = () => {
    return fetch(MOCKAPI_URL)
        .then(handleResponse);
};


export const createProduct = (newProduct) => {
    return fetch(MOCKAPI_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
    })
    .then(handleResponse);
};


export const updateProduct = (id, updatedFields) => {
    return fetch(`${MOCKAPI_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFields),
    })
    .then(handleResponse);
};


export const deleteProduct = (id) => {
    return fetch(`${MOCKAPI_URL}/${id}`, {
        method: 'DELETE',
    })
    .then(handleResponse);
};