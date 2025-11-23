import { onMount } from "solid-js";
import { setStore, store } from "@lib/stores";

export default function() {
  let snackbar!: HTMLParagraphElement;

  onMount(() => {
    setTimeout(() => {
      if (snackbar.textContent === store.snackbar)
        setStore('snackbar', undefined);
    }, 7000);
  });

  return (
    <p
      ref={snackbar}
      class="snackbar"
      onclick={() => {
        setStore('snackbar', undefined);
      }}
      textContent={store.snackbar}
    ></p>
  );
}
