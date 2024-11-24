import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FaEdit, FaImage, FaTrash } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

export default function Category() {
  const [perPage, setPerPage] = useState(5);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);
  return (
    <div className="px-2 lg:px-7 py-2">
      {/** open div for the small screens and this div will enable only when we mimize the scren from laptop or when we logged thr mobile*/}
      {/* <div className="justify-between items-center mt-4"> */}
      <div className="flex lg:hidden justify-between items-center mb-5 p-4 bg-[#6a5fdf] rounded-md">
        <h1 className="text-[#d0d2d6] font-semibold text-lg">Category</h1>
        <button
          onClick={() => setShow(true)}
          className="bg-red-500 shadow-lg hover:shadow-red-500/40 px-4 py-2 cursor-pointer text-white rounded-sm text-sm"
        >
          Add
        </button>
      </div>
      {/**closed for the small screens */}
      <div className="flex flex-wrap mt-3 ">
        <div className="w-full lg:w-7/12 bg-[#6a5fdf] z-[9999] rounded-md">
          <div className="flex justify-between items-start py-2">
            <select
              onChange={(e) => setPerPage(parseInt(e.target.value))}
              className="ml-2 px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
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
              className="mr-2 px-2 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
            />
          </div>

          {/**closed div for the dropdown and search value */}
          <div className="relative overflow-x-auto">
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
                      T-Shirt
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
                          {" "}
                          <FaEdit />{" "}
                        </Link>
                        <Link
                          className="p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50"
                          //   onClick={() => handleDelete(d._id)}
                        >
                          {" "}
                          <FaTrash />{" "}
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/** closed for the table data */}
          <div className="border-b border-slate-700 mt-5 "></div>
          <div className="border-b border-slate-700">
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

          {/** closed for the pagination div */}
        </div>

        {/** Starting div for the Add Category */}

        <div
          className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${
            show ? "right-0" : "-right-[340px]"
          } z-[9999] top-0 transition-all duration-500 `}
        >
          <div className="w-full pl-5">
            <div className="bg-[#6a5fdf] px-3 py-2 lg:rounded-md text-[#d0d2d6]">
              <div className="flex justify-between items-center mb-4">
                <h1 className="w-full text-center font-semibold text-xl text-[#d0d2d6] mb-4">
                  Add Category
                </h1>
                <div onClick={() => setShow(false)} className="block lg:hidden">
                  <IoMdCloseCircle />
                </div>
              </div>

              <form>
                <div className="flex flex-col  gap-1 mb-3">
                  <label htmlFor="name">Category Name :</label>
                  <input
                    type="text"
                    id="name"
                    name="category-name"
                    placeholder="Category Name"
                    className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#000000] border border-slate-700 rounded-md text-[#d0d2d6]"
                  />
                </div>
                <div className="">
                  <label
                    className="justify-center items-center flex flex-col  h-[238px] cursor-pointer border border-dashed hover:border-red-500 
                    border-[#d0d2d6]"
                    htmlFor="image"
                  >
                    <span>
                      <FaImage />
                    </span>
                    <span>Select Image</span>
                  </label>
                  <input
                    className="hidden"
                    type="file"
                    name="image"
                    id="image"
                  />
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    name="button"
                    className="w-full px-7 py-2 bg-red-500 text-[#d0d2d6] hover:shadow-red-300/50
                  hover:shadow-lg rounded-md  text-white font-bold"
                  >
                    Add Category
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/** closed div tag for the Add Category and image upload complete right section */}
      </div>
    </div>
  );
}
