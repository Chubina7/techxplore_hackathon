import Option from "./Option";

type Props = {
  data: Array<IQuizzAnswer>;
};

export default function Answers({ data }: Props) {
  return (
    <div className="flex flex-col gap-3">
      {data.map((opt) => (
        <Option key={opt.id} data={opt} />
      ))}
    </div>
  );
}
