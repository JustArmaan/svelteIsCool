<script>
	let title = "Welcome to My Simple Home Page!";
	let description = "This is a simple homepage built with Svelte. Enjoy your stay!";
  </script>
  
  <main class="container">
	<h1>{title}</h1>
	<p>{description}</p>
  
	<section class="intro">
	  <img src="/assets/home.jpg" alt="Home Image" />
	  <div class="content">
		<h2>About This Site</h2>
		<p>This is a sample homepage where you can share some brief information about yourself or your project.</p>
	  </div>
	</section>
  
	<footer>
	  <p>Created with ❤️ using Svelte</p>
	</footer>
  </main>
  
  <style>
	.container {
	  max-width: 960px;
	  margin: 0 auto;
	  padding: 2rem;
	  font-family: Arial, sans-serif;
	}
  
	h1 {
	  font-size: 2.5rem;
	  color: #2c3e50;
	  text-align: center;
	  margin-bottom: 1rem;
	}
  
	p {
	  font-size: 1.25rem;
	  color: #34495e;
	  text-align: center;
	}
  
	.intro {
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	  margin-top: 2rem;
	}
  
	.intro img {
	  max-width: 50%;
	  border-radius: 10px;
	}
  
	.content {
	  padding-left: 2rem;
	}
  
	footer {
	  text-align: center;
	  margin-top: 3rem;
	}
  </style>
  