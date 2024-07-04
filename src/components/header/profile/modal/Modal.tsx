import Link from "next/link";

type Props = {
  handleModal: () => void;
};

export default function Modal({ handleModal }: Props) {
  return (
    <div className="absolute -bottom-1 transform translate-y-[100%] right-0 bg-red-400">
      <Link href={"/player?query=param"} onClick={handleModal}>
        Player Profile
      </Link>
      <h1>Sign out</h1>
    </div>
  );
}
