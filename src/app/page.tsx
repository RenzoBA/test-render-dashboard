import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      MAIN PAGE
      <Link href="/dashboard-server" className="bg-white text-black">
        go to dashboard (server)!
      </Link>
      <Link href="/dashboard-client" className="bg-white text-black">
        go to dashboard (client)!
      </Link>
    </main>
  );
}
