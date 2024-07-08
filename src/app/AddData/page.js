"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";



export default function Create() {

    const [product, setproduct] = useState("");
    const [quantity, setquantity] = useState("");
    const router = useRouter();

    async function Addproduct() {
        console.log(product,quantity)

try {
    if(!product || !quantity){
        alert("PLease Fill Following Credetial")
        return ;
    }
    else{
        let createdata = await fetch(`/api/products`, {
            method: "POST",
            body:JSON.stringify({product,quantity})
        });
        createdata = await createdata.json();
        router.push("./")
        router.refresh();

    }
} catch (error) {
    console.log(error)
}

    }
    
    return (
        <div>
            <div className="ml-[45%] mt-12">
                <h1 className="text-green-500 font-bold text-3xl"><span className="text-5xl"> C</span> <span className="text-3xl">r</span>eate</h1>
            </div>
            <div className=" w-[30%] ml-[35%] mt-20 flex flex-col gap-y-16 ">

               
                <Input placeholder="Product Name" className="border-2 border-gray-400 rounded-lg"
                    onChange={(e) =>setproduct(e.target.value) }
                    value={product}
                />
                <Input placeholder="Quantity" className="border-2 border-gray-400 rounded-lg"
                    onChange={(e) =>setquantity(e.target.value)}
                    value={quantity}
                />
            </div>
            <Button onClick={Addproduct} className="ml-[47%] mt-14" >Add Product</Button>
        </div>
    )
}