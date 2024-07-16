
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<div>
  <ul>
    <li>Order</li>
    <li>Payment</li>
  </ul>
  {children}
  <p>Have to Think Something?</p>
</div>
  );
}
