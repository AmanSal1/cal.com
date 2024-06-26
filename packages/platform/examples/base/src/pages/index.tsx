import { Navbar } from "@/components/Navbar";
import { Inter, Poppins } from "next/font/google";

import { GcalConnect } from "@calcom/atoms";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "800"] });

export default function Home(props: { calUsername: string; calEmail: string }) {
  return (
    <main className={`flex min-h-screen flex-col ${inter.className}`}>
      <Navbar username={props.calUsername} />
      <div
        className={`flex h-[80vh] w-full items-center justify-center gap-y-3 p-14 font-mono lg:flex ${inter.className}`}>
        <div>
          <h1 className={`${poppins.className} w-[70%] pb-3 text-8xl font-bold`}>
            The all in one Scheduling marketplace
          </h1>
          <p className={`w-[70%] font-normal ${inter.className} pb-3 text-2xl`}>
            To get started, connect your google calendar.
          </p>
          <GcalConnect className="h-[40px] bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] text-center text-base font-semibold text-transparent text-white hover:bg-orange-700" />
        </div>
        <div>
          <img
            width="700px"
            height="700px"
            alt="cover image"
            src="https://images.unsplash.com/photo-1508030592112-5b1661446db8?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </main>
  );
}
