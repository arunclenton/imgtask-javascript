var increase = document.getElementsByClassName('in')[0];

// 

increase.addEventListener('click',function(){

// c
var img = document.querySelector('img');
// console.log(img)
var currentwidth = img.width;
console.log(img.width)

 img.style.width =(img.width + 30) +'px';
 })

 var decrease =document.getElementsByClassName('out')[0];

 decrease.addEventListener('click',function(){

// console.log('arun')
    var img = document.querySelector('img');
    // console.log(img)

    img.style.width =(img.width - 30) +'px';
 })
 
