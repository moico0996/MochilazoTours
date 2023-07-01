var myVideo = document.getElementById("video1"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    myVideo.width = 560; 
} 

function makeSmall() { 
    myVideo.width = 320; 
} 

function makeNormal() { 
    myVideo.width = 420; 
};



document.addEventListener('keyup', e=>{
  if(e.target.matches('#buscador')){
    document.querySelectorAll('.articulos').forEach(fruta=>{
      fruta.textContent.toLowerCase().includes(e.target.value)
      ?fruta.classList.remove('filtro')
      :fruta.classList.add('filtro');

    })

  }
})