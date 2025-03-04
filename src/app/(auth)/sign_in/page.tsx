import SignIn from "@/components/SignIn";

const page = () => {
  return (
    <div className=" w-full h-full flex flex-col justify-center items-center ">
      <div className="bg-white mx-5 px-35 py-40 shadow-lg rounded-lg flex-center flex-col md:px-20 md:py-30">
        <div className="text-4xl  font-extrabold">Welcome</div>
        <div className="text-xl font-light mb-14">Sign in to get explored</div>
        <SignIn />
      </div>
    </div>
  );
};

export default page;
