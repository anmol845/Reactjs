import React from 'react'

function Footer() {
  
  return (
    
    <div>
      <>
  <header>
    <nav>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="product.html">Products</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div>
        <search>
          <form id="searchbar">
            <input
              type="fsrch"
              id="fsrch"
              placeholder="Search For Your luxury Jackets"
            />
          </form>
        </search>
      </div>
    </nav>
  </header>
  <section id="home">
    <div className="hero">
      <h2>Shop the Latest Fashion</h2>
      <p>Discover new trends and get the best deals on clothing.</p>
      <a href="product.html" className="btn">
        Shop Now
      </a>
    </div>
  </section>
</>

     
    </div>
    
  )
}


export default Footer
