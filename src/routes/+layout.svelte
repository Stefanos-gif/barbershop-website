<script>
	import "../app.css";
</script>
<svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
</svelte:head>

<header class="hero-header relative bg-cover bg-center text-white flex flex-col items-center justify-center animate__animated animate__backInDown" style="background-image: url('/images/a-barbershop.png'); min-height: 75vh;">
    <div class="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div> <!-- Overlay for better text visibility -->
    <div class="relative text-center z-10">
        <h1 class="text-4xl sm:text-5xl font-bold mb-4">Barbershop Name</h1>
        <nav class="mt-2">
            <a href="/" class="nav-link mx-4 hover:text-gray-300">Home</a>
            <a href="/about" class="nav-link mx-4 hover:text-gray-300">About</a>
            <a href="/services" class="nav-link mx-4 hover:text-gray-300">Services</a>
            <a href="/booking" class="nav-link mx-4 hover:text-gray-300">Booking</a>
        </nav>
    </div>
</header>

<main class="p-8 bg-gray-100 min-h-screen">
	<slot /> <!-- This is where each page’s content will render -->
</main>

<!-- Footer Section -->
<footer class="bg-gray-800 text-white py-10 px-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
      <!-- About Section -->
      <div>
        <h3 class="text-xl font-semibold mb-4">About Us</h3>
        <p class="text-gray-400">Barbershop Name is your trusted grooming partner, providing top-notch haircuts, beard trims, and more. Visit us for a premium experience.</p>
      </div>
      <!-- Contact Information -->
      <div>
        <h3 class="text-xl font-semibold mb-4">Contact</h3>
        <p class="text-gray-400">123 Barber Street, Barbertown, BT 45678</p>
        <p class="text-gray-400">Email: info@barbershop.com</p>
        <p class="text-gray-400">Phone: +123-456-7890</p>
      </div>
      <!-- Social Media Links -->
      <div>
        <h3 class="text-xl font-semibold mb-4">Follow Us</h3>
        <div class="flex justify-center sm:justify-start space-x-4">
          <a href="https://facebook.com" target="_blank" class="hover:text-accent">
            <i class="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="https://twitter.com" target="_blank" class="hover:text-accent">
            <i class="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://instagram.com" target="_blank" class="hover:text-accent">
            <i class="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </div>
    <div class="mt-8 text-center text-gray-500">
      <p>© 2024 Barbershop Name. All rights reserved.</p>
    </div>
</footer>

<style>
        /* General Header Styles */
    .hero {
        height: 80vh; /* Default height */
        background-size: cover;
        background-position: center;
        position: relative;
        overflow: hidden;
    }

    .hero h1 {
        font-size: 3rem; /* Default size */
    }

    .hero p {
        font-size: 1.5rem; /* Default size */
    }

    /* Mobile Screens (max-width: 767px) */
    @media screen and (max-width: 767px) {
        .hero {
            height: 50vh; /* Reduce height for mobile */
        }

        .hero h1 {
            font-size: 1.8rem; /* Smaller font size for mobile */
        }

        .hero p {
            font-size: 1rem; /* Smaller font size for mobile */
        }

        .hero button {
            padding: 10px 20px; /* Reduce padding for buttons */
            font-size: 0.9rem; /* Smaller button font */
        }
    }

    /* Tablet Screens (768px to 1023px) */
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        .hero {
            height: 60vh; /* Slightly larger for tablets */
        }

        .hero h1 {
            font-size: 2.5rem;
        }

        .hero p {
            font-size: 1.2rem;
        }

        .hero button {
            padding: 12px 24px;
            font-size: 1rem;
        }
    }

	.hero-header {
        background-size: cover;
        background-position: center;
        text-align: center;
        color: white;
        position: relative;
    }

	/* Ensure the title color stays consistent */
	.hero-header h1 {
		color: white !important; /* Keeps the title text white */
	}

	nav a {
        margin: 0 15px;
        color: white;
        text-decoration: none;
        font-weight: 500;
        position: relative;
    }


	/* Style for adding bullet point on hover */
	nav a:hover::before {
        content: "•";
        color: #f0f0f0; /* Color of the bullet */
        position: absolute;
        left: -15px; /* Adjusts position to the left of the text */
        font-size: 1.2em; /* Adjust size as needed */
        top: 0;
    }

	main {
		padding: 20px;
	}
  /* Footer Styling */
  footer {
    background-color: #1F2937; /* Matches the header theme */
    color: white;
  }

  footer a {
    color: white;
    text-decoration: none;
  }

  footer a:hover {
    color: #fca311; /* Accent color for hover */
  }

  footer .fab {
    margin-right: 8px;
    font-size: 1.2rem;
  }

  footer p {
    line-height: 1.5;
  }

  footer h3 {
    margin-bottom: 0.75rem;
    font-weight: bold;
    color: #fca311; /* Updated to a lighter, more visible color */
  }

  
</style>
