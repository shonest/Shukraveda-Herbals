'use client';

import { useState } from 'react';

const initial = { name: '', email: '', mobile: '', disease: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim() || values.name.trim().length < 2) errors.name = 'Please enter your full name.';
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Please enter a valid email address.';
  if (!/^[6-9]\d{9}$/.test(values.mobile.replace(/\s+/g, ''))) errors.mobile = 'Enter a valid 10-digit Indian mobile number.';
  if (!values.disease) errors.disease = 'Please select a health concern.';
  if (!values.message.trim() || values.message.trim().length < 10) errors.message = 'Please add at least 10 characters so we can understand your query.';
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = e => {
    setValues(v => ({ ...v, [e.target.name]: e.target.value }));
    setErrors(v => ({ ...v, [e.target.name]: '' }));
    setSent(false);
  };

  const submit = e => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSent(true);
      setValues(initial);
    }
  };

  const field = 'focus-ring mt-2 w-full rounded-xl border border-forest-100 bg-white px-4 py-3 text-sm text-ink shadow-sm transition placeholder:text-slate-400 focus:border-forest-400';

  return (
    <form onSubmit={submit} noValidate className="rounded-3xl bg-white p-6 shadow-soft md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold">Full Name
          <input name="name" value={values.name} onChange={update} className={field} placeholder="Your full name" />
          {errors.name && <span className="mt-1 block text-xs text-red-600">{errors.name}</span>}
        </label>
        <label className="text-sm font-semibold">Email Address
          <input name="email" type="email" value={values.email} onChange={update} className={field} placeholder="you@example.com" />
          {errors.email && <span className="mt-1 block text-xs text-red-600">{errors.email}</span>}
        </label>
        <label className="text-sm font-semibold">Mobile Number
          <input name="mobile" inputMode="numeric" value={values.mobile} onChange={update} className={field} placeholder="10-digit mobile number" />
          {errors.mobile && <span className="mt-1 block text-xs text-red-600">{errors.mobile}</span>}
        </label>
        <label className="text-sm font-semibold">Select Disease
          <select name="disease" value={values.disease} onChange={update} className={field}>
            <option value="">Choose a concern</option>
            <option>Kidney Disorder</option>
            <option>Skin Disorder</option>
            <option>Sexual Disorder</option>
            <option>Male Infertility</option>
          </select>
          {errors.disease && <span className="mt-1 block text-xs text-red-600">{errors.disease}</span>}
        </label>
      </div>
      <label className="mt-5 block text-sm font-semibold">Message
        <textarea name="message" value={values.message} onChange={update} rows="5" className={field} placeholder="Tell us briefly what you would like help with" />
        {errors.message && <span className="mt-1 block text-xs text-red-600">{errors.message}</span>}
      </label>
      <button className="focus-ring mt-6 w-full rounded-xl bg-forest-800 px-5 py-3.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-forest-700 hover:shadow-card" type="submit">Request a Consultation</button>
      {sent && <p role="status" className="mt-4 rounded-xl bg-forest-50 px-4 py-3 text-sm text-forest-800">Thank you. Your form is validated and ready to connect to your email, CRM, or API endpoint.</p>}
      <p className="mt-4 text-xs leading-5 text-slate-500">This demo form does not send data yet. Connect the submit handler to your preferred backend before production.</p>
    </form>
  );
}
