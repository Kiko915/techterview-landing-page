# EmailJS Setup Guide for TechTerview Contact Form

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} ({{from_email}})
Company: {{company}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent via the TechTerview contact form.
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `user_def456`)

## Step 5: Update Configuration
1. Open `src/lib/emailjs-config.ts`
2. Replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123', // Your actual service ID
  TEMPLATE_ID: 'template_xyz789', // Your actual template ID
  PUBLIC_KEY: 'user_def456', // Your actual public key
};
```

## Step 6: Test the Form
1. Start your development server
2. Go to `/contact` page
3. Fill out and submit the form
4. Check your email for the message

## EmailJS Template Variables
The form sends these variables to your template:
- `{{from_name}}` - User's full name
- `{{from_email}}` - User's email address
- `{{company}}` - User's company (optional)
- `{{subject}}` - Selected subject category
- `{{message}}` - User's message
- `{{to_name}}` - Your name/company (set to "TechTerview Team")

## Free Tier Limits
- 200 emails per month
- No credit card required
- Perfect for getting started

## Troubleshooting
- Check browser console for error messages
- Verify all IDs are correct in the config file
- Make sure your email service is properly connected
- Test with a simple template first

## Security Note
The public key is safe to expose in frontend code - it's designed for client-side use.