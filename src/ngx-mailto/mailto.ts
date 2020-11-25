/**
 * @author Anthony Nahas
 * @since 25.11.2020
 * @version 1.0
 *
 * All properties are optional
 */
export interface Mailto {
  receiver?: string | string[];
  subject?: string;
  cc?: string | string[];
  bcc?: string | string[];
  body?: string;
}
