# Movie Data Scraper

This project is a web scraper that retrieves movie information from Letterboxd. It uses Node.js with Express, Axios, and Cheerio to fetch and parse the movie data. The application prompts the user for a movie name, scrapes the relevant data, and then displays it in the console.

## Table of Contents

* Installation
* Usage
* Dependencies
* Features
* License
* Installation


To get started with this project, follow these steps:

* Clone the repository: `git clone https://github.com/yourusername/moviedata``-scraper.git`

* Navigate to the project directory:`cd moviedata-scraper`

* Install the dependencies:`npm install`

## Usage

To run the scraper, follow these steps:
1. Open a terminal in the project directory.
2. Start the application:`npm start`
3. You will be prompted to enter a movie name. Type the name of the movie and press Enter.
4. The application will fetch and display the movie information in the console.

## Dependencies

This project relies on the following dependencies:

* Axios: Promise-based HTTP client for the browser and Node.js.
* Cheerio: Fast, flexible, and lean implementation of core jQuery designed specifically for the server.
* Express: Fast, unopinionated, minimalist web framework for Node.js.
* Readline: Node.js module to interface with the readline API.

## Features

1. Fetch Movie Data: Retrieve movie details including release year, director, tagline, cast, reviews, and similar movies.
2. User Prompt: Input movie name via command line.
3. Data Parsing: Extract and display structured data from the HTML content.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.