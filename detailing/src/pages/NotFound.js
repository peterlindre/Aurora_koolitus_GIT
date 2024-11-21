import React from 'react'
import {Link} from 'react-router-dom'
import i18n from '../components/i18n'
import { useTranslation } from 'react-i18next'

function NotFound() {
  const {t} = useTranslation()

  return (
    <div>
       <h2>{t("Oh ei")}!</h2>
     <h4> {t("Otsisime igaltpoolt, aga seda lehte me ei leidnud")}! </h4>
    <p>
   {t("Tagasi")}
    <Link to="homepage"> {t("kodulehele")} </Link>  
    </p>

    </div>
  )
}

export default NotFound

