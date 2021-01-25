<template>
  <v-footer
    padless
    class="footer mt-12"
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        text
        rounded
        class="btn-footer my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="footer-col py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>WOODWORK</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Services',
        'Contact Us',
      ],
    }),
  }
</script>

<style lang="scss" scoped>
.footer {
    background-color: #F5F5F5 !important;
    .btn-footer {
        color: #FB643A;
    }

    .footer-col {
        background-color: #FB643A !important;
    }
}
</style>