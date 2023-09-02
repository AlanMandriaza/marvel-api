import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button, Collapse } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { fetchCharacterById } from './marvelAPI';

const CharacterCard = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    fetchCharacterById(id).then(setCharacter);
  }, [id]);

  if (!character) {
    return <div>Cargando...</div>;
  }

  return (
    <Card style={{ width: "18rem", marginLeft: "30px" }}>
      <CardBody>
        <CardTitle tag="h5">{character.name}</CardTitle>
        <CardImg top width="100%" src={`${character.thumbnail.path.replace('http', 'https')}.${character.thumbnail.extension}`} alt={character.name} />
        <CardText>
          <p>{character.description}</p>
          <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Series</Button>
          <Collapse isOpen={isOpen}>
            <Card>
              <CardBody>
                {character.series.items.map((serie, index) => (
                  <li key={index}>{serie.name}</li>
                ))}
              </CardBody>
            </Card>
          </Collapse>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default CharacterCard;
