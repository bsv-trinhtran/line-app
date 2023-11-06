<template>
  <div>
    <VueFinalModal
      v-model="showModal"
      class="main-modal-coupon-details"
      content-class="confirm-modal-content"
    >
      <div class="main-modal">
        <div class="header-main-modal">
          <div class="btn-dtore-used">
            <span>ご利用店舗</span>
          </div>
          <span class="title-header-main-modal">モーリーファンタジー新船橋店</span>
        </div>
        <div class="body-main-modal">
          <span class="title-body-main-modal">クーポンを使用済みにしますか？</span>
          <span class="content-body-main-modal"
            >この操作は取り消せません。店舗スタッフの指示に従って[使用済みにする]をタップしてください。</span
          >
        </div>
        <div class="footer-main-modal">
          <div class="btn btn-used" @click="cancelModal">
            <span>使用済みにする</span>
          </div>
          <div class="btn btn-cancel" @click="cancelModal">
            <span>キャンセル</span>
          </div>
        </div>
      </div>
    </VueFinalModal>
  </div>
</template>

<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import { ref, watch } from 'vue'

const showModal = ref(false)
const props = defineProps({
  modelValue: Boolean
})
const emits = defineEmits<{
  (e: 'update:modelValue', v: boolean): void
}>()
const cancelModal = (): any => {
  emits('update:modelValue', false)
}
watch(
  () => props.modelValue,
  (value) => {
    showModal.value = value
  }
)
</script>

<style lang="scss">
.main-modal-coupon-details {
  font-family: 'SF Pro Text';
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.main-modal {
  box-sizing: border-box;
  border-radius: 21px;
  height: 387px;
  width: 294px;
  background: #fff;
  padding: 35px 0px;
  .header-main-modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    background: #b1ebe7;
    height: 75px;
    .btn-dtore-used {
      border: 1px solid #098fac;
      border-radius: 4px;
      height: 24px;
      width: 72px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      span {
        color: #098fac;
        font-weight: 500;
        font-size: 12px;
      }
    }
    .title-header-main-modal {
      color: #000;
      font-weight: 700;
      font-size: 16px;
      line-height: 23px;
      font-family: 'Noto Sans JP', sans-serif;
    }
  }
  .body-main-modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 24px;
    gap: 8px;
    .title-body-main-modal {
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      color: #000;
    }
    .content-body-main-modal {
      color: #777777;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
    }
  }
  .footer-main-modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 0px 24px;
    .btn {
      background: #098fac;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 48px;
      border-radius: 5px;
      span {
        color: #fff;
        font-weight: 600;
        font-size: 15px;
      }
    }
    .btn-cancel {
      background: #fff;
      span {
        color: #000;
      }
    }
  }
}
</style>
