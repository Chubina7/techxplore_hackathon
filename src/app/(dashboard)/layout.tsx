type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  return (
    <>
      <header>HEADER</header>
      <main className="w-full min-h-screen">{children}</main>
      <footer>FOOTER</footer>
    </>
  );
}
