"use client";

export default function Card({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="glass rounded-3xl p-6 hover:scale-105 transition">
      {children}
    </div>
  );
}