export default function Section({
  children,
  title,
  subtitle,
  id,
  className = "",
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        {title && (
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">{title}</h2>
            {subtitle && <p className="text-muted text-lg">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
