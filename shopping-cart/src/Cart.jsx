import React, { useState } from 'react'



function Cart() {

  const [count,setcount] = useState(0);

  const removehandleclick = () => {
    setcount(count - 1);
  };
  const handleclick = () => {
    setcount(count + 1);
  };

  return (
    <div className="main">
      <h2>SPORTS SHOP</h2>
      <div>
  <button>Cart {count}  <i class="fa fa-shopping-cart"></i></button>
  </div>
      <div className="card">
        <div className="image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCsaowATUb4RXu1Z_Gnf-vSB2eJBFSwZz06A&usqp=CAU" alt="" />          
        </div>
        <div className="title">
          <h1>
            Dawson Bat
          </h1>
        </div>
        <div className="des">
          <p>Price $ 66.14</p>
          {count? <button onClick={removehandleclick}>Remove From Cart</button> : <button onClick={handleclick}>Add to Cart</button>}
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img src="https://commercebuild-175c7.kxcdn.com/cdn-d03d5231-5b2e278c.mysagestore.com/cf738e9579802e6b988bb225ca6bc00c/contents/3A23134/thumbnail/middle_3A23134-Kahuna-4_1.jpg?quality=65" alt="" />          
        </div>
        <div className="title">
          <h1>
          Batting Glove
          </h1>
        </div>
        <div className="des">
          <p>Price $ 12.03</p>
          {count? <button onClick={removehandleclick}>Remove From Cart</button> : <button onClick={handleclick}>Add to Cart</button>}
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img src="https://5.imimg.com/data5/FO/YW/MY-16517367/batting-pad-500x500.jpg" alt="" />          
        </div>
        <div className="title">
          <h1>
            Batting Pads
          </h1>
        </div>
        <div className="des">
          <p>Price $ 15.63</p>
          {count? <button onClick={removehandleclick}>Remove From Cart</button> : <button onClick={handleclick}>Add to Cart</button>}
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img src="https://pixfeeds.com/images/1/161067/1200-63724969-cricket-helmet.jpg" alt="" />          
        </div>
        <div className="title">
          <h1>
            Batting Helmet
          </h1>
        </div>
        <div className="des">
          <p>Price $ 10.82</p>
          {count? <button onClick={removehandleclick}>Remove From Cart</button> : <button onClick={handleclick}>Add to Cart</button>}
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img src="https://media.istockphoto.com/id/493759086/photo/close-up-of-a-cricket-ball.jpg?s=612x612&w=0&k=20&c=2Ob1x6US7rLtY0hyNla_Ctjpd22DJx1b9TJIxvOKeyA=" alt="" />          
        </div>
        <div className="title">
          <h1>
            Cricket Ball
          </h1>
        </div>
        <div className="des">
          <p>Price $ 8.42</p>
          {count? <button onClick={removehandleclick}>Remove From Cart</button> : <button onClick={handleclick}>Add to Cart</button>}
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img src="https://westernsportscentre.com.au/cdn/shop/files/ss-cricket-bags-sky-blue-ss-super-select-duffle-kit-bag-2100000123445-39684429480186_1600x.jpg?v=1691804891" alt="" />          
        </div>
        <div className="title">
          <h1>
            Cricket Kit Bag
          </h1>
        </div>
        <div className="des">
          <p>Price $ 21.65</p>
          {count? <button onClick={removehandleclick}>Remove From Cart</button> : <button onClick={handleclick}>Add to Cart</button>}
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img src="https://gmcricket.in/media/catalog/product/cache/9bb9d677791f8666003e194c8a94aeff/s/i/siren-909-wicket-keeping-gloves.jpg" alt="" />          
        </div>
        <div className="title">
          <h1>
            Kepping Glove
          </h1>
        </div>
        <div className="des">
          <p>Price $ 7.22</p>
          {count? <button onClick={removehandleclick}>Remove From Cart</button> : <button onClick={handleclick}>Add to Cart</button>}
        </div>
      </div>
      <div className="card">
        <div className="image">
          <img src="https://www.cricketbestbuy.com/cdn/shop/files/cbb-cricket-spring-back-return-wicket-stumps-pro-metal-base-multi-surface-placement-best-buy-613_600x.webp?v=1688508992" alt="" />          
        </div>
        <div className="title">
          <h1>
            Cricket Stump
          </h1>
        </div>
        <div className="des">
          <p>Price $ 9.02</p>
          {count? <button onClick={removehandleclick}>Remove From Cart</button> : <button onClick={handleclick}>Add to Cart</button>}
        </div>
      </div>
    </div>
  )
}

export default Cart