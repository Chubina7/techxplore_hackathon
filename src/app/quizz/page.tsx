import HintInfoCard from "../../components/quizz_page/HintInfoCard";
import QuizzCard from "../../components/quizz_page/quizz_card/QuizzCard";
import ReturnButton from "../../components/quizz_page/ReturnButton";

export default function QuizzPage() {
  return (
    <main className="w-full h-screen flex flex-col gap-4 justify-center items-center p-5">
      <div className="w-full flex justify-between">
        <ReturnButton />
        <HintInfoCard />
      </div>
      <QuizzCard />
    </main>
  );
}
