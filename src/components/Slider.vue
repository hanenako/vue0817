<!-- src/components/Slider.vue -->
<template>
    <div id="slider">
        <Slides :image="images[this.chooseImage]"/>
    </div>
</template>

<script>
import Slides from './Slides.vue';
export default {
    components : {
        Slides
    },
    data(){
        return{
            images : [
                {
                    id: 0,
                    url : "/img/image1.png",
                    title: "image1"
                },
                {
                    id: 1,
                    url : "/img/image2.png",
                    title: "image2"
                },
                {
                    id: 2,
                    url : "/img/image3.png",
                    title: "image3"
                },
                {
                    id: 3,
                    url : "/img/image4.png",
                    title: "image4"
                },
            ],
            chooseImage : 0
        }
    },
    methods :{
        move(){
            this.chooseImage = (this.chooseImage + 1) % this.images.length;
            // var flag = this.chooseImage++;
            // flag++;
            // if(flag >= this.images.length){
            //     flag=0;
            // }
            // this.chooseImage=flag;
        }
    },
    created(){
        var self= this;
        setInterval(()=> {
            self.move();
        },4000);
    }
}
</script>

<style>
    #slider{

    }
</style>