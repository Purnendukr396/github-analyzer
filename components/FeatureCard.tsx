interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-4 text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-2 text-gray-600">
        {description}
      </p>
    </div>
  );
}