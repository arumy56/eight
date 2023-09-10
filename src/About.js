import React, {useState} from "react";


const About = () => {

  const [currentSlide, setCurrentSlide] = useState(0); 
  const images = ["https://lh3.googleusercontent.com/p/AF1QipMR-TD2czpcqnmuGwLSdeq6JoWk2q-PFZRb6Bg=s1360-w1360-h1020","https://lh3.googleusercontent.com/p/AF1QipOPKHeJVg6TUMCPJ7VKCFoJxHw6s1CvTbg1_4Y=s1360-w1360-h1020", "https://lh3.googleusercontent.com/p/AF1QipPg3WbQp_E-DU_837xcqPlAggLQMh1i-IjF7M8=s1360-w1360-h1020" ];
   
  const nextSlide= ()=>{
    const next = currentSlide + 1 === images.length? 0 : currentSlide +1
    setCurrentSlide(next)
}

const prevSlide = ()=> {
  const prev = currentSlide -1  < 0 ? images.length - 1 : currentSlide -1
  setCurrentSlide(prev)
}





    return ( 
      
        <div data-theme="winter">
            <article className="prose  lg:prose-xl ">
  <h1>Garlic bread with cheese: What the science tells us</h1>
  <p>
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  </p>
  <p>
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  </p>
  {/* <!-- ... --> */}
</article>

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
        
     );
}
 
export default About;