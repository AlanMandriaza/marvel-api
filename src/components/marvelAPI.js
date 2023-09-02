import md5 from 'md5';

const publicKey = '7e630d1c4bf474f8d70379266ca81135';
const privateKey = 'b20dab9ccc0afce47942296b11dcf5be5d5876fc';

// Función para generar la URL de la API de Marvel
const generateUrl = (endpoint) => {
  const timestamp = Date.now();
  const hash = md5(timestamp + privateKey + publicKey);
  return `https://gateway.marvel.com/v1/public${endpoint}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
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
