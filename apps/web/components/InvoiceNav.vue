<script lang="ts" setup>
  const invoices = ref([])
</script>

<template>
  <Suspense>
    <div class="flex w-full justify-between items-center">
      <hgroup>
          <h3 class="heading-l">Invoices</h3>
          <span class="body">There are {{ invoices.length }} total invoices</span>
      </hgroup>

      <div class="flex items-center gap-x-10">
        <span class="flex items-center">Filter by status <IconArrowDown /> </span>
        <InvoiceBtn />
      </div>  
    </div>

    <template #fallback>
    Loading...
  </template>
  </Suspense>
</template>