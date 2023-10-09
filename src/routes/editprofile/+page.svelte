<script>
  export let data
  $: user = data.session.user.user_metadata
</script>

<div class="top bg-surfaceContainer py-4 px-6">
  <nav class="my-4 flex justify-between items-center">
    <h2 class="xl !text-onSurface">Edit profile</h2>
    <a href="profile">
      <img src="close.svg" alt="a close icon" />
    </a>
  </nav>
  <div class="divider min-w-full absolute left-0 my-4" />
  <section class="mt-16 flex flex-col gap-16 justify-center">
    <div class="flex flex-col justify-center gap-4">
      <img
        class="w-32 self-center"
        src="1.svg"
        alt={`profile picture of ${user.full_name}`}
      />
      <button
        class="button md bg-secondaryContainer text-onSecondaryContainer max-w-max self-center"
        >Update image</button
      >
    </div>
    <div class="flex flex-col justify-center gap-4">
      <input
        class="input small rounded-[2rem]"
        type="text"
        placeholder="New username"
        name="username"
      />
    </div>
    <div class="flex gap-2 md mt-52">
      <a href="profile">
        <button class="button bg-primary text-onPrimary">Save</button>
      </a>
      <a href="profile">
        <button class="button button-outline min-h-full text-onSurface"
          >Cancel</button
        >
      </a>
    </div>
  </section>
</div>
