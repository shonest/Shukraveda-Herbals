import { getSettings, getConditions, getTestimonials } from '@/lib/content';
import { saveSettingsAction, saveConditionAction, saveTestimonialAction, deleteTestimonialAction } from '../../actions';
import ConfirmButton from '@/components/admin/ConfirmButton';

const field = 'focus-ring mt-2 w-full rounded-xl border border-forest-100 bg-white px-4 py-2.5 text-sm';
const save = 'focus-ring rounded-xl bg-forest-800 px-5 py-2.5 text-sm font-bold text-white hover:bg-forest-700';
const card = 'rounded-2xl bg-white p-6 shadow-card';

export default async function CmsPage() {
  const [settings, conditions, testimonials] = await Promise.all([getSettings(), getConditions(), getTestimonials()]);

  return (
    <div className="max-w-4xl space-y-10">
      <div>
        <h1 className="text-2xl font-semibold">Website Content</h1>
        <p className="mt-1 text-sm text-slate-500">Changes appear on the public website immediately after saving.</p>
      </div>

      <section>
        <h2 className="text-lg font-semibold">Contact details</h2>
        <form action={saveSettingsAction} className={`${card} mt-3 grid gap-4 sm:grid-cols-2`}>
          <label className="text-sm font-semibold">Email<input name="email" type="email" defaultValue={settings.email} required className={field} /></label>
          <label className="text-sm font-semibold">Phone<input name="phone" defaultValue={settings.phone} required className={field} /></label>
          <label className="text-sm font-semibold sm:col-span-2">Address<input name="address" defaultValue={settings.address} required className={field} /></label>
          <div><button className={save}>Save contact details</button></div>
        </form>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Conditions we focus on</h2>
        <div className="mt-3 space-y-4">
          {conditions.map(c => (
            <form key={c.id} action={saveConditionAction.bind(null, c.id)} className={`${card} space-y-4`}>
              <label className="block text-sm font-semibold">Title<input name="title" defaultValue={c.title} required maxLength="80" className={field} /></label>
              <label className="block text-sm font-semibold">Description<textarea name="text" defaultValue={c.text} rows="2" maxLength="300" className={field} /></label>
              <button className={save}>Save</button>
            </form>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Testimonials</h2>
        <p className="mt-1 text-xs text-slate-500">Separate paragraphs with a blank line. Use only real, consented patient testimonials.</p>
        <div className="mt-3 space-y-4">
          {testimonials.map(t => <TestimonialForm key={t.id} t={t} />)}
          <details className={card}>
            <summary className="cursor-pointer text-sm font-bold text-forest-700">+ Add testimonial</summary>
            <div className="mt-4"><TestimonialForm t={{ id: 'new', name: '', concern: '', text: '', published: true }} bare /></div>
          </details>
        </div>
      </section>
    </div>
  );
}

function TestimonialForm({ t, bare }) {
  const isNew = t.id === 'new';
  return (
    <div className={bare ? '' : card}>
      <form action={saveTestimonialAction.bind(null, t.id)} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-semibold">Name<input name="name" defaultValue={t.name} required maxLength="80" className={field} /></label>
          <label className="text-sm font-semibold">Concern<input name="concern" defaultValue={t.concern} maxLength="80" className={field} /></label>
        </div>
        <label className="block text-sm font-semibold">Testimonial<textarea name="text" defaultValue={t.text} rows="4" required maxLength="1500" className={field} /></label>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" name="published" defaultChecked={t.published} /> Show on website</label>
        <button className={save}>{isNew ? 'Add testimonial' : 'Save'}</button>
      </form>
      {!isNew && (
        <form action={deleteTestimonialAction.bind(null, t.id)} className="mt-3">
          <ConfirmButton message="Delete this testimonial?" className="text-sm font-semibold text-red-600 hover:underline">Delete</ConfirmButton>
        </form>
      )}
    </div>
  );
}
