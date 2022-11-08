let roka_divs = document.getElementsByClassName('roka')

for (let index = 0; index < roka_divs.length; index++) {
    fetch("https://randomfox.ca/floof/")
    .then(x => x.json())
    .then(y => {
        console.log(y.image)
        roka_divs[index].style.backgroundImage = "url("+y.image+")"
    });
}