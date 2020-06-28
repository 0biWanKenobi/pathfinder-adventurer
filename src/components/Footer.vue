<template>
  <b-row class="buttonBar justify-content-around text-center flex-nowrap">
    <b-col md="2">
      <b-button v-b-modal.modalLoginForm class="bg-primary f-btn" variant="outline-khaki">Login</b-button>
    </b-col>
    <b-col md="2">
      <b-button v-b-modal.modalRegisterForm class="bg-primary f-btn" variant="outline-khaki">Sign Up</b-button>
    </b-col>
    <p-register-modal :auth="auth" :authProviders="authProviders"/>
    <p-login-modal :auth="auth" :authProviders="authProviders"/>
  </b-row>
</template>
<script>
import { auth, authProviders } from '../plugins/firebase'
import PRegisterModal from './RegisterModal'
import PLoginModal from './LoginModal'
export default {
  name: "PFooter",
  components: {
    PRegisterModal,
    PLoginModal
  },
  data(){
    return{
      auth,
      authProviders
    }
  },
  methods: {
    login: async function(){
        
    },
    register: async function(){

    }
  }
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

