const image_wrapper_S = document.querySelectorAll(".image_wrapper")
const image_S = document.querySelectorAll(".image_wrapper img")


// image_S.forEach(image => {
//     image_wrapper.setAttribute("draggable", false)

//     image.ondragstart = (event)=>{
//         event.dataTransfer.setData("test/plain",  "fesenzap");
//         console.log(event.dataTransfer.getData);
//     }
// });

let wrapper_dragged = ""

image_wrapper_S.forEach(image_wrapper => {
    image_wrapper.setAttribute("draggable", true)
    
    image_wrapper.ondragstart = (event)=>{
        wrapper_dragged =  event.target
        console.log(wrapper_dragged);
        event.dataTransfer.setData("text/plain", image_wrapper.innerText);

        image_wrapper.classList.add("dragging")
        console.log("le dragstart vient de s' effectuer");        
    }

    image_wrapper.ondragover = (event)=>{
        event.preventDefault();
        console.log("le dragover vient de s' effectuer");
    }

    image_wrapper.ondragenter = ()=>{
        image_wrapper.classList.add("dragover")
        console.log("le dragenter vient de s' effectuer");
    }

    image_wrapper.ondragleave = ()=>{
        image_wrapper_S.forEach(image_wrapper => {
            image_wrapper.classList.remove("dragover")
        });
        console.log("le dragend vient de s' effectuer");
    }

    image_wrapper.ondrop = (event)=>{
        wrapper_dragged.innerText = event.target.innerText
        image_wrapper.innerText = event.dataTransfer.getData("text/plain")

    }

    image_wrapper.ondragend = ()=>{
        image_wrapper_S.forEach(image_wrapper => {
            image_wrapper.classList.remove("dragging")
            image_wrapper.classList.remove("dragover")
        });
        
    }
});