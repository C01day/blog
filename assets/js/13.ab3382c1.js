(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{692:function(t,i,s){},792:function(t,i,s){s(2)({target:"Function",proto:!0},{bind:s(383)})},793:function(t,i,s){"use strict";s(692)},812:function(t,i,s){"use strict";s.r(i);s(792),s(380);var n={data:function(){return{audio:"",audioFile:"",imgLoaded:!1,currentlyPlaying:!1,currentlyStopped:!1,currentTime:0,checkingCurrentPositionInTrack:"",trackDuration:0,currentProgressBar:0,isPlaylistActive:!1,currentSong:0,musicPlaylist:[{title:"Radiant",artist:"塞壬唱片-MSR",url:"http://music.163.com/song/media/outer/url?id=1890402858.mp3",image:"https://web.hycdn.cn/siren/pic/20211101/733831c7d034b83dc78f783f8748cc65.jpg"},{title:"Immutable",artist:"塞壬唱片-MSR",url:"http://music.163.com/song/media/outer/url?id=1840976599.mp3",image:"https://web.hycdn.cn/siren/pic/20210501/01bdad2a0a6876eaee3c23bf0812a73a.png"},{title:"Stay Gold",artist:"塞壬唱片-MSR",url:"http://music.163.com/song/media/outer/url?id=1488275299.mp3",image:"https://web.hycdn.cn/siren/pic/20210322/430cb5399e272d97779cf5f13681628f.jpg"}]}},mounted:function(){this.changeSong(),this.audio.loop=!1},filters:{fancyTimeFormat:function(t){return(t-(t%=60))/60+(9<t?":":":0")+t}},methods:{togglePlaylist:function(){this.isPlaylistActive=!this.isPlaylistActive},nextSong:function(){this.currentSong<this.musicPlaylist.length-1&&this.changeSong(this.currentSong+1)},prevSong:function(){this.currentSong>0&&this.changeSong(this.currentSong-1)},changeSong:function(t){var i=this.currentlyPlaying;this.imageLoaded=!1,void 0!==t&&(this.stopAudio(),this.currentSong=t),this.audioFile=this.musicPlaylist[this.currentSong].url,this.audio=new Audio(this.audioFile);var s=this;this.audio.addEventListener("loadedmetadata",(function(){s.trackDuration=Math.round(this.duration)})),this.audio.addEventListener("ended",this.handleEnded),i&&this.playAudio()},isCurrentSong:function(t){return this.currentSong==t},getCurrentSong:function(t){return this.musicPlaylist[t].url},playAudio:function(){1==this.currentlyStopped&&this.currentSong+1==this.musicPlaylist.length&&(this.currentSong=0,this.changeSong()),this.currentlyPlaying?this.stopAudio():(this.getCurrentTimeEverySecond(!0),this.currentlyPlaying=!0,this.audio.play()),this.currentlyStopped=!1},stopAudio:function(){this.audio.pause(),this.currentlyPlaying=!1,this.pausedMusic()},handleEnded:function(){this.currentSong+1==this.musicPlaylist.length?(this.stopAudio(),this.currentlyPlaying=!1,this.currentlyStopped=!0):(this.currentlyPlaying=!1,this.currentSong++,this.changeSong(),this.playAudio())},onImageLoaded:function(){this.imgLoaded=!0},getCurrentTimeEverySecond:function(t){var i=this;this.checkingCurrentPositionInTrack=setTimeout(function(){i.currentTime=i.audio.currentTime,i.currentProgressBar=i.audio.currentTime/i.trackDuration*100,i.getCurrentTimeEverySecond(!0)}.bind(this),1e3)},pausedMusic:function(){clearTimeout(this.checkingCurrentPositionInTrack)},clickProgress:function(t){this.stopAudio(),this.updateBar(t.pageX)},updateBar:function(t){var i=this.$refs.progress,s=this.audio.duration,n=100*(t-i.getBoundingClientRect().left)/i.offsetWidth;n>100&&(n=100),n<0&&(n=0),this.audio.currentTime=s*n/100,this.currentTime=this.audio.currentTime,this.currentProgressBar=this.currentTime/this.trackDuration*100,this.playAudio()}},watch:{currentTime:function(){this.currentTime=Math.round(this.currentTime)}},beforeDestroy:function(){this.audio.removeEventListener("ended",this.handleEnded),this.audio.removeEventListener("loadedmetadata",this.handleEnded),clearTimeout(this.checkingCurrentPositionInTrack)}},e=(s(793),s(36)),a=Object(e.a)(n,(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("main",{staticClass:"audioPlayer",attrs:{id:"app"}},[s("a",{staticClass:"nav-icon",class:{isActive:t.isPlaylistActive},attrs:{title:"Music List"},on:{click:function(i){t.isPlaylistActive=!t.isPlaylistActive}}},[s("span"),t._v(" "),s("span"),t._v(" "),s("span")]),t._v(" "),s("div",{staticClass:"audioPlayerList",class:{isActive:t.isPlaylistActive}},t._l(t.musicPlaylist,(function(i,n){return s("div",{key:n,staticClass:"item",class:{isActive:t.isCurrentSong(n)},on:{click:function(i){t.changeSong(n),t.isPlaylistActive=!t.isPlaylistActive}}},[s("p",{staticClass:"title"},[t._v(t._s(i.title))]),t._v(" "),s("p",{staticClass:"artist"},[t._v(t._s(i.artist))])])})),0),t._v(" "),s("div",{staticClass:"audioPlayerUI",class:{isDisabled:t.isPlaylistActive}},[s("div",{staticClass:"albumImage"},[s("transition",{attrs:{name:"fade",mode:"out-in",type:"transition"}},[s("div",{key:t.currentSong,class:["disc-back",t.currentlyPlaying?"":"paused"]},[s("img",{staticClass:"disc",attrs:{src:t.$withBase("/img/disc.png"),ondragstart:"return false;"},on:{load:function(i){return t.onImageLoaded()}}}),t._v(" "),s("img",{staticClass:"poster",attrs:{src:t.musicPlaylist[t.currentSong].image,ondragstart:"return false;"},on:{load:function(i){return t.onImageLoaded()}}})])]),t._v(" "),s("div",{key:t.currentSong,staticClass:"loader"},[t._v("Loading...")])],1),t._v(" "),s("div",{staticClass:"albumDetails"},[s("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[s("p",{key:t.currentSong,staticClass:"title"},[t._v(t._s(t.musicPlaylist[t.currentSong].title))])]),t._v(" "),s("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[s("p",{key:t.currentSong,staticClass:"artist"},[t._v(t._s(t.musicPlaylist[t.currentSong].artist))])]),t._v(" "),s("transition",{attrs:{name:"slide-fade",mode:"out-in",type:"transition"}},[s("div",{key:t.currentSong,staticClass:"page-container"},[s("div",{class:["wave-container",t.currentlyPlaying?"":"paused"]},t._l(20,(function(t){return s("div",{key:t,staticClass:"wave-bar"})})),0)])])],1),t._v(" "),s("div",{staticClass:"playerButtons"},[s("a",{staticClass:"button",class:{isDisabled:0==t.currentSong},attrs:{title:"Previous Song"},on:{click:function(i){return t.prevSong()}}},[s("v-icon",{staticClass:"icon",attrs:{name:"bi-skip-start-fill",scale:"2"}})],1),t._v(" "),s("a",{staticClass:"button play",attrs:{title:"Play/Pause Song"},on:{click:function(i){return t.playAudio()}}},[s("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[s("v-icon",{key:1,staticClass:"icon",attrs:{name:t.currentlyStopped?"bi-play-circle-fill":t.currentlyPlaying?"hi-solid-pause":"bi-play-circle-fill",scale:"2",fill:"red"}})],1)],1),t._v(" "),s("a",{staticClass:"button",class:{isDisabled:t.currentSong==t.musicPlaylist.length-1},attrs:{title:"Next Song"},on:{click:function(i){return t.nextSong()}}},[s("v-icon",{staticClass:"icon",attrs:{name:"bi-skip-end-fill",scale:"2"}})],1)]),t._v(" "),s("div",{staticClass:"timeAndProgress"},[s("div",{staticClass:"currentTimeContainer",staticStyle:{"text-align":"center"}},[s("span",{staticClass:"currentTime"},[t._v(t._s(t._f("fancyTimeFormat")(t.currentTime)))]),t._v(" "),s("span",{staticClass:"totalTime"},[t._v(" "+t._s(t._f("fancyTimeFormat")(t.trackDuration)))])]),t._v(" "),s("div",{ref:"progress",staticClass:"currentProgressBar",on:{click:t.clickProgress}},[s("div",{staticClass:"currentProgress",style:{width:t.currentProgressBar+"%"}})])])])])}),[],!1,null,"a18d3a7a",null);i.default=a.exports}}]);