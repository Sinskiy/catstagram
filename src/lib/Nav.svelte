<script>
  import NavElement from './NavElement.svelte'
</script>

<nav
  class="flex justify-around min-w-full py-4 fixed bottom-0 bg-surfaceContainer text-onSurface"
>
  <NavElement name="home" path="/" />
  <NavElement name="search" />
  <NavElement name="profile" />
</nav>
