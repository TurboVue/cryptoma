<template>
    <div id="overlay">
        <div id="loader">
            
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
#loader {
    width: 50px;
    height: 50px;
    margin: 0;
    background: transparent;
    border-top: 4px solid #00C2FF;
    border-right: 4px solid transparent;
    border-radius: 50%;
    -webkit-animation: 1s spin linear infinite;
    animation: 1s spin linear infinite;
}
    
@-webkit-keyframes spin {
    from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
          
@keyframes spin {
    from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

    // #loader {
    //     position: absolute;
    // // left: 50%;
    // // top: 50%;
    // // background: none;
    // border-top: 3px solid rgba(teal, .5);
    // border-right: 3px solid transparent;
    // border-radius: 50%;
    // animation: rotation .8s linear infinite;
    // // margin-top: -50px;
    // // margin-left: -50px;
    // // animation: loading-center-absolute 5s infinite;
    // }
    #overlay {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fffffff2;
        height: 100vh;
        position: fixed;
        top: 0;
        z-index: 2100;
        width: 100%;
    }

    @keyframes rotation{
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}

</style>