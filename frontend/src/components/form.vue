<template>
  <div class="" id="form">

    <!-- UI for API KEY -->
    <label>Your API Key</label>
    <input type="text" v-model="api_key">
    <br>

    <!-- UI for API Request -->
    <label>api.football-data.org</label>
    <input type="text" name="" v-model="path">

    <!-- UI drop down for request option -->
    <select v-model="responseContorl" >
      <option value="minified" selected="selected">minified</option>
      <option value="full">full</option>
    </select>

    <!-- Submit button / send Request -->
    <button type="button" v-on:click="sendRequest">Send Request</button>

    <!-- toggle between raw and formatted JSON -->
    <br>
    <button type="button" v-on:click="toggleRaw" v-if='toggle'>Raw JSON</button>
    <button type="button" v-on:click="toggleRaw" v-if='!toggle'>Formatted JSON</button>

    <!-- formatted data -->
    <div v-if='toggle' class="">

      <!-- if payload contains an array of items -->
      <p v-if='payload.length>1'>Items : {{payload.length}}</p>
      <div  v-if="payload.length>1">
        <Item v-for='(nested, index) in payload'
              v-bind:key='index'
              :data="nested" :index="index">
        </Item>
      </div>

      <!-- if payload is a single item -->
      <div v-else>
        <Item :data="payload" />
      </div>
    </div>

    <!-- Raw JSON -->
    <div v-if='!toggle' class="">{{payload}}</div>
  </div>
</template>

<script>
  //import child components
  import Item from './item.vue'


  export default {
    name: 'Form',
    data : () => {
      return {
        api_key: 'YOUR API KEY',
        path: '/v1/competitions/445',
        responseContorl: 'minified',
        payload_length: 0,
        toggle: true,
        payload: '',
      }
    },
    methods: {
      sendRequest : function(){
        this.$http.get('http://localhost:3000/request',{
            params:{
              key: this.api_key,
              path : this.path,
              responseContorl: this.responseContorl,
            }
          }
        ).then(response => {
          this.payload = response.body;
        })
      },
      toggleRaw : function(){
        this.toggle = !this.toggle;
      }
    },
    components : {
      Item,
    }
  }

</script>

<style scoped >
  .key {color: blue;}
  .value {color: red;}

</style>
