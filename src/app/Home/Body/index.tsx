'use client'
import { Jost } from 'next/font/google'
import Link from 'next/link'
const font2 = Jost({ subsets: ['latin'], weight: "400" })
export default function Body() {
    return (
        <>
            <section className="banner h-lvh flex items-center -mt-5">
                <div className="container m-auto">
                    <div className="flex items-center gap-4">
                        <div className="col w-[60%]">
                            <h4 className="text-2xl uppercase">Swap Smarter with zapty</h4>
                            <h1 className="text-7xl font-bold mt-5">One Zap. Multiple Tokens. Maximum Efficiency.</h1>
                            <p className={`${font2.className} mt-5 text-xl text-zinc-400`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur temporibus eaque dolor at alias eius laudantium aliquid non necessitatibus enim!</p>
                            <div className="flex gap-5 mt-6 items-center">
                                <div className="cut-wrapper">
                                    <Link href="/pools"><button className="bg-color3 py-3 px-6 corners-cut cursor-pointer">Pools</button></Link>
                                </div>
                                <div className="cut-wrapper">
                                    <Link href="/"><button className="bg-color3 py-3 px-6 corners-cut cursor-pointer">Zap</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col w-[30%]"></div>
                    </div>
                </div>
            </section>


            {/* <section className="py-20">
                <div className="container m-auto">
                    <div className="flex items-center justify-between">
                        Seciton
                    </div>
                </div>
            </section> */}
        </>
    )
}