<template>
  <main>
    <AcctsList />
  </main>
</template>
<script>
import { storeToRefs } from "pinia";
import { accountsListStore } from "../stores/accounts";
import AcctsList from "../components/AcctsList.vue";

export default {
  components: { AcctsList },
  props: {
    page: Number,
    query: String,
  },
  setup() {
    const accounts = accountsListStore();
    const { currPage, accts } = storeToRefs(accounts);
    const { getList, setPage, search } = accounts;

    return {
      accts,
      currPage,
      getList,
      setPage,
      search,
    };
  },
  created() {
    this.getList("all");
  },
  updated() {
    this.setPage(this.page);
  },
  watch: {
    page: function (newPage) {
      this.setPage(newPage);
    },
    query: function (newSearch) {
      this.search(newSearch);
    },
    accts: function () {
      const query = this.$route.query.q;
      if (query) this.search(query);
      this.setPage(1);
    },
  },
};
</script>
