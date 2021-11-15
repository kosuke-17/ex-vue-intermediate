<template>
  <div>
    <h1>衣装検索</h1>
    <form class="inputDisplay">
      <div>
        <input type="radio" name="sex" value="0" v-model="checkedSex" />Man
        <br />
        <input type="radio" name="sex" value="1" v-model="checkedSex" />Woman
        <br />
      </div>
      <div>
        <select v-model="selectedColor">
          <option value="赤">赤</option>
          <option value="青">青</option>
          <option value="白">白</option>
          <option value="黄">黄</option>
        </select>
      </div>
    </form>
    <button type="button" @click="searchClothe">検索</button>
    <div>
      {{ nonClothe }}
    </div>
    <table v-for="clothe of searchedClothe" :key="clothe.id" class="table">
      <tr>
        <td>ジャンル</td>
        <td>{{ clothe.genre }}</td>
      </tr>
      <tr>
        <td>サイズ</td>
        <td>{{ clothe.size }}</td>
      </tr>
      <tr>
        <td>価格</td>
        <td>{{ clothe.price }}</td>
      </tr>
      <tr>
        <td>性別</td>
        <td>{{ clothe.gender }}</td>
      </tr>
      <tr>
        <td>色</td>
        <td>{{ clothe.color }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import store from '@/store';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ClotheSerach extends Vue {
  private checkedSex = '';
  private selectedColor = '';
  private errorMessage = '';
  private searchedClothe = [];

  searchClothe(): void {
    this.searchedClothe = store.getters.getClotheByGenderAndColor({
      gender: Number(this.checkedSex),
      color: this.selectedColor,
    });

    console.log(JSON.stringify(this.searchedClothe));
  }

  // エラーメッセージをつけたかったが[]で返ってきた時にfalseの処理に行かないので修正が必要
  // []の条件式はどうやって作る？
  get nonClothe(): string {
    if (this.searchedClothe) {
      this.errorMessage = '';
    } else {
      this.errorMessage = '当てはまる衣装は存在しませんでした。';
    }
    return this.errorMessage;
  }
}
</script>

<style scoped>
.table {
  border: 1px solid black;
}
.inputDisplay {
  display: flex;
  margin: 4px;
}
</style>
