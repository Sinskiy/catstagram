<script>
  import Profile from '../../lib/Profile.svelte'

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
  <Profile user={data.session.user.user_metadata} {supabase} />
{:else}
  <h2 class="flex flex-col items-center section-title mt-auto">
    You're not logged in
  </h2>
  <button
    on:click={signInWithGoogle}
    class="button bg-tertiaryContainer text-onTertiaryContainer min-w-full mt-12"
  >
    Log in with Google
  </button>
{/if}
