<script>
    import { goto } from '$app/navigation';
</script>

<section class="hero relative h-96 flex items-center justify-center text-gray-100 p-6">
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/image_2024-11-11_131533695.png');"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-70"></div>
    <div class="relative text-center z-10">
        <div class="bg-black bg-opacity-50 p-4 rounded-md inline-block"> <!-- Highlight background -->
            <h1 class="text-4xl sm:text-5xl font-bold mb-4 text-white">Welcome to [Barbershop Name]</h1>
            <p class="text-lg sm:text-xl mb-6 text-gray-200">Quality Cuts, Exceptional Service</p>
            <button class="bg-accent hover:bg-primary text-white px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300" on:click={() => goto('/booking')}>
                Book Now
            </button>
        </div>
    </div>
</section>

<section class="about my-16 text-center px-6">
    <div class="about-card bg-white p-6 rounded-lg  transform transition hover:scale-105 hover:shadow-lg cursor-pointer">
        <h2 class="text-3xl sm:text-4xl font-semibold mb-6">About Us</h2>
        <p class="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            Your barbershop's brief description, history, or values. Serving the community since [Year] with premium grooming services.
        </p>
    </div>
</section>

<section class="services my-16 px-6">
    <div class="service-card bg-white p-6 rounded-lg shadow-md transform transition hover:scale-105 hover:shadow-lg cursor-pointer" on:click={() => goto('/services')}>
    <h2 class="text-3xl sm:text-4xl font-semibold text-center mb-8">Featured Services</h2>
    
        <img src="/images/a-barbershop-themed-header.png" alt="Featured Services" class="mx-auto mb-4 rounded">
        <h3 class="text-2xl font-semibold text-center mb-2">Featured Services</h3>
        <p class="text-center text-gray-600">Here at [Barbershop Name], we offer anything you could search for, ranging from haircuts to beard trimming, grooming packages, and even products for hair care or tools.</p>
    </div>
</section>

<section class="testimonials my-16 bg-gray-100 py-12 px-6 text-center">
    <div class="testimonial-card bg-white p-6 rounded-lg  transform transition hover:scale-105 hover:shadow-lg cursor-pointer">
        <h2 class="text-3xl sm:text-4xl font-semibold mb-6">What Our Clients Say</h2>
        <div class="max-w-2xl mx-auto">
            <blockquote class="italic text-lg sm:text-xl text-gray-700">"Great service! Highly recommend."</blockquote>
            <p class="mt-4 font-semibold">- John D., Client</p>
        </div>
    </div>
</section>

<style>
    .services {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .service-card {
        max-width: 500px;
        text-align: center;
        padding: 20px;
        transition: transform 0.3s ease;
    }

    .service-card:hover {
        transform: scale(1.05);
    }

    .hero {
        background-size: cover;
        background-position: center;
        position: relative;
        overflow: hidden;
    }

    .hero .absolute {
        border-radius: 12px;
    }

    .hero h1, .hero p {
        color: #ffffff; /* White text for better contrast */
    }

    .hero .bg-black {
        background-color: rgba(0, 0, 0, 0.5); /* Dark semi-transparent highlight */
    }
    .about-card, .testimonial-card, .service-card {
        max-width: 500px;
        margin: 0 auto;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .about-card:hover, .testimonial-card:hover, .service-card:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .hero {
        background-size: cover;
        background-position: center;
        position: relative;
        overflow: hidden;
    }

    .hero .absolute {
        border-radius: 12px;
    }

    .hero h1, .hero p {
        color: #ffffff; /* White text for better contrast */
    }

    .hero .bg-black {
        background-color: rgba(0, 0, 0, 0.5); /* Dark semi-transparent highlight */
    }
    
</style>
