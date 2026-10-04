'use client';

export default function ConfirmButton({ children, message = 'Are you sure?', className }) {
  return <button className={className} onClick={e => { if (!confirm(message)) e.preventDefault(); }}>{children}</button>;
}
