<!-- src/components/Slides.vue -->
<template>
    <transition-group name="fade" mode="out-in" tag="div" id="slides">
        <div class="slideImage" :style="setBackgroundImage"
        :key="image.id">
            <div class="slideTitle">
                {{image.title}}
            </div>
        </div>
    </transition-group>
</template>

<script>
export default {
    props: ["image"],
    computed:{
        setBackgroundImage(){
            return {backgroundImage : "url("+this.image.url+")"};
        }
    }
}
</script>

<style>
#slides{

}
#slides .slideImage{
    height: 15vw;
    width: 50vw;
    background-position:center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
}
#slides .slideImage .slideTitle{
    color:Red;
    font-weight: bold;
    font-size: 40px;
    height:15vw;
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}
.fade-enter-active{
    animation-name: fadeenter;
    animation-duration: 1s;
    animation-iteration-count: 1;
}
.fade-move{
    transition: all 1s;
}
.fade-leave-active{
    animation-name: fadeleave;
    animation-duration: 1s;
    animation-iteration-count: 1;
    position: absolute;
}
@keyframes fadeenter{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
@keyframes fadeleave{
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
}
</style>