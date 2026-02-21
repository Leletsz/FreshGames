import Container from "@/src/components/container";
import GameCard from "@/src/components/GameCard";
import Input from "@/src/components/input";
import { GameProps } from "@/src/utils/types/game";
import React from "react";

async function getData(title: string) {
  try {
    const decodeTitle = decodeURI(title);
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`,
    );
    return res.json();
  } catch (error) {
    return null;
  }
}

export default async function Search({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;
  const games: GameProps[] = await getData(title);
  return (
    <main>
      <Container>
        <Input />
        <h1 className="font bold text-xl mt-8 mb-5">
          Resultados que encontramos:
        </h1>
        {!games && <p>Esse jogo não foi encontrado!</p>}

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {games && games.map((item) => <GameCard key={item.id} data={item} />)}
        </section>
      </Container>
    </main>
  );
}
