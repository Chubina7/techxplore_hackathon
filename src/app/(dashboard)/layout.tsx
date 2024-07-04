import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Header />
      <div className="w-full h-full px-4">
        <main className="w-full max-w-screen-xl h-full min-h-screen xl:mx-auto mt-14 py-4 flex flex-col gap-5">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
