'use client'

import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

export default function Body() {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <>
            <section className="banner p-20 pt-50 -mt-10">
                <div className="container m-auto">
                    <div className="flex items-center gap-4">
                        <div className="col w-[60%]">
                            <h1 className="text-5xl font-bold mt-5">Earn From LP</h1>
                            <h3 className="text-2xl text-zinc-400">Liquidity Pools & Farms</h3>
                        </div>
                        <div className="col w-[30%]"></div>
                    </div>
                </div>
            </section>
            <section className="py-10 bg-black">
                <div className="container m-auto">
                    <div className="flex justify-between items-center pb-6">
                        <div className="tabs flex gap-4">
                            <div className="tab bg-color3 p-4 corners-cut cursor-pointer" onClick={() => setActiveTab(1)}>All Pools</div>
                            <div className="tab bg-color3 p-4 corners-cut cursor-pointer" onClick={() => setActiveTab(2)}>My Positions</div>
                            <div className="tab bg-color3 p-4 corners-cut cursor-pointer" onClick={() => setActiveTab(3)}>History</div>
                        </div>
                        <div className="cut-wrapper">
                            <button className="bg-color3 py-3 px-4 corners-cut cursor-pointer flex gap-2 items-center">Add Liquidity <FaPlus/></button>
                        </div>
                    </div>
                    <div className="tabs-content">
                        {activeTab == 1 &&
                            <div className="overflow-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-color1">
                                            <th className="p-3 text-start">All Pols</th>
                                            <th className="p-3 text-end">Free Tier</th>
                                            <th className="p-3 text-end">APR</th>
                                            <th className="p-3 text-end">TVL</th>
                                            <th className="p-3 text-end">Volume 24h</th>
                                            <th className="p-3 text-end">Pool Type</th>
                                            <th className="p-3 text-end"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Array.from({ length: 50 }).map((item, _i) => {
                                                return (
                                                    <tr key={_i} className="border-b border-zinc-800 text-zinc-400 hover:bg-white/5">
                                                        <td className="p-3 text-start">USDT/WBNB</td>
                                                        <td className="p-3 text-end">v3 | 0.01%</td>
                                                        <td className="p-3 text-end"><span className="text-green-600">Up to 44.43%</span></td>
                                                        <td className="p-3 text-end">${(345345634).toLocaleString()}</td>
                                                        <td className="p-3 text-end">$34565435</td>
                                                        <td className="p-3 text-end">v3</td>
                                                        <td className="p-3 text-end">...</td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        }
                        {activeTab == 2 &&
                            <div>
                                My Positions
                            </div>
                        }
                        {activeTab == 3 &&
                            <div>
                                History
                            </div>}

                    </div>
                </div>
            </section>

        </>
    )
}