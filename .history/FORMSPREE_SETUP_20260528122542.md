# Formspree Setup Guide

Your contact form is now configured to send emails directly to your inbox using Formspree (a free email service).

## Setup Steps:

### 1. Create a Formspree Account
1. Go to https://formspree.io/
2. Click "Get Started" or "Sign Up"
3. Sign up with your email: **avincus.softwaredevelopment@gmail.com**
4. Verify your email address

### 2. Create a New Form
1. After logging in, click "New Form" or "Create Form"
2. Give it a name like "AVINCUS Contact Form"
3. Formspree will generate a unique form endpoint URL like:
   `https://formspree.io/f/YOUR_FORM_ID`

### 3. Update Your Website
1. Copy your form ID (the part after `/f/`)
2. Open the file: `src/components/Contact.js`
3. Find this line (around line 45):
   ```javascript
   const response = await fetch('https://formspree.io/f/xanyrgko', {
   ```
4. Replace `xanyrgko` with your actual form ID

### 4. Configure Form Settings (Optional)
In your Formspree dashboard, you can:
- Set up email notifications
- Add custom reply-to addresses
- Enable spam protection
- View submission history

## Current Configuration:

- **Your Email:** avincus.softwaredevelopment@gmail.com
- **Temporary Form ID:** xanyrgko (replace with your own)
- **Free Plan Limits:** 50 submissions per month

## How It Works:

1. User fills out the contact form on your website
2. Form data is sent to Formspree
3. Formspree forwards the email to: avincus.softwaredevelopment@gmail.com
4. You receive the inquiry in your inbox
5. User sees a success message on the website

## Testing:

After setup, test the form by:
1. Filling out your contact form
2. Clicking "Send Message"
3. Check your email inbox for the submission

## Alternative: Use EmailJS (if you prefer)

If you want more control, you can also use EmailJS:
1. Go to https://www.emailjs.com/
2. Sign up and create a service
3. Get your Service ID, Template ID, and Public Key
4. I can help you integrate it

---

**Note:** The form will work immediately once you replace the form ID with your own from Formspree!
