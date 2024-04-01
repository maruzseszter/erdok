const host = 'http://localhost:8000/';
const endpoint = 'erdok';

export async function lekerErdok() {
    const url = host + endpoint;
    const response = await fetch(url);
    const data = await response.json();
    return data;    //promise-t ad vissza
}