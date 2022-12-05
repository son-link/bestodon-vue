<template>
  <div
    ref="noResults"
    class="hidden w-full max-w-5xl pl-14 pr-2 md:mx-auto md:grid-cols-2 md:p-0 md:w-11/1"
  >
    <div
      class="rounded-lg w-full bg-neutral-800 font-bold p-2 text-xl text-white"
    >
      No results
    </div>
  </div>
  <div
    class="text-white text-center w-full max-w-5xl pl-14 pr-2 mt-2 md:mx-auto md:grid-cols-2 md:p-0 md:w-11/1"
  >
    <div class="p-2" ref="totalPages">
      View {{ from }} - {{ to }} of {{ totalAccts }}
    </div>
  </div>
  <div id="pagination" class="flex flex-wrap justify-center gap-4 my-4">
    <RouterLink
      v-show="currPage > 1"
      class="page md:w-8 h-8 text-white flex items-center justify-center"
      :to="`?page=${prevPage}`"
    >
      <IconPrev />
      <span class="md:hidden">Prev</span>
    </RouterLink>
    <template v-for="i in totalPages" v-bind:key="i">
      <span
        v-if="i == currPage"
        class="rounded-full bg-gray-100 w-8 h-8 items-center justify-center hidden md:flex"
        >{{ i }}</span
      >
      <RouterLink
        v-else
        :to="`?page=${i}`"
        class="page rounded-full text-white w-8 h-8 items-center justify-center hidden md:flex"
      >
        {{ i }}
      </RouterLink>
    </template>
    <RouterLink
      v-show="currPage < totalPages"
      class="page md:w-8 h-8 text-white flex items-center justify-center"
      :to="`?page=${nextPage}`"
    >
      <span class="md:hidden">Next</span>
      <IconNext />
    </RouterLink>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import IconNext from "./icons/IconNext.vue";
import IconPrev from "./icons/IconPrev.vue";
import { accountsListStore } from "../stores/accounts";

export default {
  components: { RouterLink, IconNext, IconPrev },
  setup() {
    const accounts = accountsListStore();
    const { totalAccts, currPage } = storeToRefs(accounts);

    return {
      totalAccts,
      currPage,
    };
  },
  data() {
    return {
      totalPages: 0,
      from: 1,
      to: 10,
      prevPage: this.currPage - 1,
      nextPage: this.currPage + 1,
    };
  },
  created() {
    this.totalPages = Math.ceil(this.totalAccts / 10);
  },
  updated() {
    this.printPagination();
  },
  methods: {
    printPagination() {
      this.totalPages = Math.ceil(this.totalAccts / 10);
      this.from = 10 * (this.currPage - 1) + 1;
      this.to =
        this.from + 9 <= this.totalAccts ? this.from + 9 : this.totalAccts;
      this.prevPage = this.currPage - 1;
      this.nextPage = this.currPage + 1;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },
  watch: {
    totalAccts: function () {
      this.printPagination();
    },
  },
};
</script>
