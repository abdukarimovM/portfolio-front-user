<template>
    <section class="bg-[#181824] h-[850px]">
        <div class="container mx-auto">
            <div class="hl"></div>
            <h1 class="text-white text-[50px] text-center mt-[100px]">My services</h1>
            <div class="grid grid-cols-3 gap-[60px] text-white mt-[100px]">
                <div class="border border-[5px] flex flex-col justify-center items-center pt-[70px] pb-[70px] rounded-[16px] hover:border-[#7562E0] duration-500 transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-105 hover:text-[#7562E0]">
                    <i class="bx bxl-javascript text-[80px]"></i>
                    <h1 class="text-[28px] mt-[20px] mb-[40px]">UI & UX DESIGNING</h1>
                    <p class="text-center text-[20px]">I design beautiful web iterfaces <br> with Figma and Adove XD</p>
                </div>
                <div class="border border-[5px] flex flex-col justify-center items-center pt-[70px] pb-[70px] rounded-[16px] hover:border-[#7562E0] duration-700 transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-105 hover:text-[#7562E0]">
                    <i class='bx bxl-python text-[80px]' ></i>
                    <h1 class="text-[28px] mt-[20px] mb-[40px]">MOBILE DEVELOPMENT</h1>
                    <p class="text-center text-[20px]">I create beautiful iterfaces with <br> simple HTML, CSS, & JavaScript <br> and also frameworks like Angular <br> and ReactJS</p>
                </div>
                <div class="border border-[5px] flex flex-col justify-center items-center pt-[70px] pb-[70px] rounded-[16px] hover:border-[#7562E0] duration-700 transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-105 hover:text-[#7562E0]">
                    <i class='bx bx-code-alt text-[80px]' ></i>
                    <h1 class="text-[28px] mt-[20px] mb-[40px]">NPM AND NODEJS</h1>
                    <p class="text-center text-[20px]">I have core understanding of NPM.<br> I can also develop general <br> purpose applications with NodeJS</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="css" scoped>

.hl {
  border-bottom: 6px solid #7562E0;
  width:auto;
}

</style>