<script>
  export let radios
</script>

<div class="radiogroup md" role="radiogroup">
  {#each radios as radio, i}
    <label>
      <input type="radio" name="tag" checked={i === 0} />
      <div class="button">{radio}</div>
    </label>
  {/each}
</div>

<style>
  .radiogroup {
    display: flex;
    gap: 0.25rem;
    font-weight: 600;
    overflow-y: scroll;
  }
  .radiogroup label {
    position: relative;
  }
  .radiogroup input {
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    opacity: 0;
  }
  .radiogroup input ~ .button {
    background-color: rgb(var(--surface-high));
    color: rgb(var(--on-surface));
    opacity: 0.28;
  }
  .radiogroup input:checked ~ .button {
    background-color: rgb(var(--secondary-container));
    color: rgb(var(--on-secondary-container));
    opacity: 1;
  }
</style>
