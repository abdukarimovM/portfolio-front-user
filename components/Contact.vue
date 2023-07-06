<template>
    <section class="bg-[#181824] h-[550px]">
        <div class="container mx-auto">
            <div class="flex justify-between p-[50px]">
                <div>
                    <h1 class="text-[#7562E0] font-medium text-[40px]">Connect with me:</h1>
                    <p class="text-white mt-[30px] text-[20px] flex gap-2"><i class='bx bxl-gmail text-[30px]'></i>abdukarimovmuslimbek2004@gmail.com</p>
                    <div class="text-[#7562E0] mt-[30px] text-[30px] flex gap-2">
                        <i class='bx bxl-linkedin' ></i>
                        <i class='bx bxl-instagram-alt' ></i>
                        <i class='bx bxl-telegram' ></i>
                        <i class='bx bxl-twitter'></i>
                        <i class='bx bxl-github'></i>
                    </div>
                </div>
                <div class="w-full gap-[20px] flex flex-col w-[716px] text-white">
                    <div class="gap-[16px] flex h-[50px]">
                        <input class="w-[350px] input bg-[#181824]" type="text" placeholder="Name:">
                        <input class="w-[350px] input bg-[#181824]" type="email" placeholder="Email:">
                    </div>
                    <input class="bg-[#181824] input h-[50px] w-[716px]" type="text" placeholder="Title:">
                    <textarea class="bg-[#181824] input h-[100px] w-[716px] pt-2" type="text" placeholder="Message:"></textarea>
                    <button class="live_btn bg-[#7562E0] w-[180px] h-[50px] rounded-[8px] text-white">Send</button>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>

</script>

<style lang="css" scoped>

.input{
    border-radius: 6px;
    padding-left: 6px;
    border: 2px solid #7562E0;
}
.live_btn:hover{
    background-color: #181824;
    border: 2px solid #7562E0;
    transition-duration: 300ms;
}

</style>