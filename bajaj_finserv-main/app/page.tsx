import BFHLForm from "@/components/BFHLForm";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl px-4 font-bold mb-4 text-white text-center">Bajaj Finserv Health Challenge</h1>
      <h1 className="text-2xl px-4 font-bold mb-4 text-white text-center">(Abhishek Kashyap RA2111003011670)</h1>
      <div className="w-full flex flex-col space-y-4 justify-center items-center py-3 pb-8">
        <Link href={"https://github.com/abhishekkashyap02/Bajaj-QA1"} className="w-fit px-4 rounded-lg py-2 flex justify-center items-center bg-purple-500 text-white">
          Github Repo
        </Link>
        <Link href={"https://github.com/abhishekkashyap02"} className="w-fit px-4 rounded-lg py-2 flex justify-center items-center bg-purple-500 text-white">
          Github
        </Link>
        <Link href={"https://abhishekkashyap0212.vercel.app/"} className="w-fit px-4 rounded-lg py-2 flex justify-center items-center bg-purple-500 text-white">
          Porfolio
        </Link>
      </div>
      <BFHLForm />
    </div>
  )
}
