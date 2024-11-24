import React, { useState } from "react";
import { LuArrowDownSquare } from "react-icons/lu";
import { Link } from "react-router-dom";
import Pagination from "../../views/Pagination";

export default function Orders() {
  const [perPage, setPerPage] = useState(5);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);
  return (
    <div className="px-2  md:px-7 py-7 lg:px-7 py-7">
      <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
        <div className="flex justify-between items-center bg-[#6a5fdf]">
          <select
            onChange={(e) => setPerPage(parseInt(e.target.value))}
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
          >
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
            <option>25</option>
          </select>
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            type="text"
            placeholder="search"
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
          />
        </div>

        {/** this is for grid table */}
        {/* <div className="relative mt-5 overflow-x-auto">
          <div className="w-full text-sm text-left [#d0d2d6]"> */}
        <div className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
          <div className="flex justify-between items-center">
            <div className="py-3 w-[25%] font-bold">Order id</div>
            <div className="py-3 w-[13%] font-bold">Price</div>
            <div className="py-3 w-[18%] font-bold">Payment Status</div>
            <div className="py-3 w-[18%] font-bold">Order Status</div>
            <div className="py-3 w-[18%] font-bold">Action </div>
            <div className="py-3 w-[8%] font-bold">
              {" "}
              <LuArrowDownSquare />
            </div>
          </div>
        </div>
        {/** this div ends for headers */}

        <div className="text-sm text-[#d0d2d6]  border-b border-slate-700">
          <div className="flex  justify-between items-center">
            <div className="py-3 w-[25%] font-medium whitespace-nowrap">
              32145689
            </div>
            <div className="py-3 w-[13%] font-medium">$1234</div>
            <div className="py-3 w-[18%] font-medium">Pending</div>
            <div className="py-3 w-[18%] font-medium">Pending</div>
            <div className="py-3 w-[18%] font-medium">
              <Link to="">View</Link>{" "}
            </div>
            <div
              onClick={(e) => setShow(!show)}
              className="py-3 w-[8%] font-medium"
            >
              <LuArrowDownSquare />
            </div>
          </div>

          {/** this div begins for sub orders */}
          <div
            className={
              show ? "block border-b border-slate-700 bg-[#8288ed]" : "hidden"
            }
          >
            <div className="pl-2 flex justify-start items-start border-b border-slate-700">
              <div className=" py-3 w-[25%] font-medium whitespace-nowrap">
                32145689
              </div>
              <div className="py-3 w-[13%] font-medium">$1234</div>
              <div className="py-3 w-[18%] font-medium">Pending</div>
              <div className="py-3 w-[18%] font-medium">Pending</div>
            </div>
          </div>
          {/**this div closing for sub orders */}
          {/** this div begins for sub orders */}
          <div
            className={
              show ? "block border-b border-slate-700 bg-[#8288ed]" : "hidden"
            }
          >
            <div className="pl-2 flex justify-start items-start border-b border-slate-700">
              <div className=" py-3 w-[25%] font-medium whitespace-nowrap">
                32145689
              </div>
              <div className="py-3 w-[13%] font-medium">$1234</div>
              <div className="py-3 w-[18%] font-medium">Pending</div>
              <div className="py-3 w-[18%] font-medium">Pending</div>
            </div>
          </div>
          {/**this div closing for sub orders */}
        </div>
        {/* this div closing for grid data* */}
        <div className="w-full flex justify-end mt-4 bottom-4 right-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            parPage={perPage}
            showItem={4}
          />
        </div>
      </div>
    </div>
  );
}
