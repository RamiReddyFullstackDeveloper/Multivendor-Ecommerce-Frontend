export default function SellerDetails() {
  return (
    <div className="px-2 lg:px-7 py-2">
      <h1 className="font-semibold text-xl mb-3">Seller Details</h1>
      <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
        <div className="w-full flex flex-wrap text-[#d0d2d6]">
          <div className="w-3/12 flex justify-center items-center py-3">
            <img
              //   width={240}
              //   heigh={230}
              className="w-full h-[230px]"
              src="/images/demo.jpg"
              alt="sellerimage"
            />
          </div>
          <div className="w-4/12">
            <div className="px-0 md:px-5 py-2">
              <div className="py-2 text-lg">
                <h2>Basic Info</h2>
              </div>
              <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-[#9e97e9] rounded-md">
                <div className="flex gap-2 font-bold text-[#000000]">
                  <span>Name : </span>
                  {/* <span>{ seller?.name } </span>  */}
                  <span>Rami Reddy</span>
                </div>
                <div className="flex gap-2 font-bold text-[#000000]">
                  <span>Email : </span>
                  {/* <span>{ seller?.email }</span>  */}
                  <span>ram@gmail.com</span>
                </div>

                <div className="flex gap-2 font-bold text-[#000000]">
                  <span>Role : </span>
                  {/* <span>{ seller?.role }  </span>  */}
                  <span>Seller</span>
                </div>
                <div className="flex gap-2 font-bold text-[#000000]">
                  <span>Status : </span>
                  <span>Deactive</span>
                  {/* <span>{ seller?.status } </span>  */}
                </div>
                <div className="flex gap-2 font-bold text-[#000000]">
                  <span>Payment Status : </span>
                  <span>Pending</span>
                  {/* <span>{ seller?.payment } </span>  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
