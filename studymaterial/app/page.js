import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
     <h1 className="text-8xl">hello ruban </h1>
     <UserButton/>
    </>
  );
}
