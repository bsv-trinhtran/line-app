<template>
  <div>
    <VueFinalModal
      v-model="showModal"
      :click-to-close="false"
      class="modal-animation-container-coupon"
      content-class="modal-content"
      overlay-class="overlay-modal-coupon"
    >
      <div class="animation-step-1" v-if="stepAnimation == 1">
        <div class="icon-text-left">
          <img src="/images/text-animation-1.svg" alt="" />
        </div>
        <div class="icon-text-right">
          <img src="/images/text-animation-1.svg" alt="" />
        </div>
        <img src="/images/giftbox.svg" alt="" height="192" width="145" />
        <img src="/images/text-animation-2.svg" alt="" />
      </div>
      <div class="animation-step-1" v-else-if="stepAnimation == 2">
        <img src="/images/giftbox.svg" alt="" height="192" width="145" />
      </div>
      <div class="animation-step-2" v-else-if="stepAnimation == 3">
        <img src="/images/circle-ball.svg" alt="" />
      </div>
      <div class="animation-step-3" v-else-if="stepAnimation == 4">
        <img src="/images/circle-ball.svg" alt="" />
      </div>
      <div class="animation-step-4" v-else-if="stepAnimation == 5">
        <img src="/images/congrats-2.svg" alt="" />
        <span class="text-rank">２等！</span>
        <div class="line"></div>
        <span class="text-congratulations"
          >おめでとうございます！ ぜひクーポンをご利用ください。</span
        >
      </div>
    </VueFinalModal>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { VueFinalModal } from 'vue-final-modal'

const showModal = ref(false)
const stepAnimation = ref(1)
const props = defineProps({
  modelValue: Boolean,
  typeModal: String
})
const emits = defineEmits<{
  (eventName: 'update:modelValue', value: boolean): void
}>()

const cancelModal = (): any => {
  emits('update:modelValue', false)
}
watch(
  () => props.modelValue,
  (newvalue) => {
    showModal.value = newvalue
    if (showModal.value) {
      const showAnimation = setInterval(function () {
        if (stepAnimation.value < 5) {
          stepAnimation.value++
        } else {
          clearInterval(showAnimation)
        }
      }, 1000)
    }
  }
)
</script>

<style lang="scss">
.modal-animation-container-coupon {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  font-family: 'Noto Sans JP', sans-serif;
  align-items: center;
}
.vfm--overlay {
  background: rgba(0, 0, 0, 0.8);
}
.modal-content {
  width: 100%;
  display: flex;
  justify-content: center;
}
.animation-step-1 {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  gap: 31px;
  .icon-text-left {
    position: absolute;
    top: -75px;
    left: -40px;
  }
  .icon-text-right {
    position: absolute;
    top: -73px;
    right: -40px;
    transform: rotate(90deg);
  }
}
.animation-step-4 {
  display: flex;
  flex-direction: column;
  align-items: center;
  .text-rank {
    color: #fff;
    font-weight: 700;
    font-size: 60px;
    line-height: 90px;
    margin-top: 20px;
  }
  .line {
    background: #fff;
    height: 2px;
    width: 130px;
    margin: 24px 0px;
  }
  .text-congratulations {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #fff;
    width: 300px;
    text-align: center;
    word-break: keep-all;
  }
}
</style>
