let checkboxes = document.querySelectorAll(".checkbox");
const pieCanvas = document.getElementById("pieCanvas");

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", ($event)=>{
        filter($event.target.value, $event.target.checked);

    })
});

function filter(value, checked) {
    let arbres = document.querySelectorAll(".arbre");
    arbres.forEach(
        (arbre) => {
            arbre.className = "arbre";

            if(value === "tous" && checked === true ){
                arbre.className = "arbre";
            }
            else if(value === "tous" && checked === false){
                arbre.className = "arbre hidden";
            }
            else {
                let espece = arbre.querySelector("li.espece").innerHTML;
                for(let u = 0; u < checkboxes.length; u++) {
                    console.log(espece + "vs" + checkboxes[u].value);
                    if(checkboxes[u].value === espece && checkboxes[u].checked === false) {
                        arbre.className = "arbre hidden";
                    }
                }
            }
        }
    );
};
const pieChart = new Chart(pieCanvas, {
    type: "doughnut",
    data: {
        labels: ["DJS","Bord de route","Cimetiere","Jardin"],
        datasets: [{
            data:[0.6,4,5.6,89.3],
            backgroundColor: [
                "#2f64d6","#9c5b01","white","#ff81c1",
            ],
            hoverOffset: 15
        }]
    }
})

const pieChart2 = new Chart(pieCanvas2, {
    type: "doughnut",
    data: {
        labels: ["5m,","15m","25m","35m","45m"],
        datasets: [{
            data:[10,40,63,38,5],
            backgroundColor: [
                "red","black","white","#ff81c1","brown"
            ],
            hoverOffset: 15
        }]
    }
})
const pieChart3 = new Chart(pieCanvas3, {
    type: "doughnut",
    data: {
        labels: ["Mature","Adulte","Jeune"],
        datasets: [{
            data:[121,54,2],
            backgroundColor: [
                "red","#9c5b01","white",
            ],
            hoverOffset: 15
        }]
    }
})