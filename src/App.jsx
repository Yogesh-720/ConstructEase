import Nav from './Components/Nav';
import {Hero,Services,QualityAssurance,
  CustomerReviews,Footer,WhatWeBuild} from './Sections';


const App = () => {
  return (
    <main>
      <Nav />
      <section className="xl:padding-l wide:padding-r ">
        <Hero />
      </section>
      <section className='padding '>
        <WhatWeBuild />
      </section>
      <section className='padding'>
        <QualityAssurance />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  )
}

export default App