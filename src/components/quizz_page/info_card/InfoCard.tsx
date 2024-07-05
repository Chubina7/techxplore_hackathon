import BackBtn from "./buttons/BackBtn";
import StartBtn from "./buttons/StartBtn";

type Props = {
  title: string;
  description: string;
};

export default function InfoCard({ description, title }: Props) {
  return (
    <div className="w-full max-w-3xl flex flex-col justify-center items-center gap-5">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p>{description}</p>
      <p>🫡 მზად ხარ?</p>
      <div className="flex justify-center items-center gap-2">
        <BackBtn />
        <StartBtn />
      </div>
    </div>
  );
}
