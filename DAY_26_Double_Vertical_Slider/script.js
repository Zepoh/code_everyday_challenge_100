let block_text = document.querySelector(".text .content_wrapper")
let block_image = document.querySelector(".image .content_wrapper")


let button_up = document.querySelector("#button_up")
let button_down = document.querySelector("#button_down")

let index_table_S = [0,1,2,3]
let index_table = 0


console.log("Verification de selection" , block_text);

button_up.addEventListener("click", ()=>{
    update_index(1)
    display_image()
})

button_down.addEventListener("click", ()=>{
    update_index(-1)
    display_image()
})

function update_index(number) {
    index_table += number
// ce qui suis c' est juste pour que l' index ne depasse pas les valeurs du tableau
    if (index_table < 0) {
        index_table = index_table_S.length - 1
    }
    if (index_table >= index_table_S.length ) {
        index_table = 0
    }
}

function display_image() {
    console.log("index actuel : ", index_table);
    console.log("translation_image : ", translation_image);

    let translation_image = index_table_S[index_table] * 100
    let translation_text = index_table_S[ index_table_S.length -1 -index_table] * 100
    block_image.style.transform = `translateY(-${translation_image}vh)`

    block_text.style.transform = `translateY(-${translation_text}vh)`

}



