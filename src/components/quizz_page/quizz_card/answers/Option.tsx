type Props = {
  data: IQuizzAnswer;
};

export default function Option({ data }: Props) {
  // render conditionally depending on the type of the option
  // ...
  return (
    <div className="w-full rounded-2xl px-5 py-1 border-2 border-customPurpleLight hover:bg-customPurpleLight hover:text-customBrightWhite hover:scale-105 cursor-pointer transition-all duration-300 ">
      <h1>{data.answer}</h1>
    </div>
  );
}
