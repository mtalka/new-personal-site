<template>
  <div class="section-title" style="display:flex; flex-direction: row;">
    <div>
      <span class="hashtag" v-if="!pageTitle">#</span>
      <span class="hashtag page-title-hashtag" v-if="pageTitle">#</span>
    </div>
    <div>
      <span>{{ sectionTitle }}</span>
      <span class="comment anim-typewriter" v-if="pageTitle"
        >// software developer & software industry pro</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: ["sectionTitle", "pageTitle"],

  data: () => ({}),
};
</script>

<style scoped>
.section-title {
  color: #17a2b8;
  margin: 1rem 0 1rem 0;
  display: flex;
  flex-direction: row;
}
.hashtag {
  margin: 0 1rem 0 2rem;
  color: #ffc107;
}
.page-title-hashtag {
  color: #aa66cc !important;
}
.comment {
  margin-left: 1rem;
  color: #28a745;
}
</style>
