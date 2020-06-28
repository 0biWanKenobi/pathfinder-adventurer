<template>
  <b-modal
    id="modalRegisterForm"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myModalLabel"
    aria-hidden="true"
  >
    <template v-slot:modal-title>
      <h4 class="w-100 font-weight-bold">Sign up</h4>
    </template>
    <div class="dialog-class" role="document">
      <div class="content-class">
        <div class="body-class mx-3">
          <b-form class="mb-5">
            <b-input-group class="mb-2">
              <b-input-group-prepend is-text>
                <b-icon-person-fill></b-icon-person-fill>
              </b-input-group-prepend>
              <b-form-input type="text" placeholder="Your name"></b-form-input>
            </b-input-group>
          </b-form>
          <b-form class="mb-5">
            <b-input-group class="mb-2">
              <b-input-group-prepend is-text>
                <b-icon-envelope></b-icon-envelope>
              </b-input-group-prepend>
              <b-form-input type="email" placeholder="Your email"></b-form-input>
            </b-input-group>
          </b-form>
          <b-form class="mb-4">
            <b-input-group class="mb-2">
              <b-input-group-prepend is-text>
                <b-icon-three-dots></b-icon-three-dots>
              </b-input-group-prepend>
              <b-form-input type="password" placeholder="Your password"></b-form-input>
            </b-input-group>
          </b-form>
          <b-dropdown-divider></b-dropdown-divider>
          <div class="d-flex justify-content-between align-items-sm-center flex-wrap flex-column flex-sm-row">
            <div class="p-2 align-self-center">or</div>
            <b-button variant="outline-secondary" class="m-2 flex-grow-1" @click="socialRegister('google')">
              <b-icon class="icon-google" />Login with Google
            </b-button>
            <b-button variant="outline-secondary" class="m-2 flex-grow-1" @click="socialRegister('facebook')">
              <b-icon class="icon-facebook" />Login with Facebook
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <template v-slot:modal-footer="{ ok, cancel }">
      <b-button variant="secondary" @click="cancel">Cancel</b-button>
      <b-button variant="primary" @click="register">Sign up</b-button>
    </template>
  </b-modal>
</template>

<script>
import {BIcon, BIconThreeDots, BIconPersonFill, BIconEnvelope} from 'bootstrap-vue'
export default {
  name: "PRegisterModal",
  data() {
    return {
      text: "",
      email: "",
      password: ""
    };
  },
  props: {
    authProviders: {},
    auth: null
  },
  components: {
    BIcon, BIconThreeDots, BIconPersonFill, BIconEnvelope
  },
  methods: {
    register: function(bvEvent) {
      console.log("Subscription confirmed", bvEvent);
      this.$bvModal.hide("modalRegisterForm");
    },
    socialRegister: async function(provider) {
      try {
        var authResult = await this.auth.signInWithPopup(this.authProviders[provider]);
        console.log(authResult.user)
      } catch (error) {
        console.log(`auth error: code ${error.code}, message ${error.message}`)
      }    
    }
  },
  mounted() {
    this.$root.$on("bv::modal::show", (bvEvent, modalId) => {
      console.log("Modal is about to be shown", bvEvent, modalId);
    });
  }
};
</script>

<style>
.icon-google {
    background: url(~@/assets/icons/google.svg) no-repeat;
}

.icon-facebook {
    background: url(~@/assets/icons/facebook.svg) no-repeat;
    background-position: center;
}

.modal-dialog li[role="presentation"] {
    list-style: none;
}
</style>