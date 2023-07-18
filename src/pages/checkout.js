// import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
// import { useSession } from "next-auth/react";
// import { selectItems, selesctTotal } from "../slices/basketSlice";

// const Checkout = () => {
//   const [name, setName] = useState("");
//   const { data: session } = useSession();
//   const total = useSelector(selesctTotal);
//   useEffect(() => {
//     if (session) {
//       setName(session.user.name);
//     }
//   });

//   return (
//     <div>
//       `<Header />`
//       <main className="max-w-screen-2xl mx-auto">
//         <div>
//           <div>
//             <label htmlFor=""></label>
//             <input type="text" />
//           </div>
//           <div>
//             <label htmlFor=""></label>
//             <input type="text" />
//           </div>
//           <div>
//             <label htmlFor=""></label>
//             <input type="text" />
//           </div>
//           <div>
//             <label htmlFor=""></label>
//             <input type="text" />
//           </div>
//           <div>
//             <label htmlFor=""></label>
//             <input type="text" />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Checkout;
