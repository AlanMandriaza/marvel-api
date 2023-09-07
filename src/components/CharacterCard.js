import React, { useState, useEffect } from 'react';
import { CardImg, CardText, Dropdown, DropdownToggle, Collapse } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { fetchCharacterById } from './marvelAPI';
import '../Styles/CharacterCard.css';

const CharacterCard = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [seriesOpen, setSeriesOpen] = useState(false);
  const [comicsOpen, setComicsOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);

  const toggleSeries = () => setSeriesOpen(prev => !prev);
  const toggleComics = () => setComicsOpen(prev => !prev);
  const toggleEvents = () => setEventsOpen(prev => !prev);

  useEffect(() => {
    fetchCharacterById(id).then(setCharacter);
  }, [id]);

  if (!character) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="character-container">
    <CardImg 
      className="character-image"
      src={`${character.thumbnail.path.replace('http', 'https')}.${character.thumbnail.extension}`} 
      alt={character.name} 
    />


      <div style={{ flex: 1, marginLeft: '20px' }}>
        <h5>{character.name}</h5>
        <CardText>
          <p>{character.description || "No description available."}</p>

          <Dropdown isOpen={seriesOpen} toggle={toggleSeries}>
            <DropdownToggle caret>
              Series
            </DropdownToggle>
            <Collapse isOpen={seriesOpen}>
              {character.series.items.map((serie, index) => (
                <li key={index}>{serie.name}</li>
              ))}
            </Collapse>
          </Dropdown>

          <Dropdown isOpen={comicsOpen} toggle={toggleComics} style={{ marginTop: '1rem' }}>
            <DropdownToggle caret>
              Comics
            </DropdownToggle>
            <Collapse isOpen={comicsOpen}>
              {character.comics.items.map((comic, index) => (
                <li key={index}>{comic.name}</li>
              ))}
            </Collapse>
          </Dropdown>

          <Dropdown isOpen={eventsOpen} toggle={toggleEvents} style={{ marginTop: '1rem' }}>
            <DropdownToggle caret>
              Events
            </DropdownToggle>
            <Collapse isOpen={eventsOpen}>
              {character.events.items.map((event, index) => (
                <li key={index}>{event.name}</li>
              ))}
            </Collapse>
          </Dropdown>
        </CardText>
      </div>
    </div>
  );
};

export default CharacterCard;
