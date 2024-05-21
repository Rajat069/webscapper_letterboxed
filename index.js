const PORT = process.env.PORT || 3000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const readline = require('node:readline');
const app = express();

const lburl='https://letterboxd.com/film/'
let movie=""

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
async function getMovieData() {
    let MoviesInfo = {};

    try {

        const response = await axios.get(lburl.concat(movie));
        const mdata = response.data;

        const $ = cheerio.load(mdata);


        let releaseYear = $('.releaseyear').text();
        let director = $('.directorlist').find('span').text();
        let tagLine = $('.tagline').text();

        let cast = [];
        $('.cast-list a').each(function () {
            cast.push($(this).text().trim());
        });

        let reviews = [];
        $('.film-detail-content .body-text p').each(function () {
            reviews.push($(this).text().trim());
        });

        let similarMovies = [];
        $('.related-films li').each(function () {
            similarMovies.push($(this).find('img').attr('alt').trim());
        });

        MoviesInfo = {
            movieName:movie.split('-').reduce((acc, word, index) => acc + (index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : ' ' + word), ''),
            releaseYear: releaseYear.trim(),
            director: director.trim(),
            tagLine: tagLine.trim(),
            cast: cast,
            reviews: reviews.map((text, index) => {
                return {
                    review: `review ${index + 1}`,
                    text: text
                };
            }),
            similarMovies: similarMovies
        };

        console.log(MoviesInfo);

    } catch (error) {
        console.error('Error fetching the movie data:', error);
    }
}



rl.question(`Enter the movie name? `, mname => {
    movie=mname.split(" ").map(word => word.toLowerCase()).join('-');
    startServer();
    getMovieData();
    rl.close();
});

function startServer() {
    app.listen(200, () => {
        console.log(`Server started on port ${PORT}`);
    });
}
