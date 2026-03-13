import React, { useRef, useState, useEffect } from "react";
import heroImg from "../assets/testeHero.png";
import "../components/CategorySection"
import "../components/ProductGrid"
import CategorySection from "../components/CategorySection";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import { useProdutos } from "../hooks/useProdutos";

function Home(){
const { produtos, buscarProdutos } = useProdutos();
const textRef = useRef(null);


  const handleMouseMove = (e) => {
    const { offsetWidth, offsetHeight } = textRef.current;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    const rotateY = ((x / offsetWidth) - 0.5) * 25;
    const rotateX = ((y / offsetHeight) - 0.5) * -25;

    textRef.current.style.transform = `
      perspective(600px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const resetTransform = () => {
    textRef.current.style.transform =
      "perspective(600px) rotateX(0deg) rotateY(0deg)";
  };


useEffect(()=>{
buscarProdutos()
},[])

    return(
   <div id="homeDiv">
      <div className="heroBanner"  style={{ backgroundImage: `url(${heroImg})` }}>
    <div className="divStyleBanner">
        <h2   
        ref={textRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTransform}>
            Seu carro merece o melhor! <span>Peças automotivas</span> de alta qualidade para diversos tipos de carros.
        </h2>
    </div>
    <div className="divStyleBanner">
        <button>
             
             &gt;&gt;
            Botãokkk
           
        </button>
    </div>  
     </div>

<CategorySection onSearch={buscarProdutos}/>
<ProductGrid produtos={produtos}/>
<Footer />
   </div>
    )
}

export default Home;