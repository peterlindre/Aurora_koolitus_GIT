import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import i18n from '../components/i18n';
import homepage from '../CSS/homepage.css'

function Homepage() {

  const { t } = useTranslation();

  return (
    <div>
      <div className="image-container">
        <Image 
          src="https://content-hub.imgix.net/6LMA3SIuBUsgNjAe0T5evj/bf385c836b5cc4440a1950a84a5dc746/everything_you_need_to_know_about_the_new_911_992.2.jpg?w=2064" 
          fluid 
        />
        <div className="text-overlay">
          <p className='tekst'>| Orient Detailing |</p>
          <br />
          <p className='tekst2'>{t("Ilusate autode kodu")}.</p>
          <p className='tekst3'>{t("Täielik valik autode sise- ja välishooldusteenuseid")}.</p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
