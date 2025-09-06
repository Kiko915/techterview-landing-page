<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 -mt-20">
        <!-- Hero Section -->
        <section class="pt-32 pb-16">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
                    Get in <span
                    class="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-800 bg-clip-text text-transparent">Touch</span>
                </h1>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    Ready to transform your interview process? We'd love to hear from you.
                    Send us a message and we'll get back to you within 24 hours.
                </p>
            </div>
        </section>

        <!-- Contact Form Section -->
        <section class="pb-20">
            <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                    <form @submit.prevent="handleSubmit" class="space-y-6">
                        <!-- Name Field -->
                        <div>
                            <label for="name" class="block text-sm font-semibold text-gray-900 mb-2">
                                Full Name *
                            </label>
                            <input id="name" v-model="form.name" type="text"
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                :class="{ 'border-red-500 focus:ring-red-500': errors.name }"
                                placeholder="Enter your full name" />
                            <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
                        </div>

                        <!-- Email Field -->
                        <div>
                            <label for="email" class="block text-sm font-semibold text-gray-900 mb-2">
                                Email Address *
                            </label>
                            <input id="email" v-model="form.email" type="email"
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                :class="{ 'border-red-500 focus:ring-red-500': errors.email }"
                                placeholder="Enter your email address" />
                            <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
                        </div>

                        <!-- Company Field -->
                        <div>
                            <label for="company" class="block text-sm font-semibold text-gray-900 mb-2">
                                Company
                            </label>
                            <input id="company" v-model="form.company" type="text"
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                placeholder="Enter your company name" />
                        </div>

                        <!-- Subject Field -->
                        <div>
                            <label for="subject" class="block text-sm font-semibold text-gray-900 mb-2">
                                Subject *
                            </label>
                            <select id="subject" v-model="form.subject"
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                :class="{ 'border-red-500 focus:ring-red-500': errors.subject }">
                                <option value="">Select a subject</option>
                                <option value="general">General Inquiry</option>
                                <option value="demo">Request Demo</option>
                                <option value="pricing">Pricing Information</option>
                                <option value="support">Technical Support</option>
                                <option value="partnership">Partnership</option>
                            </select>
                            <p v-if="errors.subject" class="mt-1 text-sm text-red-600">{{ errors.subject }}</p>
                        </div>

                        <!-- Message Field -->
                        <div>
                            <label for="message" class="block text-sm font-semibold text-gray-900 mb-2">
                                Message *
                            </label>
                            <textarea id="message" v-model="form.message" rows="5"
                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                                :class="{ 'border-red-500 focus:ring-red-500': errors.message }"
                                placeholder="Tell us about your needs, questions, or how we can help you..."></textarea>
                            <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
                        </div>

                        <!-- Submit Button -->
                        <div class="pt-4">
                            <button type="submit" :disabled="isSubmitting"
                                class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                                <span v-if="!isSubmitting" class="flex items-center justify-center">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                    </svg>
                                    Send Message
                                </span>
                                <span v-else class="flex items-center justify-center">
                                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg>
                                    Sending...
                                </span>
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        </section>

        <!-- Contact Info Section -->
        <section class="pb-20">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Email -->
                    <div class="text-center">
                        <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                </path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                        <p class="text-gray-600">hello@techterview.com</p>
                    </div>

                    <!-- Response Time -->
                    <div class="text-center">
                        <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Response Time</h3>
                        <p class="text-gray-600">Within 24 hours</p>
                    </div>

                    <!-- Support -->
                    <div class="text-center">
                        <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                </path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Support</h3>
                        <p class="text-gray-600">24/7 assistance</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Success Modal -->
        <div v-if="showSuccess" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <div
                class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all duration-300 scale-100">
                <div class="text-center">
                    <!-- Success Icon -->
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                    </div>

                    <!-- Success Title -->
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>

                    <!-- Success Message -->
                    <p class="text-gray-600 mb-6">
                        Thank you for reaching out! We've received your message and will get back to you within 24
                        hours.
                    </p>

                    <!-- Close Button -->
                    <button @click="closeSuccessModal"
                        class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200">
                        Got it!
                    </button>
                </div>
            </div>
        </div>

        <!-- Error Modal -->
        <div v-if="showError" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <div
                class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all duration-300 scale-100">
                <div class="text-center">
                    <!-- Error Icon -->
                    <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>

                    <!-- Error Title -->
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h3>

                    <!-- Error Message -->
                    <p class="text-gray-600 mb-6">
                        {{ errorMessage || 'Failed to send your message. Please try again or contact us directly at hello@techterview.com' }}
                    </p>

                    <!-- Action Buttons -->
                    <div class="flex space-x-3">
                        <button @click="closeErrorModal"
                            class="flex-1 bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition-all duration-200">
                            Close
                        </button>
                        <button @click="retrySubmission"
                            class="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200">
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../lib/emailjs-config';

// Form data
const form = reactive({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
});

// Form state
const errors = ref<Record<string, string>>({});
const isSubmitting = ref(false);
const showSuccess = ref(false);
const showError = ref(false);
const errorMessage = ref('');

// Validation rules
const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Name validation
    if (!form.name.trim()) {
        newErrors.name = 'Full name is required';
    } else if (form.name.trim().length < 2) {
        newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
        newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(form.email)) {
        newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!form.subject) {
        newErrors.subject = 'Please select a subject';
    }

    // Message validation
    if (!form.message.trim()) {
        newErrors.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
        newErrors.message = 'Message must be at least 10 characters';
    }

    errors.value = newErrors;
    return Object.keys(newErrors).length === 0;
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

// Form submission
const handleSubmit = async () => {
    if (!validateForm()) {
        return;
    }

    isSubmitting.value = true;

    try {
        // Prepare template parameters for EmailJS
        const templateParams = {
            from_name: form.name,
            from_email: form.email,
            company: form.company || 'Not specified',
            subject: form.subject,
            message: form.message,
            to_name: 'TechTerview Team', // Your name/company
        };

        // Send main email to you
        const response = await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            templateParams
        );

        console.log('Main email sent successfully:', response);

        // Send auto-reply to user
        const autoReplyParams = {
            name: form.name,
            email: form.email, // Changed from to_email to user_email
            subject: form.subject,
            company: form.company || 'Not specified',
            from_name: 'TechTerview Team',
            title: form.message
        };

        const autoReplyResponse = await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.AUTO_REPLY_TEMPLATE_ID,
            autoReplyParams
        );

        console.log('Auto-reply sent successfully:', autoReplyResponse);

        // Reset form
        Object.keys(form).forEach(key => {
            form[key as keyof typeof form] = '';
        });

        // Show success modal
        showSuccess.value = true;

    } catch (error) {
        console.error('Error sending email:', error);

        // Show error modal
        errorMessage.value = 'Failed to send your message. Please check your internet connection and try again.';
        showError.value = true;
    } finally {
        isSubmitting.value = false;
    }
};

// Modal control functions
const closeSuccessModal = () => {
    showSuccess.value = false;
};

const closeErrorModal = () => {
    showError.value = false;
    errorMessage.value = '';
    // Clear any form errors
    errors.value = {};
};

const retrySubmission = () => {
    closeErrorModal();
    handleSubmit();
};
</script>