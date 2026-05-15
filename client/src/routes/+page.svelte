<script lang="ts">
    import { onMount } from "svelte";
    import "../app.css";
    import Icon from "@iconify/svelte";
    import { env } from '$env/dynamic/public';

    import FoodCard from './FoodCard.svelte';
    import type { Meal } from '$lib/types';
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();

    // For more information on runes and reactivity, see: https://svelte.dev/docs/svelte/what-are-runes
    let meals: Meal[] = data.meals;

    // Note: The data loading is now done in the +page.ts file
    // and passed to this component as props. This is a more efficient way to load data in SvelteKit.
</script>

<main>
    <header>
        <h1>Heilbronn Campus Canteen</h1>
        <p>Today's menu offerings</p>
    </header>

    {#if meals.length === 0}
        <div class="no-results">
            <p>Loading menu items...</p>
        </div>
    {:else}
        <div class="food-grid">
            {#each meals as meal}
                <FoodCard {meal}/>
            {/each}
        </div>
    {/if}

    {#if meals.length === 0 && meals.length > 0}
        <div class="no-results">
            No menu items match your filters. Try changing your selection.
        </div>
    {/if}
</main>
