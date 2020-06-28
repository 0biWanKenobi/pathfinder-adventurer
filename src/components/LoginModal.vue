<template>
  <b-modal
    id="modalLoginForm"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myModalLabel"
    aria-hidden="true"
  >
    <template v-slot:modal-title>
      <h4 class="w-100 font-weight-bold">Login</h4>
    </template>
    <div class="dialog-class" role="document">
      <div class="content-class">        
        <div class="body-class mx-3">
          <b-form class="mb-5">
            <b-input-group class="mb-2">
              <b-input-group-prepend is-text>
                <b-icon-person-fill></b-icon-person-fill>
              </b-input-group-prepend>
              <b-form-input type="text" placeholder="Your username or email"></b-form-input>
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
            <b-button variant="outline-secondary" class="m-2 flex-grow-1" @click="socialLogin('google')">
              <b-icon class="icon-google" />Login with Google
            </b-button>
            <b-button variant="outline-secondary" class="m-2 flex-grow-1" @click="socialLogin('facebook')">
              <b-icon class="icon-facebook" />Login with Facebook
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <template v-slot:modal-footer="{ ok, cancel }">
        
        <b-button variant="secondary" @click="cancel">Cancel</b-button>
        <b-button variant="primary"  @click="login">Login</b-button>
        
    </template>
  </b-modal>
</template>

<script>
import {BIcon, BIconThreeDots, BIconPersonFill} from 'bootstrap-vue'
export default {
  name: "PLoginModal",
  data() {
    return {
      text: "",
      password: ""
    }
  },
  props: {
    authProviders: {},
    auth: null
  },
  components: {
    BIcon, BIconThreeDots, BIconPersonFill
  },
  methods: {
    login: function(){

    },
    socialLogin: async function(provider){
      try {
        var authResult = await this.auth.signInWithPopup(this.authProviders[provider]);
        console.log(authResult.user)
      } catch (error) {
        console.log(`auth error: code ${error.code}, message ${error.message}`)
      } 
    }
  }
}
</script>

<style>

</style>