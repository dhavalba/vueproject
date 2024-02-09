<template>
<router-view></router-view>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style>
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

* {
    box-sizing: border-box;
    font-family: 'robotoregular';
}

a:hover {
  text-decoration: none;
}

@font-face {
    font-family: 'robotolight_italic';
    src: url('../src/assets/fonts/roboto-lightitalic.woff2') format('woff2'),
        url('../src/assets/fonts/roboto-lightitalic.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'robotomedium';
    src: url('../src/assets/fonts/roboto-medium.woff2') format('woff2'),
        url('../src/assets/fonts/roboto-medium.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'robotomedium_italic';
    src: url('../src/assets/fonts/roboto-mediumitalic.woff2') format('woff2'),
        url('../src/assets/fonts/roboto-mediumitalic.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'robotoblack';
    src: url('../src/assets/fonts/roboto-black.woff2') format('woff2'),
        url('../src/assets/fonts/roboto-black.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'robotoblack_italic';
    src: url('../src/assets/fonts/roboto-blackitalic.woff2') format('woff2'),
        url('../src/assets/fonts/roboto-blackitalic.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'robotobold';
    src: url('../src/assets/fonts/roboto-bold.woff2') format('woff2'),
        url('../src/assets/fonts/roboto-bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'robotomedium';
    src: url('../src/assets/fonts/roboto-medium.woff2') format('woff2'),
        url('../src/assets/fonts/roboto-medium.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'robotomedium_italic';
    src: url('../src/assets/fonts/roboto-mediumitalic.woff2') format('woff2'),
        url('../src/assets/fonts/roboto-mediumitalic.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'robotoregular';
    src: url('../src/assets/fonts/roboto-regular.woff2') format('woff2'),
        url('../src/assets/fonts/roboto-regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

.signup-template, .login-template {
    width: 35%;
    margin: auto;
    padding: 20px;
    border: 1px solid #d9610b;
    border-radius: 30px;
}

 .signup-form.form-data, .login-form.form-data{
    margin-top: 15px;
}
.restro-logo {
    width: 300px;
}

.form-control {
    padding: 10px;
    font-size: 14px;
    width: 100%;
    margin-bottom: 15px;
    border: 1px solid #ad410d;
    height: calc(1.9em + .75rem + 2px);
}


.signup-form, .form-data::placeholder {
    color: #ad410d;
}
.submit-btn {
    background-color: #380500;
    padding: 10px;
    width: 100%;
    color: #fff;
    border: 0;
    margin-top: 10px;
    transition-duration: 0.4s;
}
.submit-btn:hover {
    background-color: #d9610b;
    
}

.form-control:focus {
    box-shadow: 0px 1px 4px 0px rgba(56, 5, 0, 1) !important;
}
.signup-title {
    font-size: 30px;
    color: #380500;
    padding-bottom: 15px;
    font-weight: 700;
    position: relative;
}
.signup-title::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 41px;
    background-color: #d9610b;
    display: block;
    left: 44%;
}
.Page_anchor a{
  color: #ad410d;
  font-size: 14px;
  text-align: right;
  
}
.Page_anchor {
  text-align: right;
  margin-top: 10px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
</style>
