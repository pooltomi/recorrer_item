// const { info } = require('console');

const tabla = document.querySelector("#res");

function funcionLlamar () {
    let info;
    let info2;
    fetch('https://api.mercadolibre.com/sites/MLA/search?seller_id=81644614')
        .then((response) => response.json())
        .then(data => {
            console.log(data.results)
            info = data.results.map(e => {
                return `<tr><td>${e.id}</td><td>${e.title}</td><td>${e.category_id}</td><td>${e.condition}</td>`;
            }).join('');
            //console.log(info)
            res.innerHTML = info;
 })
};
funcionLlamar();