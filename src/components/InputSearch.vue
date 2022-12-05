<template>
  <div>
    <form
      action="/search"
      @submit.prevent="toSearch"
      class="flex items-center justify-end gap-2 relative"
    >
      <input
        type="text"
        v-model="inputSearch"
        class="search bg-neutral-800 text-white rounded p-1"
        placeholder="Search...."
      />
      <button type="submit" class="absolute right-1">
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
      </button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputSearch: "",
    };
  },
  methods: {
    toSearch() {
      this.$router.push({ path: "/search", query: { q: this.inputSearch } });
    },
  },
};
</script>
