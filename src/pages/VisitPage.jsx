import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import DatePicker from 'react-datepicker';
import toast from 'react-hot-toast';
import "react-datepicker/dist/react-datepicker.css";
import { bookingSchema } from '../lib/validations';
import FormField from '../components/FormField';

export default function VisitPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      visitors: 1,
    }
  });

  const selectedDate = watch('date');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', data);
      toast.success('Booking submitted successfully! We will contact you shortly.');
      
      // Reset form (optional)
      // reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-display font-bold">Plan Your Visit</h1>
      
      {/* Visitor Information */}
      <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-display font-semibold">Opening Hours</h2>
          <div className="mt-4 space-y-2">
            <p className="flex justify-between">
              <span>Monday - Friday</span>
              <span>9:00 AM - 5:00 PM</span>
            </p>
            <p className="flex justify-between">
              <span>Saturday</span>
              <span>10:00 AM - 4:00 PM</span>
            </p>
            <p className="flex justify-between">
              <span>Sunday</span>
              <span>11:00 AM - 3:00 PM</span>
            </p>
          </div>

          <h2 className="mt-8 text-2xl font-display font-semibold">Admission Fees</h2>
          <div className="mt-4 space-y-2">
            <p className="flex justify-between">
              <span>Adults</span>
              <span>UGX 20,000</span>
            </p>
            <p className="flex justify-between">
              <span>Children (under 12)</span>
              <span>UGX 10,000</span>
            </p>
            <p className="flex justify-between">
              <span>Students (with ID)</span>
              <span>UGX 15,000</span>
            </p>
            <p className="flex justify-between">
              <span>Seniors (65+)</span>
              <span>UGX 15,000</span>
            </p>
          </div>

          <h2 className="mt-8 text-2xl font-display font-semibold">Location</h2>
          <p className="mt-4">
            123 Heritage Lane<br />
            Bugungu, Uganda
          </p>
          <p className="mt-2">
            <strong>Phone:</strong> +256 123 456 789<br />
            <strong>Email:</strong> visits@bugunguheritage.org
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-display font-semibold">Book Your Visit</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            <FormField label="Name" error={errors.name?.message}>
              <input
                type="text"
                {...register("name")}
                className="input-field"
                disabled={isSubmitting}
              />
            </FormField>

            <FormField label="Email" error={errors.email?.message}>
              <input
                type="email"
                {...register("email")}
                className="input-field"
                disabled={isSubmitting}
              />
            </FormField>

            <FormField label="Visit Date" error={errors.date?.message}>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setValue('date', date)}
                minDate={new Date()}
                className="input-field"
                placeholderText="Select a date"
                disabled={isSubmitting}
              />
            </FormField>

            <FormField label="Number of Visitors" error={errors.visitors?.message}>
              <input
                type="number"
                {...register("visitors", { valueAsNumber: true })}
                className="input-field"
                min="1"
                max="20"
                disabled={isSubmitting}
              />
            </FormField>

            <FormField label="Special Requirements" error={errors.requirements?.message}>
              <textarea
                {...register("requirements")}
                rows={3}
                className="input-field"
                placeholder="Any accessibility requirements or special requests"
                disabled={isSubmitting}
              />
            </FormField>

            <button 
              type="submit" 
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Book Now'}
            </button>
          </form>
        </div>
      </section>

      {/* Guidelines */}
      <section className="mt-12">
        <h2 className="text-2xl font-display font-semibold">Visitor Guidelines</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold">Photography</h3>
            <p className="mt-2 text-gray-600">Photography is allowed in most areas. Flash photography and tripods require special permission.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold">Accessibility</h3>
            <p className="mt-2 text-gray-600">The museum is wheelchair accessible. Wheelchairs are available free of charge.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold">Food & Drinks</h3>
            <p className="mt-2 text-gray-600">Food and drinks are not allowed in the exhibition areas. A café is available on-site.</p>
          </div>
        </div>
      </section>
    </div>
  );
}