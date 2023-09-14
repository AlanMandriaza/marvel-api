import React, { useState, useEffect } from 'react';
import ComicCard from './ComicList';
import { fetchAllComics } from './marvelAPI';

const ComicList = () => {
    const [comics, setComics] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAllComics().then(data => {
            if (data && Array.isArray(data)) {  // Verificación adicional
                setComics(data);
            } else {
                console.warn("Data fetched is not an array or is undefined");
            }
            setLoading(false);
        }).catch(error => {
            console.error("Error fetching comics:", error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="comic-list">
            {Array.isArray(comics) && comics.map(comic =>  // Verificación adicional antes de usar map
                <ComicCard key={comic.id} comicId={comic.id} />
            )}
        </div>
    );
};

export default ComicList;
