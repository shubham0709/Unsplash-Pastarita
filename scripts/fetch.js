let searchImages = async (API, query) => {
    try {
        const url = `https://api.unsplash.com/search/photos/?query=${query}&per_page=30&client_id=${API}`;
        let res = await fetch(url);
        let data = await res.json();
        return data;
    } catch (err) {
        console.log("this is my error : " + err);
    }
}

let append = (data, col1, col2, col3) => {
    col1.innerHTML = null;
    col2.innerHTML = null;
    col3.innerHTML = null;
    data.forEach(({ alt_description, urls: { small } }, idx) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let h3 = document.createElement("h3");

        div.setAttribute('class', 'card');
        img.src = small;
        h3.innerText = alt_description;

        // container.append(div);
        div.append(img, h3)

        if (idx % 3 == 0) {
            col1.append(div)
        } else if (idx % 3 == 1) {
            col2.append(div)
        } else if (idx % 3 == 2) {
            col3.append(div)
        }
    })
}

export { searchImages, append };