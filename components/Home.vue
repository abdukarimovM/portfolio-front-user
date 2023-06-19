<template>
    <section class="bg-[#181824] h-screen">
        <div class="container mx-auto">
            <div class="flex justify-between">
                <div class="text-white pt-[150px] font-medium">
                    <h1 class="text-[40px]">Hello, i'm</h1>
                    <h2 class="text-[60px]">Muslimbek <br> Abdukarimov</h2>
                    <p class="text-[20px] mt-[10px]">Fullstack developer focused on creating Websites and <br> Web applications.I really like different projects that <br> solve real problems.</p>
                    <div class="flex gap-[40px] text-[18px] mt-[30px]">
                        <button class="items-center justify-center w-[180px] h-[50px] flex gap-[10px] bg-[#7562E0] rounded-[8px]">About me <img src="../public/icons/user.svg" alt=""></button>
                        <button class="items-center justify-center w-[180px] h-[50px] border rounded-[8px] border-[#7562E0] border-[2px]">Projects <i class='bx bxs-rocket ml-[10px]'></i></button>
                    </div>
                </div>
                <div class="vl mt-[120px]"></div>
                <div class="mt-[100px]">
                    <div class="shadow-2xl shadow-[#7562E0] bg-[#7562E0] w-[520px] h-[520px] flex justify-center items-end rounded-full overflow-hidden">
                        <img class="w-[484px] h-[484px] " src="../public/images/man.png" alt="">   
                    </div>
                </div>
            </div>
            <div class="hl mt-[160px]"></div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="css" scoped>
.vl {
  border-left: 6px solid #7562E0;
  height: 500px;
}
.hl {
  border-bottom: 6px solid #7562E0;
  width:auto;
}
</style>