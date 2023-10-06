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

  async function logout() {
    await supabase.auth.signOut()
  }
</script>

{#if data.session}
  <h2>
    logged in! {data.session.user.user_metadata.name}
    {data.session.user.user_metadata.email}
  </h2>
  <div class="flex flex-col gap-2 mt-12 xmd">
    <button
      on:click={logout}
      class="button bg-tertiaryContainer text-onTertiaryContainer min-w-full"
    >
      Log out
    </button>
  </div>
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
