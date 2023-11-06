<template>
    <div class="main-scan-qr" v-if="showModal">
        <div class="header">
            <span>店舗に置いてあるQRコードを 読み取ってください。</span>
            <img src="/images/icon-close.svg" alt="" />
        </div>
        <div id="reader"></div>
        <div class="footer">
            <div class="footer-content">
                <span class="notifi-text"
                    >万が一、QRコードを読み取れない場合</span
                >
                <span class="sub-notifi-text"
                    >スタッフの案内に従って店舗コードを以下に入力してください。</span
                >
                <div class="store-code">
                    <span>店舗コード</span>
                    <input type="text" />
                </div>
                <div class="btn-close" @click="cancelModal">OK</div>
            </div>
        </div>
        <!-- <qrcode-scanner v-bind:qrbox="250" v-bind:fps="10" style="width: 500px"  @qrScanned="onQrScanned"> </qrcode-scanner> -->
    </div>
</template>

<script setup lang="ts">
import { watch, ref, nextTick } from "vue";
import { Html5QrcodeScanner } from "html5-qrcode";

const html5QrcodeScanner = ref();
const showModal = ref(false);
const props = defineProps({
    modelValue: Boolean,
});
const emits = defineEmits<{
    (e: "update:modelValue", v: boolean): void;
}>();
const cancelModal = (): any => {
    html5QrcodeScanner.value.clear();
    emits("update:modelValue", false);
};
watch(
    () => props.modelValue,
    async (value) => {
        showModal.value = value;
        if (showModal.value) {
            await nextTick();
            html5QrcodeScanner.value = new Html5QrcodeScanner(
                "reader",
                { fps: 10, qrbox: 250 },
                false
            );
            html5QrcodeScanner.value.render();
        }
    }
);
</script>
<style lang="scss" scoped>
.main-scan-qr {
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    background: #fff;
    .header {
        display: flex;
        justify-content: center;
        position: absolute;
        color: #fff;
        z-index: 10;
        height: 94px;
        background: rgba(0, 0, 0, 0.8);
        width: 100%;
        gap: 10px;
        span {
            display: flex;
            width: 259px;
            height: 100%;
            text-align: center;
            word-break: keep-all;
            font-family: "Noto Sans JP", sans-serif;
            font-weight: 700;
            font-size: 18px;
            line-height: 26px;
            align-items: center;
        }
        img {
            width: 24px;
            height: 24px;
            margin-top: 7px;
        }
    }
    .footer {
        position: absolute;
        bottom: 0;
        height: 297px;
        background: rgba(0, 0, 0, 0.8);
        padding: 21px 16px;
        color: #fff;
        width: 100%;
        box-sizing: border-box;
        .footer-content {
            display: flex;
            flex-direction: column;
            background: #fff;
            border-radius: 8px;
            height: 100%;
            padding: 13px 13px 16px 13px;
            color: #181818;
            gap: 12px;
            .notifi-text {
                font-family: "SF Pro";
                font-weight: 700;
                font-size: 16px;
                line-height: 24px;
            }
            .sub-notifi-text {
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
                height: 42px;
            }
            .store-code {
                display: flex;
                flex-direction: column;
                gap: 4px;
                span {
                    font-family: "SF Pro";
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 21px;
                    align-items: center;
                }
                input {
                    height: 39px;
                    outline: none;
                    border: 1px solid #d7d7d7;
                    padding: 0px 12px;
                }
            }
            .btn-close {
                height: 65px;
                border-radius: 8px;
                background: #098fac;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: "SF Pro Text";
                font-weight: 600;
                font-size: 20px;
                line-height: 20px;
            }
        }
    }
}
::v-deep(#reader) {
    > div:first-child {
        display: none !important;
    }
    border: 0px !important;
    #reader__dashboard {
        display: none !important;
    }
    video {
        height: 100vh !important;
        width: 100vw !important;
        object-fit: cover !important;
    }
    #reader__scan_region > img {
        display: none !important;
    }
    #qr-shaded-region {
        border-width: unset !important;
        position: relative;
        &::before {
            content: "";
            display: flex;
            background: url("/images/icon-scaner.svg") no-repeat;
            position: absolute;
            width: 166px;
            height: 166px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -100%);
        }
        > div {
            display: none !important;
        }
    }
}
</style>
