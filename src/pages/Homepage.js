import React from 'react'

const Homepage = () => {
  return (
   <section className="h-[calc(100vh-78px)] p-6 bg-[url('/src/images/forest.jpg')] bg-no-repeat bg-cover">
      <div className='bg-[#2d4b2d]/75 p-10 rounded-[40px] text-white mt-[100px] font-medium max-w-[950px] m-auto'>

        <p className='mb-2'>
          <span className='block mb-1'>Zdravo,</span>  
          Dragana Popovic ovde, bavim se frontend-om 2.5 godine, s tim da nemam mnogo iskustva sa Reactom. Imala sam priliku u prethodnoj firmi da se upoznam sa ovom bibliotekom i jako mi se dopala. Nazalost, kratko je trajalo (trenutna firma takodje ima samo wordpress projekte), pa se moje ucenje usmerilo na wordpress i PHP. Naravno, rad sa JS-om je bio konstanto prisutan. Moj cilj jeste da se definitivno vratim na React kao junior React developer i usavrsavam u tom smeru.
        </p>
        <p className='mb-2'>
          Mozda bih uspela  da uradim i 3. stepen tezine (ili bar vecinu uz pomoc guglanja), ali mislim da je ovo ipak najrealnije stanje mog iskustva kad je rec o React-u (ps. solidno sam upoznata sa redux)
        </p>
        <p className='mb-4'>
          Nisam imala priliku da radim sa tailwindcss do sad (koristila sam u prethodnoj firmi kratko bootstrap, ostalo sve SCSS), ali sigurna sam da bih uspela brzo da savladam.
        </p>

        <p> Smisao za dizajn mi nije jaca strana, pa tako i zadatak izgleda, funkcionalnost ipak ima prednost :D</p>

        <p className='mt-4'>
          U svakom slucaju bi mi znacilo da dobijem feedback.
        </p>

        <p className='mt-4'>
          Pozdrav! :)
        </p>
      </div>
   </section>
  )
}

export default Homepage;
