export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div>
        <h2>Featured Products Section</h2>
      </div>
    </div>
  );
}
