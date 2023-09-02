import React, { useEffect, useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { fetchCharacters } from './marvelAPI';

const List = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetchCharacters().then(setCharacters);
    }, []);

    return (
    <div className='container row'>
      <h1>Personajes de Marvel</h1>
      {characters.map(character => (
        <Card style={{ width: "18rem", marginLeft: "30px" }} key={character.id}>
          <CardBody>
            <CardTitle tag="h5">{character.name}</CardTitle>
            <CardImg top width="100%" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
            <Link to={`/character/${character.id}`} className="btn btn-primary">Ir a ficha</Link>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default List;
