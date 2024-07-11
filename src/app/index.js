"use client"
import { Pen, } from 'lucide-react';
import React, { useEffect } from 'react'
import Link from 'next/link';
import Deletebtn from '@/components/ui/delete';
import { useState } from 'react';


export default function Data() {

    const [pro, setpro] = useState([])
    async function Getdata() {
        let data = await fetch("./api/products")

        data = await data.json();
        setpro(data.result)
    }

    useEffect(() => {

        Getdata();

    }, [])
    return (
        <>

            <div className="grid grid-cols-1 ">
                {pro.map((item) => (
                    <div key={item.i_d}>
                        <div className="">
                            <div className=" grid grid-cols-1 border-2 border-black w-[40%]  h-24 ml-[4%] mt-16 bg-yellow-200 p-8 rounded-lg shadow-lg ">
                                <div className="flex flex-col mt-[-20px] ">
                                    <h3>Product Name...{item.product}</h3>
                                    <h3>Quantity...{item.quantity}</h3>

                                    <div className="flex justify-end mt-[-30px] cursor-pointer gap-5">
                                        <Link href={""}>
                                            <Deletebtn id={item._id} />
                                        </Link>
                                        <Link href={"./EditProduct/" + item._id}>
                                            <Pen />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))
                }

            </div>
        </>
    )
}

