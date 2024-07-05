type Props = {
  curr: number;
  from: number;
};
export default function QuestionsNumb({ curr, from }: Props) {
  return (
    <p className="text-sm">
      {curr}/{from}
    </p>
  );
}
