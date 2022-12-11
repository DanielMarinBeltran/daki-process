import React from 'react';

// Styles

import './dashboard.scss';

//Components

import Menu from '../../components/menu/Menu';
import BoxData from '../../components/boxData/BoxData';
import PieChart from '../../components/pieChart/PieChart';

// Images - Icons

import pronosticoIcon from '../../assets/imgs/pronostico.svg';
import conocimientoIcon from '../../assets/imgs/conocimiento.svg';
import suscripcionesIcon from '../../assets/imgs/suscripciones.svg';
import miEmpresaIcon from '../../assets/imgs/mi-empresa.svg';
import misDatosIcon from '../../assets/imgs/mis-datos.svg';
import configuracionIcon from '../../assets/imgs/configuracion.svg';
import newCampaingIcon from '../../assets/imgs/newCampaing.svg';
import editSegmentIcon from '../../assets/imgs/editSegments.svg';
import goToDashboardIcon from '../../assets/imgs/goToDashboard.svg';
import arrowRightIcon from '../../assets/imgs/arrowShortCuts.svg';

function Dashboard() {
	const options = [
		{
			id: 1,
			icon: pronosticoIcon,
			text: 'Pronóstico'
		},
		{
			id: 2,
			icon: conocimientoIcon,
			text: 'Conocimiento'
		},
		{
			id: 3,
			icon: suscripcionesIcon,
			text: 'Suscripciones'
		},
		{
			id: 4,
			icon: miEmpresaIcon,
			text: 'Mi empresa'
		},
		{
			id: 5,
			icon: misDatosIcon,
			text: 'Mis datos'
		},
		{
			id: 6,
			icon: configuracionIcon,
			text: 'Configurar'
		}
	];

	const dataBox = [
		{
			id: 1,
			text: '80%',
			subText: 'Clientes'
		},
		{
			id: 2,
			text: '10K',
			subText: 'Ordenes'
		},
		{
			id: 3,
			text: '200M',
			subText: 'Monto compras'
		},
		{
			id: 4,
			text: '5d',
			subText: 'Monto prom.'
		}
	];

	const shorcutList = [
		{
			id: 1,
			icon: newCampaingIcon,
			text: 'Nueva campaña'
		},
		{
			id: 2,
			icon: editSegmentIcon,
			text: 'Editar Segmentos'
		},
		{
			id: 3,
			icon: goToDashboardIcon,
			text: 'Ir a tablero'
		}
	];

	const chartData = [
		{
			id: 'Dormidos',
			label: 'Dormidos',
			value: 89,
			color: 'hsla(257, 66%, 47%)'
		},
		{
			id: 'Olvidados',
			label: 'Olvidados',
			value: 76,
			color: 'hsla(35, 99%, 64%)'
		},
    {
			id: 'En Riesgo',
			label: 'En Riesgo',
			value: 80,
			color: 'hsla(14, 100%, 61%)'
		},
		{
			id: 'Potenciales',
			label: 'Potenciales',
			value: 90,
			color: 'hsla(110, 46%, 66%)'
		},
		{
			id: 'Campeones',
			label: 'Campeones',
			value: 100,
			color: 'hsla(201, 88%, 42%)'
		}
	];

	return (
		<div className="dashboard">
			<div>
				<Menu items={options} />
			</div>
			<div className="dashboard-info">
				<h1>Conocimiento de Cliente</h1>
				<div className="dashboard-data">
					<div className="left">
						<BoxData data={dataBox} />
						<div className="clients">
							<div className="chart">
								<div>
									<h3>Composición de tus clientes</h3>
									<div className='chart-container'><PieChart data={chartData}/></div>
								</div>
							</div>
							<div className="list" />
						</div>
					</div>
					<div className="right">
						<div className="list">
							<h3>ShortCuts</h3>
							<ul>
								{shorcutList.map((i) => {
									return (
										<li id={i.id}>
											<div className="icon-container">
												<img src={i.icon} alt="Shortcut Icon" />
											</div>
											<div className="list-right">
												<span>{i.text}</span>
												<img src={arrowRightIcon} alt="Right Arrow Shortcuts Company" />
											</div>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
