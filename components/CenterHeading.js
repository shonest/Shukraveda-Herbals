export default function CenterHeading({ children, light = false }) {
  return (
    <div className="text-center">
      <h2 className={`text-3xl font-semibold uppercase tracking-[.06em] sm:text-4xl ${light ? 'text-white' : 'text-forest-700'}`}>{children}</h2>
      <span className="mx-auto mt-4 block h-1 w-24 rounded-full bg-gradient-to-r from-forest-600 to-gold" />
    </div>
  );
}
