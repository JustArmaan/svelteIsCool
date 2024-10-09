<script>
	import { fade, fly, slide, scale } from 'svelte/transition';
  
	let title = "Welcome to My Simple Home Page!";
	let description = "This is a simple homepage built with Svelte and Tailwind CSS. Enjoy your stay!";
	let count = 0;
  
	function increment() {
	  count += 1; 
	}
  </script>
  
  <main class="container mx-auto px-4 py-8">
	<!-- Title and Description -->
	<h1 class="text-4xl font-bold text-gray-800 text-center mb-4">{title}</h1>
	<p class="text-xl text-gray-600 text-center">{description}</p>
  
	<!-- Content Section -->
	<section class="intro flex items-center justify-between mt-8">
	  <div class="content pl-8">
		<h2 class="text-2xl font-semibold text-gray-700">About This Site</h2>
		<p class="mt-2 text-gray-600">This is a sample homepage where you can share some brief information about yourself or your project.</p>
		<button 
		  class="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
		  on:click={increment}>Count: {count}</button>
	  </div>
  
	  <!-- Transitions Section -->
	  <div class="flex gap-4">
		<div class="p-4 bg-gray-200 rounded" transition:fade={{ duration: 500 }}>Fade This Thing</div>
		<div class="p-4 bg-gray-200 rounded" transition:fly={{ x: 200, duration: 800 }}>Fly This Thing</div>
		<div class="p-4 bg-gray-200 rounded" transition:slide={{ duration: 600 }}>Slide This Thing</div>
		<div class="p-4 bg-gray-200 rounded" transition:scale={{ start: 0.5, duration: 400 }}>Scale This Thing</div>
	  </div>
	</section>
  
	<!-- Footer -->
	<footer class="text-center mt-12">
	  <p class="text-gray-500">Created with ❤️ using Svelte and Tailwind CSS</p>
	</footer>
  </main>
  