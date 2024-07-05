import Answers from "./answers/Answers";
import Buttons from "./buttons/Buttons";
import Question from "./question/Question";

export default function QuizzCard() {
  return (
    <div className="w-full max-w-3xl h-full flex flex-col justify-between gap-5">
      <Question />
      <div className="w-full flex flex-col gap-5">
        <Answers />
        <Buttons />
      </div>
    </div>
  );
}
