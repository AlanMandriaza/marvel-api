import React, { useEffect, useState } from 'react';
import { Card, CardImg, CardFooter, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { fetchCharacters } from './marvelAPI';
import '../Styles/List.css';

const List = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters().then(setCharacters);
  }, []);

  return (
    <div className='container'>
      <h1 className="mb-4">Personajes de Marvel</h1>
      <div className="row card-container">
        {characters.map(character => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <Card key={character.id} className="glass h-100">
              <CardBody>
                <CardTitle tag="h5">{character.name}</CardTitle>
                <CardImg top src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} className="img-fluid mb-3" />
                <CardText>
                  
                </CardText>
                <ul className="list-unstyled mb-2">
                  {character.events && character.events.items && character.events.items.map(item => (
                    <li key={item.name || item.id}>{item.name}</li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter><Link to={`/character/${character.id}`} className="btn btn-primary">Ir a la ficha</Link></CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
