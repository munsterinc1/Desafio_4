const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src: "assets/img/img1.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src: "assets/img/img2.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src: "assets/img/img3.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src: "assets/img/img4.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src: "assets/img/img5.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src: "assets/img/img6.jpg",
      rooms: 5,
      m: 500
    }
  ];

const boton= document.querySelector(".boton")
const min= document.querySelector(".min")
const max= document.querySelector(".max")
const room= document.querySelector(".room")
const card = document.querySelector(".card");

let html=``;
    for (let casas of propiedadesJSON){
        html +=`
        <div class="propiedad"> 
            <img src=${casas.src}> 
            <h4>${casas.name}</h4>
            <p>Cuartos: ${casas.rooms}</p>
            <p>Metros: ${casas.m}</p>     
            <h5>${casas.description}</h5> 
            <button>ver más</button>           
        </div>`;
        }
    
    card.innerHTML = html;
    

boton.addEventListener("click",() =>{
if(min.value=="" || max.value=="" || room.value ==""){
    alert("faltan campos por llenar");
    return;
} else{
    let html=``;
    for (let casas of propiedadesJSON){
        if(casas.m >= min.value && casas.m <=max.value && casas.rooms == room.value){
        html +=`
        <div class="propiedad"> 
            <img src=${casas.src}> 
            <h4>${casas.name}</h4>
            <p>Cuartos: ${casas.rooms}</p>
            <p>Metros: ${casas.m}</p>     
            <h5>${casas.description}</h5> 
            <button>ver más</button>           
        </div>`;
        }
    
    card.innerHTML = html;
    }
    };
});    

