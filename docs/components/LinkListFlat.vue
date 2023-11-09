<template>
  <div>
    
    <!-- <pre>{{ theme }}</pre> -->
    
    <ul>
      <li v-for="(item, index) in theme.sidebar[here][0].items" :key="index">
        <a :href="withBase(item.link)">{{ item.text }}</a>
      </li>
    </ul>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { withBase, useData, useRoute } from 'vitepress';

const { theme } = useData();
const { path } = useRoute();

const pathParts = path.split('/');
const newPath = pathParts.slice(2).join('/');
// const here = ref(`/${pathParts[pathParts.length - 2]}/`);
const here = ref(`/${newPath}`);
</script>
