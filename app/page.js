import { currentUser } from "@clerk/nextjs/server";






//FUNCION PRINCIPAL
const page = async () => {

  const user = await currentUser();
  

  return (
    <div>
      
      <div>Hello {user?.firstName}</div>
      <div className="h-50 w-100 bg-[#a9350b] border-emerald-500 border-8"></div>
      <div className="h-50 w-100 bg-amber-500 border-emerald-500 border-8"></div>
      <div className="h-50 w-100 bg-amber-500 border-emerald-500 border-8"></div>
      <div className="h-50 w-100 bg-amber-500 border-emerald-500 border-8"></div>
      <div className="h-50 w-100 bg-amber-500 border-emerald-500 border-8"></div>
      <div className="h-50 w-100 bg-amber-500 border-emerald-500 border-8"></div>
      <div className="h-50 w-100 bg-amber-500 border-emerald-500 border-8"></div>
      <div className="h-50 w-100 bg-amber-500 border-emerald-500 border-8"></div>
    </div>
  );
};

export default page;
//FUNCION PRINCIPAL