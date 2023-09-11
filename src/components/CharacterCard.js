import React, { useState, useEffect } from 'react';
import { CardImg, CardText, Dropdown, DropdownToggle, Collapse } from 'reactstrap';
import { useParams } from 'react-router-dom'; 
import { fetchCharacterById } from './marvelAPI'; 
import '../Styles/CharacterCard.css'; 

// Definición del componente CharacterCard
const CharacterCard = () => { 

    // Capturamos el ID desde la URL
    const { id } = useParams();

    // Inicializamos el estado del componente usando useState
    const [character, setCharacter] = useState(null); // Estado para la información del personaje
    const [seriesOpen, setSeriesOpen] = useState(false); // Estado para el desplegable de series
    const [comicsOpen, setComicsOpen] = useState(false); // Estado para el desplegable de cómics
    const [eventsOpen, setEventsOpen] = useState(false); // Estado para el desplegable de eventos

    // Funciones para alternar la visibilidad de los desplegables
    const toggleSeries = () => setSeriesOpen(prev => !prev);
    const toggleComics = () => setComicsOpen(prev => !prev);
    const toggleEvents = () => setEventsOpen(prev => !prev);

    // Hook useEffect para solicitar datos del personaje cuando se monta el componente o cambia el ID
    useEffect(() => {
        fetchCharacterById(id).then(setCharacter); // Buscamos el personaje por ID y establecemos el estado
    }, [id]);

    // Si no tenemos información del personaje, mostramos un mensaje de carga
    if (!character) {
        return <div>Cargando...</div>;
    }

    // Renderizamos el contenido del componente
    return (
        <div className="character-container">
            <CardImg // Imagen del personaje
                className="character-image"
                src={`${character.thumbnail.path.replace('http', 'https')}.${character.thumbnail.extension}`}
                alt={character.name}
            />
            <div style={{ flex: 1, marginLeft: '20px' }}>
                <h5>{character.name}</h5>
                <CardText> {/* Descripción y listas de series, cómics y eventos */}
                    <p>{character.description || "No hay descripcion disponible."}</p>

                    {/* Desplegable para las series del personaje */}
                    <Dropdown isOpen={seriesOpen} toggle={toggleSeries}>
                        <DropdownToggle caret> Series </DropdownToggle>
                        <Collapse isOpen={seriesOpen}>
                            {/* Verificamos si el personaje tiene series asociadas */}
                            {character.series.items.length > 0 ?
                                /* Si el personaje tiene al menos una serie, mapeamos (iteramos) sobre la lista de series */
                                character.series.items.map((series, index) => (
                                    /* Por cada serie, creamos un elemento de lista (li) */
                                    <li key={index}>{series.name}</li>
                                ))
                            : 
                                <p>No hay series disponibles para este personaje.</p>
                            }
                        </Collapse>
                    </Dropdown>

                    {/* Desplegable para los cómics del personaje */}
                    <Dropdown isOpen={comicsOpen} toggle={toggleComics} style={{ marginTop: '1rem' }}>
                        <DropdownToggle caret> Cómics </DropdownToggle>
                        <Collapse isOpen={comicsOpen}>
                            {character.comics.items.length > 0 ?
                                character.comics.items.map((comic, index) => (
                                    <li key={index}>{comic.name}</li>
                                ))
                            : 
                                <p>No hay cómics disponibles para este personaje.</p>
                            }
                        </Collapse>
                    </Dropdown>

                    {/* Desplegable para los eventos del personaje */}
                    <Dropdown isOpen={eventsOpen} toggle={toggleEvents} style={{ marginTop: '1rem' }}>
                        <DropdownToggle caret> Eventos </DropdownToggle>
                        <Collapse isOpen={eventsOpen}>
                            {character.events.items.length > 0 ?
                                character.events.items.map((event, index) => (
                                    <li key={index}>{event.name}</li>
                                ))
                            : 
                                <p>No hay eventos disponibles para este personaje.</p>
                            }
                        </Collapse>
                    </Dropdown>
                </CardText>
            </div>
        </div>
    );
};

// Exportamos el componente para que pueda ser usado en otras partes de la aplicación
export default CharacterCard;
