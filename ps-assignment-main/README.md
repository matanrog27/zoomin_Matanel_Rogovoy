# Star Wars Favorites

This React application fetches movies from the Star Wars API (SWAPI) and lets users mark their favorite movies. The goal of this task is to debug the application, improve the styling, and potentially add enhancements.

## Table of Contents

- [Star Wars Favorites](#star-wars-favorites)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Installing](#installing)
  - [SWAPI Documentation](#swapi-documentation)
  - [Tasks](#tasks)



## Getting Started

These instructions will help you set up the project locally on your machine.


### Installing

1. Unzip the project.

2. Navigate to the project directory:
   ```bash
   cd star-wars-favorites
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application should now be running on [http://localhost:3000/](http://localhost:3000/).

## SWAPI Documentation

- **Base URL:** `https://swapi.dev/api/`
- **Relevant Endpoints:**
  - **Films:** `/films/`
    - **Method:** `GET`
    - **Description:** Fetches all the Star Wars films.

For a more in-depth look at the API, please refer to the [official SWAPI documentation](https://swapi.dev/documentation).

Please notice the the SWAPI API might take some time to respond


## Tasks

1. **Debugging:** 
    - Start the application and identify the 2 errors introduced.
    - Dive into the codebase and pinpoint the source of each error.
    - Rectify each error ensuring the application displays and functions correctly.
    - Offer a concise explanation of the root causes and detail your solutions.

    error 1:
    in app.js we have the function handleMovieSelect(movie) which takes moviw as an argument
    the function passed as props to MovieList component and passes again from movie list to MovieItem Component as props.
    in MovieItem component onMovieSelect (this call will bubble up and call handleMovieSelect) from the props I called but without an agrument and this is why the call to handleMovieSelect(movie) was done incorrectly
    to fix the problem I added movie to the argument (in MovieItem ) : 
     <button onClick={() => onMovieSelect(movie)}>

     error 2:
     in MovieDetails Component there is a call to onFavoriteToggle : onClick={() => onFavoriteToggle(movie)
     but when you take a look at app.js when using the MovieDetails thare is no props called onFavoriteToggle 
     to fix it I passed the function handleFavorite from app.js as props to MovieDetails with the name onFavoriteToggle:
     <MovieDetails movie={selectedMovie} favorites={favorites} onFavoriteToggle={handleFavorite} />


2. **Styling:** 
    - Refactor the application's styling to match the provided [mockup](page_mockup.png)
    - Ensure the design is responsive and maintains consistency across various screen sizes and browsers.

3. **Improvements:** (Optional)
    - After implementation of the basic design, you can go ahead and implement any other enhancements or features you feel would optimize the application.

4. **Upload to github:**
    - Once finished, upload the project to github.
    - Try to clone your code and run it - make sure all works after cloning
    - Make sure the site works as expected
