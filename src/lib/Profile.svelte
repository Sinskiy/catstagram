<script>
  import Post from './Post.svelte'

  export let user, supabase

  async function logout() {
    await supabase.auth.signOut()
  }
</script>

<section
  class="flex flex-col items-center p-8 gap-6 bg-surfaceHigh rounded-2xl mb-8"
>
  <div class="flex flex-col gap-2">
    <img
      class="w-16 self-center"
      src="1.svg"
      alt={`profile picture of ${user.full_name}`}
    />
    <h2 class="self-center xl !text-base">{`@${user.full_name}`}</h2>
  </div>
  <nav class="flex flex-col min-w-full gap-2">
    <a href="editprofile">
      <button
        class="button md bg-secondaryContainer text-onSecondaryContainer min-w-full"
      >
        Edit profile
      </button>
    </a>
    <button
      on:click={logout}
      class="button md bg-tertiaryContainer text-onTertiaryContainer min-w-full"
    >
      Log out
    </button>
  </nav>
</section>
<h2 class="section-title ml-4 mb-4">Posts</h2>
<Post />
