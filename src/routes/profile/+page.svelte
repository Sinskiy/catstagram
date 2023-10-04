<script>
  export let data
  $: console.log(data)
</script>

<h2 class="flex flex-col items-center section-title mt-auto">
  You're not logged in
</h2>
<div class="flex flex-col gap-2 mt-12 xmd">
  <button
    class="button bg-secondaryContainer text-onSecondaryContainer min-w-full"
  >
    Log in
  </button>
  <button
    class="button bg-tertiaryContainer text-onTertiaryContainer min-w-full"
  >
    Sign up
  </button>
</div>
{#each data.data as item}
  <h1>{item.name}</h1>
{/each}
