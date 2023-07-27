import { Head } from "$fresh/runtime.ts"
import { useSignal } from "@preact/signals"
import Counter from "../islands/Counter.tsx"
import Carousel from "../islands/Carousel.tsx"
import Button from "../components/Button.tsx"
import ColoredButton from "../components/ColoredButton.tsx"


export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <Head>
        <title>honeyberry</title>
      </Head>
      
      <Carousel />
   
    </>
  );
}
