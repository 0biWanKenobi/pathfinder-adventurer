<template>
  <div id="app" class="vh-100">
    <div id="bg" class="homeBg"></div>
    <b-container class="position-relative d-flex min-vh-100 flex-column">
      <b-row id="navbarWrapper" align-h="center">
        <b-col cols="12" sm="10">
          <p-navbar :navbarVariant="navbarVariant"/>
        </b-col>
      </b-row>
      <b-row class="flex-fill">
        <b-col cols="12" align-self="center">
          <router-view></router-view>
        </b-col>
      </b-row>
      <b-row v-if="routeIs('home')">
        <b-col>
          <p-footer></p-footer>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import PNavbar from "./components/Navbar";
import PFooter from "./components/Footer";

export default {
  name: "App",
  components: {
    PNavbar,
    PFooter
  },
  data() {
    return {
      lipsum:
        "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi. Pellentesque ipsum. Nulla non arcu lacinia neque faucibus fringilla. Nulla non lectus sed nisl molestie malesuada. Proin in tellus sit amet nibh dignissim sagittis. Vivamus luctus egestas leo. Maecenas sollicitudin. Nullam rhoncus aliquam metus. Etiam egestas wisi a erat. Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Integer in sapien. Fusce tellus odio, dapibus id, fermentum quis, suscipit id, erat. Fusce aliquam vestibulum ipsum. Aliquam erat volutpat. Pellentesque sapien. Cras elementum. Nulla pulvinar eleifend sem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque porta. Vivamus porttitor turpis ac leo.",
      navbarVariant: ""
    };
  },
  methods: {
    routeIs: function(routeName) {
      return routeName === this.$route.name;
    }
  },
  mounted() {
    const stickyElm = document.getElementById("navbarWrapper");
    const observer = new IntersectionObserver(
      ([e]) => {
        var position = stickyElm.getAttribute("position");
        this.navbarVariant =
          e.intersectionRatio < 1 && position === "sticky" ? "primary" : "";
      },
      { threshold: [1] }
    );

    observer.observe(stickyElm);
  }
};
</script>

<style>
#bg {
  background-image: url(assets/img/home-bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: fixed;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}

.sticky-top {
  top: -1px;
  padding-top: 1px;
}

#navbarWrapper {
  position: fixed;
  top: 0;
  z-index: 1020;
}

@media screen and (min-width: 576px) {
  #navbarWrapper {
    position: sticky;
  }
}
</style>
