<script>
import musicPlayer from "./musicPlayer.vue";

export default {
  components: {
    musicPlayer,
  },
};
</script>

<template>
  <section class="audio-examples" id="work">
    <div class="audio-header">
      <h1 class="my-work">My Work</h1>
      <h2 class="Selected">(Selected Discography)</h2>
    </div>
    <div class="videos">
      <iframe
        max-width="700"
        max-height="400"
        src="https://www.youtube.com/embed/eqg1Gq4seWM?si=DX9P9PFpzfFowoa7"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referre700licy="strict-origin-when-cross-origin"
        allowfullscreen
        class="video"
      ></iframe>
      <iframe
        max-width="700"
        max-height="400"
        src="https://www.youtube.com/embed/Iz-hEh3Y0hM?si=Wv5LKFF-jRccTdgM&amp;start=48"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        class="video"
      ></iframe>
      <iframe
        max-width="700"
        max-height="400"
        src="https://www.youtube.com/embed/VA2vZEjnYfY?si=OQ5lfUXrBXHWdOYN"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        class="video"
      ></iframe>
      <iframe
        max-width="700"
        max-height="400"
        src="https://www.youtube.com/embed/L9egLN9AOas?si=VhJ0fQgymm5FhAU1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        class="video"
      ></iframe>
    </div>

    <musicPlayer />

    <a
      href="https://open.spotify.com/playlist/7I4emXAeLMEQLFu5VL2Gmp?si=4582652f148643d4"
      target="_blank"
      rel="noopener noreferrer"
      class="Discography"
    >
      Full Discography
      <img src="/images/spotifyIcon.png" class="spotify" alt="Spotify" />
    </a>
  </section>
</template>
