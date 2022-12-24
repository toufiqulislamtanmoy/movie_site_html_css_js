const DragArea = document.querySelector(".poster"),

button=DragArea.querySelector("button"),
input=DragArea.querySelector("input");
let file;

/*button.onclick =()=>{
    input.click();
    DragArea.classList.add("active");
}*/

input.addEventListener("change", function(){
    file=this.files[0];
    DragArea.classList.add("active");
    showFile();
   
});

DragArea.addEventListener("dragover",(event) =>{
    event.preventDefault();
    //console.log("File Is draged");
    DragArea.classList.add("active");

});

DragArea.addEventListener("dragleave",() =>{
    //console.log("File Is draged lave");
    DragArea.classList.remove("active");

});

DragArea.addEventListener("drop",(event) =>{
    event.preventDefault();
    file=event.dataTransfer.files[0];
    showFile();
});

function showFile(){
    let fileType = file.type
    console.log(fileType);
    let valideExtention = ['image/jpeg','image/jpg','image/png'];
    if(valideExtention.includes(fileType)){
        let fileReader = new FileReader();
        fileReader.onload=()=>{
            let fileUrl=fileReader.result;
            let imgTag=`<img src= "${fileUrl}" alt="Image not found">`;
            DragArea.innerHTML=imgTag;
            console.log(fileUrl);
            DragArea.classList.remove("active");
            DragArea.style.padding="0";
            DragArea.style.border="none";
        }
        fileReader.readAsDataURL(file);
    }else{
        console.log("This Is NOT AN IMAGE FILE");
        DragArea.classList.remove("active");
    }
}

