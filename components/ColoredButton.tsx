import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function ColoredButton(
  props: JSX.HTMLAttributes<HTMLButtonElement> & { url?: string },
) {
  const handleClick = () => {
    if (props.url) {
      window.location.href = props.url;
    }
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      disabled={!IS_BROWSER || props.disabled}
      class="px-3 py-2 bg-pink-100 text-blue-800 rounded hover:bg-pink-200 active:bg-blue-400"
    />
  );
}
