import React from 'react'
import Card from '../Card';
import Single from '../../assets/single.png'
import Double from '../../assets/double.png'
import Triple from '../../assets/triple.png'

const CardsSection = () => {

 

  return (
    <div className='w-full bg-white py-[10rem] p-4 h-full sm:h-auto'>
      <div className='max-w-[1024px] mx-auto flex flex-col sm:flex-row gap-[4rem]'>
        <Card src={Double} alt='Double user' price='270' />
        <Card src={Single} alt='Single user' active={true} price='150'/>
        <Card src={Triple} alt='Triple user' price='380'/>
      </div>
    
    </div>
  )
}

export default CardsSection;