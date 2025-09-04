<script lang="ts" setup>
useHead({
  title: "StreamWheel",
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>

  <NuxtRouteAnnouncer />
</template>
