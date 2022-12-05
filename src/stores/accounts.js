import { defineStore } from "pinia";
import axios from "axios";

axios.defaults.baseUrl = "bestodon-vue/";

export const accountsListStore = defineStore("accounts", {
  state: () => ({
    accts: [],
    prevAccts: [],
    allAccts: [],
    offset: 0,
    totalAccts: 0,
    currPage: 1,
    showClearBtn: false,
  }),
  actions: {
    getList(list = "all") {
      axios.get(`/lists/${list}.json`).then((resp) => {
        if (resp.data) {
          this.allAccts = resp.data;
          this.totalAccts = this.allAccts.length;
          this.setPage();
        }
      });
    },
    setPage(page = null) {
      if (page) this.currPage = page;
      this.offset = 10 * (this.currPage - 1);
      this.accts = this.allAccts.slice(this.offset, this.currPage * 10);
    },
    search(toSearch) {
      if (!toSearch) return;
      this.showClearBtn = false;

      if (this.prevAccts.length > 0) this.allAccts = this.prevAccts;

      const results = this.allAccts.filter((data) => {
        var regex = new RegExp(toSearch, "i");
        return (
          data.username.match(regex) ||
          data.acct.match(regex) ||
          data.note.match(regex)
        );
      });

      if (results.length > 0) {
        this.prevAccts = this.allAccts;
        this.allAccts = results;
        this.totalAccts = results.length;
        this.offset = 0;
        this.accts = this.allAccts.slice(this.offset, 10);
        console.log(this.accts);
      }
    },
    clearSearch() {
      if (this.prevAccts.length > 0) {
        this.allAccts = this.prevAccts;
        this.prevAccts = [];
        this.totalAccts = this.allAccts.length;
        this.offset = 0;
        this.accts = this.allAccts.slice(this.offset, 10);
      }
    },
  },
});
