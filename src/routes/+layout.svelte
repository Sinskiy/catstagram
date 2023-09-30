<script>
  import '../app.css'
  import Nav from '../lib/Nav.svelte'
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.bunny.net" />
  <link
    href="https://fonts.bunny.net/css?family=syne:400,600,800"
    rel="stylesheet"
  />
</svelte:head>

<header class="flex min-w-full justify-between py-2 pl-2 pr-8">
  <a href="/">
    <img src="logo.svg" alt="catstagram's logo with a cat forming letter 'C'" />
  </a>
  <img src="dark.svg" alt="an icon of dark mode" />
</header>
<hr class="divider" />
<main class="min-w-full my-6 px-4">
  <slot />
</main>

<Nav />
