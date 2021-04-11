window.onload = _ => {
    const yesBtn = document.querySelector("#yes");
    const noBtn = document.querySelector("#no");
    
    const mvToRnd = _ => {
        noBtn.style.left = Math.floor(Math.random()*99).toString()+'px';
        noBtn.style.top = Math.floor(Math.random()*99).toString()+'px';
    }
    
    yesBtn.onclick = _ => alert("Ya sabía que querías");
    noBtn.onmouseover = _ => mvToRnd();
    noBtn.onclick = _ => mvToRnd();   
}
