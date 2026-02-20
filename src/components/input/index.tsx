"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Input() {
  const [input, setInput] = useState("");
  const router = useRouter();

  function handleSearch(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    if (input === "") return;

    router.push(`/game/search/${input}`);
  }
  return (
    <form
      onSubmit={handleSearch}
      className="w-full bg-slate-200 my-5 gap-2 items-center rounded-lg p-2 flex justify-between"
    >
      <input
        className="bg-slate-200 outline-none w-11/12"
        type="text"
        placeholder="Procure aqui algum jogo..."
        value={input}
        onChange={(ev) => setInput(ev.target.value)}
      />
      <button className="cursor-pointer" type="submit">
        <FiSearch size={24} color="#ea580c" />
      </button>
    </form>
  );
}
