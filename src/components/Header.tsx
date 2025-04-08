'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { ConnectButton } from "@mysten/dapp-kit";
export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <section className="header py-5 bg-color1 fixed top-0 w-full">
                <div className="container-fluid m-auto px-20">
                    <div className="flex items-center justify-between">
                        <div className="col">
                            <Image src="/media/logo.png" alt="logo" height={500} width={500} className="h-[50px] w-[110px]" />
                        </div>
                        <div className="col">
                            <ul className="flex items-center gap-10 text-lg font-bold">
                                <Link href="/pools"><li>Pools</li></Link>
                                <Link href="/zap-v2"><li>zap-v2</li></Link>
                            </ul>
                        </div>
                        <div className="col flex items-center gap-6">
                            <div className="cut-wrapper">
                                <ConnectButton />
                                {/* <button className="bg-color3 py-3 px-4 corners-cut cursor-pointer" onClick={() => setIsOpen(!isOpen)}>Connect Wallet</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Wallet Modal */}
            {
                isOpen &&
                <div className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black/90 z-50">
                    <div className="modal w-[40%] h-[40vh] bg-color3 corners-cut relative">
                        <div className="title p-6 ">
                            <h2 className="text-4xl text-center">Connect Wallet</h2>
                        </div>
                        <div className="content flex h-full">
                            <div className="w-1/2 wallet-list border-r border-zinc-700 bg-color1 p-6 ">
                                <ul className="flex flex-col gap-4">
                                    <li className="bg-zinc-400/10 rounded px-2 py-3 flex gap-4 items-center cursor-pointer hover:bg-zinc-400/20">
                                        <Image src="/media/logo.png" alt="wallet-logo" height={400} width={400} className="h-7 w-7 rounded-full bg-white" />
                                        <span>Sui Wallet</span>
                                    </li>
                                    <li className="bg-zinc-400/10 rounded px-2 py-3 flex gap-4 items-center cursor-pointer hover:bg-zinc-400/20">
                                        <Image src="/media/logo.png" alt="wallet-logo" height={400} width={400} className="h-7 w-7 rounded-full bg-white" />
                                        <span>Sui Wallet</span>
                                    </li>
                                    <li className="bg-zinc-400/10 rounded px-2 py-3 flex gap-4 items-center cursor-pointer hover:bg-zinc-400/20">
                                        <Image src="/media/logo.png" alt="wallet-logo" height={400} width={400} className="h-7 w-7 rounded-full bg-white" />
                                        <span>Sui Wallet</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-1/2 wallet-list bg-color2 p-5">
                                <h4 className="text-base text-zinc-300">What is Wallet?</h4>
                                <h4 className="text-sm pt-4 text-zinc-300">Easy Login</h4>
                                <p className="text-xs text-zinc-400 pt-2">No need to create new accounts and passwords for every website. Just connect your wallet and get going.</p>
                                <h4 className="text-sm pt-4 text-zinc-300">Store your Digital Assets</h4>
                                <p className="text-xs text-zinc-400 pt-2">Send, receive, store, and display your digital assets like NFTs & coins.</p>
                            </div>
                        </div>
                        <button className="absolute top-4 right-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}><IoCloseOutline className="text-4xl" /></button>
                    </div>
                </div>
            }
        </>
    )
}