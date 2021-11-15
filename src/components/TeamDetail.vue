<template>
  <div>
    <h2>球団名</h2>
    <div>{{ currentTeam.name }}</div>
    <h2>本拠地</h2>
    <div>{{ currentTeam.homePlace }}</div>
    <h2>発足日</h2>
    <div>{{ currentTeam.formatStartDate }}</div>
    <h2>歴史</h2>
    <pre>{{ currentTeam.history }}</pre>
    <button type="button" @click="onback">戻る</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Team } from '@/types/team';
import store from '../store';
@Component
export default class BaseballTeam extends Vue {
  private currentTeam!: Team;

  /**
   * チームの詳細情報を表示.
   */
  created(): void {
    const teamId = parseInt(this['$route'].params.id);
    this.currentTeam = store.getters.getTeamById(teamId);
  }

  /**
   * チーム一覧を表示する.
   */
  onback(): void {
    this['$router'].push('/ex01');
  }
}
</script>

<style></style>
