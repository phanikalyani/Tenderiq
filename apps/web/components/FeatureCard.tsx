export default function FeatureCard({ icon, title, desc }) {
  return (
    <div className="glass card-hover p-6 rounded-2xl">
      <div className="text-blue-400 mb-4">{icon}</div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-400 text-sm mt-2">{desc}</p>
    </div>
  );
}