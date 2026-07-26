import { useState } from 'react';
import { WARDS } from '../lib/wards';

const CATEGORIES = ['Education', 'Health', 'Roads', 'Water', 'Markets', 'Administration', 'Other'];
const DESCRIPTION_LIMIT = 500;

interface Confirmation {
  reference: string;
  category: string;
  ward: string;
  date: string;
}

export default function RequestForm() {
  const [category, setCategory] = useState('');
  const [ward, setWard] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch('/api/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category, ward, description, name, phone }),
      });
      if (!res.ok) {
        throw new Error('Could not submit request');
      }
      const data = await res.json();
      setConfirmation({
        reference: data.reference,
        category: data.category,
        ward: data.ward,
        date: new Date(data.date).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
      });
    } catch {
      setError('Something went wrong submitting your request. Please try again, or contact the office directly.');
    } finally {
      setSubmitting(false);
    }
  }

  if (confirmation) {
    const wardEntry = WARDS.find((w) => String(w.number) === confirmation.ward);
    return (
      <div className="confirmation-panel" role="status">
        <p className="caption">Request received</p>
        <p className="confirmation-ref">{confirmation.reference}</p>
        <p>
          <strong>Category:</strong> {confirmation.category}
          <br />
          <strong>Ward:</strong> {wardEntry ? `${wardEntry.number} — ${wardEntry.name}` : confirmation.ward}
          <br />
          <strong>Date:</strong> {confirmation.date}
        </p>
        <p>Save this reference number. You can use it to follow up at the district office or by phone.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="category">Category</label>
        <select id="category" required value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="" disabled>
            Select a category
          </option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="ward">Ward</label>
        <select id="ward" required value={ward} onChange={(e) => setWard(e.target.value)}>
          <option value="" disabled>
            Select your ward
          </option>
          {WARDS.map((w) => (
            <option key={w.number} value={String(w.number)}>
              Ward {w.number} ({w.name})
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          required
          rows={5}
          maxLength={DESCRIPTION_LIMIT}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <span className="hint">{description.length}/{DESCRIPTION_LIMIT} characters</span>
      </div>

      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="form-field">
        <label htmlFor="phone">Phone number</label>
        <input id="phone" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>

      {error && (
        <p className="hint" style={{ color: '#B3122A', marginBottom: '12px' }} role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="btn btn-primary" disabled={submitting}>
        {submitting ? 'Submitting…' : 'Submit request'}
      </button>
    </form>
  );
}
