import { connectionstr } from "@/app/libs/db";
import { Product } from "@/app/libs/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content) {

    await mongoose.connect(connectionstr)
    const productId = content.params.productid
    const filter = { _id: productId }
    const paylaod = await request.json()
    console.log(paylaod);
    let result = await Product.findOneAndUpdate(filter, paylaod);
    return NextResponse.json({ result, success: true })
}

export async function GET(request, content) {

    await mongoose.connect(connectionstr)
    const productId = content.params.productid
    const record = { _id: productId }
    let result = await Product.findById(record);
    return NextResponse.json({ result, success: true })
}

export async function DELETE(request,content){
    let productId = content.params.productid;
    let record = {_id:productId}
    await mongoose.connect(connectionstr)
    const result = await  Product.deleteOne(record);
    return NextResponse.json({result,success:true})

}