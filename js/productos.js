$(document).ready(()=>{
    const data = {
        autores: [
            {id: 1, name:"Dylan"},
            {id: 2, name:"Gabo"},
            {id: 3, name:"Keyla"},
            {id: 4, name: "Luna"},
            {id: 5, name: "Reichel"}
        ],
        idiomas: [
            { id: 1, name: "Ingles" },
            { id: 2, name: "Español" },
            { id: 3, name: "Alemán" }
        ]
    };
    localStorage.setItem("data", JSON.stringify(data));
})
const data = localStorage.getItem("userData");
console.log("data: ", JSON.parse(data));

