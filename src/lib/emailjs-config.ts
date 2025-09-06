// EmailJS Configuration
// Replace these with your actual EmailJS credentials from https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_s7un51p', // Your EmailJS service ID (e.g., 'service_abc123')
  TEMPLATE_ID: 'template_wg36tup', // Your EmailJS template ID for receiving messages
  AUTO_REPLY_TEMPLATE_ID: 'template_24x4yue', // Your EmailJS template ID for auto-reply (create this)
  PUBLIC_KEY: '-JHBSGV1_mDzCdX3F', // Your EmailJS public key (e.g., 'user_def456')
};

// Email template variables that will be sent to EmailJS
export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  company: string;
  subject: string;
  message: string;
  to_name: string;
}

// Auto-reply template variables
export interface AutoReplyTemplateParams {
  to_name: string;
  user_email: string; // Changed from to_email to user_email
  subject: string;
  company: string;
  from_name: string; // Your company name
}