import md5 from 'md5';

const publicKey = '7e630d1c4bf474f8d70379266ca81135';
const privateKey = 'b20dab9ccc0afce47942296b11dcf5be5d5876fc';

// Función para generar la URL de la API de Marvel
const generateUrl = (endpoint, query = "") => {
  const timestamp = Date.now();
  const hash = md5(timestamp + privateKey + publicKey);
  return `https://gateway.marvel.com/v1/public${endpoint}?${query}ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
};


// Función para obtener todos los personajes
export const fetchCharacters = () => {
  const url = generateUrl('/characters');
  return fetch(url)
    .then(response => response.json())
    .then(data => data.data.results)
    .catch(error => console.error(error));
};

// Función para obtener un personaje por su ID
export const fetchCharacterById = (id) => {
  const url = generateUrl(`/characters/${id}`);
  return fetch(url)
    .then(response => response.json())
    .then(data => data.data.results[0])
    .catch(error => console.error(error));
};

export const fetchComicById = (id) => {
  const url = generateUrl(`/comics/${id}`);
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data && data.data) {
        return data.data.results[0];
      }
      throw new Error('Data is not in the expected format');
    })
    .catch(error => {
      console.error(error);
      throw error; // You can propagate the error to handle it at a higher level if necessary
    });
};

// Función para obtener todos los cómics
 
export const fetchAllComics = (limit) => {
  const query = limit ? `limit=${limit}&` : "";
  const url = generateUrl('/comics', query);
  return fetch(url)
    .then(response => response.json())
    .then(data => data.data.results)
    .catch(error => console.error(error));
};

