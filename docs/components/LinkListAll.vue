<template>
  <ul>
    <li v-for="item in result">
      <a :href="item.link">{{item.text}}</a>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';
import { withBase, useData, useRoute } from 'vitepress';

const { theme } = useData();

function recursiveSearch (arr) {

  let theArr = [];

  arr.forEach((item)=>{

    if(item.items) {
      if(item.items.length !== 0) {
        theArr = theArr.concat(recursiveSearch(item.items));
      }
    } else {
      theArr.push(item);
    }
  })

  return theArr;

}

const sidebarData = Object.values(theme.value.sidebar).map(item => item[0]);
const result = ref(recursiveSearch(sidebarData))

</script>