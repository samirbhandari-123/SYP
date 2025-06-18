import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-[#57b6c6] text-white px-8 py-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold tracking-wide">KidKinder</div>
        <ul className="hidden md:flex gap-6 text-sm font-semibold tracking-wide">
            <li className="hover:text-yellow-300 cursor-pointer">Home</li>
            <li className="hover:text-yellow-300 cursor-pointer">About</li>
            <li className="hover:text-yellow-300 cursor-pointer">Classes</li>
            <li className="hover:text-yellow-300 cursor-pointer">Teacher</li>
            <li className="hover:text-yellow-300 cursor-pointer">Gallery</li>
            <li className="hover:text-yellow-300 cursor-pointer">Pages</li>
            <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
        </ul>
        <div className="ml-4">
        <div></div>
        <ul className="Button">
            <button className='ml-4'>Join Class</button>
            
        </ul>
    </div>
    </div>

  )
}

export default Navbar

// import React from 'react';

// const Navbar = () => {
//   return (
//     <div className="bg-[#57b6c6] text-white px-8 py-4 flex justify-between items-center shadow-md">
//       <div className="text-2xl font-bold tracking-wide">KidKinder</div>
//       <ul className="hidden md:flex gap-6 text-sm font-semibold tracking-wide">
//         <li className="hover:text-yellow-300 cursor-pointer">Home</li>
//         <li className="hover:text-yellow-300 cursor-pointer">About</li>
//         <li className="hover:text-yellow-300 cursor-pointer">Classes</li>
//         <li className="hover:text-yellow-300 cursor-pointer">Teachers</li>
//         <li className="hover:text-yellow-300 cursor-pointer">Gallery</li>
//         <li className="hover:text-yellow-300 cursor-pointer">Pages</li>
//         <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
//       </ul>

//       <div className="ml-4">
//         <button className="bg-white text-[#57b6c6] px-5 py-2 rounded-full font-bold text-sm hover:bg-yellow-300 transition">
//           Join Class
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
