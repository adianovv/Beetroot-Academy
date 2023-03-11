'use strict'

const playList = [

    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },

    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },

    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },

    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },

    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },

    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },

    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },

    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

viewSongList();

function viewSongList() {
    let songList = document.getElementById('song_list');
   playList.forEach((pageElement) => {
       let songListItem = document.createElement('li');
       songListItem.innerText = `${pageElement.author} - ${pageElement.song}`;
       songList.appendChild(songListItem);
   });
}


// traffic light

const redLight = document.getElementById('red');
const yellowLight = document.getElementById('yellow');
const greenLight = document.getElementById('green');
const button = document.getElementById('next_color');

button.addEventListener('click', function () {
    if (redLight.classList.contains('traffic_red')) {
        redLight.classList.remove('traffic_red');
        yellowLight.classList.add('traffic_yellow');
    } else if (yellowLight.classList.contains('traffic_yellow')) {
        yellowLight.classList.remove('traffic_yellow');
        greenLight.classList.add('traffic_green');
    } else if (greenLight.classList.contains('traffic_green')) {
        greenLight.classList.remove('traffic_green');
        redLight.classList.add('traffic_red');
    }
})

