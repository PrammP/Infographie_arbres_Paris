let checkboxes = document.querySelectorAll(".checkbox");

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
