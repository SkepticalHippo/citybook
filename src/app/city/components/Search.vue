<script setup>
import { ref } from 'vue';
import Search from '../../shared/components/Search.vue';
import { findByName } from '../cities';

const emit = defineEmits(['selected']);

const results = ref([]);

const search = (term) => {
  results.value = findByName(term);
};

const selectCity = (city) => {
  emit('selected', city);
};
</script>

<template>
  <Search
    name="books"
    :results="results"
    placeholder="Your favourite city..."
    @input="search"
    @selected="selectCity"
    v-slot="{result, select}"
    :focus-on-load="true"
  >
    <div
      class="flex relative cursor-default select-none py-2 pl-3 pr-9 group hover:bg-indigo-600 text-gray-900"
      @click="() => select(result)"
    >
      <span class="truncate group-hover:text-white group-hover:font-semibold">{{ result }}</span>
    </div>
  </Search>
</template>
