import React from "react";
import "./style.css"
// import  from "../../public/hero.png"

const Home = () => {
  return (
    <>
  
      <div className="home">
        <div className="heading-hero">
          <h1>Discover Your Perfect Style Today</h1>
          <h3>Shop Smart, Shop with Us</h3>
          <div>
            <button className="btn btn-primary button">Shop Now</button>
            <button className="btn btn-secondary button">Learn More</button>
          </div>
        </div>
        <div className="image-hero">
      <img className="header-image" src="src/public/hero.png" alt="" />
        </div>
      </div>

      {/* Section 2 */}
          <h1 style={{fontSize:"3rem"}} className="text-center">Our Favourites</h1>
        <div className="section-2">
      <div className="box box-1">
      <button className=" btn btn-secondary category-button">Women's Wardrobe</button>
      </div>
     
      <div className="box box-2">
      <button className=" btn btn-secondary category-button">Men's Wardrobe</button>
      </div>
       <div className="box box-3">
       <button className=" btn btn-secondary category-button">Jewellery Collection</button>
       </div>
 
        </div>

        {/* Footer */}
        <footer>
        <div className="footer-container">
            <div className="footer-logo">
                <img src="https://knowledge.tech/assets/i/KnowledgeImages/logo.png" alt="Your Store Logo" />
                <p>Your Choice is our priority</p>
            </div>
            <div className="footer-links">
                <div className="section">
                    <h3>Shop</h3>
                    <ul>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">Special Offers</a></li>
                    </ul>
                </div>
                <div className="section">
                    <h3>About Us</h3>
                    <ul>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="section">
                    <h3>Customer Service</h3>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Shipping & Returns</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-social">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-pinterest"></i></a>
            </div>
        </div>
    </footer>
    </>
  );
};

export default Home;
