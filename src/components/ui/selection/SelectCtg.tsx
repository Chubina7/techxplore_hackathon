"use client";

import { useState } from "react";
import Modal from "./Modal";
import SelectBtn from "./SelectBtn";
import useOutsideClickTrack from "../../../hooks/useOutsideClick";

type Props = {
  selectTitle: string;
  options: Array<string>;
  id: string;
  setterFunc: (value: string) => void;
};

export default function SelectCtg({
  options,
  id,
  selectTitle,
  setterFunc,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  useOutsideClickTrack(id, [isOpen, setIsOpen]);

  const modalHandler = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative z-40">
      <SelectBtn handleOpen={modalHandler} id={id} title={selectTitle} />
      {isOpen && (
        <Modal handleModal={modalHandler} optionsList={options} id={id} setterFunc={setterFunc} />
      )}
    </div>
  );
}
