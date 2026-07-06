# Movie-Ranker

Movie-Ranker is a web application that allows you to easily discover, rank, and organize movies. 

This project is a fork of [ajyoon/system-design-ranker](https://github.com/ajyoon/system-design-ranker). 
The main goal of this fork was to adapt the ranking logic for movies and drastically improve movie recognition by integrating The Movie Database (TMDB) API. This ensures that movies are correctly identified, and rich metadata such as accurate release years, directors, and high-quality movie posters are automatically fetched and displayed.

## Features
- **Movie Ranking:** Compare two movies side-by-side and choose your favorite.
- **TMDB Integration:** Accurate movie metadata and poster images.
- **Responsive UI:** Clean and simple interface tailored for movie comparisons.

## How it works
The backend scripts pull and organize the movie data (using `fetch_tmdb.py`), while the frontend (`docs/`) presents a smooth, interactive ranking experience. The results and current progress are managed entirely in your browser.