import Container from "@/src/components/container";
import { GameProps } from "@/src/utils/types/game";
import Image from "next/image";
import { redirect } from "next/navigation";

async function getData(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`,
    );
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}
export default async function Game({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data: GameProps = await getData(id);
  if (!data) {
    redirect("/");
  }
  return (
    <main className="w-full text-black">
      <div className="bg-black h-80 sm:h-96 w-full relative ">
        <Image
          src={data.image_url}
          alt={data.title}
          fill
          priority
          quality={100}
          className="object-cover w-full h-80 sm:h-96 opacity-50 hover:opacity-90 transition-all duration-300"
        />
      </div>
      <Container>
        <h1 className="font-bold text-xl my-4">{data.title}</h1>
        <p>{data.description}</p>
      </Container>
    </main>
  );
}
