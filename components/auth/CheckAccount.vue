<template lang="html">
  <form class="white row inline-block relative">

      <multipass-logo class="absolute-top-right"></multipass-logo>

      <transition name="fade"  mode="out-in">

        <!-- loading -->
        <div class="row text-center" v-if="stage === 0"  key="0" >
          <loading-spiral></loading-spiral>
        </div>

        <!-- initial check -->
        <div class="row" v-if="stage === 1"  key="1">
          <p>Let's check your email.</p>
          <input type="text" v-model="email" @keyup.enter="handleCheck" placeholder="Email Address" />
          <form-button class="mt" :is-disabled="false" button-text="Check Email" @click.native.prevent="handleCheck"></form-button>
        </div>

        <!-- returning user -->
        <div class="row" v-if="stage === 2"  key="2">
          <p>Looks like you already have an account. Enter your password</p>
          <input type="text" v-model="password" @keyup.enter="handleLogin" placeholder="Password" />
          <form-button class="mt" :is-disabled="false" button-text="Login" @click.native.prevent="handleLogin"></form-button>
        </div>

        <!-- new user -->
        <div class="row" v-if="stage === 3"  key="3">
          <p>Hey newbie! Enter a password for your account.</p>
          <input type="text" v-model="password" @keyup.enter="handleRegister" placeholder="Password" />
          <form-button class="mt" :is-disabled="false" button-text="Login" @click.native.prevent="handleRegister"></form-button>
        </div>


      </transition>

  </form>
</template>

<script>

import { mapActions, mapGetters, } from "vuex";

import FormButton from "~/components/form/FormButton.vue";
import LoadingSpiral from "~/components/misc/LoadingSpiral.vue";
import MultipassLogo from "~/components/misc/Logo.vue";

export default {
  components: {
    FormButton,
    LoadingSpiral,
    MultipassLogo
  },
  computed: {
    ...mapGetters([
      "user"
    ])
  },
  data(){
    return {
      email: null,
      password: null,
      stage: 0
    }
  },
  methods: {
    ...mapActions([
      "checkAccountExists",
      "createAccount",
      "login"
    ]),
    async handleCheck() {

      console.log("method: handleCheck")
      // dont do anything if invalid email
      if (!this.isEmailValid()) return;

      // show loading
      this.stage = 0;

      // does this email already have an account?
      const { data } = await this.checkAccountExists(this.email);

      // do we show login or registration forms?
      data.exists ? this.stage = 2 : this.stage = 3;

    },
    async handleLogin(){
      this.stage = 0;

      console.log("method: handleLogin")

      try {
        await this.login({
          email: this.email,
          password: this.password
        });
      }
      catch (e){
        console.log("wrong password")
        this.stage = 2
      }

    },
    async handleRegister(){

      console.log("method: handleRegister")

      this.stage = 0;

      await this.createAccount({
        email: this.email,
        password: this.password
      });

      console.log("register me plz")
    },

    isEmailValid(){
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.email).toLowerCase())
    },

    determineOutcome(){
      console.log("method: determineOutcome")

      // taken from https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams
      let queries = new URL(document.location).searchParams;
      const redirectUrl = queries.get("redirectUrl")

      if (!this.user){
        this.stage = 1
      }

      console.log(redirectUrl);
      console.log(this.stage);

      if (redirectUrl && this.stage === 0 ){
        window.location = redirectUrl;
      }
      else {
        this.user ? this.$router.push("/account") : this.stage = 1;
      }

    }
  },
  mounted(){
    this.determineOutcome();
  },
  watch: {
    user(){
      this.determineOutcome();
    }
  }
}
</script>

<style lang="css">

</style>
