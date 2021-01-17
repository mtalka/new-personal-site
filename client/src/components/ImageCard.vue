<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :elevation="hover ? 12 : 2"
      class="mx-auto experience-card"
      @click="show = !show"
    >
      <v-img
        :src="require(`@/assets/${source}`)"
        height="200px"
        :class="{ 'on-hover': hover }"
        class="image-card"
      ></v-img>
      <v-card-text>
        <div style="display: flex; flex-direction: row;">
          <div style="flex: 60">
            <span class="header-icon">*</span>
            <span style="margin-left: 1rem">{{ header }}</span>
          </div>
          <div style="flex: 1">
            <span class="header-icon">
              <v-icon>{{
                show ? "mdi-chevron-up mdi-18px" : "mdi-chevron-down mdi-18px"
              }}</v-icon>
            </span>
          </div>
        </div>
      </v-card-text>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text>
            <div>
              {{ description }}
            </div>
            <div style="color: teal;" @click="goToLink($event)">
              Go to site >>
            </div>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "ImageCard",
  props: ["header", "description", "source", "link"],

  data: () => ({
    show: false,
  }),
  methods: {
    goToLink(event) {
      event.preventDefault();
      window.open(
        this.$props.link,
        "_blank" // <- This is what makes it open in a new window.
      );
    },
  },
};
</script>

<style scoped>
.header-icon {
  color: #e74c3c;
}
.image-card {
  transition: opacity 0.4s ease-in-out;
}

.image-card:not(.on-hover) {
  opacity: 0.6;
}
</style>
