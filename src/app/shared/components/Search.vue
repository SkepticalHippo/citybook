<script setup>
import {
  onMounted, ref,
} from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  results: {
    type: Array,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  focusOnLoad: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['input', 'selected']);

const searchInput = ref(null);
const searchTerm = ref('');

onMounted(() => {
  if (props.focusOnLoad) {
    searchInput.value.focus();
  }
});

const search = (term) => {
  if (term.length < 3) {
    return;
  }

  emit('input', term);
};

const select = (result) => {
  searchTerm.value = '';
  emit('selected', result);
};
</script>

<template>
  <div
    class="relative"
  >
    <input
      autocomplete="off"
      :type="props.type"
      class="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-12 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
      role="combobox"
      aria-controls="options"
      aria-expanded="false"
      :placeholder="props.placeholder"
      @input="(event) => search(event.target.value)"
      ref="searchInput"
      :name="name"
      v-model="searchTerm"
    >
    <ul
      class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
      role="listbox"
      v-if="searchTerm.length > 0"
    >
      <li
        v-if="props.results.length === 0 && searchTerm.length >= 3"
        class="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
      >
        No results
      </li>
      <li
        v-else-if="searchTerm.length < 3 && searchTerm.length > 0"
        class="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
      >
        You need at least 3 characters to search!
      </li>
      <li
        v-else
        role="option"
        v-for="result in props.results"
        :key="`search_results_${name}-${result}`"
      >
        <slot
          :result="result"
          :select="select"
        />
      </li>
    </ul>
  </div>
</template>
