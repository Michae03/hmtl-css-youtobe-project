const videos = [
  {
    id: generateId(),
    name: "Talking Tech and AI with Google CEO Sundar Pichai!",
    thumbnailLink: "thumbnail-1.webp",
    filmLength: "14:21",
    views: 4212245,
    upload: {
      date: {
        year: 2021,
        month: 5,
        day: 21
      },
      time: {
        hour: 15,
        minute: 32,
        second: 54
      }
    },
    channel: {
      name: "Marques Brownlee",
      subscribers: 15000432,
      pictureLink: "channel-1.jpeg"
    },
    tags: [
      "technology",
      "ai",
      "google",
      "artifitial",
      "inteligence"
    ],
    link: 'https://www.youtube.com/watch?v=n2RNcPRtAiY'
  }, {
    id: generateId(),
    name: "Try Not To Laugh Challenge #9",
    thumbnailLink: "thumbnail-2.webp",
    filmLength: "8:22",
    views: 20543224,
    upload: {
      date: {
        year: 2017,
        month: 9,
        day: 16
      },
      time: {
        hour: 13,
        minute: 21,
        second: 11
      }
    },
    channel: {
      name: "Markiplier",
      subscribers: 34954312,
      pictureLink: "channel-2.jpeg"
    },
    tags: [
      "funny",
      "laugh",
      "challenge",
      "crazy",
      "disaster",
      "tiktok"
    ],
    link: "https://www.youtube.com/watch?v=mP0RAo9SKZk"
  }, {
    id: generateId(),
    name: "Crazy Tik Toks Taken Moments Before DISASTER",
    thumbnailLink: "thumbnail-3.webp",
    filmLength: "9:12",
    views: 14122312,
    upload: {
      date: {
        year: 2020,
        month: 7,
        day: 9
      },
      time: {
        hour: 18,
        minute: 0,
        second: 0
      }
    },
    channel: {
      name: "SSSniperWolf",
      subscribers: 33512300,
      pictureLink: "channel-3.jpeg"
    },
    tags: [
      "funny",
      "laugh",
      "challenge",
      "crazy",
      "disaster",
      "tiktok"
    ],
    link: "https://www.youtube.com/watch?v=FgjPQQeTh1w"
  }, {
    id: generateId(),
    name: "Attack on Titan [ AMV ] Warriors - Imagine Dragons",
    thumbnailLink: "hq720.jpg",
    filmLength: "2:47",
    views: 2652470,
    upload: {
      date: {
        year: 2015,
        month: 3,
        day: 20
      },
      time: {
        hour: 18,
        minute: 2,
        second: 11
      }
    },
    channel: {
      name: "Amy Chickadee",
      subscribers: 3682,
      pictureLink: "unnamed.jpg"
    },
    tags: [
      "anime",
      "imagine",
      "dragons",
      "attack",
      "titan",
      "music"
    ],
    link: "https://www.youtube.com/watch?v=6glSbKvVyUA&t"
  }, {
    id: generateId(),
    name: "The Simplest Math Problem No One Can Solve - Collatz Conjecture",
    thumbnailLink: "thumbnail-4.webp",
    filmLength: "22:09",
    views: 34654334,
    upload: {
      date: {
        year: 2021,
        month: 7,
        day: 31
      },
      time: {
        hour: 11,
        minute: 30,
        second: 0
      }
    },
    channel: {
      name: "Veritasium",
      subscribers: 13722312,
      pictureLink: "channel-4.jpeg"
    },
    tags: [
      "math",
      "problem",
      "equation",
      "solve",
      "diffucult"
    ],
    link: "https://www.youtube.com/watch?v=094y1Z2wpJg"
  }, {
    id: generateId(),
    name: "Kadane's Algorithm to Maximum Sum Subarray Problem",
    thumbnailLink: "thumbnail-5.webp",
    filmLength: "11:16",
    views: 634000,
    upload: {
      date: {
        year: 2016,
        month: 9,
        day: 3
      },
      time: {
        hour: 9,
        minute: 21,
        second: 0
      }
    },
    channel: {
      name: "CS Dojo",
      subscribers: 1932221,
      pictureLink: "channel-5.jpeg"
    },
    tags: [
      "math",
      "problem",
      "sum", 
      "algorithm"
    ],
    link: "https://www.youtube.com/watch?v=86CQq3pKSUw"
  }, {
    id: generateId(),
    name: "Dead by Daylight | Resident Evil™: PROJECT W | Official Trailer",
    thumbnailLink: "thumbnail-dbd-trailer-wesker.jpg",
    filmLength: "1:15",
    views: 2521591,
    upload: {
      date: {
        year: 2022,
        month: 8,
        day: 3
      },
      time: {
        hour: 12,
        minute: 6,
        second: 2
      }
    },
    channel: {
      name: "Dead by Daylight",
      subscribers: 1000001,
      pictureLink: "channels4_profile.jpg"
    },
    tags: [
      "game",
      "wesker",
      "dead",
      "daylight",
      "trailer",
      "resident",
      "evil",
      "projekt",
      "ada-wong",
      "rebeca-chambers",
      "racoon",
      "killer",
      "survivors"
    ],
    link: "https://www.youtube.com/watch?v=QMEFfoaNX34"
  }, {
    id: generateId(),
    name: "Anything You Can Fit In The Circle I&#8217;ll Pay For",
    thumbnailLink: "thumbnail-6.webp",
    filmLength: "20:00",
    views: 229311302,
    upload: {
      date: {
        year: 2020,
        month: 3,
        day: 7
      },
      time: {
        hour: 11,
        minute: 30,
        second: 0
      }
    },
    channel: {
      name: "MrBeast",
      subscribers: 156222012,
      pictureLink: "channel-6.jpeg"
    },
    tags: [
      "money",
      "spent",
      "circle",
      "challenge"
    ],
    link: "https://www.youtube.com/watch?v=yXWw0_UfSFg"
  }, {
    id: generateId(),
    name: "FIFTY FIFTY (피프티피프티) - 'Cupid' Official MV",
    thumbnailLink: "cupid-fifty-fifty.jpg",
    filmLength: "3:23",
    views: 73944554,
    upload: {
      date: {
        year: 2023,
        month: 2,
        day: 23
      },
      time: {
        hour: 9,
        minute: 15,
        second: 6
      }
    },
    channel: {
      name: "FIFTY FIFTY Official",
      subscribers: 1170001,
      pictureLink: "fifty-fifty-profile.jpg"
    },
    tags: [
      "kpop",
      "music",
      "girls",
      "music-video",
      "cupid",
      "korean",
      "pop"
    ],
    link: "https://www.youtube.com/watch?v=Qc7_zRjH808"
  }, {
    id: generateId(),
    name: "Barbie | Main Trailer",
    thumbnailLink: "barbie-movie-trailer.jpg",
    filmLength: "2:42",
    views: 27823704,
    upload: {
      date: {
        year: 2023,
        month: 5,
        day: 25
      },
      time: {
        hour: 9,
        minute: 15,
        second: 6
      }
    },
    channel: {
      name: "Warner Bros. Pictures",
      subscribers: 10900001,
      pictureLink: "wb-profile.jpg"
    },
    tags: [
      "trailer",
      "barbie",
      "movie",
      "film",
      "margot",
      "robbie",
      "ryan",
      "gosling",
      "disney",
      "cinema",
      "ken",
      "pink"
    ],
   link:"https://www.youtube.com/watch?v=pBk4NYhWNMM"
  }, {
    id: generateId(),
    name: "Tame Impala - Lost in Yesterday (Official Video)",
    thumbnailLink: "tame-impala.jpg",
    filmLength: "4:19",
    views: 23835633,
    upload: {
      date: {
        year: 2020,
        month: 1,
        day: 30
      },
      time: {
        hour: 11,
        minute: 13,
        second: 30
      }
    },
    channel: {
      name: "Tame Impala",
      subscribers: 2340001,
      pictureLink: "impala-profile.jpg"
    },
    tags: [
      "music",
      "tame",
      "impala",
      "vocal",
      "guitar"

    ],
   link:"https://www.youtube.com/watch?v=utCjuKDXQsE"
  }, {
    id: generateId(),
    name: "『チェンソーマン』ノンクレジットオープニング / CHAINSAW MAN Opening│米津玄師 「KICK BACK」",
    thumbnailLink: "chainsaw-man-opening.jpg",
    filmLength: "1:30",
    views: 78606580,
    upload: {
      date: {
        year: 2022,
        month: 10,
        day: 11
      },
      time: {
        hour: 7,
        minute: 30,
        second: 1
      }
    },
    channel: {
      name: "MAPPA CHANNEL",
      subscribers: 1290001,
      pictureLink: "mappa-profile.jpg"
    },
    tags: [
      "music",
      "chainsaw",
      "man",
      "anime",
      "makima",
      "denji",
      "opening",
      "mappa",
      "kick",
      "back",

    ],
   link:"https://www.youtube.com/watch?v=dFlDRhvM4L0"
  }, {
    id: generateId(),
    name: "Ultimate Wild Animals Collection in 8K ULTRA HD / 8K TV",
    thumbnailLink: "animal-8k.jpg",
    filmLength: "16:28",
    views: 75812117,
    upload: {
      date: {
        year: 2021,
        month: 1,
        day: 24
      },
      time: {
        hour: 7,
        minute: 30,
        second: 1
      }
    },
    channel: {
      name: "8K VIDEOS ULTRA HD",
      subscribers: 797001,
      pictureLink: "8k-channel.jpg"
    },
    tags: [
      "animals",
      "wild",
      "tigers",
      "quality",
      "wolfs",
      "bears",
      "8k",
      "nature",
      "monkey",
      "carnivore",
      "mammal",
    ],
   link:"https://www.youtube.com/watch?v=Zv11L-ZfrSg"
  }, {
    id: generateId(),
    name: "We let him cook TOO much... | Texas Chain Saw Massacre",
    thumbnailLink: "cook_afk.jpg",
    filmLength: "11:11",
    views: 208158,
    upload: {
      date: {
        year: 2023,
        month: 5,
        day: 31
      },
      time: {
        hour: generareTime().hour,
        minute: generareTime().minute,
        second: generareTime().second
      }
    },
    channel: {
      name: "not Otzdarva",
      subscribers: 912931,
      pictureLink: "not_otzdarva_profile.jpg"
    },
    tags: [
      "texas",
      "chainsaw",
      "massacre",
      "game",
      "afk",
      "bubba",
      "leatherface",
      "cook"
    ],
   link:"https://www.youtube.com/watch?v=eCm3zicMJ2Y"
  }
]
//TEMPLATE
/*
 {
    id: generateId(),
    name: "",
    thumbnailLink: "",
    filmLength: "",
    views: ,
    upload: {
      date: {
        year: ,
        month: ,
        day: 
      },
      time: {
        hour: generareTime().hour,
        minute: generareTime().minute,
        second: generareTime().second
      }
    },
    channel: {
      name: "",
      subscribers: ,
      pictureLink: ""
    },
    tags: [
      
    ],
   link:""
  }
*/


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