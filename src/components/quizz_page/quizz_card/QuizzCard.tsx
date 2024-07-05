import Answers from "./answers/Answers";
import Buttons from "./buttons/Buttons";
import Question from "./question/Question";

type Props = {
  optionsList: Array<IQuizzAnswer>;
  question: IQuizzQuestion;
};

export default function QuizzCard({ question, optionsList }: Props) {
  return (
    <div className="w-full max-w-3xl h-full flex flex-col justify-between gap-5">
      <div className="w-full flex flex-col gap-5">
        <Buttons />
        <Question data={question} />
      </div>
      <Answers data={optionsList} />
    </div>
  );
}
