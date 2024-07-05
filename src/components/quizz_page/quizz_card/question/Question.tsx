type Props = {
  data: IQuizzQuestion;
};

export default function Question({ data }: Props) {
  // show question conditionally depending on its type
  // ...
  return (
    <div className="w-full h-full max-h-screen overflow-y-scroll scroll-hidden p-3 rounded-2xl border-2 border-customPurpleLight">
      <h1 className="font-semibold text-lg">{data}</h1>
    </div>
  );
}
