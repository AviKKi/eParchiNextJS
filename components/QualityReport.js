import React, {Fragment} from 'react';
import QualityReportData from './data/QualityReportData';
import QualityReportTable from './QualityReportTable'

import {Tabs, DatePicker} from 'antd';

const {TabPane} = Tabs;

const callback = (key) => {
  // console.log(key);
};

function onPanelChange() {
  console.log(123);
}

const QualityReport = () => {
	let furnaceNo = [];
	QualityReportData.forEach(it => {
		if (it.parent_heat.furnace_no) furnaceNo.push(it.parent_heat.furnace_no)
	});

	return (<Fragment>
		<Tabs defaultActiveKey='1' onChange={callback} className='col 8'>
			{furnaceNo.map((it, i) => {
				return <TabPane tab={`FURNACE ${it}`} key={it}>
					<QualityReportTable furnaceNo={it}/>
				</TabPane>;
			})}
		</Tabs>
		<DatePicker onChange={onPanelChange}/>
	</Fragment>);
};

export default QualityReport;