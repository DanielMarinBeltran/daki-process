import React from 'react';
import Menu from '../../components/menu/Menu';
import './dashboard.scss';
import pronosticoIcon from '../../assets/imgs/pronostico.svg';
import conocimientoIcon from '../../assets/imgs/conocimiento.svg';
import suscripcionesIcon from '../../assets/imgs/suscripciones.svg';
import miEmpresaIcon from '../../assets/imgs/mi-empresa.svg';
import misDatosIcon from '../../assets/imgs/mis-datos.svg';
import configuracionIcon from '../../assets/imgs/configuracion.svg';

function Dashboard() {

  const options = [
    {
      icon:pronosticoIcon,
      text:'Pronóstico'
    },
    {
      icon:conocimientoIcon,
      text:'Conocimiento'
    },
    {
      icon:suscripcionesIcon,
      text:'Suscripciones'
    },
    {
      icon:miEmpresaIcon,
      text:'Mi empresa'
    },
    {
      icon:misDatosIcon,
      text:'Mis datos'
    },
    {
      icon:configuracionIcon,
      text:'Configurar'
    },
  ]

  return (
    <div className='dashboard'>
      <div>
        <Menu items={options} />
      </div>
      <div className='dashboard-info'>
        <h1>Conocimiento de Cliente</h1>
        <div className='dashboard-'>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard