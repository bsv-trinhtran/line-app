<template>
    <div class="main-coupon-details">
        <div class="header-coupon-details">
            <div class="btn-used-once">
                <span>1回のみ使用可能</span>
            </div>
            <div style="display: flex; flex-direction: column">
                <span class="title-header">LINE限定 メダル50枚クーポン！</span>
            </div>
            <div class="expiration-date">
                <div class="btn-expiration-date">使用期限</div>
                <span>2022/02/02 12:00 ~ 2022/02/02 12:00</span>
            </div>
            <div class="date-use">
                <div class="btn-expiration-date">利用日</div>
                <span>利用日：2023/09/12　12:10</span>
            </div>
        </div>
        <div class="body-coupon-details">
            <div class="image-logo"></div>
            <div class="content-coupon-details">
                <span
                    >クーポンを利用するには、この画面をスタッフに提示し、店舗に設置してあるQRコードを読み取ってください。</span
                >
                <span
                    >使用済みのクーポンはご利用になれません。また、お客様の操作で誤って「使用済み」にしてしまった場合も利用できなくなります。</span
                >
            </div>
        </div>
        <div class="footer-coupon-details">
            <div class="btn-footer-coupon-details" @click="openModal(1)">
                <span class="title-btn">クーポンを利用する</span>
                <span class="sub-title-btn"
                    >（店舗QRコード読み取り画面へ）</span
                >
            </div>
        </div>
        <ModalCouponDetails v-model="useCoupon" />
        <ModalAnimationCouponDetails v-model="isModalAnimation" />
        <ScanQrCoupon
            v-model="isModalScaner"
            @update:modelValue="useCoupon = $event"
        />
    </div>
</template>

<script lang="ts" setup>
import ModalCouponDetails from "@app/components/ModalCouponDetails.vue";
import ModalAnimationCouponDetails from "@app/components/ModalAnimationCouponDetails.vue";
import ScanQrCoupon from "@app/pages/ScanQrCoupon.vue";
import { ref } from "vue";

const isModalScaner = ref(false);
const isModalAnimation = ref(false);
const useCoupon = ref(false);

const openModal = (value: any) => {
    if (value == 1) {
        isModalAnimation.value = true;
    } else {
        isModalScaner.value = true;
    }
};
const checkScanQR = (value: any) => {
    isModalScaner.value = true;
};
</script>

<style lang="scss" scoped>
.main-coupon-details {
    padding: 20px 16px;
    font-family: "SF Pro";
    display: flex;
    flex-direction: column;
    height: 100vh;
    min-height: 100vh;
    box-sizing: border-box;
}
.header-coupon-details {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-bottom: 20px;
    .btn-used-once {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #e93f3f;
        border-radius: 4px;
        height: 28px;
        width: 128px;
        font-family: "SF Pro Text";
        span {
            color: #e93f3f;
            font-weight: 500;
            font-size: 14px;
        }
    }
    .title-header {
        color: #181818;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
    }
    .expiration-date,
    .date-use {
        display: flex;
        white-space: nowrap;
        gap: 8px;
        align-items: center;
        .btn-expiration-date {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #efefef;
            border-radius: 4px;
            width: 56px;
            height: 23px;
            font-weight: 400;
            font-size: 10px;
            color: #5c5c5c;
        }
        span {
            color: #8a8a8a;
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;
        }
    }
    .date-use {
        span {
            color: #000000;
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;
        }
    }
}
.body-coupon-details {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .image-logo {
        background: #d9d9d9;
        border-radius: 4px;
        width: 100%;
        height: 179px;
    }
    .content-coupon-details {
        display: flex;
        flex-direction: column;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #181818;
    }
}
.footer-coupon-details {
    display: flex;
    align-items: flex-end;
    height: 100%;
}
.btn-footer-coupon-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 4px;
    border-radius: 8px;
    background: #098fac;
    height: 65px;
    font-family: "SF Pro Text";
    .title-btn {
        color: #fff;
        font-weight: 600;
        font-size: 20px;
        line-height: 20px;
    }
    .sub-title-btn {
        font-weight: 500;
        font-size: 12px;
        line-height: 17.38px;
        color: #fff;
    }
}
</style>
