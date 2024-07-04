import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Header />
      <div className="w-full h-full px-4">
        <main className="bg-red-400 w-full max-w-screen-xl min-h-screen xl:mx-auto mt-14">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
