import { FaList } from "react-icons/fa";

export default function Header({ showSidebar, setShowSidebar }) {
  return (
    <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-7">
      <div className="ml-0 lg:ml-[260px] rounded-md h-[65px] flex justify-between items-center bg-[#b1addf] px-5 transition-all">
        <div
          onClick={() => setShowSidebar(!showSidebar)} //when we click the icon then it wil show the side bar [when screen is small case only]
          className="w-[35px] flex lg:hidden h-[35px] rounded-sm bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 justify-center items-center cursor-pointer "
        >
          <span>
            <FaList />
          </span>
        </div>

        <div className="hidden md:block">
          <input
            className="px-3 py-2 outline-none border bg-transparent border-slate-700 rounded-md text-[#423d72] focus:border-indigo-300 overflow-hidden"
            type="text"
            name="search"
            placeholder="search"
          />
        </div>

        {/* allways make habit to use of flext */}
        {/* here the user name and admin log came very bcz of above second div tag used justify-between */}
        <div className="flex justify-center items-center gap-3 ">
          <div className="flex flex-col">
            <span className="text-md font-bold"> Rami Reddy</span>
            <span className="text-md font-normal">Vakamalla</span>
          </div>
          <img
            className="w-[45px] h-[45px] rounded-full overflow-hidden"
            src="/images/admin.jpg"
            alt="admin logo"
          />
        </div>
      </div>
    </div>
  );
}
