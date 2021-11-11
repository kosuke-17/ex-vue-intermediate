<template>
  <div>
    <h1>野球チーム一覧</h1>
    <!-- 野球チームの名前を表示 -->
    <div v-for="(team, i) of teams" :key="i">
      <!-- チームの詳細画面に遷移 -->
      <router-link :to="'/teamDetail/' + team.id">
        <span>{{ team.name }}</span>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Team } from '@/types/team';
import { Component, Vue } from 'vue-property-decorator';
import store from '../store';

@Component({})
export default class baseballTeamList extends Vue {
  /**
   * チーム一覧を表示
   * @returns チーム一覧を表示
   */
  get teams(): Team[] {
    return store.getters.getTeams;
  }
}
</script>

<style></style>
