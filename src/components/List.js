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
  <h1>Personajes de Marvel</h1>
  <div className="card-container">
    {characters.map(character => (
      <Card key={character.id} className="glass">
        <CardBody>
          <CardTitle tag="h5">{character.name}</CardTitle>
          <CardImg top src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
          <CardText>
            <ul>
              {character.events && character.events.items && character.events.items.map(item => <li key={item.name || item.id}>{item.name}</li>)}
            </ul>
          </CardText>
        </CardBody>
        <CardFooter><Link to={`/character/${character.id}`} className="btn btn-primary">Ir a ficha</Link></CardFooter>
      </Card>
    ))}
  </div>
</div>



  );

};

export default List;
