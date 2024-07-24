import '../css/cart.css';

function Cart({ cart, handleDetele }) {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white"}}>
      Your Cart
      </h1>
      <div>
        {cart.length === 0 ? (
          <p style={{ textAlign: "center" }}>Giỏ hàng trống</p>
        ) : (
          <table className="cart-container">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Product</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((pro, index) => (
                <tr key={index}>
                  <td>{pro.name}</td>
                  <td><h3>{pro.price}$</h3></td>
                  <td>
                    <img src={pro.img} alt="hinh san pham" width="350px" height="200px" style={{objectFit:"cover"}} />
                  </td>
                  <td>
                    <button
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDetele(index)}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              ))}
               <tr>
                <td colSpan="3" style={{ textAlign: "left" }}>
                  <h4>Total:</h4>
                </td>
                <td>
                  <h4>{totalPrice}$</h4>
                </td>
              </tr>
              <tr>
                <td colSpan="4">
                  <h5>Your information:</h5>
                  <div>
                    <input type="radio" name="gender" />Male
                    <input type="radio" name="gender" />Female
                  </div>
                  <div className="customer-info">
                    <input placeholder="Your name" />
                    <input placeholder="Your phone" />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  <button className="btn-oder">Payment Method</button>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Cart;
