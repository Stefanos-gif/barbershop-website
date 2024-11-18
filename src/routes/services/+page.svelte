<section class="services my-16 px-6">
    <h2 class="text-3xl sm:text-4xl font-semibold text-center mb-8 service-title hover:animate-bounce">Featured Services</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Classic Haircut -->
    <div class="service-card bg-white p-6 rounded-lg shadow-md transform transition hover:scale-105 hover:shadow-lg">
        <img src="/images/classic-haircut.png" alt="Classic Haircut" class="mb-4 rounded">
        <h3 class="text-2xl font-semibold mb-2 text-center">Classic Haircut</h3>
        <p class="text-gray-600 text-center">Custom cuts tailored to your style.</p>
        <a href="/booking" class="bg-accent hover:bg-primary text-white px-6 py-2 rounded-full mt-4 inline-block transition duration-300 shadow-md text-center">
          Book Now
        </a>
      </div>
  
      <!-- Beard Trimming -->
      <div class="service-card bg-white p-6 rounded-lg shadow-md transform transition hover:scale-105 hover:shadow-lg">
        <img src="/images/beard-trimming.png" alt="Beard Trimming" class="mb-4 rounded">
        <h3 class="text-2xl font-semibold mb-2 text-center">Beard Trimming</h3>
        <p class="text-gray-600 text-center">Perfectly shaped beards for a polished look.</p>
        <a href="/booking" class="bg-accent hover:bg-primary text-white px-6 py-2 rounded-full mt-4 inline-block transition duration-300 shadow-md text-center">
          Book Now
        </a>
      </div>
  
      <!-- Signature Shave -->
      <div class="service-card bg-white p-6 rounded-lg shadow-md transform transition hover:scale-105 hover:shadow-lg">
        <img src="/images/signature-shave.png" alt="Signature Shave" class="mb-4 rounded">
        <h3 class="text-2xl font-semibold mb-2 text-center">Signature Shave</h3>
        <p class="text-gray-600 text-center">Hot towel shaves for a fresh, clean look.</p>
        <a href="/booking" class="bg-accent hover:bg-primary text-white px-6 py-2 rounded-full mt-4 inline-block transition duration-300 shadow-md text-center">
          Book Now
        </a>
      </div>
  
    </div>
</section>

<!-- Reviews Section -->
<section class="reviews my-16 px-6 text-center">
    <h2 class="text-3xl sm:text-4xl font-semibold mb-6 review-title">Reviews</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="review-card bg-white p-6 rounded-lg shadow-md">
            <p class="italic text-gray-700 mb-4">"Amazing service and a great haircut every time!"</p>
            <p class="font-semibold">- John D., Client</p>
            <div class="text-yellow-500 mt-2">★★★★★</div>
        </div>
        <div class="review-card bg-white p-6 rounded-lg shadow-md">
            <p class="italic text-gray-700 mb-4">"Friendly staff and excellent beard trimming skills."</p>
            <p class="font-semibold">- Mike R., Client</p>
            <div class="text-yellow-500 mt-2">★★★★★</div>
        </div>
        <div class="review-card bg-white p-6 rounded-lg shadow-md">
            <p class="italic text-gray-700 mb-4">"Best shave I've had! Highly recommend."</p>
            <p class="font-semibold">- Lisa S., Client</p>
            <div class="text-yellow-500 mt-2">★★★★★</div>
        </div>
    </div>
</section>

<style>
    .services, .reviews {
        padding: 20px;
    }

    .service-card, .review-card {
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .service-card:hover, .review-card:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .service-title, .review-title {
        transition: color 0.3s ease, transform 0.3s ease;
    }

    .service-title:hover, .review-title:hover {
        color: #9598bd;
        transform: scale(1.05);
    }

    .reviews h2 {
        margin-bottom: 20px;
    }

    .review-card p {
        font-size: 1em;
    }
    
</style>
