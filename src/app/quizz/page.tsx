import HintInfoCard from "../../components/quizz_page/HintInfoCard";
import InfoCard from "../../components/quizz_page/info_card/InfoCard";
import ReturnButton from "../../components/quizz_page/ReturnButton";
import { dummyQuizz } from "../../lib/DummyData";
// import QuizzCard from "../../components/quizz_page/quizz_card/QuizzCard";

export default function QuizzPage() {
  // retrieve quizz data
  // ...
  return (
    <main className="w-full h-full min-h-screen flex flex-col gap-4 justify-start items-center p-5">
      <div className="w-full flex justify-between">
        <ReturnButton />
        <HintInfoCard />
      </div>
      {/* <QuizzCard
        question={dummyQuizz.question}
        optionsList={dummyQuizz.options}
      /> */}
      <InfoCard
        title={dummyQuizz.info.title}
        description={dummyQuizz.info.description}
      />
    </main>
  );
}
