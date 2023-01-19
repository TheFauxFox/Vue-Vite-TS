<script lang="ts" setup>
</script>

<template>
  <div id="router">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/theme.scss";
@font-face {
  font-family: 'FCadman';
  src: url('./assets/fonts/Cadman.ttf');
  font-style :normal;
  font-weight: normal
}
@font-face {
  font-family: 'FCadman';
  src: url('./assets/fonts/CadmanBold.ttf');
  font-style :normal;
  font-weight: bold
}
@font-face {
  font-family: 'FCadman';
  src: url('./assets/fonts/CadmanItalic.ttf');
  font-style :italic;
  font-weight: normal
}
@font-face {
  font-family: 'FCadman';
  src: url('./assets/fonts/CadmanBoldItalic.ttf');
  font-style :italic;
  font-weight: bold
}
@font-face {
  font-family: 'JetbrainsMonoNF';
  src: url('./assets/fonts/JetbrainsMonoNF.ttf');
  font-style :normal;
  font-weight: normal
}
@font-face {
  font-family: 'JetbrainsMonoNF';
  src: url('./assets/fonts/JetbrainsMonoNFBold.ttf');
  font-style :normal;
  font-weight: bold
}
@font-face {
  font-family: 'JetbrainsMonoNF';
  src: url('./assets/fonts/JetbrainsMonoNFItalic.ttf');
  font-style :italic;
  font-weight: normal
}
@font-face {
  font-family: 'JetbrainsMonoNF';
  src: url('./assets/fonts/JetbrainsMonoNFBoldItalic.ttf');
  font-style :italic;
  font-weight: bold
}

html, body {
  background-color: $background-shadow-color;
  color: $text-color;
}

* {
  outline: none;
  font-family: FCadman;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 30px;
}

#router main {
    width: 100%;
    height: 100%;
    background-color: $background-color;
    border-radius: 10px;
    margin: 10px 0;
}
</style>
