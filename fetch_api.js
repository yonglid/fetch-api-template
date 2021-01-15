// import "dotenv/config";
// const fs = require("fs");

const fetch = require("node-fetch");
console.log("Hello Fetch Template Project.");

// uncomment below if you want to write to file, you can use the fs library 

// const write_file = "sample.json";
// let write_stream = fs.createWriteStream(write_file);
// write_stream
//     .on("finish", () => {
//         console.log("finished writing data.");
//     })
//     .write("[");
// async function fetching(areas) {
//     for (let i = 0; i < areas.length; i++) {
//         await fetchEndpoint();
//     }
//     write_stream.write("]");
// }

const token = ""; // not being used but useful for authorization header if you need to pass in token
const url = `https://api.github.com/users/yonglid`
console.log("fetching: ", fetchEndpoint(url))
async function fetchEndpoint(fetchUrl) {
    // let fetchedEndpoint = 
    fetch(
        // some requests don't need you to pass a header/don't need authorization and you can just hit the endpoint for a simple GET 
        `${fetchUrl}`

        // to pass in more parameters to the fetch function like Headers, Body etc, reference the Fetch documentation, but here are some examples below which you can tack on if you had a comma after the above endpoint url 
        // also reference this useful blog with examples: https://danlevy.net/you-may-not-need-axios/#custom-headers

        // 1) some requests might just need a really simple header, one below is one provided by github 
        // {
        //     "headers": {
        //         "accept": "application/vnd.github.inertia-preview+json",
        //         "method": "GET"
        //     }
        // }

        // 2) some requests don't need you to pass a header, but you might need to send a token or a more detailed header and here's an example (base it off of the documentation's headers)
        // {
        //   "headers": {
        //     "accept": "application/json, text/plain, */*",
        //     "accept-language": "en-US,en;q=0.9",
        //     "authorization": `Token ${token}`, // the `` syntax allows you to reference variables using ${} so here we're bringing in the value of a variable named token 
        //     "sec-fetch-dest": "empty",
        //     "sec-fetch-mode": "cors",
        //     "sec-fetch-site": "same-origin",
        //     "cookie": "G_ENABLED_IDPS=google; G_AUTHUSER_H=0"
        //     //   cookie: "G_ENABLED_IDPS=google; G_AUTHUSER_H=2",
        //   },
        //   "referrer": "some refferer link",
        //   "referrerPolicy": "no-referrer-when-downgrade",
        //   "body": null,
        //   "method": "GET",
        //   "mode": "cors",
        // }

        // 3) for POSTs, you'd probably want to send a header and body based on the documentation 
        // headers: {
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json',
        //   },
        // body: JSON.stringify({
        // username: "some user",
        // password: "password",
        // }),
    ).then(response =>
        response.json()
    ).then(data =>
        console.log(data)
    )
        .catch(err => console.log("Error fetching endpoint: " + err));
}
