

///////////////all global variables/////////////////////////////////////
let imgList = Array.from(document.getElementsByClassName(`img-items`));
let light = document.querySelector(`.light`);
let next = document.getElementById(`next`);
let previous = document.getElementById(`previous`);
let close = document.getElementById(`close`);
let index;
///////////////////////////////////////////////////////////////////////////////////////////


//////////////////////// click on pic function/////////////////

for (let i = 0; i < imgList.length; i++) {

    imgList[i].addEventListener(`click`,function(e){
       
       light.classList.remove(`d-none`);

      let imgTarget= e.target.getAttribute(`src`);
      document.querySelector(`.light-in`).style.backgroundImage=`url(${imgTarget})`;

          index =imgList.indexOf(e.target);

        
    })
}
/////////////////////////////////////////////////////////////////////////////////////////////////

////////////next function///////////////////////////////////////////


function nextSlide ()
{

  index++;
  if(index==imgList.length)
  {
      index=0
  }
  let newSource =imgList[index].getAttribute(`src`);
  document.querySelector(`.light-in`).style.backgroundImage=`url(${newSource})`;
 

}

next.addEventListener(`click`,nextSlide)

////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////previous function /////////////////////

function previousSlide ()
{

    index--;
    if(index < 0)
    {
        index=imgList.length-1
    }
    let newSource =imgList[index].getAttribute(`src`);
    document.querySelector(`.light-in`).style.backgroundImage=`url(${newSource})`;
   
  
  }
  
  previous.addEventListener(`click`,previousSlide)

///////////////////////////////////////////////////////////////////////////////////////////////////////

function deleteImg ()
{

  
light.classList.add(`d-none`)


}
close.addEventListener(`click`,deleteImg)



document.addEventListener(`keydown`,function(e){

 if(e.key==`ArrowRight`)
 {
  nextSlide ()
 }
 else if (e.key==`ArrowLeft`)
 {
  previousSlide ()
 }
 else if (e.key==`Escape`)
 {
  deleteImg ()
 }

})