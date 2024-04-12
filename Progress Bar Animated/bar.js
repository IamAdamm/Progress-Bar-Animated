let progress = document.getElementById('progress')
let counter = 0

setInterval(() => {
    if(counter === 65){
        clearInterval()
    } else {
    counter += 1;
    progress.innerHTML = counter + '%'
}},30.77)