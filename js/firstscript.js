const root = document.querySelector(".site-wrap");
const nytapi = "qa1UnMV3WkBkjX7RL1f8lJYTd9J86fPT";
const type = "all";
const movieStuff = `https://api.nytimes.com/svc/movies/v2/reviews/${type}.json?api-key=${nytapi}`;

const just_url = document.querySelector(".API_URL");
just_url.innerHTML = `<a href="${movieStuff}">LINK to the APIs .json file</a>`;

// const stuff = document.querySelector(".stuff");
// stuff.innerHTML = movieStuff.map( function(item){return item.status})

// just getting the results in the console
// fetch(movieStuff)
//     .then((response) => response.json())
//     .then((myJson) => console.log(myJson.results));

// passing to function
fetch(movieStuff)
    .then((response) => response.json())
    .then((myJson) => renderStories(myJson));

function renderStories(data) {
    data.results.forEach(function (story) {
        // console.log(story)
        var theArticles = document.createElement("div");
        theArticles.className = 'movietalk';
        theArticles.innerHTML = 
            `<h2><a href="${story.link.url}">${story.display_title}</a></h2>
            <h3>Review By ${story.byline}</h3>
            <h3>Opening ${story.opening_date}</h3>
            <img src="${story.multimedia.src}" alt="oops"></img>`
        ;
        // console.log(theArticles);
        just_url.append(theArticles);
    })
};