let videoGridHTML = '';

shuffle(videos);

videos.forEach(video => {
videoGridHTML += `
  <div class="video-preview">
  <div class="thumbnail-container">
    <img class="thumbnail" src="images/thumbnails/${video.thumbnailLink}">
    <div class="video-time">${video.filmLenght}</div>
  </div>
  <div class="video-info-grid">
    <div class="channel-picture-container">
      <img class="channel-picture"
      src="images/profile-pictures/${video.channel.pictureLink}">
      <div class="channel-tooltip">
        <div class="channel-tooltip-img-container">
          <img src="images/profile-pictures/${video.channel.pictureLink}">
        </div>
        <div class="channel-tooltip-info">
          <div class="channel-tooltip-name">${video.channel.name}</div>
          <div class="channel-tooltip-sub-count">${roundSubscribers(video.channel.subscribers)} subscribers</div>
        </div>
      </div>
    </div>
    <div class="video-info">
      <p class="video-title">
        ${video.name}
      </p>
      <p class="video-author">
        ${video.channel.name}
      </p>
      <p class="video-stats">
        ${roundSubscribers(video.views)} views &#183; ${roundVideoAge(video.upload)}
      </p>
    </div>
  </div>
  </div>
`
});

document.querySelector('.js-video-grid').innerHTML = videoGridHTML;

//DEFINED FUNCTIONS

function roundSubscribers(subscribers) {
    
  const roundDown = (value) => Math.round(value - 0.5);

  const K = 1000;
  const M = 1000000;
  const B = 1000000000;

  if(subscribers < K) {return `${subscribers}`};
  if(subscribers < M) {return `${roundDown((subscribers)/K)}K`};
  if(subscribers < B) {return `${roundDown((subscribers)/M)}M`};
  return `${subscribers/B}B`
}

function roundVideoAge(videoUpload) {
  let now = new Date();

  elapsedTime = //In Seconds
  (now.getFullYear()-videoUpload.date.year) * 31556926 + 
  ((now.getMonth()+1)-videoUpload.date.month) * 2629744 + 
  (now.getDate()-videoUpload.date.day) * 86400 + 
  (now.getHours()-videoUpload.time.hour) * 3600 + 
  (now.getMinutes()-videoUpload.time.minute) * 60 +
  (now.getSeconds()-videoUpload.time.second);

  const roundDown = (value) => Math.round(value - 0.5);

  console.log(elapsedTime);

  if (elapsedTime < 1) {return}
  if (elapsedTime === 1) {return `1 second ago`}
  if (elapsedTime < 60) {return `${elapsedTime} seconds ago`}
  if (elapsedTime < 119) {return `1 minute ago`}
  if (elapsedTime < 3600) {return `${roundDown(elapsedTime/60)} minuts ago`}
  if (elapsedTime < 7199) {return `1 hour ago`}
  if (elapsedTime < 86400) {return `${roundDown(elapsedTime/3600)} hours ago`}
  if (elapsedTime < 86400) {return `${roundDown(elapsedTime / 3600)} hours ago`}
  if (elapsedTime < 172800) {return "1 day ago"}
  if (elapsedTime < 1209600) {return `${roundDown(elapsedTime / 86400)} days ago`}
  if (elapsedTime < 1814400) {return `2 weeks ago`}
  if (elapsedTime < 2419200) {return `3 weeks ago`}
  if (elapsedTime < 2678400) {return `4 weeks ago`}
  if (elapsedTime < 5184000) {return `1 month ago`}
  if (elapsedTime < 31536000) {return `${roundDown(elapsedTime / 2592000)} months ago`}
  if (elapsedTime < 63072000) {return `1 year ago`}
  return `${roundDown(elapsedTime / 31536000)} years ago`;
}

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


