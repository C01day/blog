<template>
<div class="audioPlayer">
	<a href="https://github.com/C01day/music-player" class="github-corner" aria-label="View source on GitHub" target="_blank">
		<svg width="80" height="80" viewBox="0 0 250 250" style="fill:#FF0000; color:#FFF; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">
			<path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
			<path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
			<path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
		</svg>
	</a>
	<a class="nav-icon" @click="isPlaylistActive=!isPlaylistActive" :class="{'isActive': isPlaylistActive}" title="Music List">
			<span></span>
			<span></span>
			<span></span>
	</a>
	<div class="audioPlayerList" :class="{'isActive': isPlaylistActive}">
		<div class="item" v-for="(item,index) in musicPlaylist" :class="{ 'isActive':isCurrentSong(index) }" @click="changeSong(index),isPlaylistActive=!isPlaylistActive" :key="index">
			<p class="title">{{ item.title }}</p>
			<p class="artist">{{ item.artist }}</p>
		</div>
	</div>
	<div class="audioPlayerUI" :class="{'isDisabled': isPlaylistActive}">
		<div class="albumImage">
			<transition name="fade" mode="out-in" type='transition' appear>
				<div :class="['disc-back', currentlyPlaying ? '' : 'paused']" :key="currentSong">
					<img :src="$withBase('/img/disc.png')" ondragstart="return false;" class="disc">
					<img v-if="posterLoad" :src="musicPlaylist[currentSong].image" ondragstart="return false;" class="poster">
				</div>
			</transition>
			<!-- <div class="loader" :key="currentSong">Loading...</div> -->
		</div>
		<div class="albumDetails">
			<transition name="slide-fade" mode="out-in" appear>
				<p class="title" :key="currentSong">{{ musicPlaylist[currentSong].title }}</p>
			</transition>
			<transition name="slide-fade" mode="out-in" appear>
				<p class="artist" :key="currentSong">{{ musicPlaylist[currentSong].artist }}</p>
			</transition>
			<transition name="slide-fade" mode="out-in" type='transition' appear>
				<div class="page-container" :key="currentSong">
					<div :class="['wave-container', currentlyPlaying ? '' : 'paused']">
						<div v-for="index in 20" :key="index" class="wave-bar"></div>
					</div>
				</div>
			</transition>
		</div>

		<div class="playerButtons">
			<a class="button" @click="prevSong()" title="Previous Song"><v-icon name="bi-skip-start-fill" class="icon" scale="2" /></a>
			<transition name="fade" mode="out-in" appear>
				<a class="button play" @click="playPauseAudio()" title="Play/Pause Song" :key="currentSong + currentlyPlaying">
					<v-icon :name="currentlyPlaying ? 'hi-solid-pause' : 'bi-play-circle-fill' " :key="1" class="icon" scale="2" fill="red"/>
				</a>
			</transition>
			<a class="button" @click="nextSong()" title="Next Song"><v-icon name="bi-skip-end-fill" class="icon" scale="2" /></a>
			<transition name="mode-slide-fade" mode="out-in">
				<a class="button" id="mode" @click="nextMode()" :title="Mode[modeIndex].title" :key="modeIndex"><v-icon :name="Mode[modeIndex].icon" class="icon" scale="1.2" /></a>
			</transition>
		</div>

		<div class="timeAndProgress">
			<div class="currentTimeContainer">
				<span class="currentTime">{{ currentTimeShow }}</span>
				<span class="totalTime"> {{ trackDurationShow }}</span>
			</div>

			<div class="currentProgressBar" ref="progress" @click="clickProgress">
				<div class="currentProgress" :style="{ width: currentProgressBar + '%' }"></div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
				audio: "",
				audioFile: "",
				imgLoaded: false,
				currentlyPlaying: false,
				isPlaylistActive: false,
				posterLoad: false,
				modeIndex: 0,
				currentSong: 0,
				currentTime: 0,
				trackDuration: 0,
				currentProgressBar: 0,
				checkingCurrentPositionInTrack: "",
				musicPlaylist: [
				{
						id: "1995166023",
						title: "Fake Love (Orchestral Version)",
						artist: "MDP",
					},
					{
						id: "2068111443",
						title: "Miss You",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20230731/a34ad60a289a701a01b76a09eb81d6cf.jpg",
					},
					{
						id: "2060731820",
						title: "Mortal Eye",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20230704/9e91da5698c3902a431da7eadb7dde98.jpg",
					},
					{
						id: "2042920491",
						title: "The cure",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20230427/840c552b50612166caa8ee52ac7f6654.jpg",
					},
					{
						id: "2042872786",
						title: "Dormant Craving",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20230427/cee3ccefac83068107f90baf7adaa58d.jpg",
					},
					{
						id: "2042849489",
						title: "Morning Dew",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20230427/b60c8297f9a8f12a161fbf3524474b60.jpg",
					},
					{
						id: "2006550948",
						title: "Flame Shadow",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20221215/fb2e10e1dc62ae835f472c6ac27258b8.jpg",
					},
					{
						id: "1993340899",
						title: "Sentenced",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20221102/b332ec19df34c372e56e2c9a7c8588ac.jpg",
					},
					{
						id: "1990154664",
						title: "Running In The Dark",
						artist: "塞壬唱片-MSR",
						image: "https://p1.music.126.net/xxQXfMnMlJyMlydzVsRcag==/109951167974724190.jpg",
					},
					{
						id: "1988460950",
						title: "Rekindle",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20221012/2f8846f585301f0cd6892db6bf1f3769.jpg",
					},
					{
						id: "1978870845",
						title: "Ensheath",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20220907/f4fbe128f184c617df3c597bcefb6687.jpg",
					},
					{
						id: "1975296386",
						title: "Operation Ashring",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20220826/5dff26633eccf4654a47098f0f45387f.jpg",
					},
					{
						id: "1971052096",
						title: "Undertopia",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20220811/3de44c2c9bd878319779fd5c6f870bab.jpg",
					},
					{
						id: "1948689820",
						title: "Operation Deepness",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20220520/e5cc4eff1a6b7ebd69072470238b5fe2.jpg",
					},
					{
						id: "1941658812",
						title: "Bluish Light",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20220503/6fbb2ddca4efb6bb4ff4ead791fb447e.jpg",
					},
					{
						id: "1941656969",
						title: "Rapier",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20220502/b08a1ada5fa2a6937ae6c1208a40cb93.jpg",
					},
					{
						id: "1941653825",
						title: "Awaken",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20220501/7c4d1d285ef83744b167bbdadb29d239.jpg",
					},
					{
						id: "1936324213",
						title: "March On!",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20220413/784addeeb3f6bd9cd001e3021f3483da.jpg",
					},
					{
						id: "1927441611",
						title: "Eternal Flame",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20220314/a79347b6d2e3a57874b552699ce9ee2c.jpg",
					},
					{
						id: "1922637266",
						title: "Operation Dawnseeker",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20220225/78ad118924912a39738aaeaf252be1a6.jpg",
					},
					{
						id: "1893260974",
						title: "Operation Lead Seal",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20211109/e72022facca61c0ddfb0ab82c8e515b7.jpg",
					},
					{
						id: "1890402858",
						title: "Radiant",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20211101/733831c7d034b83dc78f783f8748cc65.jpg",
					},
					{
						id: "1876956006",
						title: "Towards Her Light",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20210916/113f508e9ca2f66642cbb85e7a4699be.jpg",
					},
					{
						id: "1840976599",
						title: "Immutable",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20210501/01bdad2a0a6876eaee3c23bf0812a73a.png",
					},
					{
						id: "1832392174",
						title: "Operation Blade",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20210325/923286f4ab26284016de9ed03150fad7.jpg",
					},
					{
						id: "1491503292",
						title: "Lullabye",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20210322/5fb9a7a5d2045c5c6a16f2c4ed8e08f4.jpg",
					},
					{
						id: "1488275299",
						title: "Stay Gold",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20210322/430cb5399e272d97779cf5f13681628f.jpg",
					},
					{
						id: "1473615924",
						title: "Alive",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20210322/7d9ab6167720f8f4b982c83fbe89ce0b.jpg",
					},
					{
						id: "1473615377",
						title: "Evolutionary Mechanization",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20210322/80c0cbb9bec652d21e939586e19aa9ed.jpg",
					},
					{
						id: "1460626792",
						title: "Everything's Alright",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20210322/fe18ca43cbf7e7fc3541081d7a62ccef.jpg",
					},
					{
						id: "1444493780",
						title: "Requiem",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20210322/14db9942c28a5abba48b9dfe2d99e39a.jpg",
					},
					{
						id: "1444493657",
						title: "Renegade",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20210322/40a13076601806e37c5394049cebc5b1.jpg",
					},
					{
						id: "1431593851",
						title: "故乡的风",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20210322/c755e05031749ec0d7422078ae3189e7.jpg",
					},
					{
						id: "1427681638",
						title: "独行长路",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20210727/d01c9b65184c11ed6fe7b1019a023b16.jpg",
					},
					{
						id: "1403774122",
						title: "Speed of Light",
						artist: "塞壬唱片-MSR",
						image: "https://web.hycdn.cn/siren/pic/20210322/56cbcd1d0093d8ee8ee22bf6d68ab4a6.jpg",
					},
					// {
					// 	id: "464674427",
					// 	title: "Symphony",
					// 	artist: "Zara Larsson / Clean Bandit",
					// },
					{
						id: "1927389937",
						title: "Bones",
						artist: "Imagine Dragons",
					},
					{
						id: "28068202",
						title: "Carol of the Bells",
						artist: "Pentatonix",
					},
				],
				Mode: [
					{
						title: "顺序播放/Order Play",
						icon: "ri-order-play-fill"
					},
					{
						title: "随机播放/Shuffle Play",
						icon: "ri-shuffle-fill"
					},
					{
						title: "单曲循环/Single Cycle",
						icon: "ri-repeat-one-fill"
					},
				],
		};
	},
	methods: {
		timeFormat: function(s) {
			return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
		},
		timeMillisecond: function(s) {
			const splitTime = s.split(":").map((item) => Number(item));
			return splitTime[0] * 60 + splitTime[1];
		},
		nextMode: function() {
			this.modeIndex = (this.modeIndex + 1) % this.Mode.length;
		},
		nextIndex: function() {
			switch (this.modeIndex) {
				case 0:
					this.currentSong = (this.currentSong + 1) % this.musicPlaylist.length;
					break;
				case 1:
					this.currentSong = Math.floor(Math.random() * this.musicPlaylist.length);
					break;
			}
			return this.currentSong;
		},
		prevIndex: function() {
			switch (this.modeIndex) {
				case 0:
					this.currentSong = (this.currentSong - 1 + this.musicPlaylist.length) % this.musicPlaylist.length;
					break;
				case 1:
					this.currentSong = Math.floor(Math.random() * this.musicPlaylist.length);
					break;
			}
			return this.currentSong;
		},
		nextSong: function() {
			this.changeSong(this.nextIndex());
		},
		prevSong: function() {
			this.changeSong(this.prevIndex());
		},
		changeSong: function(index, pausePrev = true) {
			var wasPlaying = this.currentlyPlaying;
			this.imageLoaded = false;
			if (pausePrev == true) {
				this.stopAudio();
			}
			this.currentSong = index;
			this.audioFile = "http://music.163.com/song/media/outer/url?id=" + 
								this.musicPlaylist[this.currentSong].id + ".mp3";
			this.audio = new Audio(this.audioFile);

			this.posterLoad = false;
			if(this.musicPlaylist[this.currentSong].image !== undefined) this.posterLoad = true;

			this.audio.addEventListener("loadedmetadata", this.getTrackDuration);
			this.audio.addEventListener("ended", this.handleEnded);
			if (wasPlaying) {
				this.playPauseAudio();
			}
		},
		isCurrentSong: function(index) {
			if (this.currentSong == index) {
				return true;
			}
			return false;
		},
		playPauseAudio: function() {
			if (!this.currentlyPlaying) {
				this.playAudio();
			} else {
				this.stopAudio();
			}
		},
		playAudio: function() {
			this.getCurrentTimeEverySecond();
			this.currentlyPlaying = true;
			this.audio.play();
		},
		stopAudio: function() {
			this.audio.pause();
			this.currentlyPlaying = false;
			clearTimeout(this.checkingCurrentPositionInTrack);
		},
		getTrackDuration: function() {
			this.trackDuration = Math.round(this.audio.duration);
		},
		handleEnded: function() {
			this.changeSong(this.nextIndex());
		},
		getCurrentTimeEverySecond: function() {
			var that = this;
			this.checkingCurrentPositionInTrack = setTimeout(
				function() {
					that.currentTime = that.audio.currentTime;
					that.currentProgressBar =
						that.audio.currentTime / that.trackDuration * 100;
					that.getCurrentTimeEverySecond();
				}.bind(this),
				1000
			);
		},
		clickProgress: function(event){
			if(this.currentlyPlaying == true){
				this.stopAudio();
			}
			this.updateBar(event.pageX);
		},
		updateBar: function(x){
			var progress = this.$refs.progress;
			var maxduration = this.audio.duration;
			var position = x - progress.getBoundingClientRect().left;
			var percentage = (100 * position) / progress.offsetWidth;
			if (percentage > 100) {
				percentage = 100;
			}
			if (percentage < 0) {
				percentage = 0;
			}
			this.audio.currentTime = (maxduration * percentage) / 100;
			this.currentTime = this.audio.currentTime;
			this.currentProgressBar = this.currentTime / this.trackDuration * 100;
			this.playPauseAudio();
		},
	},
	mounted: function() {
		this.changeSong(this.currentSong, false);
		this.audio.loop = false;
	},
	watch: {
		currentTime: function() {
			this.currentTime = Math.round(this.currentTime);
		},
	},
	computed: {
		currentTimeShow() {
			return this.timeFormat(this.currentTime);
		},
		trackDurationShow() {
			return this.timeFormat(this.trackDuration);
		},
	},
	beforeUnmount: function() {
		this.audio.removeEventListener("ended", this.handleEnded);
		this.audio.removeEventListener("loadedmetadata", this.getTrackDuration);

		clearTimeout(this.checkingCurrentPositionInTrack);
	}
};
</script>

