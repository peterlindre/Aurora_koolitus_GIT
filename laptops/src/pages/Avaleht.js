function Avaleht () {

  const computers = JSON.parse(localStorage.getItem("laptops")) || [];

  const addToCart = (clickedComputer) => {
    const cart = JSON.parse(localStorage.getItem("cartLaptops")) || [];
    cart.push(clickedComputer);
    localStorage.getItem("cartLaptops", JSON.stringify(cart));

  }

  return ( <div className="avaleht-text" >
    <div>Tere</div> <br></br>
    <div>Siin lehel saad sülearvuteid vaadata ja lisada</div>
    {computers.map(oneComputer => 
  <div>
    <div>{oneComputer.mark}</div>
    <div>{oneComputer.mudel}</div>
    <div>{oneComputer.maksumus}</div>
    <button onClick={() => addToCart(oneComputer)}>Lisa ostukorvi</button>

    <button>Teeme temaga midagi</button>
 </div>
    )}


  </div>)
}
export default Avaleht;