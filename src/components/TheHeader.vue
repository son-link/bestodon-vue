<script setup>
import IconDownload from "./icons/IconDownload.vue";
import IconAbout from "./icons/IconAbout.vue";
import IconBookmark from "./icons/IconBookmark.vue";
import IconHome from "./icons/IconHome.vue";
import IconApps from "./icons/IconApps.vue";
import IconCommunities from "./icons/IconCommunities.vue";
import IconDev from "./icons/IconDev.vue";
import IconGames from "./icons/IconGames.vue";
import IconTux from "./icons/IconTux.vue";
import InputSearch from "./InputSearch.vue";
import IconChevronUp from "./icons/IconChevronUp.vue";
</script>
<template>
  <div class="fixed bottom-4 right-4 z-20 flex flex-wrap gap-2">
    <button
      class="text-white bg-neutral-500 rounded p-2 hidden"
      ref="backtotop"
    >
      <IconChevronUp />
    </button>
    <button
      class="text-white bg-neutral-500 rounded p-2 hidden"
      ref="downmarked"
    >
      <IconDownload />
    </button>
    <button
      class="text-white bg-neutral-500 rounded p-2 hidden"
      ref="remove-marked"
    >
      <IconBookmark />
    </button>
  </div>

  <div
    class="w-12 h-full fixed inset-0 top-0 bg-gray-700 text-white flex flex-columns justify-center z-10 md:hidden"
  >
    <nav class="my-2">
      <RouterLink
        to="/"
        class="w-10 h-10 flex items-center justify-center"
        title="All"
      >
        <IconHome />
      </RouterLink>
      <RouterLink
        to="/cat/apps"
        class="w-10 h-10 flex items-center justify-center"
        title="Applications"
      >
        <IconApps />
      </RouterLink>
      <RouterLink
        to="/cat/communities"
        class="w-10 h-10 flex items-center justify-center"
        title="Communities"
      >
        <IconCommunities />
      </RouterLink>
      <RouterLink
        to="/cat/dev"
        class="w-10 h-10 flex items-center justify-center"
        title="Development"
      >
        <IconDev />
      </RouterLink>
      <RouterLink
        to="/cat/games"
        class="w-10 h-10 flex items-center justify-center"
        title="Games"
      >
        <IconGames />
      </RouterLink>
      <RouterLink
        to="/cat/distros"
        class="w-10 h-10 flex items-center justify-center"
        title="Linux"
      >
        <IconTux />
      </RouterLink>
      <div class="border-t-2 h-1 mt-2"></div>
      <RouterLink
        to="/"
        class="w-10 h-10 flex items-center justify-center"
        title="About"
      >
        <IconAbout />
      </RouterLink>
    </nav>
  </div>
  <header
    class="m-2 p-4 w-11/12 max-w-5xl mx-auto bg-gray-700 text-white rounded hidden md:block"
  >
    <nav class="flex flex-wrap gap-2 items-center justify-between">
      <div class="flex flex-wrap gap-2 items-center">
        <img src="/bestodon.svg" class="h-6" />
      </div>
      <div class="flex flex-wrap gap-2 items-center">
        <RouterLink to="/" class="hover:underline" title="All">
          All
        </RouterLink>
        <RouterLink to="/cat/apps" class="hover:underline" title="Applications">
          Applications
        </RouterLink>
        <RouterLink
          to="/cat/communities"
          class="hover:underline"
          title="Communities"
        >
          Communities
        </RouterLink>
        <RouterLink to="/cat/dev" class="hover:underline" title="Development">
          Development
        </RouterLink>
        <RouterLink to="/cat/games" class="hover:underline" title="Games">
          Games
        </RouterLink>
        <RouterLink
          to="/cat/distros"
          class="hover:underline"
          title="Linux distributions"
        >
          Linux distributions
        </RouterLink>
      </div>
      <div class="flex flex-wrap gap-2">
        <InputSearch />
        <div class="flex flex-wrap gap-2 items-center">
          <RouterLink to="/about" class="hover:underline" title="About">
            About
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>
  <div
    class="w-full pl-14 pr-2 max-w-5xl text-center mt-2 md:mx-auto md:p-0 md:w-11/12"
  >
    <div class="bg-gray-700 text-white rounded p-2">
      <img src="/bestodon.svg" class="h-18 mx-auto my-2" />
      <p>Welcome to this list of Mastodon accounts.</p>
      <p>
        Here you can find accounts dedicated to Free and Open Source Software,
        such as games, applications, Linux distributions, etc.
      </p>
      <div class="flex items-center gap-2 relative w-full mt-2 md:hidden">
        <InputSearch />
      </div>
    </div>
  </div>
</template>
