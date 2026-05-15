import type { PageLoad } from './$types';
import { env } from '$env/dynamic/public';

export const ssr = false;

let baseUrl = env.PUBLIC_API_URL || "http://localhost:8080";


export const load: PageLoad = async ({ fetch }) => {
    const res = await fetch(`${baseUrl}/mensa-garching/today`);
    const meals = await res.json();
    
    return { meals };
};