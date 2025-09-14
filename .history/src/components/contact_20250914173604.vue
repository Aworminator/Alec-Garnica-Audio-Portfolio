<script setup>
import { ref, onMounted } from "vue";
import emailjs from "@emailjs/browser";

// Prefer env vars when available, fallback to hardcoded for local testing
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_x2fv1ji";
const templateID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_xrm7y6m";
const publicKey =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "Av33DaVyg5wDM5N9s";

const contactForm = ref(null);
const sending = ref(false);

onMounted(() => {
  // EmailJS v4 init signature
  emailjs.init({ publicKey });
});

async function sendEmail() {
  if (!contactForm.value) return;
  try {
    sending.value = true;
    await emailjs.sendForm(serviceID, templateID, contactForm.value);
    alert("Message sent successfully!");
    contactForm.value.reset();
  } catch (error) {
    console.error("EmailJS Error:", error);
    alert("Failed to send message. Please try again later.");
  } finally {
    sending.value = false;
  }
}
</script>

<template>
  <section class="contact">
    <div class="contact-form-container">
      <h1>Contact Me</h1>
      <form
        class="contact-form"
        id="contact-form"
        ref="contactForm"
        @submit.prevent="sendEmail"
        autocomplete="off"
      >
        <div class="form-group">
          <label for="name">Name*</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email*</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="form-group">
          <label for="message">Message*</label>
          <textarea id="message" name="message" rows="5" required placeholder="Type your message here..."></textarea>
        </div>
        <button type="submit" :disabled="sending">
          {{ sending ? "Sending..." : "Send" }}
        </button>
      </form>
    </div>
  </section>
</template>
