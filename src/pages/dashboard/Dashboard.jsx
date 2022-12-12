import React from 'react';

// Styles

import './dashboard.scss';

//Components

import Menu from '../../components/menu/Menu';
import BoxData from '../../components/boxData/BoxData';
import PieChart from '../../components/pieChart/PieChart';
import Button from '../../components/button/Button';

// Images - Icons

import arrowRightIcon from '../../assets/imgs/arrowShortCuts.svg';

// Data

import { options, dataBox, shorcutList, chartData, clientsData } from '../../data/data';

function Dashboard() {

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
									<div className="chart-container">
										<PieChart data={chartData} />
									</div>
								</div>
							</div>
							<div className="list">
								<div>
									<h3>Clientes en Riesgo</h3>
									<ul>
										{clientsData.map((i) => {
											return (
												<li id={i.id}>
													<div className="list-right">
														<span>{i.name}</span>
														<img src={arrowRightIcon} alt="Right Arrow Shortcuts Company" />
													</div>
												</li>
											);
										})}
									</ul>
									<Button text="Crear campaña ahora" />
								</div>
							</div>
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
