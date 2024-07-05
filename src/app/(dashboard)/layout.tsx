import Header from "../../components/header/Header";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Header />
      <div className="w-full h-full px-4">
        <main className="w-full min-h-screen max-w-screen-xl xl:mx-auto pt-16 py-4 flex flex-col gap-5">
          {children}
        </main>
      </div>
    </>
  );
}
