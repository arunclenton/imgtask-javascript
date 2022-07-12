var increase = document.getElementsByClassName('in')[0];

increase.addEventListener('click',function(){


var img = document.querySelector('img');
var currentwidth = img.width;

if(currentwidth < 300){
console.log(currentwidth)

 img.style.width =(currentwidth + 30) +'px';
}
 })

 var decrease =document.getElementsByClassName('out')[0];
 
 decrease.addEventListener('click',function(){
  
    var img = document.querySelector('img');

    var currentwidth = img.width;
    if(currentwidth > 50){
      console.log(currentwidth)

    img.style.width =(img.width - 30) +'px';
    }
 })
 
