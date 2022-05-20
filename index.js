const express = require('express');
const app = express();
const port = 2000;
const axios = require('axios').default;
var cors = require('cors');
app.use(cors());
app.use(express.json());
const API_KEY = "dba3a129d87a60472cfb5bb116de09b7";



app.post("/search_by_title", (req, res) => {
    const titolo = req.body.titolo;
    const fetchedResults = [];
    
    axios
      .get(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}`, {
        params: {
          query: titolo,
        },
      })
      .then(function (response) {
        console.log(response);
        setTimeout(() => fetchedResults.push(...response.data.results), 30);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`, {
        params: {
          query: titolo,
        },
      })
      .then(function (response) {
        setTimeout(() => fetchedResults.push(...response.data.results), 30);
      })
      .catch(function (error) {
        console.log(error);
      });
    setTimeout(() => {
      res.send(fetchedResults);
      console.log(fetchedResults);
    }, 1000);
});




// Fetch Netflix Originals
app.get('/movie/netflix', (req, res) => {

    axios.get("https://api.themoviedb.org/3/discover/tv", {
        params: {
            api_key: API_KEY,
            with_networks: 213,
            language: "it-IT"
        }
    })
        .then(function (response) {
            // handle success
            //console.log(response);
            res.send(response.data)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
})


// Fetch dei top rated film 
app.get('/movie/top-rated', (req, res) => {

    axios.get("https://api.themoviedb.org/3/movie/top_rated??&language=it-IT&page=1", {
        params: {
            api_key: API_KEY,
        }
    })
        .then(function (response) {
            // handle success
            //console.log(response);
            res.send(response.data)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
})


// Fetch dei top rated TV
app.get('/tv/top-rated', (req, res) => {

    axios.get("https://api.themoviedb.org/3/tv/top_rated??&language=it-IT&page=1", {
        params: {
            api_key: API_KEY,
        }
    })
        .then(function (response) {
            // handle success
            //console.log(response);
            res.send(response.data)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
})


// Fetch film azione
app.get('/movie/action', (req, res) => {

    axios.get("https://api.themoviedb.org/3/discover/movie", {
        params: {
            api_key: "dba3a129d87a60472cfb5bb116de09b7",
            with_genres: 28,
        }
    })
        .then(function (response) {
            // handle success
            //console.log(response);
            res.send(response.data)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
})


// Fetch film commedia
app.get('/movie/comedy', (req, res) => {

    axios.get("https://api.themoviedb.org/3/discover/movie", {
        params: {
            api_key: API_KEY,
            with_genres: 35,
        }
    })
        .then(function (response) {
            // handle success
            //console.log(response);
            res.send(response.data)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
})


// Fetch film horror
app.get('/movie/horror', (req, res) => {

    axios.get("https://api.themoviedb.org/3/discover/movie", {
        params: {
            api_key: API_KEY,
            with_genres: 27,
        }
    })
        .then(function (response) {
            // handle success
            //console.log(response);
            res.send(response.data)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
})


// Fetch film romantici
app.get('/movie/romances', (req, res) => {

    axios.get("https://api.themoviedb.org/3/discover/movie", {
        params: {
            api_key: API_KEY,
            with_genres: 10749,
        }
    })
        .then(function (response) {
            // handle success
            //console.log(response);
            res.send(response.data)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
})


// Fetch film documentari
app.get('/movie/docu', (req, res) => {

    axios.get("https://api.themoviedb.org/3/discover/movie", {
        params: {
            api_key: API_KEY,
            with_genres: 99,
        }
    })
        .then(function (response) {
            // handle success
            //console.log(response);
            res.send(response.data)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
})


// Fetch film animazione
app.get('/movie/animation', (req, res) => {

    axios.get("https://api.themoviedb.org/3/discover/movie", {
        params: {
            api_key: API_KEY,
            with_genres: 16,
        }
    })
        .then(function (response) {
            // handle success
            //console.log(response);
            res.send(response.data)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
})


// Fetch film crime
app.get('/movie/crime', (req, res) => {

    axios.get("https://api.themoviedb.org/3/discover/movie?&with_genres=80", {
        params: {
            api_key: API_KEY,
            with_genres: 80,
        }
    })
        .then(function (response) {
            // handle success
            //console.log(response);
            res.send(response.data)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
})


// Fetch film drama
app.get('/movie/drama', (req, res) => {

    axios.get("https://api.themoviedb.org/3/discover/movie", {
        params: {
            api_key: API_KEY,
            with_genres: 18,
        }
    })
        .then(function (response) {
            // handle success
            //console.log(response);
            res.send(response.data)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
})


// Fetch film fantasy
app.get('/movie/fantasy', (req, res) => {

    axios.get("https://api.themoviedb.org/3/discover/movie", {
        params: {
            api_key: API_KEY,
            with_genres: 14,
        }
    })
        .then(function (response) {
            // handle success
            //console.log(response);
            res.send(response.data)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
})


// Fetch film musicali
app.get("/movie/music", (req, res) => {
    axios
        .get("https://api.themoviedb.org/3/discover/movie", {
            params: {
                api_key: API_KEY,
                with_genres: 10402,
            },
        })
        .then(function (response) {
            // handle success
            //console.log(response);
            res.send(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
});


// Fetch film western
app.get('/movie/western', (req, res) => {

    axios.get("https://api.themoviedb.org/3/discover/movie", {
        params: {
            api_key: API_KEY,
            with_genres: 37,
        }
    })
        .then(function (response) {
            // handle success
            //console.log(response);
            res.send(response.data)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})




/* const API_KEY = "dba3a129d87a60472cfb5bb116de09b7";

const endpointObj = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27,`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749,`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99,`
}

export default endpointObj; */

//https://api.themoviedb.org/3/trending/all/day?api_key=dba3a129d87a60472cfb5bb116de09b7


//per i trailer = https://www.youtube.com/watch?v=FrEf8XHToGI / https://www.youtube.com/watch?v=key restituita.
//per trovare le key: https://api.themoviedb.org/3/movie/18/videos?api_key=dba3a129d87a60472cfb5bb116de09b7&language=en-US
//  https://api.themoviedb.org/3/movie/ID FILM DA CERCARE /videos?api_key=dba3a129d87a60472cfb5bb116de09b7&language=en-US

//https://api.themoviedb.org/3


//https://codingdiksha.com/login-with-google-using-reactjs/
//https://www.youtube.com/watch?v=bf-vfhgWtKg

//ricerca per titolo film : https://api.themoviedb.org/3/search/movie?api_key=dba3a129d87a60472cfb5bb116de09b7&query=SCRUBS
//ricerca per titolo tv: https://api.themoviedb.org/3/search/tv?api_key=dba3a129d87a60472cfb5bb116de09b7&query=SCRUBS

//ricerca per id = https://api.themoviedb.org/3/movie/870671?api_key=dba3a129d87a60472cfb5bb116de09b7&language=en-US

/* {"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]} */