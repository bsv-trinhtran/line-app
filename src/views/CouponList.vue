<template>
    <div class="main-coupon-list">
        <div class="header-coupon-list">
            <div class="image-header"></div>
            <span class="title-header"
                >おトクにメダルをほしい方はサブスク！！</span
            >
        </div>
        <div class="body-coupon-list">
            <div class="menu-selectbox">
                <SelectBox
                    :items="['新しい順', '使用期限が近い順', '使用済み順']"
                    v-model="selectedMenu"
                />
            </div>
            <div class="content-menu-already-used">
                <div class="content-menu-subscription-coupon">
                    <div class="title-subscription-coupon">
                        <span>サブスク クーポン</span>
                    </div>
                    <div
                        class="content-subscription-coupon"
                        v-if="selectedMenu == '新しい順'"
                    >
                        <div class="item-content" @click="toCouponDetails(1)">
                            <img
                                src="/images/image-demo.png"
                                alt=""
                                class="image-logo"
                            />
                            <div
                                style="
                                    display: flex;
                                    flex-direction: column;
                                    gap: 4px;
                                    width: 100%;
                                "
                            >
                                <div style="display: flex; gap: 4px">
                                    <div class="btn btn-lottery">
                                        <span>抽選</span>
                                    </div>
                                    <span class="title-item-content"
                                        >テキストテキストテキストテキストテキストテキストテキストテキスト</span
                                    >
                                </div>
                                <span class="sub-title-item-content"
                                    >2022/02/02 12:00 ~ 2022/02/02 12:00</span
                                >
                                <span class="date-use"
                                    >期限：2023/09/12　12:10</span
                                >
                            </div>
                            <div>
                                <div class="icon-arrow-right">
                                    <img
                                        src="/images/icon-arrow-right.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="item-content" @click="toCouponDetails(1)">
                            <img
                                src="/images/image-demo.png"
                                alt=""
                                class="image-logo"
                            />
                            <div
                                style="
                                    display: flex;
                                    flex-direction: column;
                                    gap: 4px;
                                    width: 100%;
                                "
                            >
                                <div style="display: flex; gap: 4px">
                                    <div class="btn btn-lottery">
                                        <span>抽選</span>
                                    </div>
                                    <span class="title-item-content"
                                        >テキストテキストテキストテキストテキストテキストテキストテキスト</span
                                    >
                                </div>
                                <span class="sub-title-item-content"
                                    >2022/02/02 12:00 ~ 2022/02/02 12:00</span
                                >
                                <span class="date-use"
                                    >期限：2023/09/12　12:10</span
                                >
                            </div>
                            <div>
                                <div class="icon-arrow-right">
                                    <img
                                        src="/images/icon-arrow-right.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="item-content" @click="toCouponDetails(1)">
                            <img
                                src="/images/image-demo.png"
                                alt=""
                                class="image-logo"
                            />
                            <div
                                style="
                                    display: flex;
                                    flex-direction: column;
                                    gap: 4px;
                                    width: 100%;
                                "
                            >
                                <div style="display: flex; gap: 4px">
                                    <span class="title-item-content"
                                        >テキストテキストテキストテキストテキストテキストテキストテキスト</span
                                    >
                                </div>
                                <span class="sub-title-item-content"
                                    >2022/02/02 12:00 ~ 2022/02/02 12:00</span
                                >
                                <span class="date-use"
                                    >期限：2023/09/12　12:10</span
                                >
                            </div>
                            <div
                                :style="
                                    isLottery
                                        ? 'display: flex; align-items: center'
                                        : ''
                                "
                            >
                                <div class="icon-arrow-right">
                                    <img
                                        src="/images/icon-arrow-right.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="no-coupon" v-else>
                        <div class="notifi-no-coupon">
                            <div class="icon-coupon">
                                <img src="/images/icon-coupon.svg" alt="" />
                            </div>
                            <span>クーポンはありません</span>
                        </div>
                        <div class="header-coupon-list">
                            <div class="image-header"></div>
                            <span class="title-header"
                                >おトクにメダルをほしい方はサブスク！！</span
                            >
                        </div>
                    </div>
                </div>
                <div class="content-menu-coupon">
                    <div class="title-subscription-coupon">
                        <span>クーポン</span>
                    </div>
                    <div class="content-subscription-coupon">
                        <div class="item-content" @click="toCouponDetails(1)">
                            <img
                                src="/images/image-demo.png"
                                alt=""
                                class="image-logo"
                            />
                            <div
                                style="
                                    display: flex;
                                    flex-direction: column;
                                    gap: 4px;
                                    width: 100%;
                                "
                            >
                                <div style="display: flex; gap: 4px">
                                    <div class="btn btn-lottery">
                                        <span>抽選</span>
                                    </div>
                                    <span class="title-item-content"
                                        >テキストテキストテキストテキストテキストテキストテキストテキスト</span
                                    >
                                </div>
                                <span class="sub-title-item-content"
                                    >2022/02/02 12:00 ~ 2022/02/02 12:00</span
                                >
                                <span class="date-use"
                                    >使用日：2023/09/12　12:10</span
                                >
                            </div>
                            <div class="icon-arrow-right">
                                <img
                                    src="/images/icon-arrow-right.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div class="item-content" @click="toCouponDetails(1)">
                            <img
                                src="/images/image-demo.png"
                                alt=""
                                class="image-logo"
                            />
                            <div
                                style="
                                    display: flex;
                                    flex-direction: column;
                                    gap: 4px;
                                    width: 100%;
                                "
                            >
                                <div style="display: flex; gap: 4px">
                                    <div class="btn btn-lottery">
                                        <span>抽選</span>
                                    </div>
                                    <span class="title-item-content"
                                        >テキストテキストテキストテキストテキストテキストテキストテキスト</span
                                    >
                                </div>
                                <span class="sub-title-item-content"
                                    >2022/02/02 12:00 ~ 2022/02/02 12:00</span
                                >
                                <span class="date-use"
                                    >使用日：2023/09/12　12:10</span
                                >
                            </div>
                            <div>
                                <div class="icon-arrow-right">
                                    <img
                                        src="/images/icon-arrow-right.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="item-content" @click="toCouponDetails(1)">
                            <img
                                src="/images/image-demo.png"
                                alt=""
                                class="image-logo"
                            />
                            <div
                                style="
                                    display: flex;
                                    flex-direction: column;
                                    gap: 4px;
                                    width: 100%;
                                "
                            >
                                <div style="display: flex; gap: 4px">
                                    <span class="title-item-content"
                                        >テキストテキストテキストテキストテキストテキストテキストテキスト</span
                                    >
                                </div>
                                <span class="sub-title-item-content"
                                    >2022/02/02 12:00 ~ 2022/02/02 12:00</span
                                >
                            </div>
                            <div
                                :style="
                                    isLottery
                                        ? 'display: flex; align-items: center'
                                        : ''
                                "
                            >
                                <div class="icon-arrow-right">
                                    <img
                                        src="/images/icon-arrow-right.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import SelectBox from "@/components/SelectBox.vue";
