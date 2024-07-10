"use client"

import { DeleteIcon } from "lucide-react";
import { useRouter } from "next/navigation";


const url = "./api/products"

export default function Deletebtn(props) {
    const router = useRouter()
    async function deleterecord() {
        let response = await fetch(`${url}/${props.id}``,{
            cache: "no-cache",
            method: "delete",
        });
        response = await response.json();
        if (response.result) {
            alert("Product Deleted")
            router.refresh();
        }
    }
    return <DeleteIcon onClick={deleterecord}/>
    
}

