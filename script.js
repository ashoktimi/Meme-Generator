const memepage = document.querySelector(".memeform");
const imageInput = document.querySelector("#url");
const topTxt = document.querySelector("#text1");
const bottomTxt = document.querySelector("#text2");
let div1 = document.querySelector('.mydiv'); 

memepage.addEventListener("submit", function(e){
    e.preventDefault();
    let div = document.createElement('div');
    div1.appendChild(div)
    div.setAttribute('class', 'newDiv');

    let key = imageInput.value;
    let val = topTxt.value;
    let message = bottomTxt.value; 


    reqImg(key,val,message, div);
    div.addEventListener('click', function(e){
        e.preventDefault();
        let touch = e.target.parentElement;
        touch.remove();
})
});
function reqImg (keys,text,note, div){   
    imageInput.value = '';
    topTxt.value = '';
    bottomTxt.value = ''; 
    let image = document.createElement("img");
    image.classList.add("meme")    
    image.setAttribute("src", keys)       
    div.appendChild(image) 

    let header_text = document.createElement('h2')
        header_text.classList.add("top")
        header_text.innerText = text
        div.appendChild(header_text)

    let footer_text = document.createElement('h2')
        footer_text.classList.add("bottom")
        footer_text.innerText = note
        div.appendChild(footer_text);    
  
    return reqImg;
}