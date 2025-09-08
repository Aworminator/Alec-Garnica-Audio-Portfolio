<script>
export default {
  data() {
    return {
      songs: [
        {
          albumArt:
            "https://facedownrecords.com/wp-content/uploads/2023/09/FCD195-3000.jpg",
          artist: "American Arson",
          song: "The Heat |: Run",
          name: "Run - American Arson.wav",
          artistLink:
            "https://open.spotify.com/artist/7cl9j0U54gBxbcGO7zXXs2?si=Y8YFn_WdRy2WaXkD7kTK9A",
          songLink:
            "https://open.spotify.com/track/4LscxvJWC9iHOBJmns7oVh?si=cf5a5d8cefe242de",
        },
        {
          albumArt:
            "https://i.scdn.co/image/ab67616d0000b27369a57afe6b668fe34d4e9914",
          artist: "Philip Bowen",
          song: "Better Way",
          name: "Better Way - Philip Bowen.wav",
          artistLink:
            "https://open.spotify.com/artist/3Mm4P393IFVqIQDmL691G9?si=A1uk_0hjSPOLajqtXdFjjQ",
          songLink:
            "https://open.spotify.com/track/2iAruT7aaz0of7HgP6AXJ5?si=48f3d1c8590f4527",
        },
        {
          albumArt:
            "https://i.scdn.co/image/ab67616d00001e02c0d49229ee1521c01ba40c3e",
          artist: "Chery Blossom Club",
          song: "Astray",
          name: "Cherry Blossom Club - Astray.mp3",
          artistLink:
            "https://open.spotify.com/artist/7LDoytlH8MNe9zu2VIu5uB?si=W9AvoN22T46V6yPUWuvBdA",
          songLink:
            "https://open.spotify.com/track/77lonoP2aKYjy99jGNJf3r?si=8c8acfcdc6ff47a3",
        },
        {
          albumArt:
            "https://i.scdn.co/image/ab67616d00001e02066f1a88ce4c1492f016dc33",
          artist: "Jared Withrow",
          song: "All Is Well",
          name: "All Is Well - Jared Withrow.wav",
          artistLink:
            "https://open.spotify.com/artist/5HWM1z6NnHcvOnUeLcCAKn?si=47omOcpARfSCEVpzm1sS9w",
          songLink:
            "https://open.spotify.com/track/60aH38LMrZZam1xIewtDBR?si=670e49b3f44149bb",
        },
        {
          albumArt: "./images/albums/caminoKid.jpg",
          artist: "Camino Kid",
          song: "Fireflies(Cover)",
          name: "Fireflies - Camino Kid.wav",
          artistLink:
            "https://open.spotify.com/artist/5Dm6l5ypjnBRX4r3o2vzkZ?si=yQY43V2TQ06EWhuZaBigIg",
          songLink:
            "https://open.spotify.com/track/2ckxbqWp45dph2w9lZHEuz?si=ac1ee9025897455e",
        },
        {
          albumArt:
            "https://www.shazam.com/mkimage/image/thumb/Music122/v4/09/7e/41/097e41aa-4970-2849-a3a6-7e0279f900af/artwork.jpg/375x375bb.webp",
          artist: "The Scally Brothers",
          song: "Lion and the Lamb",
          name: "The Scally Brothers - Lion And The Lamb Live.wav",
          artistLink:
            "https://open.spotify.com/artist/1zxZJBr1JIL8X4zDvpkFos?si=ZAqeO_ZFRFWOyXo424s7Ng",
          songLink:
            "https://open.spotify.com/track/74FoVUSj3mCoDl6XZTojDW?si=b75b83345caf4865",
        },
      ],
      playing: null,
      progress: {},
      audioRefs: {}, // will hold audio elements
    };
  },
  methods: {
    playAudio(songName) {
      if (this.playing && this.playing !== songName) {
        this.pauseAudio(this.playing);
      }
      this.playing = songName;
      const audio = this.audioRefs[songName];
      audio.play();
    },
    pauseAudio(songName) {
      const audio = this.audioRefs[songName];
      audio.pause();
      if (this.playing === songName) this.playing = null;
    },
    toggleAudio(songName) {
      const audio = this.audioRefs[songName];
      if (!audio) return;
      if (audio.paused || audio.ended) {
        this.playAudio(songName);
      } else {
        this.pauseAudio(songName);
      }
    },
    updateProgress(e, songName) {
      const audio = e.target || e.currentTarget || e.srcElement;
      if (!audio) return;

      const { currentTime = 0, duration = 0 } = audio;
      const pct = duration ? (currentTime / duration) * 100 : 0;

      // Vue 2 and Vue 3 safe update
      if (typeof this.$set === "function") {
        this.$set(this.progress, songName, pct);
      } else {
        this.progress = { ...this.progress, [songName]: pct };
      }
    },

    setProgress(e, songName) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;

      const audio = this.audioRefs[songName];
      if (!audio || !audio.duration) return;
      audio.currentTime = (clickX / width) * audio.duration;
    },
  },
};
</script>

<template>
  <div id="card-container">
    <div v-for="song in songs" :key="song.name" class="card">
      <img class="album-artwork" :src="song.albumArt" alt="" />
      <div class="mp3">
        <div class="band-info">
          <a :href="song.songLink" class="link" target="_blank">
            <h1 class="band-name">{{ song.song }}</h1>
          </a>
          <a :href="song.artistLink" class="link" target="_blank">
            <h3 class="album-title">{{ song.artist }}</h3>
          </a>
        </div>
        <div class="player">
          <i
            :class="[
              'fa-solid',
              playing === song.name ? 'fa-pause' : 'fa-play',
            ]"
            @click="toggleAudio(song.name)"
          ></i>
          <audio
            preload="metadata"
            :src="'./audio/' + song.name"
            @timeupdate="updateProgress($event, song.name)"
            :ref="(el) => (audioRefs[song.name] = el)"
          ></audio>
          <div class="progress-bar" @click="setProgress($event, song.name)">
            <div
              class="progress"
              :style="{ width: (progress[song.name] || 0) + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.progress-bar {
  background-color: white;
  border-radius: 40px;
  color: black;
  width: 150px;
  height: 12px;
  border: 1px solid rgb(221, 144, 99);
}

.progress {
  background-color: rgb(244, 164, 117);
  border-radius: 40px;
  height: 100%;
  width: 0%;
}
</style>
