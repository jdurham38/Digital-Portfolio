import React, { useState } from 'react';
import axios from 'axios';

const UnsplashSearch = () => {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);

    const API_URL = "https://api.unsplash.com/search/photos";
    const ACCESS_KEY = "yQ9CLZVh5PcuA7cunQ9Y3aEvz3B-sUW_vt1GDewxQKE"; // Replace with your Unsplash API key

    const searchImages = async () => {
        try {
            const response = await axios.get(API_URL, {
                params: { query },
                headers: {
                    Authorization: `Client-ID ${ACCESS_KEY}`
                }
            });

            setImages(response.data.results);
        } catch (error) {
            console.error("Error fetching images from Unsplash:", error);
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for images..."
            />
            <button onClick={searchImages}>Search</button>
            <div>
                {images.map(image => (
                    <div key={image.id} style={{ margin: '10px', display: 'inline-block' }}>
                        <img 
                            src={image.urls.small} 
                            alt={image.description} 
                            style={{ marginBottom: '10px' }}
                        />
                        <br />
                        <a href={image.links.download} download target="_blank" rel="noopener noreferrer">
                            Download
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UnsplashSearch;
