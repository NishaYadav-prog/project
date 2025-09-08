import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import QRCode from "react-qr-code";

const Payment = () => {
  const location = useLocation();
  const { fullname, email, phone, altphone } = location.state || {};
  const [showQR, setShowQR] = useState(false);

  const handleConfirm = () => {
    setShowQR(true);
  };

  return (
    <div className="w-full px-4 mt-[13ch] mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Payment Details */}
        <div className="space-y-7 md:col-span-1">
          <h2 className="text-xl font-semibold text-gray-800">
            Payment Details
          </h2>
          <div className="space-y-5">
            <p className="text-base text-gray-700">
              <span className="font-medium">Full Name:</span> {fullname}
            </p>
            <p className="text-base text-gray-700">
              <span className="font-medium">Email:</span> {email}
            </p>
            <p className="text-base text-gray-700">
              <span className="font-medium">Phone:</span> {phone}
            </p>
            <p className="text-base text-gray-700">
              <span className="font-medium">Alt Phone:</span> {altphone}
            </p>
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            className="w-full px-8 h-12 bg-violet-600 text-neutral-50 text-base font-normal rounded-md flex items-center justify-center gap-x-2"
          >
            Confirm Payment <FaArrowRightLong />
          </button>
        </div>

        {/* Right Side - QR Code */}
        <div className="space-y-8 md:col-span-1 flex items-center justify-center">
          {showQR ? (
            <div className="bg-neutral-200/50 dark:bg-neutral-900/70 rounded-md py-5 px-7 flex flex-col items-center">
              <h2 className="text-xl text-center text-neutral-800 dark:text-neutral-100 font-medium border-b-2 border-neutral-200 dark:border-neutral-800/40 pb-3 mb-4">
                Scan QR to Pay
              </h2>
              <QRCode
                value={`upi://pay?pa=example@upi&pn=${fullname}&am=5000`}
                size={200}
              />
            </div>
          ) : (
            <p className="text-gray-600">Click confirm to generate QR Code</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;

// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { FaArrowRightLong } from "react-icons/fa6";
// import QRCode from "react-qr-code";

// const Payment = () => {
//   const location = useLocation();
//   const { fullname, email, phone, altphone } = location.state || {};
//   const [showQR, setShowQR] = useState(false);

//   const handleConfirm = async () => {
//     // 🔹 Future: yaha backend call karenge Razorpay / DB store ke liye
//     // Example:
//     // await fetch("http://localhost:5000/api/payment", {
//     //   method: "POST",
//     //   headers: { "Content-Type": "application/json" },
//     //   body: JSON.stringify({ fullname, email, phone, altphone }),
//     // });

//     setShowQR(true);
//   };

//   return (
//     <div className="w-full px-4 mt-[13ch] mb-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Left Side - Payment Details */}
//         <div className="bg-white dark:bg-neutral-900 shadow-md rounded-lg p-6 space-y-6">
//           <h2 className="text-2xl font-semibold text-violet-600 dark:text-violet-400 border-b pb-2">
//             Payment Details
//           </h2>

//           <div className="space-y-4 text-gray-700 dark:text-gray-300">
//             <p>
//               <span className="font-medium">Full Name:</span> {fullname}
//             </p>
//             <p>
//               <span className="font-medium">Email:</span> {email}
//             </p>
//             <p>
//               <span className="font-medium">Phone:</span> {phone}
//             </p>
//             <p>
//               <span className="font-medium">Alt Phone:</span> {altphone}
//             </p>
//           </div>

//           {/* Confirm Button */}
//           <button
//             onClick={handleConfirm}
//             className="w-full px-8 h-12 bg-violet-600 hover:bg-violet-700
//               text-neutral-50 font-medium rounded-lg flex items-center justify-center gap-x-2
//               transition-all duration-300"
//           >
//             Confirm Payment <FaArrowRightLong />
//           </button>
//         </div>

//         {/* Right Side - QR Code */}
//         <div className="flex items-center justify-center">
//           {showQR ? (
//             <div className="bg-neutral-200/50 dark:bg-neutral-800 rounded-xl p-6 shadow-md flex flex-col items-center">
//               <h2 className="text-xl font-semibold text-violet-600 dark:text-violet-400 mb-4">
//                 Scan QR to Pay
//               </h2>
//               <QRCode
//                 value={`upi://pay?pa=example@upi&pn=${fullname}&am=5000`}
//                 size={200}
//               />
//               <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
//                 Amount: ₹5000
//               </p>
//             </div>
//           ) : (
//             <p className="text-gray-600 dark:text-gray-400">
//               Click <span className="font-semibold">Confirm</span> to generate
//               QR Code
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;
