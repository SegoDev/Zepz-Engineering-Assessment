import { CORS_ANYWHERE, API_URL } from "../lib/constants";

export const getUsers = async () => {
  try {
    const response = await fetch(`${CORS_ANYWHERE}/${API_URL}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache' // GET THE LATEST UP-TO-DATE DATA
      }
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();
    return data.items; // the 'items' property contains the users
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};