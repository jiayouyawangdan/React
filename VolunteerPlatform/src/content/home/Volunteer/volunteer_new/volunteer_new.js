
import React,{Component} from "react";
import {

} from 'antd'

import {
	Line,
} from "react-chartjs"
import "./volunteer_new.css"
const  data = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [
		{
			//
			label: "My First dataset",

			// 边线颜色
			strokeColor: "red",
			
			// 圆点颜色
			pointColor: "rgba(220,220,220,1)",

			// 圆点边框
			pointStrokeColor: "#fff",

			// 鼠标所在圆点颜色
			pointHighlightFill: "#00A0E9",

			data: [65, 59, 80, 81, 56, 55, 40]
		},
	]
}

const options ={

	//网格线属性
	scaleShowGridLines : false,

	// 两点之间是否弧形显示
	bezierCurve : false,

	// 每个点的大小
	pointDotRadius : 0,

	// 每个点的宽度
	pointDotStrokeWidth : 0,

	//每个点的额外半径，即实际触发半径
	pointHitDetectionRadius : 5,	

	// 是否为数据集填充颜色
	datasetFill : false,
}

const device = document.body.offsetWidth

export default class volunteer_new extends Component{
	constructor(props){
		super(props);
		this.state = {
		}
	}

	componentWillMount(){
	}

	render(){
		return (
			<div style={{paddingLeft: 10, height: 173, backgroundColor: '#fff'}}>	
				<text style={{fontSize: 16}}>志愿者新增趋势</text>
				<div style={{marginLeft: 30}}>
					<Line data={data} options={options} height="136" width={device*0.3}/>
				</div>
			</div>
		)
	}
}
