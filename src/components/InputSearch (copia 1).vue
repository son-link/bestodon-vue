<template>
  <div class="flex items-center justify-end gap-2 relative">
    <input
      type="text"
      ref="searchInput"
      class="search bg-neutral-800 text-white rounded p-1"
      placeholder="Search...."
      @input="search"
    />
    <div class="absolute right-1 search-icon" v-show="!showClearBtn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
    <button
      class="clear-search absolute right-1 rounded-full bg-neutral-500 p-1"
      v-show="showClearBtn"
      @click="clearInput"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-4 h-4"
      >
        <path
          d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
        />
      </svg>
    </button>
  </div>
</template>
<script>
import { storeToRefs } from "pinia";
import { accountsListStore } from "../stores/accounts";

export default {
  setup() {
    const accounts = accountsListStore();
    const { showClearBtn } = storeToRefs(accounts);
    const { search, clearSearch } = accounts;

    return {
      search,
      clearSearch,
      showClearBtn,
    };
  },
  data() {
    return {
      result: [],
    };
  },
  methods: {
    clearInput() {
      this.$refs.searchInput.value = "";
      this.clearSearch();
      this.showClearBtn = false;
    },
  },
};
</script>
