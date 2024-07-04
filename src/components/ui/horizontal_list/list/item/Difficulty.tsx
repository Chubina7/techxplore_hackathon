type Props = {
  level: string;
};

export default function Difficulty({ level }: Props) {
  return (
    <div className="px-3 py-1 rounded-full bg-red-300 opacity-70 select-none">
      <h1 className="text-xs font-semibold">{level}</h1>
    </div>
  );
}
