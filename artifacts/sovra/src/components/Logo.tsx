export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="https://i.ibb.co/fzQrDk7L/490a5134-e4f7-4a60-82b4-e0c802aa418e.png"
        alt="Sovra"
        className="h-7 w-auto flex-shrink-0"
      />
      <span className="text-sm font-medium tracking-[0.08em] uppercase">
        Sovra
      </span>
    </div>
  );
}
