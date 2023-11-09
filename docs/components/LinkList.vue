<template>
  <div>
    
    <!-- <pre>{{ theme }}</pre> -->
    
    <section v-for="(section, sectionIndex) in theme.sidebar[here][0].items" :key="sectionIndex">
      <h2>{{ section.text }}</h2>
      <ul>
        <li v-for="(item, index) in section.items" :key="index">
          <a :href="withBase(item.link)">{{ item.text }}</a>
        </li>
      </ul>
    </section>

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
