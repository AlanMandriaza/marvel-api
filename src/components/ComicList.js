import React, { useState, useEffect } from 'react';
import { fetchComicById } from './marvelAPI';

const ComicList = () => {
    const [comic, setComic] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Asumiendo que el ID del cómic que deseas es '12345'
        fetchComicById(12345).then(data => {
            setComic(data);
            setLoading(false);
        }).catch(error => {
            console.error("Error fetching comic:", error);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="comic">
            {comic && (
                <div>
                    <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
                    <p>{comic.title}</p>
                </div>
            )}
        </div>
    );
};

export default ComicList;
