import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const detailsRef = useRef(null);
  const donationRef= useRef(null)
 

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div  className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Assalam Aleikum</h1>
            <p className="py-6 ">The Official Website for Eighth Street Mosque </p>
            <button
              onClick={() => {
                detailsRef.current.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn btn-primary"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>


      {/* content section  */}
      




      <div ref={detailsRef} data-theme="retro" className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full mt-4">

{/* First Card */}
<div className="card card-compact bg-base-100 shadow-xl flex flex-col">
  <figure className="flex-shrink-0 p-2 h-56">
    <img 
      src="https://lh3.googleusercontent.com/p/AF1QipPg3WbQp_E-DU_837xcqPlAggLQMh1i-IjF7M8=s1360-w1360-h1020"
      alt="Eighth Street Mosque"
      className="w-full h-full object-cover rounded-lg"
    />
  </figure>
  <div className="card-body flex flex-col flex-grow ">
    <h2 className="card-title uppercase text-base ">A great opportunity to build your house in Jannah!</h2>
    <p>With the ongoing contribution you can send your donation via the till Number...</p>
    <div className="card-actions justify-end mt-2">
      <button className="btn btn-primary"
        onClick={ ()=>{
          donationRef.current.scrollIntoView({behavior: 'smooth'})
        }}
      >Contribute</button>
    </div>
  </div>
</div>

{/* Second Card */}
<div className="card card-compact bg-base-100 shadow-xl flex flex-col">
  <figure className="flex-shrink-0 p-2 h-56">
    <img 
      src="https://media.bookcorner.com.pk/uploads/original/5e2b1e0d901941579884045.jpg"
      alt="Shoes"
      className="w-full h-full object-cover rounded-lg"
    />
  </figure>
  <div className="card-body flex flex-col flex-grow  ">
    <h2 className="card-title uppercase text-base ">A Hub Of Learning Your Deen!</h2>
    <p>Masjid Eighth street strives to impart knowledge about your deen to its utmost best with many lessons taking place in the mosque.
      <br />We warmly welcome and embrace our new Muslim brothers and sisters, providing tailored lessons to guide them on their path to guidance.
      <br/> Future online darasas(lessons) will be available here.
    </p>
    <div className="card-actions justify-end mt-2">
      <button className="btn btn-primary">Learn more</button>
    </div>
  </div>
</div>

{/* Third Card */}
<div className="card card-compact bg-base-100 shadow-xl flex flex-col">
  <figure className="flex-shrink-0 p-2 h-56">
    <img 
      src="https://lh3.googleusercontent.com/p/AF1QipO4mpK-Z-6jLc6IkIML0NvDa2vMb5OzeOtRFl8N=s1360-w1360-h1020"
      alt="Shoes"
      className="w-full h-full object-cover rounded-lg"
    />
  </figure>
  <div className="card-body flex flex-col flex-grow ">
    <h2 className="card-title uppercase text-base ">History of the mosque!</h2>
    <p>The Mosque was established early 1960s to 1970s</p>
    <div className="card-actions justify-end mt-2">
     <Link to="/about">
      <button className="btn btn-primary">learn more</button>
      </Link> 
    </div>
  </div>
</div>

</div>

     
       {/* contribution */}
       <div ref={donationRef} data-theme="cupcake">
       <div className="hero min-h-screen bg-base-200 mt-2">
  <div className="hero-content flex-col lg:flex-row">
    <div className="lg:w-1/2 order-1">
      <h1 className="text-5xl font-bold">Don't miss this chance to build your house Jannah!</h1>
      <p className="py-6 font-semibold">Alhamdullilah the mosque has been able to buy its neighboring plot for the expansion through donations. 
      <br />Now we are trying to raise another funds to help in expanding the mosque Insha Allah.
      <br /> You can take part in the contribution by sending via the till number or the bank account</p>
    </div>
    <div className="lg:w-1/2 order-2 lg:pl-4 flex justify-end">
      <img src="/mpesa.jpeg" alt="Mpesa" className=" rounded-lg shadow-2xl object-cover" />
    </div>
  </div>
</div>
       </div>

       {/* end of contribution */}




     
    </div>
    
  );
};

export default Home;
