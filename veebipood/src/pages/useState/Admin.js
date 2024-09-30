import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function Admin() {
  const { t } = useTranslation();

  return (
    <div>
      
      <Link to='/lisa-toode'>
        <button className="nupp">lisa-toode</button>
      </Link>
      <Link to='/halda-esindused'>
        <button className="nupp">{t("maintain-shops")}</button>
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

export default Admin