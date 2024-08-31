import React from 'react';

const MovieListing = () => {
  const sections = [
    { title: "New Movies", items: ["Movie 1", "Movie 2", "Movie 3", "Movie 4"] },
    { title: "TV Shows", items: ["TV Show 1", "TV Show 2", "TV Show 3", "TV Show 4"] },
    { title: "Documentaries", items: ["Documentary 1", "Documentary 2", "Documentary 3", "Documentary 4"] },
    { title: "Similar Movies", items: ["Similar Movie 1", "Similar Movie 2", "Similar Movie 3", "Similar Movie 4"] },
  ];

  return (
    <div className="movie-listing">
    
      <div className="content">
        {sections.map((section, index) => (
          <div key={index} className="section">
            <h2>{section.title}</h2>
            <div className="card-container">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="movie-card">
                  <img src="image3.jpg" alt={item} className="movie-image" />
                  <p className="movie-title">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
          .movie-listing {
            font-family: Arial, sans-serif;
            padding: 20px;
            max-width: 1200px;
            margin: auto;
            color: #333;
            box-sizing: border-box;
          }

          .trailer-section {
            margin-bottom: 20px;
          }

          .trailer-video {
            width: 100%;
            max-width: 1000px;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }

          .content {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .section {
            margin-bottom: 20px;
          }

          .section h2 {
            font-size: 1.8rem;
            margin-bottom: 10px;
          }

          .card-container {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
          }

          .movie-card {
            flex: 1 1 calc(25% - 15px);
            max-width: calc(25% - 15px);
            text-align: center;
          }

          .movie-image {
            width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }

          .movie-title {
            margin-top: 5px;
            font-size: 1rem;
          }

          @media (max-width: 1200px) {
            .movie-card {
              flex: 1 1 calc(33.33% - 15px);
              max-width: calc(33.33% - 15px);
            }
          }

          @media (max-width: 768px) {
            .movie-card {
              flex: 1 1 calc(50% - 15px);
              max-width: calc(50% - 15px);
            }
          }

          @media (max-width: 480px) {
            .movie-card {
              flex: 1 1 100%;
              max-width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default MovieListing;

