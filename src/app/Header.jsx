export default function Header() {

    return ( 
    
            <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg  shadow-lg w-full  h-24 rounded-b-xl ">
                <div className="flex justify-center ">
                    <h1 className="mt-9 text-2xl font-bold">Todo List</h1>

                    
                </div>

                  <div className="">
                <div className="flex justify-end mr-10 mt-[-60px] ">
                    <Link href={"./AddData"}>
                        <Button>Add Product</Button>
                    </Link>
                </div>
            </div>

            </div>
)
}
       

        
