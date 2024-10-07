import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
function Admin() {
  const { t } = useTranslation();

  return (
    <div>
       <Button as={Link} to="/halda-esindused" variant="primary">{t("maintain-shops")}</Button>{' '}
      <Button as={Link} to="/halda-hinnad" variant="secondary">Halda Hinnad</Button>{' '}
      <Button as={Link} to="/lisa-toode" variant="success">Lisa toode</Button>{' '}
      <Button as={Link} to="/halda-tootajad" variant="warning">Halda Töötajaid</Button>{' '}
      <Button  as={Link} to="/halda-tooted" variant="info">Halda Tooteid</Button>{' '}

      {/* <Link to='/lisa-toode'>
        <button className="nupp">lisa-toode</button>
      </Link> */}
      {/* <Link to='/halda-esindused'>
        <button className="nupp">{t("maintain-shops")}</button>
      </Link> */}
      {/* <Link to='/halda-hinnad'>
        <button className="nupp">Halda Hinnad</button>
      </Link> */}
      {/* <Link to='/halda-tootajad'>
        <button className="nupp">Halda Töötajaid</button>
      </Link> */}
      {/* <Link to='/halda-tooted'>
        <button className="nupp">Halda Tooteid</button>
      </Link> */}
    </div>
  )
}

export default Admin