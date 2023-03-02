# ratherlabs-challenge

Frontend challenge for Sthorm client.
[![Watch the video](https://img.youtube.com/vi/ocTmh7FGyF4/maxresdefault.jpg)](https://youtu.be/ocTmh7FGyF4)


In order to setup, please set up your ENV variables:

### Backend:

Create "backend/.env" file with the following contents:

TMDB_API_KEY=**YOUR_TMDB_KEY_HERE** (v3). 
LANGUAGE="EN".  
REGION="US". 

### Frontend:

Create "frontend/.env" file with the following contents:

REACT_APP_TMDB_API_KEY=**YOUR_TMDB_KEY_HERE** (v4). 

### Run Docker:

docker-compose up

### Visit site:

Once docker-compose started both servers, please turn your browser to:   
http://localhost:3002

## Improvements / TODO:

- CRUD implementation for multiple users accounts:
  Connect Nest to a Mongo Atlas DB intended to store the users. 
  For authentication: Firebase Auth or JWT jsonwebtoken
- Skeletons for components while loading
- Sorting filters: by popularity, by rate or by release date. Ascending/descending.
