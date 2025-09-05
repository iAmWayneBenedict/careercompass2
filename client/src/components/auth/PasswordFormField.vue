<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import { useField } from 'vee-validate'
import { ref } from 'vue'

type Props = {
  id: string
  name: string
  label?: string
  placeholder?: string
  hint?: string
  disabled?: boolean
}

type Emits = {
  'update:modelValue': [value: string]
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  hasError: false,
  disabled: false,
})

defineEmits<Emits>()

const showPassword = ref(false)

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value
}

const { value, errorMessage } = useField<string>(() => props.name)
</script>

<template>
  <div class="flex flex-col">
    <label v-if="label" :for="id">{{ label }}</label>

    <div class="relative">
      <InputText
        :id="id"
        :type="showPassword ? 'text' : 'password'"
        :placeholder="placeholder"
        v-model="value"
        :disabled="disabled"
        :aria-describedby="`${id}-help`"
        :invalid="!!errorMessage"
        class="w-full"
      />
      <PhEyeSlash
        v-if="!showPassword"
        @click="toggleShowPassword"
        :size="20"
        color="#000"
        class="absolute right-0 cursor-pointer top-1/2 -translate-1/2"
        weight="duotone"
      />
      <PhEye
        v-else
        @click="toggleShowPassword"
        :size="20"
        class="absolute right-0 cursor-pointer top-1/2 -translate-1/2"
        color="#000"
        weight="duotone"
      />
    </div>
    <!-- <textarea
      v-else
      :id="id"
      :placeholder="placeholder"
      :model-value="value"
      :disabled="disabled"
      :aria-describedby="`${id}-help`"
      class="p-3 border rounded-md"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    /> -->

    <small v-if="hint && !errorMessage" class="mt-1 text-xs text-gray-500">
      {{ hint }}
    </small>

    <Message v-if="errorMessage" size="small" severity="error" variant="simple">
      {{ errorMessage }}
    </Message>
  </div>
</template>
