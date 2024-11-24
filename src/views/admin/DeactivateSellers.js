import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

export default function DeactivateSellers() {
  const [perPage, setPerPage] = useState(5);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);

  return (
    <div className="px-2 lg:px-7 py-2">
      <h1 className="font-semibold text-xl mb-3">Deactivate Sellers</h1>

      <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
        {/** div starting for pagination dropdown and search product */}
        <div className="flex justify-between items-center">
          <select className="ml-2 px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]">
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
            className="mr-2 px-2 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
          />
        </div>
        {/** div end for pagination dropdown and search product */}

        {/** div starting for grid */}
        <div className="relative overflow-x-auto bg-[#6a5fdf]">
          <table className="w-full text-sm text-left text-[#d0d2d6]">
            <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4">
                  No
                </th>
                <th scope="col" className="py-3 px-4">
                  Image
                </th>
                <th scope="col" className="py-3 px-4">
                  Name
                </th>
                <th scope="col" className="py-3 px-4">
                  Email
                </th>
                <th scope="col" className="py-3 px-4">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {categorys.map((d, i) => ( */}
              {[1, 2, 3, 4, 5].map((d, i) => (
                <tr key={i}>
                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    {i + 1}
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    {/* <img className="w-[45px] h-[45px]" src={d.image} alt="" /> */}
                    <img
                      className="w-[45px] h-[45px]"
                      src={`/images/category/${d}.jpg`}
                      alt=""
                    />
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    {" "}
                    Rami Reddy
                    {/* {d.name} */}
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    {" "}
                    ram@gmail.com
                    {/* {d.name} */}
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    {" "}
                    Pending
                    {/* {d.name} */}
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    {" "}
                    Deactive
                    {/* {d.name} */}
                  </td>
                  <td
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    <div className="flex justify-start items-center gap-4">
                      <Link
                        className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50"
                        //   onClick={() => handleEdit(d)}
                      >
                        View
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/** div ended for grid */}
        <div className="w-full flex justify-end items-center mt-5  pr-2 pb-2 bottom-4 right-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            parPage={perPage}
            showItem={3}
          />
        </div>
      </div>
    </div>
  );
}
