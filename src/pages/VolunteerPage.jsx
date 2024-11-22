import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { volunteerSchema } from '../lib/validations';
import FormField from '../components/FormField';

export default function VolunteerPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(volunteerSchema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', data);
      toast.success('Application submitted successfully! We will contact you shortly.');
      
      // Reset form (optional)
      // reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const opportunities = [
    {
      title: 'Tour Guide',
      description: 'Lead visitors through exhibitions and share cultural knowledge.',
      commitment: '4-8 hours/week',
      requirements: ['Excellent communication skills', 'Knowledge of local history', 'Weekend availability']
    },
    {
      title: 'Collections Assistant',
      description: 'Help maintain and document museum artifacts and exhibitions.',
      commitment: '6-12 hours/week',
      requirements: ['Attention to detail', 'Basic computer skills', 'Weekday availability']
    },
    {
      title: 'Education Program Assistant',
      description: 'Support educational programs for schools and youth groups.',
      commitment: '4-6 hours/week',
      requirements: ['Experience with children', 'Teaching background preferred', 'Flexible schedule']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-display font-bold">Volunteer With Us</h1>
      <p className="mt-4 text-lg text-gray-600">
        Join our team of dedicated volunteers and help preserve and share the cultural heritage of Bugungu.
      </p>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Volunteer Opportunities */}
        <div className="space-y-8">
          <h2 className="text-2xl font-display font-semibold">Current Opportunities</h2>
          {opportunities.map((opportunity, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-display font-semibold">{opportunity.title}</h3>
              <p className="mt-2 text-gray-600">{opportunity.description}</p>
              <div className="mt-4">
                <p className="font-medium">Time Commitment:</p>
                <p className="text-gray-600">{opportunity.commitment}</p>
              </div>
              <div className="mt-4">
                <p className="font-medium">Requirements:</p>
                <ul className="mt-2 space-y-1">
                  {opportunity.requirements.map((req, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-display font-semibold">Volunteer Application</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
            <FormField label="Full Name" error={errors.name?.message}>
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

            <FormField label="Phone" error={errors.phone?.message}>
              <input
                type="tel"
                {...register("phone")}
                className="input-field"
                disabled={isSubmitting}
              />
            </FormField>

            <FormField label="Preferred Role" error={errors.role?.message}>
              <select 
                {...register("role")} 
                className="input-field"
                disabled={isSubmitting}
              >
                <option value="">Select a role</option>
                <option value="tour_guide">Tour Guide</option>
                <option value="collections">Collections Assistant</option>
                <option value="education">Education Program Assistant</option>
              </select>
            </FormField>

            <FormField label="Availability" error={errors.availability?.message}>
              <textarea
                {...register("availability")}
                rows={3}
                placeholder="Please specify your available days and times"
                className="input-field"
                disabled={isSubmitting}
              />
            </FormField>

            <FormField label="Why do you want to volunteer?" error={errors.motivation?.message}>
              <textarea
                {...register("motivation")}
                rows={4}
                placeholder="Tell us about your motivation to volunteer with us"
                className="input-field"
                disabled={isSubmitting}
              />
            </FormField>

            <FormField label="Relevant Experience" error={errors.experience?.message}>
              <textarea
                {...register("experience")}
                rows={4}
                placeholder="Share any relevant experience you have"
                className="input-field"
                disabled={isSubmitting}
              />
            </FormField>

            <button 
              type="submit" 
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}