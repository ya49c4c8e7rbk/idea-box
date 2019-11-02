<template>
  <div id="app">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons">
    <link rel="stylesheet" href="https://unpkg.com/vue-material/dist/vue-material.min.css">
    <link rel="stylesheet" href="https://unpkg.com/vue-material/dist/theme/default.css">
    <router-view></router-view>
    <a style="position: fixed; bottom: 0; right: 0;" href="https://icons8.com/icon/85752/googleのロゴ">Googleのロゴ icon by Icons8</a>
  </div>
</template>

<style lang="scss">
@import url(http://fonts.googleapis.com/earlyaccess/notosansjp.css);
* {
  font-family: 'Noto Sans JP', sans-serif;
}

.md-button-full {
  width: 100%;
}
</style>

<script lang="ts">
import firebase from '@/firebase';
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter, Action, Mutation } from 'vuex-class';

@Component({
  components: {
  },
})
export default class App extends Vue {
  @Action('init', { namespace: 'ideaListState' })
  private init!: any;

  public created() {
    this.init(firebase.database().ref('ideaList'));
  }
}
</script>
