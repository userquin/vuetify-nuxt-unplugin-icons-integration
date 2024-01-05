<script setup lang="ts">
import LogoNuxt from '~icons/logos/nuxt-icon'
import MdiStore24Hour from '~icons/mdi/store-24-hour'
import MdiAlarmOff from '~icons/mdi/alarm-off'
import MdiCalendar from '~icons/mdi/calendar'
</script>

<template>
  <VContainer>
    <LogoNuxt style="font-size:2em" />
    <br>
    <p>
      Icons
      <MdiStore24Hour />
      <MdiAlarmOff />
      from <code>unplugin-icons</code>
    </p>

    <MdiCalendar />
    <VIcon icon="radioOn" />
    <VIcon icon="radioOff" />
    <VBtn color="success" prepend-icon="email">
      email
    </VBtn>
    <VBtn color="success" prepend-icon="calendar">
      calendar
    </VBtn>
    <VBtn color="success" prepend-icon="close">
      close
    </VBtn>

    <v-select
      label="Select"
      :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming',
      ]"
    />

    <VCheckbox label="Checkbox" />

    <VRadioGroup>
      <VRadio label="Radio One" value="one" />
      <VRadio label="Radio Two" value="two" />
      <VRadio label="Radio Three" value="three" />
    </VRadioGroup>
  </VContainer>
</template>
