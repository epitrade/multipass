<template>
  <main class="center-container mt">
    <nuxt />
  </main>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions([
      "checkAuthState",
    ])
  },
  mounted(){
    this.checkAuthState();
  }
};
</script>

<style lang="css">

  @font-face {
      font-family: "fira";
      src: url("~assets/fonts/fira.ttf");
      font-weight: normal;
      font-style: normal;
  }


  @font-face {
      font-family: "noto";
      src: url("~assets/fonts/noto.ttf");
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: "monserrat";
      src: url("~assets/fonts/monserrat.ttf");
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: "firacode";
      src: url("~assets/fonts/firacode.ttf");
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: "firamono";
      src: url("~assets/fonts/firamono.ttf");
      font-weight: normal;
      font-style: normal;
  }


  :root {
      --main: #fff;
      --link: #9E713A;
      --header-bg: #EBB46F;
      --button: #EBB36E;
      --button-lighter: #ecb875;
      --background: #fff;
      --light-text: #fff;
      --dark-text: #120C1C;
    }

  /* mini reset */
  html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}
  /* input[type="number"] remove arrows */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }

  /* styles begin here */

  a:focus {
      outline:0;
  }

  a:active,
  a:hover {
      outline: 0;
  }



  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "firacode";
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    background: var(--background);
    color: var(--text);
    font-size: 18px;
    text-shadow: 1px 1px rgba(0,0,0,0.05);
    line-height: 1.5em;
    position: relative;
  }

  .main-wrapper {
    padding-top: 64px;
    min-height: calc(100vh + 128px);
    display: grid;
    grid-template-rows: 1fr auto;
  }

  .vc-chrome {
    font-family: "firacode" !important;
  }

  a {
    color: var(--link);
    text-decoration: none;
    transition: 0.5s all;
    display: inline-block;
  }

  a:hover {
    color: var(--link);
    opacity: 0.5;
    cursor: pointer;
  }

  h1 {
    background: var(--header-bg);
    width: 1.5em;
    white-space: nowrap;
    padding: 16px;
    padding-left: 8px;
    border-radius: 4px;
    font-size: 48px;
    margin-bottom: 1.2em;
  }

  h2 {
    background: var(--header-bg);
    width: 1.5em;
    white-space: nowrap;
    padding: 8px;
    border-radius: 4px;
    font-size: 32px;
    margin-bottom: 1.2em;
  }

  h3 {
    font-size: 32px;
    margin-bottom: 1.2em;
  }

  p {
    margin-bottom: 1.2em;
  }

  .text-ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 75%;
    display: inline-block;
  }

  .center-container {
    width: 60%;
    margin: auto;
    position: relative;
  }

  .admin-toolbar, .secondary-toolbar {
    padding-left: 20%;
    padding-right: 20%;
  }

  .secondary-toolbar {
    background: #eee;
    border-bottom: 1px solid rgba(0,0,0,0.09);
    width: 100%;
    margin: auto;
    position: fixed;
    top: 128px;
    height: 122px;
    z-index: 5;
  }



  .site-logo-wrapper {
    width: 256px;
    float:left;
  }

  .right {
    float: right;
  }

  .text-right {
    text-align: right;
  }

  .banner {
    padding: 6px;
    background: rgba(0,0,0,0.05);
    font-size: 12px;
    border-radius: 4px;
    z-index: 1;
  }

  .large-icon {
    font-size: 26px;
    color: black;
    line-height: 64px;
  }

  .tiny {
    font-size: 9px;
  }

  .small {
    font-size: 11px;
  }

  .medium {
    font-size: 13px;
  }

  .large {
    font-size: 22px;
  }

  .huge {
    font-size: 28px;
  }

  .massive {
    font-size: 36px;
  }

  .bold, .strong {
    font-weight: 700;
  }

  .ma {
    margin: 16px;
  }

  .ml {
    margin-left: 16px;
  }

  .mr {
    margin-right: 16px;
  }

  .mt {
    margin-top: 16px;
  }

  .mb {
    margin-bottom: 16px;
  }

  .mx {
    margin: 64px;
  }

  .mtm {
    margin-top: 32px;
  }

  .mbm {
    margin-bottom: 32px;
  }

  .mtx {
    margin-top: 64px;
  }

  .mbx {
    margin-bottom: 64px;
  }

  .mlx {
    margin-left: 64px;
  }

  .mrx {
    margin-right: 64px;
  }


  .pl {
    margin-left: 16px;
  }

  .pr {
    margin-right: 16px;
  }

  .pt {
    margin-top: 8px;
  }

  .pb {
    margin-bottom: 8px;
  }

  .ptm {
    margin-top: 16px;
  }

  .pbm {
    margin-bottom: 16px;
  }

  .ptx {
    margin-top: 32px;
  }

  .bt {
    border-top: 1px solid rgba(0,0,0,0.1);
  }

  .br {
    border-right: 1px solid rgba(0,0,0,0.1);
  }

  .bb {
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }

  .bl {
    border-left: 1px solid rgba(0,0,0,0.1);
  }

  .ba {
    border: 1px solid rgba(0,0,0,0.1);
  }

  .reduced-lh {
    line-height: 50%;

  }


  .fh {
    height: 100%;
  }

  .flex-wrapper {
    display: flex;
  }

  .flex-column {
    flex-direction: column;
  }

  .flex-item {
    flex: 1;
  }

  .flex-item-25 {
    flex: 1;
  }

  .flex-item-50 {
    flex: 2;
  }

  .flex-item-75 {
    flex: 3;
  }

  .flex-item-100 {
    flex: 3;
  }

  .flex-grid {
    display: flex;
    flex-wrap: wrap;
    column-gap: 8px;
    row-gap: 8px;
  }

  .flex-grid-item {
    flex-grow: 1;
  }

  .row {
    float: left;
    width: 100%;
  }

  .force-row {
    width: 100% !important;
  }

  .vcenter {
    vertical-align: bottom;
  }

  .relative {
    position: relative;
  }


  .site-header {
    padding: 8px;
    background: #eee;
    width: 69px;
    margin-bottom: 16px;
    white-space: nowrap;
  }

  .navigation-links {
    display: inline-block;
    float: left;
  }

  .navigation-links .link {
    font-size: 18px;
    line-height: 64px;
    display: inline-block;
    color: black;
    padding: 0px 8px;
    float:left;
    outline: none;
  }

  .navigation-links .link:hover {
    text-shadow: 0px 0px 18px rgba(0,0,0,0.7);
  }

  .site-logo .nuxt-link-active {
    filter:brightness(1) !important;
  }

  .fixed-bottom {
    bottom: 0;
    position: fixed;
    left: 0;
  }

  .inline-block {
    display: inline-block;
  }

  .fade {
    opacity: 0.4;
  }

  .strong {
    font-weight: 700;
  }

  .auto {
    width: auto;
  }

  .c5 {
    width: 5%;
    float:left;

  }
  .c6 {
    width: 6.25%;
    float:left;
  }
  .c7 {
    width: 7%;
    float:left;
  }
  .c8 {
    width: 8%;
    float:left;
  }
  .c9 {
    width: 9%;
    float:left;
  }

  .c10 {
    width: 10%;
    float:left;
  }

  .c12 {
    width: 12%;
    float:left;
  }

  .c14 {
    width: 14%;
    float:left;
  }

  .c15 {
    width: 15%;
    float:left;
  }

  .c16 {
    width: 16%;
    float:left;
  }

  .c18 {
    width: 18%;
    float:left;
  }

  .c20 {
    width: 20%;
    float:left;
  }


  .c22 {
    width: 22%;
    float:left;
  }

  .c23 {
    width: 23%;
    float:left;
  }


  .c24 {
    width: 24%;
    float:left;
  }

  .c25 {
    width: 25%;
    float:left;
  }

  .c28 {
    width: 28%;
    float:left;
  }

  .c33 {
    width: 33%;
    float:left;
  }

  .c30 {
    width: 30%;
    float:left;
  }

  .c40 {
    width: 40%;
    float: left;
  }

  .c41 {
    width: 41%;
    float: left;
  }

  .c42 {
    width: 42%;
    float: left;
  }

  .c43 {
    width: 43%;
    float: left;
  }

  .c44 {
    width: 44%;
    float: left;
  }

  .c45 {
    width: 45%;
    float: left;
  }

  .c46 {
    width: 46%;
    float: left;
  }

  .c47 {
    width: 47%;
    float: left;
  }

  .c48 {
    width: 48%;
    float: left;
  }

  .c50 {
    width: 50%;
    float:left;
  }


  .c58 {
    width: 58%;
    float:left;
  }

  .c57 {
    width: 57%;
    float:left;
  }

  .c60 {
    width: 60%;
    float:left;
  }

  .c67 {
    width: 67%;
    float: left;
  }

  .c70 {
    width: 70%;
    float:left;
  }

  .c75 {
    width: 75%;
    float:left;
  }

  .c80 {
    width: 80%;
    float:left;
  }

  .c90 {
    width: 90%;
    float:left;
  }

  .c95 {
    width: 95%;
    float:left;
  }

  .c98 {
    width: 98%;
    float:left;
  }

  .c100 {
    width: 100%;
    float:left;
  }

  .c-offset {
    left: -17.5%;
  }

  .pad {
    padding: 16px;
  }

  .lesspad {
    padding: 8px;
  }


  .nopad {
    padding: 0px;
  }

  .cta {
    border: none;
  }

  .green {
    color: #288e3b;
  }
  .red {
    color: #b51d13;
  }

  .red-cta {
    background: #b51d13;
    color: white;
    border-radius: 4px;
  }

  .orange-cta {
    background: #c87132;
    color: white;
    border-radius: 4px;
  }

  .blue-cta {
    background: #137bb5;
    color: white;
    border-radius: 4px;
  }

  .purple-cta {
    background: #573183;
    color: white;
    border-radius: 4px;
  }

  .green-cta {
    background: #288e3b;
    color: white;
    border-radius: 4px;
  }

  .grey-bg {
    background: rgba(0,0,0,0.02);
  }

  .border-radius {
    border-radius: 3px;
  }

  .order {
    border: 1px solid;
    border-radius: 4px;
  }

 .pt {
   padding-top: 8px;
 }

 .pt2 {
   padding-top: 16px;
 }

 .pr {
   padding-right: 8px;
 }

 .pr2 {
   padding-right: 16px;
 }

 .pr3 {
   padding-right: 32px;
 }

 .pl {
   padding-left: 8px;
 }

 .pl2 {
   padding-left: 16px;
 }

 .pl3 {
   padding-left: 32px;
 }

 .svg-align-left {
   position: absolute;
   top: 0;
   left: 0;
 }

 .svg-align-right {
   margin-top: 4px;
   position: absolute;
   top: 0;
   right: 0;
 }

 .checkbox {
   width: auto;
   display: inline;
   padding: 8px;
   outline: none;
 }

  input, textarea, .StripeElement, .input-field {
    padding: 16px;
    border: 0;
    outline: 0;
    width: 100%;
    font-family: "firacode";
    color: var(--dark-text);
    background: rgba(255,255,255,0.83);
    box-shadow: inset 0px 0px 5px 5px rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.07);
    font-size: 16px;
    border-radius: 4px;
    transition: 0.4s all;
  }

  input:focus, textarea:focus, .input-field:focus {
    background: var(--button-lighter);
    box-shadow: inset 0px 0px 32px 0px rgba(0,0,0,0.3);
    color: black;
    border: 1px solid 1px solid rgba(0,0,0,0.5);
  }

  .ProseMirror-focused {
    outline: none;
  }

  select {
    width: 100%;
    border: 1px solid rgba(0,0,0,0.08);
    padding: 6px;
    outline: none;
  }

  option {
    outline: none;
  }

  textarea {
    resize: vertical;
    outline: none;
    transition: none;
  }

  button {
    padding: 16px;
    border: 0;
    outline: 0;
    font-family: "firacode";
    font-weight: normal;
    background: var(--button);
    border-radius: 3px;
    border: 1px solid rgba(0,0,0,0.1);
    text-align: left;
    width: auto;
    font-size: 16px;
    color: var(--dark-text);
    transition: 0.5s all;
  }

  button::-moz-focus-inner {
    border: 0;
  }

  button.absolute-center {
    background: black;
    border: none;
    color: white;
  }

  .disabled-button {
    cursor: not-allowed;

    color: rgba(0,0,0,0.5);
    background: rgba(255,255,255,0.1);
    opacity: 1;
  }



  button:hover:not(.secondary-button):not(:disabled):not(.disabled-button)  {
    cursor: pointer;
    box-shadow: inset 200px 0px 0px 0px rgba(255,255,255,0.15);
    color: var(--link);
    border-bottom-right-radius: 12px;
    border-top-left-radius: 12px;
    transition: 0.5s all;
  }

  .disabled-button:hover, .disabled-button label:hover {
    cursor: not-allowed;
  }
  label {
    width: 100%;
    font-size: 16px;
    display: inline-block;
  }

  .button-container {
    font-size: 0px;
  }

  .button-container button {
    border-radius: 0px;
  }

  .button-container button:nth-child(odd) {
    background: rgba(0,0,0,0.2);
    border-color: rgba(0,0,0,0.2);
    color: black;
  }

  .secondary-button {
    background:  none;
    border: 1px solid rgba(255, 255, 255, 0.6);
    min-width: 36px;
    min-height: 36px;
    padding: 12px;
    color: var(--text);
    background: linear-gradient(rgba(0,0,0,0.02) 0%, rgba(255,255,255,0) 100% );
  }

  .secondary-button:not(:disabled):hover {
    opacity: 0.4;
    cursor: pointer;
  }

  .no-shadow {
    box-shadow: none;
  }

  .extra-height {
    min-height: 256px;
  }

  .nudge-top {
    top: 156px;
  }

  .text-center {
    text-align: center;
  }

  .right {
    float: right;
  }

  .grid {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .two-input-grid {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 3fr 1fr;
  }

 .grid-table {
  display: grid;
}

  .input-grid {
    display: grid;
    grid-template-columns: 4fr 4fr 1fr 1fr;
    grid-gap: 8px;
  }


  .asymetrical-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr 1fr 2fr);
  }

  .three-grid {
    display: grid;
    grid-template-columns: 6fr 2fr 1fr;
  }

  .grid-table-item {
    display: grid;
    grid-template-columns: 5% 30% 25% 35% 5%;
    line-height: 64px;
  }

  .grid-table-item:nth-child(even) {
    background: rgba(0,0,0,0.03);
  }


  .grid-table-item button {
    margin-top: 8px;
    margin-right: 8px;
  }

  .absolute-top-right {
    position: absolute;
    top: 0;
    right: 0;
  }

  .dashed-border {
    border: 1px dashed rgba(0,0,0,0.3);
    border-radius: 2px;
  }

  .dashed-bg {
    background-image: linear-gradient(45deg, #ffffff 25%, #fafafa 25%, #fafafa 50%, #ffffff 50%, #ffffff 75%, #fafafa 75%, #fafafa 100%) !important;
    background-size: 22.63px 22.63px ;
  }

  .site-footer {
    background: black;
    color: white;
    width: 100%;
    height: 128px;
    bottom: -128px;
    position: absolute;
  }

  .parallax-bg {
    border: 1px solid rgba(0,0,0,0.1);
    color: var(--light-text);
    background-image: url("~assets/backgrounds/spiration-dark.png");
    min-height: 156px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: repeat;
    overflow: hidden;
    transition: 0.4s all;
    position: relative;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .page-enter-active {
    animation: acrossIn .2s ease-out both;
  }

  .page-leave-active {
    animation: acrossOut .2s ease-in both;
  }

  @keyframes acrossIn {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes acrossOut {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(100%, 0, 0);
    }
  }


  @media (max-width: 1300px){
    .center-container {
      width: 80%;
    }
  }
</style>
