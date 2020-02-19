<template>
  <div id="about-content" class="text-center text-uppercase">
    <p style="margin-top: 10px;">Welcome to the Adventurer!</p>
    <p>Let the adventure begin!</p>
  </div>
</template>

<script>
export default {
  name: "landing"
};
</script>

<style scoped lang="scss">
#about-content {
  &:before {
    content: "";
    position: absolute;
    top: -40%;
    left: 0;
    right: 0;
    height: 200%;
    background-image: url(~@/assets/img/brush-stroke.svg);
    background-repeat: no-repeat;
    background-size: 395px 400%;
    filter: invert(1) sepia() saturate(1300%) hue-rotate(325deg);
    background-position: center;
  }
  p {
    color: $primary;
    position: relative;
  }
}
</style>
