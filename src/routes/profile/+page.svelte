<script>
  export let data

  let { supabase } = data

  async function signInWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:5173/profile'
      }
    })
  }
</script>

{#if data.session}
  <h1>logged in!</h1>
{:else}
  <h2 class="flex flex-col items-center section-title mt-auto">
    You're not logged in
  </h2>
  <div class="flex flex-col gap-2 mt-12 xmd">
    <button
      on:click={signInWithGoogle}
      class="button bg-tertiaryContainer text-onTertiaryContainer min-w-full"
    >
      Log in with Google
    </button>
  </div>
{/if}
