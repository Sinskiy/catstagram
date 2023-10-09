<script>
  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  const name = 'sinskiy_'
</script>

<article class="flex flex-col bg-surfaceHigh rounded-2xl p-6 gap-2 mb-2">
  <div class="flex justify-between">
    <div class="flex gap-4">
      <img src="1.svg" alt={`profile picture of ${name}`} />
      <h3 class="self-center xl">{`@${name}`}</h3>
    </div>
    <p class="md self-center opacity-30">59m ago</p>
  </div>
  <p class="body">
    {text}
  </p>
  <div class="flex">
    <div class="relative like-wrapper">
      <input class="radio-full" type="checkbox" name="like" />
      <div class="button button-outline text-primary gap-2">
        <img src="like.svg" alt="like icon" />
        0
      </div>
    </div>
    <button class="button text-primary gap-2 !px-6">
      <img src="comment.svg" alt="comment icon" />
      0
    </button>
  </div>
</article>

<style lang="postcss">
  .like-wrapper > input + .button-outline {
    background-color: transparent;
    color: rgb(var(--primary));
  }
  .like-wrapper > input:checked + .button-outline {
    background-color: rgb(var(--primary));
    color: rgb(var(--on-primary));
    border-color: rgb(var(--primary));
  }
  .like-wrapper > input:checked + .button-outline > img {
    filter: brightness(0.4);
  }
</style>
