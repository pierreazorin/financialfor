import React, { useState } from 'react';
import './App.css';
import { Input, Button, DatePicker, Space } from 'antd';
import { Link, Redirect } from 'react-router-dom'


export default function ScreenHome() {

  const [i, seti] = useState('')
  const [r, setr] = useState('')
  const [VN, setVN] = useState('')
  const [VR, setVR] = useState('')
  const [OAT, setOAT] = useState('')
  const [Negocdate, setNegocdate] = useState('')
  const [jourcouru, setjourcouru] = useState('')
  const [couponcouru, setcouponcouru] = useState('')
  const [prix, setPrix] = useState('')
  const [cleanprice, setcleanprice] = useState('')
  const [finobligation, setfinobligation] = useState('')
  const [n, setn] = useState('')
  const [sensibilite, setsensibilite] = useState('')

  function diffdate(d1, d2, d3) {
    var WNbJours = d2.getTime() - d1.getTime();

    setn('periode:' + (d3.getYear() - d2.getYear()))
    var cc = ((Math.ceil(WNbJours / (1000 * 60 * 60 * 24) + 2)) * i * 100) / 365
    setjourcouru('jours couru: ' + Math.ceil(WNbJours / (1000 * 60 * 60 * 24) + 2))
    var j = 365 - Math.ceil(WNbJours / (1000 * 60 * 60 * 24) + 2)
    var na = d3.getYear() - d2.getYear()
    setcouponcouru('CC: ' + ((Math.ceil(WNbJours / (1000 * 60 * 60 * 24) + 2)) * i * 100) / 365 + "%")
    const unplusr = 1 + parseFloat(r)
    const unplusrun = 1.01 + parseFloat(r)
    var jpar365 = parseFloat(j) / 365
    var premierepartie = (i * VN * Math.pow(unplusr, - jpar365))
    var deuxiemepartie = Math.pow(unplusr, -1 - na)
    var inter = (((unplusr) - Math.pow(unplusr, -na)) / parseFloat(r))
    var troisiemepartie = parseFloat(VR) * Math.pow(unplusr, - jpar365 - na)
    console.log(premierepartie)
    console.log(deuxiemepartie)
    console.log(inter)
    console.log(troisiemepartie)
    var dirtybrutprice = (parseFloat(i) * parseFloat(VN) * Math.pow(unplusr, - jpar365) * (((unplusr) - Math.pow(unplusr, -na)) / parseFloat(r)) + parseFloat(VR) * Math.pow(unplusr, - jpar365 - na))
    var dirtyprice = dirtybrutprice * (parseFloat(VN) / 100)
    var clearprice = dirtyprice - cc
    var dirtybrutprice100pbt = (parseFloat(i) * parseFloat(VN) * Math.pow(unplusrun, - jpar365) * (((unplusrun) - Math.pow(unplusrun, -na)) / (parseFloat(r)+0.01)) + parseFloat(VR) * Math.pow(unplusrun, - jpar365 - na))
    console.log(dirtybrutprice100pbt)
    setPrix("dirtyprice: " + dirtyprice + '%')
    setcleanprice("clearprice: " + clearprice+ '%')
    setsensibilite("sensibilite: " + ((dirtybrutprice100pbt / dirtybrutprice) - 1) * 100 +'%')
  }

  function onChange(date, dateString) {

    var madate = null
    madate = dateString[0] + dateString[1] + dateString[2] + dateString[3] + ',' + dateString[5] + dateString[6] + ',' + dateString[8] + dateString[9]
    console.log(madate)
    setOAT(new Date(madate))
  }

  function onChange2(date, dateString) {
    var madate = null
    madate = dateString[0] + dateString[1] + dateString[2] + dateString[3] + ',' + dateString[5] + dateString[6] + ',' + dateString[8] + dateString[9]
    console.log(madate)
    setNegocdate(new Date(madate))
  }


  function onChange3(date, dateString) {
    var madate = null
    madate = dateString[0] + dateString[1] + dateString[2] + dateString[3] + ',' + dateString[5] + dateString[6] + ',' + dateString[8] + dateString[9]
    console.log(madate)
    setfinobligation(new Date(madate))
  }


  var handleSubmitSignin = (title) => {
    diffdate(OAT, Negocdate, finobligation)

  }


  return (
    <div className="Login-page" >



      {/* SIGN-IN */}

      < div className="Sign" >
        <p>OAT date:</p>
        <DatePicker onChange={onChange} />
        <p>Negociation Date:</p>
        <DatePicker onChange={onChange2} />
        <p>Fin de l'obligation:</p>
        <DatePicker onChange={onChange3} />
        <Input onChange={(e) => seti(e.target.value)} className="Login-input" placeholder="Taux Facial" />
        <Input onChange={(e) => setr(e.target.value)} className="Login-input" placeholder="yield" />
        <Input onChange={(e) => setVN(e.target.value)} className="Login-input" placeholder="valeur nominale" />
        <Input onChange={(e) => setVR(e.target.value)} className="Login-input" placeholder="valeur remboursement" />
        <Button onClick={() => handleSubmitSignin()} style={{ width: '80px' }} type="primary">Calculer</Button>

      </div >
      < div className="Sign" >
        <div>
          {jourcouru}
        </div>
        <div>
          {couponcouru}
        </div>
        <div>
          {n}
        </div>
        <div>
          {prix}
        </div>
        <div>
          {cleanprice}
        </div>
        <div>
          {sensibilite}
        </div>
      </div >

    </div >
  );
}



