<template>
    <section  class="bg-[#181824] h-[3150px]">
        <div class="container mx-auto">
            <div>
                <h1 class="text-white text-[60px] text-center">Projects</h1>
                <div class="grid grid-cols-3 gap-[60px] text-white mt-[100px]">
                    <div class="flex flex-col rounded-[16px] duration-700 transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-100 mx-auto p-[20px] shadow-lg shadow-[#7562E0]">
                        <div class="flex justify-center">
                            <img src="../public/images/alibaba.png" class="w-[400px] h-[280px] border border-[3px] border-[#7562E0] rounded-[8px]" alt="">
                        </div>
                        <h1 class="text-[28px] mt-[30px] text-[#7562E0]">Alibaba Style</h1>
                        <p class="text-[20px] mt-[10px]">This is the side of Alibaba. With this site, you can order the things you need remotely.</p>
                        <p class="text-[18px] flex flex-cols mt-[20px] items-center justify-end gap-1"><i class='bx bx-code-alt text-[34px] text-[#7562E0]'></i>Frontend</p>
                        <div class="flex justify-center mt-[40px]">
                            <NuxtLink to="https://main--abdukarimovms-alibaba-style.netlify.app/">
                                <button class="live_btn bg-[#7562E0] w-[200px] h-[50px] rounded-[8px] text-[20px]">View Live</button>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="flex flex-col rounded-[16px] duration-700 transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-100 mx-auto p-[20px] shadow-lg shadow-[#7562E0]">
                        <div class="flex justify-center">
                            <img src="../public/images/academynew.png" class="w-[400px] h-[280px] border border-[3px] border-[#7562E0] rounded-[8px]" alt="">
                        </div>
                        <h1 class="text-[28px] mt-[30px] text-[#7562E0]">Academy</h1>
                        <p class="text-[20px] mt-[10px]">With this site, you can select the items you need and order them remotely.</p>
                        <p class="text-[18px] flex flex-cols mt-[20px] items-center justify-end gap-1"><i class='bx bx-code-alt text-[34px] text-[#7562E0]'></i>Frontend</p>
                        <div class="flex justify-center mt-[40px]">
                            <NuxtLink to="https://main--abdukarimov-academy-vue.netlify.app/">
                                <button class="live_btn bg-[#7562E0] w-[200px] h-[50px] rounded-[8px] text-[20px]">View Live</button>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="flex flex-col rounded-[16px] duration-700 transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-100 mx-auto p-[20px] shadow-lg shadow-[#7562E0]">
                        <div class="flex justify-center">
                            <img src="../public/images/lms.png" class="w-[400px] h-[280px] border border-[3px] border-[#7562E0] rounded-[8px]" alt="">
                        </div>
                        <h1 class="text-[28px] mt-[30px] text-[#7562E0]">LMS Style</h1>
                        <p class="text-[20px] mt-[10px]">The main principles of the work it does can be seen in the acronym itself.</p>
                        <p class="text-[18px] flex flex-cols mt-[20px] items-center justify-end gap-1"><i class='bx bx-code-alt text-[34px] text-[#7562E0]'></i>Frontend</p>
                        <div class="flex justify-center mt-[40px]">
                            <NuxtLink to="https://main--abdukarimovms-alibaba-style.netlify.app/">
                                <button class="live_btn bg-[#7562E0] w-[200px] h-[50px] rounded-[8px] text-[20px]">View Live</button>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="swiper">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                    <!-- Slide 1 -->
                    <div class="swiper-slide">  
                        <div class="swiper-image">
                            <div class="image"></div>
                        </div>
                    </div>
                    <!-- Slide 2 -->
                    <div class="swiper-slide">
                        <div class="swiper-image">
                            <div class="image"></div>
                        </div>
                    </div>
                    <!-- Slide 3 -->
                    <div class="swiper-slide">
                        <div class="swiper-image">
                            <div class="image"></div>
                        </div>
                    </div>
                    </div>
                    
                    <!-- If we need navigation buttons -->
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import "../public/js/swiper.js"
</script>

<style lang="css" scoped>

.live_btn:hover{
    background-color: #181824;
    border: 2px solid #7562E0;
    transition-duration: 300ms;
}

</style>