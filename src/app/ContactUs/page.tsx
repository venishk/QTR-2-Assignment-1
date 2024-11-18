
export default function ContactUs(){
  return(
    <div className="blue bg-zinc-700 flex justify-center items-center h-screen">
    
    <div className="bg-purple-300 space gap-y-7 bg-rose 500 p-4 rounded-lg">
      <h1 className="text-center text-5xl black font-bold">ContactUs</h1>
        <form className="flex flex-col gap-5 text 2xl:">
        <input type="text" 
                  className="p-2 outline-none rounded-md"
                  placeholder="Your Name"/>
  
                  <input type="email"
                  className="p-2 outline-none rounded-md"
                  placeholder="Your ID"/>
  
                  <textarea
                  className="p-2 outline-none rounded-md resize-none"
                  placeholder="Your Message"></textarea>
  
                  <input type="Submit" value="Submit" 
                  className="bg-blue-500 text-white cursor-pointer transition-all duration-100
                  hover:bg-blue-600 py-2 rounded-b-md"/>
  
  
  
  
        </form>
  
  
    </div>
  
    </div>
  );
  }