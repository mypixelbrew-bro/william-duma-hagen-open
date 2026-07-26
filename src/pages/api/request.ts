import type { APIRoute } from 'astro';

export const prerender = false;

const CATEGORIES = ['Education', 'Health', 'Roads', 'Water', 'Markets', 'Administration', 'Other'];

function generateReference(date: Date) {
  const year = date.getFullYear();
  const digits = Math.floor(1000 + Math.random() * 9000);
  return `HO-${year}-${digits}`;
}

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const category = typeof body.category === 'string' ? body.category : '';
  const ward = typeof body.ward === 'string' ? body.ward : '';
  const description = typeof body.description === 'string' ? body.description.slice(0, 500) : '';
  const name = typeof body.name === 'string' ? body.name.slice(0, 200) : '';
  const phone = typeof body.phone === 'string' ? body.phone.slice(0, 50) : '';

  if (!CATEGORIES.includes(category) || !ward || !description) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // PLACEHOLDER: this does not yet send an email. Before launch, wire this up
  // to a real email provider (e.g. Resend, SendGrid) to deliver submissions
  // to the district office, and persist a copy for follow-up.
  const now = new Date();
  const reference = generateReference(now);

  return new Response(
    JSON.stringify({
      reference,
      category,
      ward,
      name,
      phone,
      description,
      date: now.toISOString(),
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
