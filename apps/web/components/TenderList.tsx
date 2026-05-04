

export default function TenderList(): JSX.Element {
  return (
    <div className="grid md:grid-cols-3 gap-6">

      {["Road Project", "Bridge Contract", "IT Services"].map((item, i) => (
        <Card key={i}>
          <h3 className="text-lg font-semibold">{item}</h3>
          <p className="text-gray-400 text-sm mt-2">
            AI Match Score: 92%
          </p>

          <button className="btn-glow mt-4 px-4 py-2 rounded-xl text-sm">
            View Details
          </button>
        </Card>
      ))}

    </div>
  );
}