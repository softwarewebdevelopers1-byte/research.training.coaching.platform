import type { Service } from '../types';

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface ContactResult {
  ok: boolean;
  message: string;
}

/**
 * PLACEHOLDER SUBMISSION
 * ----------------------
 * This function does NOT send data anywhere.
 * It simulates a network delay and returns a success response.
 *
 * To connect to a real backend later:
 *   1. Replace the body of this function with a fetch() call.
 *   2. Point it at your API endpoint (e.g. /api/contact, Formspree, etc.).
 *   3. Keep the same ContactPayload / ContactResult contract.
 */
export async function submitContactForm(
  payload: ContactPayload,
): Promise<ContactResult> {
  // eslint-disable-next-line no-console
  console.info('[contactService] Placeholder submission:', payload);

  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    ok: true,
    message:
      'Thank you. Your message has been received (placeholder — not sent to a server yet).',
  };
}

export const getServiceOptions = (services: Service[]): string[] =>
  services.map((s) => s.name);
