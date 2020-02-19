<template>
  <b-row class="buttonBar justify-content-around text-center flex-nowrap">
    <b-col md="2">
      <b-button class="bg-primary f-btn" variant="outline-khaki">Login</b-button>
    </b-col>
    <b-col md="2">
      <b-button class="bg-primary f-btn" variant="outline-khaki">Sign Up</b-button>
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: "PFooter"
};
</script>
<style>
.buttonBar {
  padding: 15px;
}

.btn-outline-khaki.bg-primary:hover {
  color: #c5b996;
}

.f-btn {
  min-width: 85px;
}
</style>

