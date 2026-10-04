export const LEAD_STATUSES = [
  { value: 'new', label: 'New', tone: 'bg-blue-50 text-blue-700 ring-blue-200' },
  { value: 'contacted', label: 'Contacted', tone: 'bg-amber-50 text-amber-700 ring-amber-200' },
  { value: 'follow_up', label: 'Follow-up', tone: 'bg-purple-50 text-purple-700 ring-purple-200' },
  { value: 'converted', label: 'Converted', tone: 'bg-green-50 text-green-700 ring-green-200' },
  { value: 'not_interested', label: 'Not Interested', tone: 'bg-slate-100 text-slate-600 ring-slate-200' },
  { value: 'closed', label: 'Closed', tone: 'bg-red-50 text-red-700 ring-red-200' }
];
export const statusMeta = v => LEAD_STATUSES.find(s => s.value === v) || LEAD_STATUSES[0];

// Shared by the public form (client) and the API route (server).
export function validateLead(values) {
  const errors = {};
  const s = k => String(values[k] ?? '');
  if (s('name').trim().length < 2) errors.name = 'Please enter your full name.';
  if (!/^\S+@\S+\.\S+$/.test(s('email'))) errors.email = 'Please enter a valid email address.';
  if (!/^[6-9]\d{9}$/.test(s('mobile').replace(/\s+/g, ''))) errors.mobile = 'Enter a valid 10-digit Indian mobile number.';
  if (!s('disease')) errors.disease = 'Please select a health concern.';
  if (s('message').trim().length < 10) errors.message = 'Please add at least 10 characters so we can understand your query.';
  return errors;
}
