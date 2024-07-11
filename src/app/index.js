
import { Delete, DeleteIcon, Pen, PlusSquare } from 'lucide-react';
import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Deletebtn from '@/components/ui/delete';



// const url = "/api/products"


async function getdata() {
    let data = await fetch(`/api/`,{
        cache:'no-store'
    })
    data = await data.json();

     return data.result
}

export default async function Data() {

   let pro = await getdata()
    return (
        <>
            <div className="">
                <div className="flex justify-end mr-10 mt-[-60px] ">
                    <Link href={"./AddData"}>
                        <Button>Add Product</Button>
                    </Link>
                </div>
            </div>
            
        <div className="grid grid-cols-1 ">
                {pro.map((item) =>(
                    <div key={item.i_d}>    
                        <div className="">
                            <div className=" grid grid-cols-1 border-2 border-black w-[40%]  h-24 ml-[4%] mt-16 bg-yellow-200 p-8 rounded-lg shadow-lg ">
                                <div className="flex flex-col mt-[-20px] ">
                                    <h3>Product Name...{item.product}</h3>
                                    <h3>Quantity...{item.quantity}</h3>

                                    <div className="flex justify-end mt-[-30px] cursor-pointer gap-5">
                                        <Link href={""}>
                                            <Deletebtn id = {item._id}/> 
                                           
                                        </Link>
                                        <Link href={"./EditProduct/"+item._id}>
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

