import { Product } from "@/app/libs/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import connectionstr from "@/app/libs";

export async function GET() {
     await connectionstr()
    let data = await Product.find()
    console.log(data);
    return NextResponse.json({ result: data, success: true }, { status: 200 })
}
export async function POST(request) {

    await connectionstr()
    const payload= await request.json();
    let product = new Product(payload)
    const result = await product.save()
    return NextResponse.json({ result, success: true })
}