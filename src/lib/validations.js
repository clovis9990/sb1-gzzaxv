import { z } from 'zod';

export const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  date: z.date({
    required_error: 'Please select a date',
    invalid_type_error: 'Invalid date',
  }),
  visitors: z.number()
    .min(1, 'Minimum 1 visitor required')
    .max(20, 'Maximum 20 visitors allowed'),
  requirements: z.string().optional(),
});

export const volunteerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  role: z.string().min(1, 'Please select a role'),
  availability: z.string().min(10, 'Please provide more details about your availability'),
  motivation: z.string().min(50, 'Please provide more details about your motivation'),
  experience: z.string().optional(),
});