<script>
  import { onMount } from 'svelte'

  export let name,
    path = name

  let url = ''

  onMount(() => (url = window.location.href))
</script>

<a
  class:active={url.includes(path)}
  class="flex flex-wrap flex-col content-center gap-1 md capitalize"
  href={path}
>
  <div class="nav-el-wrapper rounded-full flex justify-center px-4 py-1">
    <img class="self-center" src={`${name}.svg`} alt={`${name} icon`} />
  </div>
  <p class="self-center">{name}</p>
</a>

<style lang="postcss">
  a.active > .nav-el-wrapper {
    background-color: rgb(var(--secondary-container));
  }
</style>
