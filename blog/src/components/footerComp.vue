<template>
    <div class="footer-sec">
        <h2>footer component</h2>
        <p>@copywrite all rights reserved</p>
    </div>
    
</template>
<script>
    export default {
        name: "footerComp"
    }
</script>
<style>
    * {
        position: relative;
        
    }
    .footer-sec {
        background-color: #ededed;
        position: absolute;
        bottom: 0;
        border-top: 1px solid;
        width: 100%;
    }
</style>