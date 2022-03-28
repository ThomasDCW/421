const playbutton = document.getElementById('playbutton');
playbutton.addEventListener('click',function(){
    let results = []
    for(let i=0; i<3; i++){
        results.push(Math.floor(Math.random()*6 +1));       
    }
    playbutton.innerHTML= results
    return results
}
);
// const playbutton = dice.innerHTML;
