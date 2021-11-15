<template>
  <div>
    <h1>ホテル検索</h1>
    <form>
      <input type="text" v-model="hotelPrice" />円以下
      <br />
      <br />
      <button type="button" @click="onsearch">検索</button>
    </form>
    <div>
      <!-- ホテル検索結果の表示. -->
      <table v-for="hotel of hotelsArray" v-bind:key="hotel.id">
        <tr>
          <td>ホテル名</td>
          <td>{{ hotel.hotelName }}</td>
        </tr>
        <tr>
          <td>最寄駅</td>
          <td>{{ hotel.nearestStation }}</td>
        </tr>
        <tr>
          <td>価格</td>
          <td>{{ hotel.price }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class hotelSearch extends Vue {
  private hotelPrice = '';
  private hotelsArray = [];

  /**
   * 検索のVuexのgetters呼び出し(入力値ありとなしでメソッド使い分けてる).
   */
  onsearch(): void {
    if (this.hotelPrice === '') {
      this.hotelsArray = store.getters.getHotelsAll;
      return;
    }
    this.hotelsArray = store.getters.getHotelsLessThanPrice(
      Number(this.hotelPrice)
    );
  }
}
</script>

<style scoped></style>
