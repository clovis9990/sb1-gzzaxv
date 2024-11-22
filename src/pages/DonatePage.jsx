import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function DonatePage() {
  const [amount, setAmount] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isMonthly, setIsMonthly] = useState(false);

  const predefinedAmounts = [20000, 50000, 100000, 250000];

  const onSubmit = (data) => {
    console.log({ ...data, amount, isMonthly });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-display font-bold">Support Our Mission</h1>
      <p className="mt-4 text-lg text-gray-600">
        Your donation helps us preserve and share the rich cultural heritage of Bugungu for future generations.
      </p>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Donation Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-display font-semibold">Make a Donation</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
            {/* Donation Type */}
            <div>
              <label className="text-sm font-medium text-gray-700">Donation Type</label>
              <div className="mt-2 flex gap-4">
                <button
                  type="button"
                  onClick={() => setIsMonthly(false)}
                  className={`flex-1 py-2 px-4 rounded-lg border ${!isMonthly ? 'bg-primary-600 text-white' : 'border-gray-300'}`}
                >
                  One-time
                </button>
                <button
                  type="button"
                  onClick={() => setIsMonthly(true)}
                  className={`flex-1 py-2 px-4 rounded-lg border ${isMonthly ? 'bg-primary-600 text-white' : 'border-gray-300'}`}
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* Amount Selection */}
            <div>
              <label className="text-sm font-medium text-gray-700">Select Amount (UGX)</label>
              <div className="mt-2 grid grid-cols-2 gap-4">
                {predefinedAmounts.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setAmount(preset.toString())}
                    className={`py-2 px-4 rounded-lg border ${
                      amount === preset.toString() ? 'bg-primary-600 text-white' : 'border-gray-300'
                    }`}
                  >
                    {preset.toLocaleString()}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Other amount"
                  className="input-field"
                />
              </div>
            </div>

            {/* Personal Information */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="input-field"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className="input-field"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            <button type="submit" className="w-full btn-primary">
              Donate Now
            </button>
          </form>
        </div>

        {/* Impact Information */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-display font-semibold">Your Impact</h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold">UGX 20,000</h3>
                <p className="text-gray-600">Helps preserve one historical artifact</p>
              </div>
              <div>
                <h3 className="font-semibold">UGX 50,000</h3>
                <p className="text-gray-600">Supports educational programs for local schools</p>
              </div>
              <div>
                <h3 className="font-semibold">UGX 100,000</h3>
                <p className="text-gray-600">Funds cultural workshops and demonstrations</p>
              </div>
              <div>
                <h3 className="font-semibold">UGX 250,000</h3>
                <p className="text-gray-600">Enables major conservation projects</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-display font-semibold">Other Ways to Support</h2>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start">
                <span className="text-primary-600">•</span>
                <span className="ml-2">Become a museum member</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600">•</span>
                <span className="ml-2">Sponsor an exhibition</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600">•</span>
                <span className="ml-2">Leave a legacy gift</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600">•</span>
                <span className="ml-2">Corporate partnerships</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}