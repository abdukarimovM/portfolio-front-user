<template>
    <section  class="bg-[#181824] h-[1100px]">
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
                <div class="mt-[70px] flex gap-3 justify-center">
                    <span class="pagination_1 shadow-lg shadow-[#7562E0]"></span>
                    <span class="pagination"></span>
                    <span class="pagination"></span>
                    <span class="pagination"></span>
                </div>
                <div class="hl mt-[120px]"></div>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style lang="css" scoped>

.live_btn:hover{
    background-color: #181824;
    border: 2px solid #7562E0;
    transition-duration: 300ms;
}
.pagination{
    border: 3px solid #7562E0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
}
.pagination_1{
    background-color: #7562E0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
}
.hl {
  border-bottom: 6px solid #7562E0;
  width:auto;
}
</style>