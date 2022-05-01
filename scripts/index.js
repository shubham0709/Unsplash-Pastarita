//https://api.unsplash.com/search/photos/?query=dogs&per_page=30&client_id=UFL2ZB0V46ZXTSOtC1BAS1Y4l3ZUYNb_tKwI6GWrCAg
//importing navbar
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

//importing searchImages function from ./scripts/fetch.js
import { searchImages, append } from "./fetch.js";

// let searchImages = async () => {
//     let query = document.getElementById("query").value;
//     try {
//         const url = `https://api.unsplash.com/search/photos/?query=${query}&per_page=30&client_id=${API}`;
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data);
//     } catch (err) {
//         console.log("this is my error : " + err);
//     }
// }
let col1 = document.getElementById("col1");
let col2 = document.getElementById("col2");
let col3 = document.getElementById("col3");
const API = `UFL2ZB0V46ZXTSOtC1BAS1Y4l3ZUYNb_tKwI6GWrCAg`;

let search = async (e) => {
    if (e.key === 'Enter') {
        let query = document.getElementById("query").value;
        let data = await searchImages(API, query);
        append(data.results, col1, col2, col3);
    }
}


document.getElementById('query').addEventListener('keydown', search);

let categories = document.getElementById("categories").children;
console.log(categories);

let searchByCategory = async (elem) => {
    console.log(elem.id)
    let query = elem.id;
    let data = await searchImages(API, query);
    append(data.results, col1, col2, col3);
}
for (let elem of categories) {
    elem.addEventListener('click', () => {
        searchByCategory(elem);
    })
}
