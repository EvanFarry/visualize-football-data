<template>
  <div class="item" id="item">
    <p v-if="index>=0">[{{index}}]</p>
    <ul>
      <li v-for="(v,k) in data" v-bind:key="k">
        <span class="key">{{k}}</span>
        <span class="divider"> : </span>
        <span class="value">{{v}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Item',
    props: ['data' , 'index']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
  .key {color: blue;}
  .value {color: red;}
</style>
