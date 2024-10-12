import { Link } from "react-router-dom";

function Uudised() {
const uudised = JSON.parse(localStorage.getItem("uudised")) || [];

  return ( <div>
    <br />
    <br />
    <br />

    <div>{uudised.map(uudis=> 
    <Link to="uudis">
      <div>{uudis}</div>
      </Link>
      )}</div>
<div>
<a target='_blank' rel="noreferrer" href="https://majandus.postimees.ee/8089669/perefirma-kaebas-eesti-kutuseturu-parast-euroopa-komisjonile"> Perefirma kaebas Eesti kütuseturu pärast Euroopa komisjonile</a>
    <br />
    <br />
</div>
<a target='_blank' rel="noreferrer" href="https://majandus.postimees.ee/8089600/inspektsioon-tunnistas-kehtetuks-tele2-eesti-krediidiandja-tegevusloa"> Inspektsioon tunnistas kehtetuks Tele2 Eesti krediidiandja tegevusloa</a>
<div>
<br />

<a  target='_blank' rel="noreferrer" href="https://majandus.postimees.ee/8089008/korteriuhistute-liit-korteri-remondist-tuleb-teavitada"> Korteriühistute Liit: korteri remondist tuleb teavitada</a>
</div>
<br />
<div>
<a target='_blank' rel="noreferrer" href="https://majandus.postimees.ee/8089779/ettevotja-jaak-nigul-eestis-valitseb-soovmotlemine-et-toostust-pole-vaja"> Ettevõtja Jaak Nigul: Eestis valitseb soovmõtlemine, et tööstust pole vaja</a>
</div>
<br />

<div>
<a target='_blank' rel="noreferrer" href="https://majandus.postimees.ee/8089813/neljapaeval-langeb-elektrihind-kolmandiku-vorra"> Neljapäeval langeb elektrihind kolmandiku võrra</a>
</div>
<br />
<div>
<a  target='_blank' rel="noreferrer" href="https://wallstreetjournal.postimees.ee/8089675/wsj-euroopa-kohtu-otsus-piiras-konkurentsivoliniku-voimu"> WSJ: Euroopa kohtu otsus piiras konkurentsivoliniku võimu</a>
</div>
<br />
<div>
<a target='_blank' rel="noreferrer" href="https://majandus.postimees.ee/8089621/seb-eesti-volakirjad-margitakse-suure-toenaosusega-tais"> SEB: Eesti võlakirjad märgitakse suure tõenäosusega täis</a>
</div>
<br />
<div>
<a href="https://majandus.postimees.ee/8089548/suurkoondamine-telia-karbib-tookohti"> SUURKOONDAMINE: Telia kärbib töökohti</a>
</div>
<br />
<div>
<a href="https://majandus.postimees.ee/8089262/ttja-otsib-miljoni-euro-eest-infosusteemi-arendajat"> TTJA otsib miljoni euro eest infosüsteemi arendajat</a>
</div>
<br />
<div>
<a href="https://majandus.postimees.ee/8089300/soome-plaanib-tuumaenergia-jaatmed-maa-alla-ladustada"> Soome plaanib tuumaenergia jäätmed maa alla ladustada</a>
</div>
<br />

<br />
    <br />
<img className="pilt-postimees" src="https://f10.pmo.ee/G77WagGMA4X9pJ_k2h_utEeSWr8=/1200x630/https://f.pmo.ee/logos/81/8767aa8e833a43c5bf2dd1ece8548b52.png" alt="" /> 
  </div> );
}

export default Uudised;
