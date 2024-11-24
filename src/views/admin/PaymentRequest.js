import { forwardRef } from "react";
import { GiH2O } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FixedSizeList as List } from "react-window";

function handleOnWheel({ deltaY }) {
  console.log("handleOnWheel", deltaY);
}

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

export default function PaymentRequest() {
  const Row = ({ index, style }) => {
    return (
      <div style={style} className="flex text-sm">
        <div className="w-[15%] p-2 whitespace-nowrap">{index + 1}</div>
        <div className="w-[25%] p-2 whitespace-nowrap">$3434</div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <span className="bg-indigo-300 text-blue-500 px-5 py-1 text-sm rounded-md ">
            Pending
          </span>
        </div>
        <div className="w-[25%] p-2 whitespace-nowrap">22 Nov 2024</div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <button
            className="bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 px-3
        py-[2px cursor-pointer text-white rounded-sm text-sm]
        "
          >
            Confirm
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
        <h2 className="text-xl font-medium pb-5 text-[#d0d2d6]">
          Withdrawal Request
        </h2>
        <div className="w-full">
          <div className="w-full overflow-x-auto">
            <div className="flex bg-[#a7a3de] uppercase text-xs font-bold min-w-[340px] rounded-md">
              <div className="w-[25%] p-2"> No </div>
              <div className="w-[25%] p-2"> Amount </div>
              <div className="w-[25%] p-2"> Status </div>
              <div className="w-[25%] p-2"> Date </div>
              <div className="w-[25%] p-2"> Action </div>
            </div>
          </div>
          {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((d, i) => (
            <div className="flex w-full">
              <div className="w-[15%] p-2">{d}</div>
              <div className="w-[25%] p-2">$325</div>
              <div className="w-[25%] p-2">Pending</div>
              <div className="w-[25%] p-2">{new Date().toDateString()}</div>
              <div className="w-[25%] p-2">
                <Link to="/admin/dashboard/sellers">View</Link>
              </div>
            </div>
          ))} */}

          {/** here we are using react provided inbuild window that has huge performanance it will load the data very fractinon of sec */}
          {
            <List
              style={{ minWidth: "340px" }}
              outerElementType={outerElementType}
              height={350}
              className="List"
              itemCount={1000000}
              itemSize={35}
            >
              {/**all React window List grid has inbuild props, those we are not defined  */}
              {Row}
            </List>
          }
        </div>
      </div>
    </div>
  );
}
