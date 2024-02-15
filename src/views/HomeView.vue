<template>
    <main>line mini app</main>
</template>
<script setup lang="ts">
import { watch, ref, nextTick, onMounted } from "vue";
import { Html5Qrcode } from "html5-qrcode";
import liff from "@line/liff";
onMounted(async () => {
    await liff.init({ liffId: "2003527394-rzmKd74p" }).catch((err) => {
        console.log("LIFFの初期化失敗。\n" + err);
    });
    if (!liff.isLoggedIn()) {
        await liff.login();
    }
    const x = await liff.getProfile();
    console.log(x);
});
</script>
