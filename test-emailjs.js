// Test EmailJS Configuration
// Run this in browser console to test if EmailJS is working

import emailjs from '@emailjs/browser';

// Initialize
emailjs.init('q5UHoBcW_BDmMxKk_');

// Test send
emailjs.send(
    'service_xi7wpgo',
    'template_o8t93vt',
    {
        user_name: 'Test User',
        user_email: 'test@example.com',
        message: 'This is a test message'
    },
    'q5UHoBcW_BDmMxKk_'
).then(
    (response) => {
        console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
        console.log('FAILED...', error);
    }
);
