<template>
  <b-navbar toggleable="sm" type="dark" :variant="navbarVariant">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="text-uppercase text-left justify-content-between fullwidth">
        <b-nav-item to="/" exact exact-active-class="active">Home</b-nav-item>
        <b-nav-item to="/chronicles" exact exact-active-class="active">Chronicles</b-nav-item>
        <b-nav-item-dropdown id="dropdownCharacter" :text="btnText" no-flip>
          <b-dropdown-item
            @click="buttonclick(item)"
            v-for="item in options"
            :key="item.name"
            :active="item.active"
            :disabled="item.disabled"
          >{{item.name}}</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#">Logout</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  name: "p-navbar",
  props: {
    navbarVariant: String
  },
  data() {
    return {
      options: [
        { name: "Profile", active: false, disabled: false },
        { name: "Diary", active: false, disabled: false },
        { name: "Achievements", active: true, disabled: false },
        { name: "Player", active: false, disabled: false }
      ],
      btnText: "Character"
    };
  },
  methods: {
    buttonclick(item) {
      console.log("clicked " + item.name);
      this.options.forEach(item => (item.active = false));
      item.active = true;
      this.btnText = item.name;
    }
  }
};
</script>
<style>
.nav-link.active {
  font-weight: bold;
}
</style>
