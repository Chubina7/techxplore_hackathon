import { FaTrophy } from "react-icons/fa6";

type Props = {
  data: number;
};

export default function Place({ data }: Props) {
  return (
    <div>
      {data === 1 ? <FaTrophy size={24} color="yellow" /> : <p>#{data}</p>}
    </div>
  );
}
