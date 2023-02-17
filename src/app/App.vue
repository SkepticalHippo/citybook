<script setup>
import { ref } from 'vue';
import BookSearch from './book/components/Search.vue';
import CitySearch from './city/components/Search.vue';

const selectedBook = ref();
const selectedCity = ref();

const selectBook = (book) => { selectedBook.value = book; };
const selectCity = (city) => { selectedCity.value = city; };
</script>

<template>
  <div class="mx-auto container max-w-xl">
    <div class="text-center mb-8 mt-32">
      <h1
        class="text-7xl font-bold uppercase mb-6"
      >
        City<span class="text-indigo-500">Book</span>
      </h1>
      <p>
        The search engine for books <strong>and</strong> cities you never knew you needed!
      </p>
    </div>
    <div class="flex flex-col gap-y-8">
      <div>
        <div
          class="mb-4"
          v-if="selectedCity"
        >
          Selected: <strong>{{ selectedCity }}</strong>
        </div>
        <CitySearch @selected="selectCity" />
      </div>
      <div>
        <div
          class="mb-4"
          v-if="selectedBook"
        >
          Selected: <strong>{{ selectedBook.title }}</strong> <span class="italic text-gray-500">by {{ selectedBook.author }}</span>
        </div>
        <BookSearch @selected="selectBook" />
      </div>
    </div>
  </div>
</template>