<style lang="stylus" scoped>
// @import url('https://fonts.googleapis.com/css2?family=Inconsolata&family=Montserrat&family=Raleway&display=swap');
@font-face
	font-family Bender
	src url(../styles/Bender.woff)
@font-face
	font-family Geometos
	src url(../styles/Geometos.woff)
@font-face
	font-family Montserrat
	src url(../styles/Montserrat.woff)
* 
	box-sizing border-box
.animated 
	animation-duration 0.5s
.audioPlayer
	background-color #FFF
	position relative
	// width 100%
	// max-width 800px
	min-height 25rem
	overflow hidden
	padding 1.5rem
	// margin auto 0
	border 1px solid #eaeaea
	border-radius 0.5rem
	transition all ease .3s 
	user-select none
	// left 50%
	// top 50%
	// transform translate(-50%,-50%)
	&:hover
		border 1px solid transparent
		transform translate(0px, -3px)
		box-shadow 0 2px 16px 0 rgba(27, 35, 47, .2)
	.nav-icon 
		width 15px
		height 12px
		position absolute
		top 1.125rem
		left 1.5rem
		transform rotate(0deg)
		transition 0.25s ease-in-out
		cursor pointer
		span 
			display block
			position absolute
			height 1.8px
			width 100%
			background rgba(0, 0, 0, 0.75)
			border-radius 6px
			opacity 1
			left 0
			transform rotate(0deg)
			transition 0.5s ease-in-out
			&:nth-child(1) 
				top 0px
			&:nth-child(2) 
				top 5px
			&:nth-child(3) 
				top 10px
		&.isActive 
			span 
				&:nth-child(1) 
					top 5px
					transform rotate(135deg)
				&:nth-child(2) 
					opacity 0
					left -60px
				&:nth-child(3) 
					top 5px
					transform rotate(-135deg)
	.audioPlayerList 
		color rgba(0, 0, 0, 0.75)
		width 17rem
		height 90%
		transition 0.5s
		transform translateX(-200%)
		position absolute
		margin-top 1.5rem
		overflow scroll
		z-index 10
		will-change transform
		&.isActive 
			transform translateX(0)
		.item 
			margin-bottom 1.5rem
			border-left 0.1rem solid transparent
			transition 0.2s
			&:hover 
				padding-left 0.5rem
				cursor pointer
			.title 
				color rgba(0, 0, 0, 1)
				font-family Montserrat
				font-size 1.2rem
				margin 0.2rem 0
			.artist 
				color rgba(0, 0, 0, 0.5)
				font-family Montserrat
				font-size 0.8rem
				margin 0.2rem 0
			&.isActive 
				border-left-color black
				padding-left 1rem
				.title
					color red
	.audioPlayerUI 
		margin-top 1.5rem
		will-change transform
		transition 0.5s
		&.isDisabled 
			transform scale(0.8) translateX(40%)
			filter blur(0.12rem)
		.albumDetails 
			text-align center
			margin 2rem 0 1.5rem 0
			p
				line-height 1.7 
				margin 0px
				&.title
					font-family Geometos 
					font-size 1.2rem
					color rgba(0, 0, 0, 1)
					margin 0.2rem 0
				&.artist 
					margin 0.2rem 0
					font-family Montserrat
					font-size 0.8rem
					font-weight none
					color rgba(0, 0, 0, 0.75)
					transition-delay 100ms
			.page-container
				// display none
				display inline-block
				margin 0.2rem 0
				position relative
				background-color #FFF
			.wave-container
				position relative
				.wave-bar
					display inline-block
					width 10px
					height 50px
					margin auto 0.07rem
					background-color #000
					animation beat1 1s infinite
					transform-origin 0 100%
					transform scaleY(0.1)
					&:nth-child(2n) 
						animation-name beat2
						animation-delay 0.2s
						background-color #FF0000
					&:nth-child(3n) 
						animation-name beat3
						animation-delay 0.5s
						animation-duration 0.5s
						background-color #BBB
					&:nth-child(4n) 
						animation-name beat2
						animation-delay 0.4s
						animation-duration 0.8s
					&:nth-child(5n) 
						animation-delay 0.6s
					&:nth-child(6n) 
						animation-delay 0.2s
						background-color #DDD
				&.paused
					.wave-bar
						animation-play-state paused
		.albumImage 
			width 17rem
			height 17rem
			overflow hidden
			margin 0 auto
			.disc-back
				animation rotate 20s linear infinite
				width 17rem
				height 17rem
				border-radius 50%
				background rgba(0, 0, 0, 0.2)
				display flex
				justify-content center
				align-items center
				.disc
					width 90%
					height 90%
					z-index 10
					object-fit cover
					object-position 50% 50%
					border-radius 50%
					margin 0 auto
				.poster
					position absolute
					width 50%
					height 50%
					z-index 15
					object-fit cover
					object-position 50% 50%
					border-radius 50%
					margin 0 auto
				&.paused
					animation-play-state paused
		.playerButtons 
			position relative
			margin 0 auto
			text-align center
			.button
				display inline-block
				position relative
				vertical-align middle
				padding 0.5rem
				margin 0 0.25rem
				color rgba(0, 0, 0, 0.75)
				border-radius 50%
				outline 0
				text-decoration none
				cursor pointer
				transition 0.5s
				&#mode
					transition 0.3s ease-in-out
				&.play
					margin 0 auto
				&:active 
					opacity 0.75
					transform scale(0.75)
				&.isDisabled 
					color rgba(0, 0, 0, 0.2)
					cursor initial
					&:active 
						transform none
				.icon
					display flex
		.currentTimeContainer
			width 100%
			height 1rem
			display flex
			justify-content space-between
		.currentProgressBar 
			width 100%
			background-color rgba(0, 0, 0, 0.1)
			margin 0.75rem 0
			.currentProgress 
				background-color rgba(0, 0, 0, 0.75)
				width 0px
				height 2px
				transition 100ms
