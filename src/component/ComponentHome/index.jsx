import React, { useEffect, useState } from 'react'
import Navbar from '../ComponentNavbar';
import ProductCarousel from '../ComponentCarroucel';
import Banner from '../ComponentBanner';
import ContainerCarousel from '../ContainerCarrousel';

const Home = (props) => {

    const [firstCarrouselproducts, setFirstCarrouselproducts] = useState([])
    const [secondCarrouselProducts,setSecondCarrouselProducts] = useState([])

    useEffect(()=>{
        if(props && props.serverData){

            setFirstCarrouselproducts(props.serverData.firstCarrousel)

            setSecondCarrouselProducts(props.serverData.secondCarrousel)
            
        }
    },[])
      
  return (
      <div style={{width:"100%"}}>
        <Navbar/>
        <Banner/>
        <ContainerCarousel 
            title='Turismo en Buenos Aires' 
            backgroundColor='#fefefe'
            titleButton="Todos los Beneficios"
            >
            <ProductCarousel products={firstCarrouselproducts} />
        </ContainerCarousel>

        <ContainerCarousel 
            title='Códigos de descuento' 
            subtitle="¿Sos socio club de LA NACION? Descargá tu código y disfrutá beneficios exclusivos en tus marcas favoritas"
            titleButton="Todos los códigos"
            >
            <ProductCarousel products={secondCarrouselProducts} type="discounts"/>
        </ContainerCarousel>

    </div>
  )
}

export default Home