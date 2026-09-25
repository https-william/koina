import { redirect } from 'next/navigation';

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const query = new URLSearchParams();
  if (searchParams) {
    Object.entries(searchParams).forEach(([k, v]) => {
      if (typeof v === 'string') query.set(k, v);
    });
  }
  const queryString = query.toString();
  redirect(queryString ? `/referral?${queryString}` : '/referral');
}
