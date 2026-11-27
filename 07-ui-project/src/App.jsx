import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
const users=[
  {
    img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro:'Prime customers, that have access to bank credit and are satisfied with the current product.',
    tag:'Satisfied',

  },
  {
    img:'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro:'Customers who have access to some banking services, but whose needs are not fully met by current products.',
    tag:'Underserved',
  
  },
  {
    img:'https://images.unsplash.com/photo-1752856408620-2e6fc6ac072f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro: 'Customers with limited access to traditional banking services who may rely on cash or alternative financial services.',
    tag:'Underbanked'
    
  }
]


const App = () => {
  return (
    <div >
  <Section1
  users={users}
  />
  <Section2/>
    </div>
  )
}

export default App
