<section class="booking my-16 px-6">
  <div class="max-w-5xl mx-auto text-center">
    <h2 class="text-4xl font-semibold">Book Your Appointment</h2>
    <h2 class="text-4xl font-semibold">_</h2>
  </div>
  <div class="max-w-5xl mx-auto text-center mt-8">
    <div
      class="relative bg-cover bg-center h-48 rounded-lg shadow-md mb-8 booking-banner"
      style="background-image: url('/images/booking-banner.jpg');">
      <div class="absolute inset-0 bg-black opacity-40 rounded-lg transition-opacity duration-300 hover:opacity-60"></div>
      <div class="relative z-10 text-white p-6 animate-fade-in-out">
        <p class="text-xl mt-2">Reserve your spot today for exceptional grooming services!</p>
      </div>
    </div>
    
    <form class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
      <label class="block mb-4">
        <span class="text-gray-700">Name</span>
        <input type="text" placeholder="Enter your name" class="mt-2 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
      </label>
      <label class="block mb-4">
        <span class="text-gray-700">Email</span>
        <input type="email" placeholder="Enter your email" class="mt-2 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
      </label>
      <label class="block mb-4">
        <span class="text-gray-700">Service</span>
        <select class="mt-2 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
          <option value="">Select a Service</option>
          <option value="haircut">Classic Haircut</option>
          <option value="beard">Beard Trimming</option>
          <option value="shave">Signature Shave</option>
        </select>
      </label>
      <label class="block mb-4">
        <span class="text-gray-700">Appointment Date</span>
        <input type="date" class="mt-2 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
      </label>
      <button class="bg-accent hover:bg-primary text-white font-semibold px-6 py-2 rounded-full transition duration-300 w-full mt-4">
        Submit
      </button>
    </form>
  </div>
</section>

<section class="location my-16 px-6 text-center">
  <h2 class="text-3xl sm:text-4xl font-semibold mb-6">Our Location</h2>
  <p class="text-lg mb-4">123 Barber Street, Barbertown, BT 45678</p>
  <iframe
    title="Google Maps location of Barbershop"
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d815.8527436106538!2d33.322133!3d35.1214164!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de19ddbb8394bd%3A0x7d1470fa2bcaf03f!2sStem%20Freak!5e0!3m2!1sen!2s!4v1731947063118!5m2!1sen!2s"
    width="100%"
    height="450"
    style="border:0;"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
  <a href="https://maps.app.goo.gl/HvaQ1XjBafn4eXzH6" target="_blank" class="mt-4 inline-block text-primary hover:underline">
    View on Google Maps
  </a>
</section>

<style>
  .booking form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .booking form:hover {
    transform: scale(1.05);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  }

  .location iframe {
    border: 0;
    border-radius: 10px;
  }

  .relative.bg-cover {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:hover {
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
  .booking-banner {
    animation: fade-in-out 3s infinite;
  }

  @keyframes fade-in-out {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
  }

  .booking form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  button:hover {
    transform: scale(1.05);
    transition: all 0.3s ease;
  }

  .relative.bg-cover:hover .absolute {
    opacity: 0.6; /* Increases opacity on hover */
  }
</style>
