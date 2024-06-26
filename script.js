// decration 
let audio=document.getElementById('song')
let progress=document.getElementById('progress')
let ctrlicon=document.getElementById('playpause')
let songimg=document.getElementById('songimg')
let duration=document.getElementById('music_time')
let time=document.getElementById('music_duration')
let forwardbtn=document.getElementById("forwardbtn")
let backwardbtn=document.getElementById("previousbtn")
let addsongtitle=document.getElementById("stitle")
let manubtn=document.getElementById("manu")
let musiclist=document.getElementById("music_list")
let songdetail=document.getElementById("songdetail")
let backbtn=document.getElementById("back")
let manubar=document.getElementById("manubar")
let closelistsongsbtn=document.getElementById("closesonglist")
let min;
let sec;
let mint;
let secd;
let formattime;
var currentindex = 1;
let logicnumber=0;

 

audio.onloadedmetadata=function (){
    progress.max=audio.duration
    progress.value=audio.currentTime
}


// playpausebutton 
let playpausebtn = ()=>{
    if(ctrlicon.classList.contains('bx-pause')){
        audio.pause();
        ctrlicon.classList.add('bx-play')
        ctrlicon.classList.remove('bx-pause')
        songimg.classList.remove('circule')
    }   
    else{
        audio.play()
        ctrlicon.classList.add('bx-pause')
        ctrlicon.classList.remove('bx-play')
        songimg.classList.add('circule')
    }
}
   if(audio.play()){
    setInterval(()=>{
        progress.value=audio.currentTime
    },300);
   }
    progress.onchange=function(){
        audio.currentTime=progress.value
    }
setTimeout(()=>{
     format(audio.duration)
},300);
let format=(time)=>{
     min=Math.floor(time/60)
     sec=Math.floor(time%60)
 duration.innerHTML=`0${min}:${sec}`
}
setInterval(()=>{
     formattime=audio.currentTime
     mint=Math.floor(formattime/60)
     secd=Math.floor(formattime%60)
    time.innerHTML=`0${mint}:${secd}`
},1000)


// setup music
const setmusic=(currentindex)=>{
    audio.src=musicdata[currentindex].song;
    songimg.src=musicdata[currentindex].img
    addsongtitle.innerHTML=musicdata[currentindex].name 
    audio.pause();
    songimg.classList.remove('circule')
    ctrlicon.classList.add('bx-play')
    setTimeout(()=>{
        format(audio.duration)
   },300);
}


// forward the  songs 
forwardbtn.addEventListener ("click",()=>{
    if(currentindex>=musicdata.length){
        currentindex=0;
    }
    else{
        setmusic(currentindex)
        currentindex++;
    }
})


// backward the songs
backwardbtn.addEventListener ("click",()=>{
    if(currentindex>=0){
        currentindex--;
        setmusic(currentindex)
    }
    else{
        currentindex=musicdata.length-1
        setmusic(currentindex)
    }
})


// song list 
manubtn.addEventListener("click",()=>{
    musiclist.classList.add("list")
    musiclist.classList.remove("closeplaylist")
    let ul=document.createElement('ul')
    ul.setAttribute("id","playlist")
    musiclist.appendChild(ul)
    for(let i=0;i<musicdata.length;i++){
        music=`<li class="showplaysong" onclick="clicksong(${i})" id=songdetail><img src="${musicdata[i].img}" class="songsimg">
     <h1 class="songname">${musicdata[i].name}</h1></li><hr>`
     playlist.insertAdjacentHTML("beforeend",music); 
    }
})


// particular clicksong
function clicksong(currentmusic){
    setmusic(currentmusic)
    currentindex=currentmusic
    audio.play()
    ctrlicon.classList.add('bx-pause')
    ctrlicon.classList.remove('bx-play')
    songimg.classList.add('circule')
    songdetail.classList.toggle("showplaysong");
}
backbtn.addEventListener("click",()=>{
        document.getElementsByTagName("ul")[0].remove()
        musiclist.classList.remove("list")
        musiclist.classList.add("closeplaylist")
})















