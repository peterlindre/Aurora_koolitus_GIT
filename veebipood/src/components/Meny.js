import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function Meny() {
  const { t, i18n } = useTranslation();

  // return <h1>{t('Welcome to React')}</h1>

  return (
    <div>

      <button onClick={() => i18n.changeLanguage("en")}>English</button>
      <button onClick={() => i18n.changeLanguage("et")}>Eesti</button>
      
      <Link to='/avaleht'>
      <img className="pilt" src="https://digi.geenius.ee/app/uploads/sites/7/2020/05/4e8cd4ef7f6f6a06695160e1b2d37c23-1920x1280.jpg" alt="pilt" />
      </Link>
      <Link to='/kontakteeru'>
        <button className="nupp">{t("contact")}</button>
      </Link>
      <Link to='/osta-kinkekaart'>
        <button className="nupp">{t("kinkekaart")}</button>
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
      <Link to='/shops'>
        <button className="nupp">Shops</button>
      </Link>

      <br /><br />
     
      <Link to='/admin'>
        <button className="nupp">Admin</button>
      </Link>

  
    </div>
  )
}

export default Meny