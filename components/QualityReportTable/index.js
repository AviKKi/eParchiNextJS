import React, {useEffect} from "react";
import QualityReportData from '../data/QualityReportData'
import Column from './Column';
import {Button} from 'antd';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const Table = (props) => {
	let data = QualityReportData.filter(it => it.parent_heat.furnace_no === props.furnaceNo);
	useEffect(() => {
	}, [data]);

	return (
		<div>
			<ReactTable
				columns={Column}
				data={data}
				defaultPageSize={data.length >= 10 ? 10 : data.length}
				showPaginationBottom={false}
			/>
			<div style={{textAlign: 'right', padding: '1rem'}}>
				<Button type="primary" icon="download" size='large' shape='circle' onClick={() => alert('Work is GoingOn :~)')}/>
			</div>
		</div>
	);
}

export default Table;
