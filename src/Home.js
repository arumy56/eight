import React, { useRef, useState } from "react";

const Home = () => {
  const detailsRef = useRef(null);
  const donationRef= useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0); 
  const images = ["https://legacy.travelnoire.com/wp-content/uploads/2021/04/IMG_20180805_214425_368.jpg", "https://zamzam.com/blog/wp-content/uploads/2021/05/most-beautiful-mosques.jpg", "https://lh3.googleusercontent.com/p/AF1QipMR-TD2czpcqnmuGwLSdeq6JoWk2q-PFZRb6Bg=s1360-w1360-h1020"];
   
  const nextSlide= ()=>{
    const next = currentSlide + 1 === images.length? 0 : currentSlide +1
    setCurrentSlide(next)
}

const prevSlide = ()=> {
  const prev = currentSlide -1  < 0 ? images.length - 1 : currentSlide -1
  setCurrentSlide(prev)
}

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
      >Click Here</button>
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
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

</div>

     
       {/* contribution */}
       <div ref={donationRef} data-theme="cupcake">
       <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div> 
       </div>

       {/* end of contribution */}




      <div  id="details-section" data-theme="winter" className="mt-4">
        <h2 className="text-3xl font-semibold mb-4 text-center pt-2">Eighth Street Mosque</h2>
        <p className="text-lg mb-4 font-semibold text-center">Eighth Street Mosque was established in the 1960s.</p>

        {/* Carousel */}
        <div className="relative w-full h-[500px] overflow-hidden rounded-box carousel">
          {images.map((image, index) => (
            <div className={`carousel-item transition-opacity duration-300 ${currentSlide === index ? 'opacity-100' : 'opacity-0'} absolute w-full h-full flex justify-center items-center`}>
            <img src={image} alt="Image" className="object-contain h-full" />
            </div>
          ))}
          <button className="absolute top-1/2 left-2 z-10 bg-white p-2 rounded" onClick={prevSlide}>Prev</button>
          <button className="absolute top-1/2 right-2 z-10 bg-white p-2 rounded" onClick={nextSlide}>Next</button>
        </div>
      </div>
    </div>
    
  );
};

export default Home;
