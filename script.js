const imgElement = document.getElementById("pokemonImage");
const err = document.getElementById("err");

async function fetchData() {

    try {

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not Fetch Resource !")
        }

        let data = await response.json();
        // console.log(data);

        const pokemonImage = data.sprites.front_default;

        imgElement.src = pokemonImage;
        imgElement.style.display = "block";

        err.innerText = ""

        // SET LOCAL STORAGE 
        localStorage.setItem("pokemonImage", pokemonImage);
    }
    catch (error) {
        console.log(error)
        err.innerText = error

        imgElement.style.display = "none";
    }

}

// GET LOCAL STORAGE
const savedImage = localStorage.getItem("pokemonImage");

if (savedImage) {
    imgElement.src = savedImage;
    imgElement.style.display = "block";
}