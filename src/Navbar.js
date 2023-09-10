import {Link} from "react-router-dom"



const Navbar = () => {
  return ( 
    <div>
  <div className="navbar bg-base-300 square-box"> 
    <div className="flex justify-start flex-1 px-2">
      <div className="flex items-stretch">
        <div className="dropdown dropdown-start">
          <label tabIndex={0} ></label>
          <button className="btn btn-square btn-ghost" data-theme="aqua">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
           </button>

          <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
            <li> <Link to="/">Home</Link> </li> 
            <li> <Link to="/about">About</Link> </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="flex-1 px-2 lg:flex-none md:justify-end ">
      <a className="text-lg font-bold ">Masjid Eight</a>
    </div> 
  </div>
</div>

   );
}
 
export default Navbar;