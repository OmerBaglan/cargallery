// ---------------SEARCH---------------
const Search =()=>{
    const Textİnput =document.getElementById("input-text").value.toUpperCase();
    const List =document.getElementById("list");
    const Car =document.querySelectorAll(".car");
    const CarName=List.getElementsByTagName("h2");


    for(let i=0; i< CarName.length;i++){
        let match = Car[i].getElementsByTagName("h2")[0];

        if(match){
            let TextCar = match.textContent || match.innerHTML;

            if(TextCar.toUpperCase().indexOf(Textİnput) > -1){
                Car[i].style.display="";
            }else{
                Car[i].style.display="none";
            }
        }
    }

}


const Gallery=document.getElementById("gallery");
const Container =document.getElementById("container");


Gallery.addEventListener("click",()=>{
    Container.classList.toggle("active")
    Gallery.classList.toggle("active-gallery")
})



