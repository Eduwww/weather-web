const searchInput = document.getElementById("search");
const tempElement = document.getElementById("temp");

searchInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        let city = searchInput.value;
        document.querySelector("header h2").innerText = "🌍 " + city;
        
        // Simulação de temperatura aleatória
        let randomTemp = Math.floor(Math.random() * 30) + 5;
        tempElement.innerText = randomTemp + "°";
        
        searchInput.value = "";
    }
});
