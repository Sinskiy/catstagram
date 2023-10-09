<script>
  const queries = [
    'Snezhok',
    'Cats',
    'Cat',
    'Memes',
    'Funny cat',
    'Poor cat',
    'Try not to laugh',
    'Help'
  ]
  const searches = ['2k', '1.8k', '1.2k', '1.1k', '953', '887', '552', '544']
</script>

<div class="px-4">
  <div class="relative flex">
    <input
      class="min-w-full input rounded-full"
      type="search"
      name="search"
      placeholder="Search"
    />
    <img class="absolute self-center px-8" src="search.svg" alt="search icon" />
  </div>
  <section class="mt-8">
    <h2 class="section-title pl-8 mb-4">Searches stats</h2>
    <div class="flex flex-col gap-2">
      {#each queries as query, i}
        <div class="query button flex justify-between">
          <p class="xmd !py-2">{query}</p>
          <small class="md self-center opacity-30"
            >{`${searches[i]} searches`}</small
          >
        </div>
      {/each}
    </div>
  </section>
</div>

<style>
  .query {
    background-color: rgb(var(--surface-high));
    color: rgb(var(--on-surface));
  }
  .query:nth-child(1) {
    background-color: rgb(var(--primary-container));
    color: rgb(var(--on-primary-container));
  }
  .query:nth-child(2) {
    background-color: rgb(var(--secondary-container));
    color: rgb(var(--on-secondary-container));
  }
  .query:nth-child(3) {
    background-color: rgb(var(--tertiary-container));
    color: rgb(var(--on-tertiary-container));
  }
</style>
