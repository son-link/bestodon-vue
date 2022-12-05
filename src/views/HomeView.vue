<template>
  <main>
    <AcctsList :list="list" />
  </main>
</template>
<script>
import { storeToRefs } from "pinia";
import { accountsListStore } from "../stores/accounts";
import AcctsList from "../components/AcctsList.vue";

export default {
  components: { AcctsList },
  props: {
    page: String,
  },
  setup() {
    const accounts = accountsListStore();
    const { currPage } = storeToRefs(accounts);
    const { getList, setPage } = accounts;

    return {
      currPage,
      getList,
      setPage,
    };
  },
  data() {
    return {
      list: this.$route.params.cat,
    };
  },
  created() {
    this.list = this.$route.params.cat;
    this.getList(this.list);
    this.setPage(this.page);
  },
  watch: {
    page: function (newPage) {
      this.setPage(newPage);
    },
    $route: function (to, from) {
      if (to.params.cat != from.params.cat) this.getList(to.params.cat);
    },
  },
};
</script>
