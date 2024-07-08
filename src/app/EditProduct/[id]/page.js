"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function Update(props) {
    const [product,setproduct] = useState("");
    const [quantity,setquantity] = useState("");
    const router = useRouter();
    useEffect(() => {
        getproductDetail();
    }, []);
    async function getproductDetail() {
        let productId = props.params.id
        console.log(productId)
        let productdata = await fetch(`/api/products/${productId}`)
        productdata = await productdata.json();
        let result = productdata.result;
       
        setproduct(result.product)
        setquantity(result.quantity)
    }

    async function updateProduct(){
        let productId = props.params.id
        let data =await fetch(`/api/products/${productId}`,{
            cache:"no-cache",
            method:"PUT",
            body:JSON.stringify({product,quantity})
        });
        data =await data.json();
        if(data.result){
            alert("Product Updated")
        }
        console.log(data.result)
        router.push("../")
        router.refresh();
    }
    return (
        <div>
            <div className="ml-[45%] mt-12">
                <h1 className="text-blue-500 font-bold text-3xl"><span className="text-5xl"> U</span>pdate</h1>
            </div>
            <div className=" w-[30%] ml-[35%] mt-20 flex flex-col gap-y-16 ">
                <Input placeholder="Update product" className="border-2 border-gray-400 rounded-lg"
               onChange={(e) =>setproduct(e.target.value) }
               value={product}
                />
                <Input placeholder="Update Quantity" className="border-2 border-gray-400 rounded-lg"
                  
                  onChange={(e) =>setquantity(e.target.value) }
                  value={quantity}
                />
            </div>
            <Button  onClick={updateProduct} className="ml-[47%] mt-14">Update User</Button>
        </div>
    )
}
