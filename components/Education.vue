<template>
    <section class="bg-[#181824] h-[980px]">
        <div class="container mx-auto">
            <div>
                <div class="hl"></div>
                <h1 class="text-white text-[50px] text-center mt-[100px]">Education</h1>
                <div class="grid grid-cols-3 gap-[100px] mt-[80px]">
                    <div class="work relative rounded-[10px] overflow-hidden flex items-center justify-center h-[500px] ">
                        <img src="../public/images/tatu.png" class="w-[360px] h-[360px]" alt="">
                        <div class="text-white layer absolute top-0 w-full h-0 rounded-[10px] items-center justify-center flex flex-col gap-[10px]">
                            <p class="text-[18px]">September 2021 - to Now</p>
                            <h1 class="text-center text-[28px]">Tashkent University of <br> Information Technologies</h1>
                            <h2 class="text-[22px]">Cyber security</h2>
                            <a class="mb-[220px] w-[60px] bg-white mt-[10px] h-[60px] rounded-full flex items-center justify-center" href="https://tuit.uz/"><i class='bx bx-link-external text-[30px] text-[#7562E0]'></i></a>
                        </div>
                    </div>
                    <div class="work relative rounded-[10px] overflow-hidden">
                        <img src="../public/icons/najot.svg" class="w-full h-full" alt="">
                        <div class="text-white layer absolute top-0 w-full h-0 rounded-[10px] items-center justify-center flex flex-col gap-[10px]">
                            <p class="text-[18px]">June 2022 - July 2023</p>
                            <h1 class="text-center text-[28px]">"Najot Ta'lim" Learning center</h1>
                            <h2 class="text-center text-[22px]">Full Stack developer <br> (Nodejs + Vuejs)</h2>
                            <a class="mb-[220px] w-[60px] bg-white mt-[10px] h-[60px] rounded-full flex items-center justify-center" href="https://najottalim.uz/"><i class='bx bx-link-external text-[30px] text-[#7562E0]'></i></a>
                        </div>
                    </div>
                    <div class="work relative rounded-[10px] overflow-hidden">
                        <div class="w-full h-full flex justify-center items-center">
                            <img src="../public/images/oxford-3.png" class="w-[34   5px] h-[400px]" alt="">
                        </div>
                        <div class="text-white layer absolute top-0 w-full h-0 rounded-[10px] items-center justify-center flex flex-col gap-[10px]">
                            <p class="text-[18px]">the near Future</p>
                            <h1 class="text-center text-[28px]">University of Oxford</h1>
                            <h2 class="text-center text-[22px]"> Computer Science & <br> Information Systems</h2>
                            <a class="mb-[220px] w-[60px] bg-white mt-[10px] h-[60px] rounded-full flex items-center justify-center" href="https://najottalim.uz/"><i class='bx bx-link-external text-[30px] text-[#7562E0]'></i></a>
                        </div>
                    </div>
                </div>
                <div class="hl mt-[110px]"></div>
            </div>  
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="css" scoped>

.layer{
    background: linear-gradient(rgba(0,0,0,0.6), #3d3473);
    transition: height 0.5s;
}
.work:hover img{
    transform: scale(1.1);
}
.work img{
    display: block;
    transition: transform 0.5s;
}
.work:hover .layer{
    height: 100%;
}
.work:hover .layer a{
    margin-bottom: 0;
}
.hl {
  border-bottom: 6px solid #7562E0;
  width:auto;
}


</style>