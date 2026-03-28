const zigzagSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpolygon points='6,0 12,8 0,8' fill='%23D4845A'/%3E%3C/svg%3E")`;

export function Receipt() {
  return (
    <div className="mx-auto w-full max-w-xs">
      {/* Top zigzag edge */}
      <div
        className="h-2 w-full"
        style={{
          backgroundImage: zigzagSvg,
          backgroundSize: "12px 8px",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center bottom",
        }}
      />

      {/* Receipt body */}
      <div className="bg-[#D4845A] px-6 py-6 font-mono text-xs text-white shadow-lg">
        {/* Header */}
        <div className="text-center">
          <p className="text-base font-bold tracking-tight">memoir.</p>
          <p className="mt-1 text-[10px] text-white/50">
            Jl. Contoh No. 123, Jakarta
          </p>
          <p className="text-[10px] text-white/50">Tel: 0812-3456-7890</p>
        </div>

        {/* Divider */}
        <div
          className="my-4 h-px w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.3) 0, rgba(255,255,255,0.3) 4px, transparent 4px, transparent 8px)",
          }}
        />

        {/* Info */}
        <div className="flex justify-between text-[10px] text-white/50">
          <span>26/03/2026 16:45</span>
          <span>#00142</span>
        </div>

        <div className="mt-3 space-y-2">
          <div className="flex justify-between">
            <span>Photo Strip 2x6</span>
            <span>x2</span>
          </div>
          <div className="flex justify-between">
            <span>Filter: Classic B&W</span>
            <span></span>
          </div>
          <div className="flex justify-between">
            <span>Extra Print</span>
            <span>x1</span>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-4 h-px w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.3) 0, rgba(255,255,255,0.3) 4px, transparent 4px, transparent 8px)",
          }}
        />

        {/* Total */}
        <div className="flex justify-between font-bold">
          <span>TOTAL</span>
          <span>Rp 30.000</span>
        </div>
        <div className="mt-1 flex justify-between text-[10px] text-white/50">
          <span>Pembayaran</span>
          <span>QRIS</span>
        </div>

        {/* Divider */}
        <div
          className="my-4 h-px w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.3) 0, rgba(255,255,255,0.3) 4px, transparent 4px, transparent 8px)",
          }}
        />

        {/* Footer */}
        <div className="text-center text-[10px] text-white/50">
          <p>Terima kasih!</p>
          <p className="mt-0.5">Powered by memoir.</p>
        </div>
      </div>

      {/* Bottom zigzag edge */}
      <div
        className="h-2 w-full"
        style={{
          backgroundImage: zigzagSvg,
          backgroundSize: "12px 8px",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center top",
          transform: "scaleY(-1)",
        }}
      />
    </div>
  );
}
