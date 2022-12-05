<template>
  <div class="w-full py-2 mx-auto">
    <div
      class="grid grid-cols-1 gap-2 w-full max-w-5xl pl-14 pr-2 md:mx-auto md:grid-cols-2 md:p-0 md:w-11/12"
      id="list"
    >
      <div
        class="rounded-lg w-full bg-neutral-800 text-white p-2 relative"
        v-for="item in accts"
        v-bind:key="item.acct"
      >
        <a :href="item.url" target="_blank">
          <div>
            <img
              :src="item.header"
              class="object-cover h-32 w-full rounded bg-neutral-900"
            />
          </div>
          <div class="px-2 flex flex-wrap gap-2">
            <div class="-translate-y-2">
              <img
                :src="item.avatar"
                class="rounded-lg w-16 h-16 bg-neutral-900"
              />
            </div>
            <div class="mt-2">
              <p>{{ item.display_name }}</p>
              <p class="text-neutral-500">
                @{{ item.username }}@{{ item.domain }}
              </p>
            </div>
          </div>
        </a>
        <div class="p-2 h-20 overflow-hidden mb-4" v-html="item.note"></div>
        <div class="flex flex-wrap gap-2 items-center">
          <a
            class="rounded bg-blue-600 text-white w-24 h-9 flex flex-wrap items-center justify-center gap-2 mastodon-btn hover:bg-blue-500"
            :href="item.url"
            target="_blank"
          >
            <IconMastodon /> Follow
          </a>
          <a @click="addRemoveMark(item.acct)">
            <IconBookmark
              :class="[
                bookmarks.includes(item.acct)
                  ? 'fill-red-600'
                  : 'fill-neutral-500',
              ]"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
  <ThePagination />
</template>
<script>
import { storeToRefs } from "pinia";
import IconBookmark from "./icons/IconBookmark.vue";
import IconMastodon from "./icons/IconMastodon.vue";
import ThePagination from "./ThePagination.vue";
import { accountsListStore } from "../stores/accounts";

export default {
  components: { IconBookmark, IconMastodon, ThePagination },
  setup() {
    const accounts = accountsListStore();
    const { accts } = storeToRefs(accounts);
    const { getList, setPage } = accounts;

    return {
      accts,
      getList,
      setPage,
    };
  },
  props: {
    list: String,
  },
  data() {
    return {
      bookmarks: [],
    };
  },
  created() {
    this.bookmarks =
      "bookmarks" in localStorage
        ? JSON.parse(localStorage.getItem("bookmarks"))
        : [];
  },
  methods: {
    addRemoveMark(acct) {
      if (this.bookmarks.includes(acct)) {
        this.bookmarks = this.bookmarks.filter(function (value) {
          return value != acct;
        });
      } else {
        this.bookmarks.push(acct);
      }
      localStorage.setItem("bookmarks", JSON.stringify(this.bookmarks));
    },
  },
};
</script>
