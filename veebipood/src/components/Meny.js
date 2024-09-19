import React from 'react'
import { Link } from 'react-router-dom'

function Meny() {
  return (
    <div>
      
      <Link to='/avaleht'>
      <img className="pilt" src="https://digi.geenius.ee/app/uploads/sites/7/2020/05/4e8cd4ef7f6f6a06695160e1b2d37c23-1920x1280.jpg" alt="pilt" />
      </Link>
      <Link to='/osta-kinkekaart'>
        <button className="nupp">kinkekaart</button>
      </Link>
      
      <Link to='/lisa-toode'>
        <button className="nupp">lisa-tode</button>
      </Link>
      <Link to='/seaded'>
        <button className="nupp">seaded</button>
      </Link>
      <Link to='/profiil'>
        <button className="nupp">Profiil</button>
      </Link>
      <Link to='/logi-sisse'>
        <button className="nupp">Logi sisse</button>
      </Link>
      <Link to='/registreeru'>
        <button className="nupp">Registreeru</button>
      </Link>
      <br /><br />
      <Link to='/esindused'>
        <button className="nupp">esindused</button>
      </Link>
      <Link to='/ostukorv'>
        <button className="nupp">ostukorv</button>
      </Link>
      <Link to='/hinnad'>
        <button className="nupp">Hinnad</button>
      </Link>
      <Link to='/tootajad'>
        <button className="nupp">Töötajad</button>
      </Link>
      <Link to='/tooted'>
        <button className="nupp">Tooted</button>
      </Link>

      <br /><br />
      <Link to='/halda-esindused'>
        <button className="nupp">Halda esindusi</button>
      </Link>
      <Link to='/halda-hinnad'>
        <button className="nupp">Halda Hinnad</button>
      </Link>
      <Link to='/halda-tootajad'>
        <button className="nupp">Halda Töötajaid</button>
      </Link>
      <Link to='/halda-tooted'>
        <button className="nupp">Halda Tooteid</button>
      </Link>
  
    </div>
  )
}

export default Meny