.audioPlayer .audioPlayerUI .currentTimeContainer .currentTime, .audioPlayer .audioPlayerUI .currentTimeContainer .totalTime 
	font-size 0.8rem
	font-family Bender !important
	color rgba(0, 0, 0, 0.75)

.slide-fade-enter-active 
	transition all 0.3s ease
.slide-fade-leave-active 
	transition all 0.2s cubic-bezier(1, 0.5, 0.8, 1)
.slide-fade-enter, .slide-fade-leave-to 
	transform translateY(10px)
	opacity 0
.fade-enter-active, .fade-leave-active 
	transition opacity 0.5s
.fade-enter, .fade-leave-to 
	opacity 0

.mode-slide-fade-enter-active, .mode-slide-fade-leave-active
	transition all 0.1s ease
.mode-slide-fade-enter, .mode-slide-fade-leave-active
	opacity 0
.mode-slide-fade-enter
	transform translateY(10px)
.mode-slide-fade-leave-active
	transform translateY(-10px)

::-webkit-scrollbar
	width 0 !important
	height 0
	display none

@keyframes rotate 
	from
		transform rotate(0deg)
	to
		transform rotate(359deg)
@keyframes beat1
	0% 
		transform scaleY(0)
	50%
		transform scaleY(0.7)
	100%
		transform scaleY(0)

