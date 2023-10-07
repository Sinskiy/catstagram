<script>
  import Post from './Post.svelte'

  export let user

  async function logout() {
    await supabase.auth.signOut()
  }
</script>

<div
  class="flex flex-col items-center p-8 gap-6 bg-surfaceHigh rounded-2xl mb-8"
>
  <div class="flex flex-col gap-2">
    <img
      class="w-[64px] self-center"
      src="1.svg"
      alt={`profile picture of ${user.full_name}`}
    />
    <h2 class="self-center xl !text-base">{`@${user.full_name}`}</h2>
  </div>
  <div class="flex gap-4 md text-onSurface">
    <div class="flex flex-col items-center">
      <p>24</p>
      <p class="opacity-30">Followers</p>
    </div>
    <div class="flex flex-col items-center">
      <p>43</p>
      <p class="opacity-30">Following</p>
    </div>
  </div>
  <div class="flex flex-col min-w-full gap-2">
    <button
      class="button md bg-secondaryContainer text-onSecondaryContainer min-w-full"
    >
      Edit profile
    </button>
    <button
      on:click={logout}
      class="button md bg-tertiaryContainer text-onTertiaryContainer min-w-full"
    >
      Log out
    </button>
  </div>
</div>
<h2 class="section-title ml-4 mb-4">Posts</h2>
<Post />
