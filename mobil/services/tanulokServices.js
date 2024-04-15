// Grünhut Gábor
// Szoft II/1/E
// 2024-04-15

const host = 'http://localhost:8000/';
const endpoint = 'tanulok';

export async function getTanulok() {
    const url = host + endpoint;
    const response = await fetch(url);
    const data = await response.json();
    return data;  
}