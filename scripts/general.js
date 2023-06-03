function shuffle(array) {
  let currentIndex=array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex=Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]]=[
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function generateId() {
  let id = '';
  let characters = '0123456789abcdefghijklmnopqrstuvwxyz';
  
  for (let i = 0; i < 26; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    id += characters.charAt(randomIndex);
  }
  
  return id;
}

function generareTime() {
  return {
    second: Math.floor(Math.random() * (61)),
    minute: Math.floor(Math.random() * (61)),
    hour:   Math.floor(Math.random() * (24))
  }
}