import { useRouter } from "vue-router";

const isLottery = ref(true);
const selectedMenu = ref("新しい順");
const router = useRouter();

const toCouponDetails = (id: any) => {
    router.push(`/coupon-details/${id}`);
};
</script>

<style lang="scss" scoped>
.main-coupon-list {
    font-family: "SF Pro";
    padding: 19px 8px 23px 8px;
}
.header-coupon-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-family: "Hiragino Kaku Gothic Pro";
    .image-header {
        background: #d9d9d9;
        border-radius: 4px;
        width: 100%;
        height: 187px;
    }
    .title-header {
        margin-left: 3px;
        height: 21px;
        font-weight: 600;
        font-size: 14px;
        color: #000;
    }
}
.body-coupon-list {
    .menu-selectbox {
        margin-top: 34px;
        margin-bottom: 24px;
        --v-input-height: 44px;
        width: 100%;
    }
    .content-menu-already-used {
        .content-menu-subscription-coupon,
        .content-menu-coupon {
            .title-subscription-coupon {
                height: 37px;
                display: flex;
                align-items: center;
                border-bottom: 4px solid #098fac;
                span {
                    color: #098fac;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 27px;
                }
            }
            .content-subscription-coupon {
                padding-top: 12px;
                display: flex;
                flex-direction: column;
                gap: 8px;
                .item-content {
                    display: flex;
                    gap: 8px;
                    padding: 8px;
                    .image-logo {
                        height: 60px;
                        aspect-ratio: 1;
                        border-radius: 8px;
                    }
                    .btn {
                        border-radius: 4px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-family: "SF Pro Text";
                        span {
                            color: #098fac;
                            font-weight: 500;
                            font-size: 14px;
                            line-height: 20px;
                        }
                    }
                    .btn-lottery {
                        border: 1px solid #098fac;
                        padding: 0px 8px;
                        height: 28px;
                        width: 44px;
                        white-space: nowrap;
                    }
                    .btn-already-used {
                        border: 1px solid #e93f3f;
                        height: 28px;
                        width: 72px;
                        span {
                            color: #e93f3f;
                        }
                    }
                    .title-item-content {
                        color: #181818;
                        font-weight: 700;
                        font-size: 16px;
                        line-height: 20px;
                        white-space: nowrap;
                        width: 195px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .sub-title-item-content {
                        color: #8a8a8a;
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 18px;
                    }
                    .text-lottery-date,
                    .date-use {
                        color: #098fac;
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 18px;
                    }
                    .date-use {
                        color: #000;
                    }
                    .icon-arrow-right {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 24px;
                        aspect-ratio: 1;
                        img {
                            width: 8px;
                            height: 13px;
                        }
                    }
                }
            }
            .no-coupon {
                display: flex;
                flex-direction: column;
                gap: 16px;
                margin-top: 16px;
                margin-bottom: 24px;
                .notifi-no-coupon {
                    font-family: "SF Pro Text";
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 63px;
                    width: 100%;
                    gap: 4px;
                    .icon-coupon {
                        height: 40px;
                        aspect-ratio: 1;
                    }
                    span {
                        color: #717171;
                        font-weight: 700;
                        font-size: 16px;
                        line-height: 19px;
                    }
                }
                .header-coupon-list {
                    padding: 0px;
                    .image-header {
                        height: 106px;
                    }
                }
            }
        }
    }
    .content-menu-already-used {
        .item-content {
            border-radius: 8px;
        }
    }
}
</style>
