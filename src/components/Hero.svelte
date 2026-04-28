<script>
  import { cn } from "$lib/utils";
  import { Rocket } from "lucide-svelte";
</script>

<section class={cn("flex w-full flex-col justify-center items-center min-h-screen gap-4")}>
  <Rocket class="animate-in fade-in zoom-in duration-1000 text-blue-500 h-24 w-24" />
  <h1 class="text-5xl font-bold text-white">Hero Section</h1>
</section>