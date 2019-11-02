<template>
  <div>
    <md-toolbar class="md-primary">
      <h3 class="md-title" style="flex: 1">Idea Box</h3>
      <div class="md-toolbar-offset">
        {{ userInfo.displayName }}
      </div>
      <md-button class="md-icon-button">
        <a @click="signOut">
          <md-icon>exit_to_app</md-icon>
        </a>
      </md-button>
    </md-toolbar>

    <div class="md-layout container">
      <div class="md-layout-item md-gutter">
        <md-field>
          <label>Please enter your idea</label>
          <md-input v-model="idea"></md-input>
        </md-field>
      </div>
      <div class="md-layout-item md-size-10">
        <md-button class="md-raised md-primary" @click="send">
          <md-icon>send</md-icon>
        </md-button>
      </div>
    </div>

    <div class="md-layout container">
      <div class="md-layout-item md-layout">
        <div class="md-layout-item">
          <md-card v-for="(ideaData, i) in ideaList" :key="i">
            <div class="md-layout">
              <div class="md-layout-item md-size-5">
                <md-icon>{{ ideaData.iconName }}</md-icon>
              </div>
              <div class="md-layout-item">
                {{ ideaData.ideaText }}
              </div>
              <div class="md-layout-item md-size-10">
                <md-button
                  :class="{
                    'md-accent': ideaData.alreadyLike,
                  }"
                  @click="like({
                    key: ideaData['.key'],
                    userId: userId
                  })">
                  <md-icon>thumb_up</md-icon>
                  {{ ideaData.likeCount || 0 }}
                </md-button>
              </div>
            </div>
          </md-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 0 16px;
}

.md-card {
  margin-bottom: 20px;
}
</style>

<script lang="ts">
import firebase from '@/firebase';
import { State, Getter, Action, Mutation } from 'vuex-class';

import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Home extends Vue {
  @State('userInfo', { namespace: 'userState' })
  private userInfo!: firebase.UserInfo | null;

  @Getter('userId', { namespace: 'userState' })
  private userId!: string | null;

  @Getter('ideaList', { namespace: 'ideaListState' })
  private ideaList!: object[];

  @Action('add', { namespace: 'ideaListState' })
  private add!: any;

  @Action('like', { namespace: 'ideaListState' })
  private like!: any;

  private idea: string | null = null;

  private signOut(): void {
    firebase.auth().signOut().then(() => {
      this.$router.push('/signin');
    }).catch((error) => {
      this.$router.push('/signin');
    });
  }

  private send(): void {
    this.add({
      userId: this.userId,
      ideaText: this.idea,
    });
    this.idea = null;
  }
}
</script>