export default function StatCard({ title, value }) {
  return (
    <div className="glass p-6 rounded-2xl card-hover">
      <p className="text-gray-400 text-sm">{title}</p>
      <h2 className="text-3xl font-bold gradient-text mt-2">
        {value}
      </h2>
    </div>
  );
}