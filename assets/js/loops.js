/**
 * Bantae Landing Page - Loops Integration
 * Handles email signup form submission to Loops API
 */

(function() {
  'use strict';

  // Configuration
  const CONFIG = {
    LOOPS_API_URL: 'https://app.loops.so/api/v1/contacts',
    // API key should be set via environment variable or build process
    // For now, we'll need to inject it separately (stored as secret)
    LOOPS_API_KEY: '', // Will be set via config file or build process
    SOURCE: 'bantae_landing',
    USER_GROUP: 'Coded Thinking OÜ - Bantae Landing'
  };

  // DOM Elements
  const form = document.getElementById('signup-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const consentCheckbox = document.getElementById('consent');
  const submitButton = form.querySelector('.btn-primary');
  const formMessage = document.getElementById('form-message');

  // Error message elements
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const consentError = document.getElementById('consent-error');

  /**
   * Load API key from config file
   */
  async function loadConfig() {
    try {
      const response = await fetch('config.json');
      if (response.ok) {
        const config = await response.json();
        CONFIG.LOOPS_API_KEY = config.LOOPS_API_KEY || '';
      }
    } catch (error) {
      console.warn('Could not load config file. API key must be set manually.');
    }
  }

  /**
   * Validate email format
   */
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Clear all error messages
   */
  function clearErrors() {
    nameError.textContent = '';
    emailError.textContent = '';
    consentError.textContent = '';
    nameInput.classList.remove('error');
    emailInput.classList.remove('error');
    consentCheckbox.classList.remove('error');
  }

  /**
   * Clear form message
   */
  function clearFormMessage() {
    formMessage.textContent = '';
    formMessage.className = 'form-message';
  }

  /**
   * Show form message
   */
  function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.setAttribute('aria-live', 'polite');
  }

  /**
   * Validate form inputs
   */
  function validateForm() {
    clearErrors();
    let isValid = true;

    // Validate name
    const name = nameInput.value.trim();
    if (!name) {
      nameError.textContent = 'Please enter your name';
      nameInput.classList.add('error');
      isValid = false;
    }

    // Validate email
    const email = emailInput.value.trim();
    if (!email) {
      emailError.textContent = 'Please enter your email';
      emailInput.classList.add('error');
      isValid = false;
    } else if (!isValidEmail(email)) {
      emailError.textContent = 'Please enter a valid email address';
      emailInput.classList.add('error');
      isValid = false;
    }

    // Validate consent
    if (!consentCheckbox.checked) {
      consentError.textContent = 'Please confirm you want to be notified';
      consentCheckbox.classList.add('error');
      isValid = false;
    }

    return isValid;
  }

  /**
   * Set loading state
   */
  function setLoading(isLoading) {
    if (isLoading) {
      submitButton.classList.add('loading');
      submitButton.disabled = true;
      submitButton.querySelector('.btn-text').hidden = true;
      submitButton.querySelector('.btn-loader').hidden = false;
    } else {
      submitButton.classList.remove('loading');
      submitButton.disabled = false;
      submitButton.querySelector('.btn-text').hidden = false;
      submitButton.querySelector('.btn-loader').hidden = true;
    }
  }

  /**
   * Submit form to Loops API
   */
  async function submitToLoops(name, email) {
    // Check if API key is set
    if (!CONFIG.LOOPS_API_KEY) {
      throw new Error('API key not configured');
    }

    const payload = {
      firstName: name,
      email: email,
      source: CONFIG.SOURCE,
      userGroup: CONFIG.USER_GROUP
    };

    const response = await fetch(CONFIG.LOOPS_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CONFIG.LOOPS_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      // Check for specific error codes
      if (response.status === 409) {
        // Already exists - treat as success
        return { success: true, alreadyExists: true };
      }
      
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to submit form');
    }

    return { success: true };
  }

  /**
   * Handle form submission
   */
  async function handleSubmit(event) {
    event.preventDefault();

    // Clear previous messages
    clearFormMessage();

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Get form values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // Set loading state
    setLoading(true);

    try {
      // Submit to Loops
      const result = await submitToLoops(name, email);

      if (result.success) {
        // Show success message
        showFormMessage(
          "Thanks! We'll be in touch when Bantae is ready. Keep thinking.",
          'success'
        );

        // Reset form
        form.reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Show error message
      showFormMessage(
        'Something went wrong. Please try again or email us at hello@bantae.com',
        'error'
      );
    } finally {
      // Reset loading state
      setLoading(false);
    }
  }

  /**
   * Initialize form
   */
  function init() {
    // Load configuration
    loadConfig();

    // Add form submit listener
    form.addEventListener('submit', handleSubmit);

    // Clear errors on input
    nameInput.addEventListener('input', () => {
      nameError.textContent = '';
      nameInput.classList.remove('error');
    });

    emailInput.addEventListener('input', () => {
      emailError.textContent = '';
      emailInput.classList.remove('error');
    });

    consentCheckbox.addEventListener('change', () => {
      consentError.textContent = '';
      consentCheckbox.classList.remove('error');
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
