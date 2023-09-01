import React, { useEffect, useState } from 'react';
import md5 from 'md5';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';

const List = () => {
    const [characters, setCharacters] = useState([]);

    const publicKey = '7e630d1c4bf474f8d70379266ca81135';
    const privateKey = 'b20dab9ccc0afce47942296b11dcf5be5d5876fc';
    const timestamp = Date.now();
    const hash = md5(timestamp + privateKey + publicKey);
    const url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setCharacters(data.data.results))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>List</h1>
            {characters.map(character => (
                <Card style={{ width: "18rem", marginBottom: "10px" }} key={character.id}>
                    <CardImg top width="100%" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
                    <CardBody>
                        <CardTitle tag="h5">{character.name}</CardTitle>
                        <CardText>{character.description} </CardText>
                        <Button>Go somewhere</Button>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
};

export default List;
