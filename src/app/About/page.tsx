import { resolve } from "path";

export default async function About(){
await new Promise((resolve)=>{
  setTimeout(resolve,2000);

});
    return (
    <div className="flex-col">Welcome to Venish first About Page
    <h1 className="flex-col items-center justify-center"></h1>
    
    </div>
    
    );
  }