@keyframes beat2
	0%
		transform scaleY(0)
	50%
		transform scaleY(0.5)
	100% 
		transform scaleY(0)

@keyframes beat3
	0%
		transform scaleY(0)
	50% 
		transform scaleY(0.3)
	100% 
		transform scaleY(0)

.github-corner:hover .octo-arm
	animation octocat-wave 560ms ease-in-out
@keyframes octocat-wave
	0%,100%
		transform:rotate(0)
	20%,60%
		transform:rotate(-25deg)
	40%,80%
		transform:rotate(10deg)
@media (max-width:500px)
	.github-corner:hover .octo-arm
		animation none
	.github-corner .octo-arm
		animation:octocat-wave 560ms ease-in-out

@media (min-width: 719px)
	.audioPlayerUI
		display grid
		grid-template-columns 1fr 1fr
		grid-template-areas "a b" "c d"
		.albumDetails 
			text-align left !important
			margin 0 0 0 3.6rem !important
			.page-container
				display inline-block !important
		.albumImage 
			width 17rem
			height 17rem
			overflow hidden
			margin 0 auto
		.playerButtons
			width 18rem
			position relative
			margin 0 0.7rem !important
			text-align center
		.timeAndProgress
			grid-area c
			margin auto 0.2rem

@media (max-width: 718px)
	.audioPlayerUI
		&.isDisabled 
			transform scale(0.8) translateX(100%) !important
</style>