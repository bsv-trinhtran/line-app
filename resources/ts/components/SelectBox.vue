<template>
    <div class="main-selectbox">
        <v-select
            :items="items"
            variant="solo"
            :name="name"
            :placeholder="placeholder"
            :menu-props="{
                'content-class': 'selectbox-content',
            }"
            v-model="selectedItem"
        ></v-select>
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
const props = defineProps({
    placeholder: {
        type: String,
        default: "",
    },
    items: {
        type: Array,
        default: () => [],
    },
    name: {
        type: String,
        default: "",
    },
    modelValue: {
        type: String,
    },
});
const emits = defineEmits<{
    (eventName: "update:modelValue", value: string): void;
}>();

const selectedItem = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emits("update:modelValue", value);
    },
});
</script>

<style lang="scss" scoped>
::v-deep(.v-input--horizontal) {
    .v-icon {
        background: url(/images/icon-arrow-down.svg) no-repeat;
        background-position: center;
        opacity: 1;
    }
    .v-field__input {
        min-height: unset !important;
        height: var(--v-input-height) !important;
    }
    .v-select__selection {
        height: 100%;
    }
    .v-input__details {
        display: none !important;
    }
    .v-field--variant-solo {
        box-shadow: unset !important;
        border-radius: 8px;
        border: 1px solid #d7d7d7;
        .v-select__selection-text {
            font-family: "SF Pro Text";
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            color: #098fac;
        }
    }
}
::v-global(.selectbox-content .v-list-item__overlay) {
    background: unset !important;
}
::v-global(.selectbox-content .v-list-item--active .v-list-item-title) {
    font-family: "SF Pro Text";
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #098fac;
}
</style>
