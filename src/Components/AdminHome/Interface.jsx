import Table from "../../Shared/Table";

const Interface = () => {
  return (
    <div className=" container mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <img
            src="https://i.ibb.co/6gR6rQ6/Shajim.png"
            alt="Admin"
            className="rounded-full ring-4 ring-green-600 "
          />
        </div>
        <div className="flex flex-col justify-start ">
          <h3 className="text-3xl flex justify-start">
            Welcome to the Admin Dashboard!
          </h3>
          <p>
            Manage your content, monitor user activity, and oversee all
            operations from one place.
          </p>
          <div className="flex flex-col mx-2  items-start">
            <h4 className="font-semibold text-base ">Email</h4>
            <p className="text-xs text-zinc-400 font-bold">
              {/* 0{user?.number} - {user?.status} */} 0000000000000 - Admin
            </p>
          </div>
        </div>
      </div>
      <div className="my-10">
        <Table />
      </div>
    </div>
  );
};

export default Interface;
