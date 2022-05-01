//https://api.unsplash.com/search/photos/?query=dogs&per_page=30&client_id=UFL2ZB0V46ZXTSOtC1BAS1Y4l3ZUYNb_tKwI6GWrCAg
//importing navbar
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

//importing searchImages function from ./scripts/fetch.js
import { searchImages, append, sortImages, filterImages } from "./fetch.js";

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
    document.getElementById("query").value = query;
    let data = await searchImages(API, query);
    append(data.results, col1, col2, col3);
}
for (let elem of categories) {
    elem.addEventListener('click', () => {
        searchByCategory(elem);
    })
}


let orderBy = async (value) => {
    console.log(value);
    let query = document.getElementById("query").value;
    let data = await sortImages(API, query, value);
    append(data.results, col1, col2, col3);
}

let filterBy = async (value) => {
    console.log(value);
    let query = document.getElementById("query").value;
    let data = await filterImages(API, query, value);
    append(data.results, col1, col2, col3);
}

let order = document.getElementById("order_by");
order.addEventListener('change', () => {
    orderBy(order.value);
})


let orientation = document.getElementById("orientation");
orientation.addEventListener('change', () => {
    filterBy(orientation.value);
})
