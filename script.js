const memepage = document.querySelector(".memeform");
const imageInput = document.querySelector("#url");
const topTxt = document.querySelector("#text1");
const bottomTxt = document.querySelector("#text2");

let div1 = document.querySelector(' .mydiv');

 

let h = document.createElement("span")
let b =document.createElement("span")

memepage.addEventListener("submit", function(e){
    e.preventDefault();
        
    let key = imageInput.value;    
    reqImg(key); 
         
    let val = topTxt.value;
    addTopText(val);
    h.setAttribute('class','top');

    let message = bottomTxt.value;
    addBottomText(message);
    b.setAttribute('class','bottom')
    
    imageInput.value = '';
    topTxt.value = '';
    bottomTxt.value = '';
    

})


function reqImg (keys){ 
   
    let image = document.createElement("img");     
    image.setAttribute("src", keys)       
    div1.appendChild(image)  
    image.setAttribute('class','meme')    
}   
function addTopText(text){
    let newtext = document.createTextNode(text);
    div1.appendChild(h)    
    h.appendChild(newtext)

}
function addBottomText(note){
    let addtext = document.createTextNode(note);
    div1.appendChild(b); 
    b.appendChild(addtext)
      
}
div1.addEventListener('click', function(e){
    let touch = e.target.parentElement;
    touch.remove();
    new div1;
})




