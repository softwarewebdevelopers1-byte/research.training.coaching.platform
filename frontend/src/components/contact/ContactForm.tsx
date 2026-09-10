import { useState, type FormEvent } from 'react';
import { services } from '../../data/services';
import {
  submitContactForm,
  getServiceOptions,
  type ContactPayload,
} from '../../services/contactService';
import Button from '../common/Button';
import styles from './ContactForm.module.css';

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const serviceOptions = getServiceOptions(services);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) {
      next.email = 'Please enter your email.';
    } else if (!emailPattern.test(form.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (!form.phone.trim()) {
      next.phone = 'Please enter a phone number.';
    }
    if (!form.service) next.service = 'Please choose a service.';
    if (!form.message.trim() || form.message.trim().length < 10) {
      next.message = 'Please tell us a little more (at least 10 characters).';
    }
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFeedback(null);

    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setSubmitting(true);
    try {
      const payload: ContactPayload = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        service: form.service,
        message: form.message.trim(),
      };
      const result = await submitContactForm(payload);
      setFeedback({
        type: result.ok ? 'success' : 'error',
        message: result.message,
      });
      if (result.ok) setForm(initialState);
    } catch {
      setFeedback({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            required
          />
          {errors.name && (
            <span id="name-error" className={styles.error}>
              {errors.name}
            </span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            required
          />
          {errors.email && (
            <span id="email-error" className={styles.error}>
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            required
          />
          {errors.phone && (
            <span id="phone-error" className={styles.error}>
              {errors.phone}
            </span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="service">Service interested in</label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={(e) => update('service', e.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? 'service-error' : undefined}
            required
          >
            <option value="">Select a service…</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service && (
            <span id="service-error" className={styles.error}>
              {errors.service}
            </span>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          required
        />
        {errors.message && (
          <span id="message-error" className={styles.error}>
            {errors.message}
          </span>
        )}
      </div>

      <div className={styles.actions}>
        <Button type="submit" variant="primary" size="lg" disabled={submitting}>
          {submitting ? 'Sending…' : 'Send Message'}
        </Button>
      </div>

      {feedback && (
        <p
          className={
            feedback.type === 'success' ? styles.success : styles.errorBox
          }
          role="status"
        >
          {feedback.message}
        </p>
      )}

      <p className={styles.note}>
        Note: this form is currently a frontend placeholder. Submissions are
        not sent to a server until the backend is connected.
      </p>
    </form>
  );
}
