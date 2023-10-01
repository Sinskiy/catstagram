<script>
  import Radiogroup from '../lib/Radiogroup.svelte'
  import Post from '../lib/Post.svelte'
  const radios = ['All', 'With images', '#help', '#meme']
</script>

<Radiogroup {radios} />
<Post />
