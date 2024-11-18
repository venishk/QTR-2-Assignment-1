import Image from "next/image";
import Man from "../../../Image/man.jpeg"


export default function Home(){
    return (
    <div>
        <h1 className="text-2xl text-center font-bold">Welcome to Venish HomePage</h1>
       
    <Image src={Man} alt="man" width={1000} height={1000}className="container w-[1800px] h-[530px] rounded"
    />
    </div>
    );
  }""