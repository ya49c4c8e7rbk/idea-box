<template>
  <div class="all">
    <h1 class="title">IdeaBox</h1>
    <h2 class="text">アイデアを放り込もう</h2>
    <div class="button-container">
      <md-button class="md-raised md-button-full md-button-signin" @click="googleSignIn">
        <img class="google-icon" src="https://img.icons8.com/color/48/000000/google-logo.png">
        Google Sign In
      </md-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .all {
    width: 100vw;
    height: 100vh;
    background-image: url(https://source.unsplash.com/random/1600x900);
    background-repeat: no-repeat;
    background-size: cover;

    .title {
      position: absolute;
      top: 100px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 80px;
      color: #fff;
      text-shadow: 0 2px 5px rgba(0, 0, 0, .5);
    }

    .text {
      position: absolute;
      top: 300px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 60px;
      color: #fff;
      text-shadow: 0 2px 5px rgba(0, 0, 0, .5);
      font-weight: normal;
    }

    .button-container {
      position: absolute;
      bottom: 200px;
      left: 50%;
      transform: translateX(-50%);
      width: 500px;

      .md-button-signin {
        height: 50px;
        font-size: 20px;

        .google-icon {
          width: 30px;
        }
      }
    }
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
export default class Signin extends Vue {
  private errorMessage: string = '';

  private googleSignIn(): void {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then((result) => {
      this.$router.push('/');
    }).catch((error) => {
      this.errorMessage = error.message;
    });
  }
}
</script>
