const zigzagLine = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpolyline points='0,6 6,2 12,6' fill='none' stroke='%23c5c0b8' stroke-width='1.5'/%3E%3C/svg%3E")`;

export function ReceiptDivider() {
  return (
    <div
      className="h-2 w-full"
      style={{
        backgroundImage: zigzagLine,
        backgroundSize: "12px 8px",
        backgroundRepeat: "repeat-x",
      }}
    />
  );
}
