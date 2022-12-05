<template>
  <div class="w-full py-2 mx-auto">
    <div
      class="w-full max-w-5xl pl-14 pr-2 md:mx-auto md:p-0 md:w-11/12"
      id="list"
    >
      <div
        class="rounded-lg w-full bg-neutral-800 text-white p-2 relative markdown"
        v-html="markdown"
      ></div>
    </div>
  </div>
</template>
<script>
import { marked } from "marked";
import axios from "axios";

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  breaks: true,
  sanitize: false,
});

export default {
  data() {
    return {
      markdown: "",
    };
  },
  mounted() {
    axios.get("/README.md").then((resp) => {
      this.markdown = marked.parse(resp.data);
    });
  },
};
</script>
<style lang="postcss">
.markdown h1 {
    @apply text-4xl;
}
.markdown h2 {
  @apply text-3xl;
}

.markdown h3 {
  @apply text-2xl;
}

.markdown h1,
.markdown h2,
.markdown h3,
.markdown p {
  @apply mb-2;
}

.markdown a {
  @apply underline;
}

.markdown ul {
  @apply ml-2 list-inside list-disc;
}
</style>
