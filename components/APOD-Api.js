import React, { useState, useEffect } from 'react';

function APOD() {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    // Replace YOUR_NASA_API_KEY with your actual API key
    fetch('https://api.nasa.gov/planetary/apod?api_key=LLoUWEQJRRkSAd6uRxNOcy5hpJolNFZyg1MdZuHK')
      .then(response => response.json())
      .then(data => {
        setApodData(data);
      })
      .catch(error => console.error('Error fetching APOD data:', error));
  }, []);

  if (!apodData) return <div>Loading...</div>;

  return (
    <div className="App">
      <h1>{apodData.title}</h1>
      {apodData.media_type === 'image' ? (
        <img src={apodData.url} alt={apodData.title} />
      ) : (
        <iframe title={apodData.title} src={apodData.url} frameBorder="0"></iframe>
      )}
      <p>{apodData.explanation}</p>
    </div>
  );
}

export default APOD;
