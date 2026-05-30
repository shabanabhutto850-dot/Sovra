export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="https://i.ibb.co/6cm25pnD/ca5230bd-6d83-457b-9212-208de0b5ea87.png"
        alt="Sovra"
        className="h-7 w-auto flex-shrink-0"
      />
      <span className="text-sm font-medium tracking-[0.08em] uppercase">
        Sovra
      </span>
    </div>
  );
}
