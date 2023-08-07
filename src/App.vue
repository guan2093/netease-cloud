<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Layout />
    <Player />
    <MiniPlayer />
    <PlayList/>
    <ShareReader/>
  </div>
</template>

<script>
import Layout from "@/layout"
import MiniPlayer from "@/components/mini-player"
import Playlist from "@/components/playlist"
import Player from "@/components/player"
import ShareReader from "@/components/share-reader"

export default {
  metaInfo() {
    return {
      title: "欢迎来到sshPlayer"
    }
  },
  components: { Layout, MiniPlayer, Playlist, Player, ShareReader }
}
</script>

<style lang="scss">
#app {
  height: 100%;
  background-color: var(--body-bgcolor);
  font-size: $font-size;
}
</style>
