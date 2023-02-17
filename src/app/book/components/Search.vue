<script setup>
import { ref } from 'vue';
import Search from '../../shared/components/Search.vue';
import { findByTitle } from '../books';

const emit = defineEmits(['selected']);

const results = ref([]);

const search = (term) => {
  results.value = findByTitle(term);
};

const selectBook = (book) => {
  emit('selected', book);
};
</script>

<template>
  <Search
    name="books"
    :results="results"
    placeholder="Your favourite book..."
    @input="search"
    @selected="selectBook"
    v-slot="{result, select}"
  >
    <div
      class="flex relative cursor-default select-none py-2 pl-3 pr-9 group hover:bg-indigo-600 text-gray-900"
      @click="() => select(result)"
    >
      <span class="truncate group-hover:text-white group-hover:font-semibold">{{ result.title }}</span>
      <span class="ml-2 truncate text-gray-500 group-hover:text-indigo-200">{{ result.author }}</span>
    </div>
  </Search>
</template>
