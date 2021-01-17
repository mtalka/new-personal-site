<template>
  <v-card
    class="mx-auto experience-card"
    :class="{ 'no-operations': !isExpandable }"
    @click="show = !show"
  >
    <v-card-text>
      <div style="display: flex; flex-direction: row;">
        <div style="flex: 60">
          <span class="header-icon">*</span>
          <span style="margin-left: 1rem">{{ header }}</span>
          <div style="margin-left: 4rem">{{ time }}</div>
          <div style="margin-left: 4rem">{{ title }}</div>
        </div>
        <div style="flex: 1">
          <span class="header-icon" v-if="isExpandable">
            <v-icon>{{
              show ? "mdi-chevron-up mdi-18px" : "mdi-chevron-down mdi-18px"
            }}</v-icon>
          </span>
        </div>
      </div>
    </v-card-text>
    <v-expand-transition v-if="isExpandable">
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          {{ description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "ExperienceCard",
  props: ["header", "time", "title", "isExpandable", "description"],

  data: () => ({
    show: false,
  }),
};
</script>

<style scoped>
.header-icon {
  color: #e74c3c;
}
.no-operations {
  pointer-events: none;
}
</style>
