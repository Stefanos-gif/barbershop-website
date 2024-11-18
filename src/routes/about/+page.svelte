<section class="about my-16 text-center px-6">
    <h2 class="text-3xl sm:text-4xl font-semibold mb-6 about-heading">About Us</h2>
    <p class="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto about-text">
      Your barbershop's brief description, history, or values. We have been serving our community since [Year] with premium grooming services and a passion for style.
    </p>
</section>

<style>
    .about {
      text-align: center;
      padding: 20px;
    }

    /* Centering the main about text */
    .about p {
      text-align: center;
      margin: 0 auto;
      max-width: 600px;
    }

    /* Hover effect for the "About Us" heading */
    .about-heading {
      transition: color 0.3s ease, transform 0.3s ease;
    }

    .about-heading:hover {
      color: #ffa500; /* Choose any accent color you prefer */
      transform: scale(1.05); /* Slightly increase the size */
    }
    .about-text {
        transition: transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
        padding: 10px;
        display: inline-block;
        color: #4a4a4a; /* Initial color for contrast */
    }

    /* Hover effect for scaling, shadow, and color change */
    .about-text:hover {
        transform: scale(1.05); /* Scale up slightly */
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); /* Subtle shadow */
        color: #333; /* Darker color on hover for more contrast */
    }
</style>
