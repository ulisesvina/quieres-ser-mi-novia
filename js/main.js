window.onload = () => {
    const yesBtn = document.getElementById("yes");
    const noBtn = document.getElementById("#no");
    
    const mvToRnd = () => {
        noBtn.style.left = Math.floor(Math.random()*window.screen.width).toString()+'px';
        noBtn.style.top = Math.floor(Math.random()*window.screen.height).toString()+'px';
    }
    
    yesBtn.onclick = () => alert("Ya sabía que querías");
    noBtn.onmouseover = () => mvToRnd();
    noBtn.onclick = () => mvToRnd();   
}
