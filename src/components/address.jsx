import React, { Component } from 'react';

import '../style/address.css'; 

class address extends Component {
	constructor(props) {
		super(props);
		 
	}
	handleBack() {
		alert(2);
	}

	render() {
		return(
			<div>
			<header className="header">
				<a href="javascript:void (0);" className="back" onClick={this.handleBack.bind(this)}></a>
				<h2>地址管理</h2>
				<a href="javascript:void(0);" className="rightlink">保存</a>
			</header>
 			<section className="orderDetails-main">
				 <div id="middle">
					<p><input className="userName" type="text" placeholder="用户名"/></p>
					<p><input className="telephone" type="text" placeholder="联系方式"/></p>
					<p className="address">
						<span>江苏省</span>
						<span>南京市</span>
						<span>江宁区</span>
						<span style={{float: 'right', margin: 0}}><img src = "../../src/images/ic_chevron_right.png"/></span>
					</p>
					<p><input className="detailedAddress" type="text" placeholder="详细地址"/></p>
				</div>
				<div className="identity">
					<p className="identity-serial">23456787654984359454395</p>
					<div className="identity-content">
						<a className="identity-upload" href="javascript:void(0);">上传身份证</a>
						<div className="identity-picture">
							<a href="javascript:void (0);"><img src="../../src/images/pic_id.png" /></a>
							<a href="javascript:void (0);"><img src="../../src/images/pic_id.png" /></a>
						</div>
					</div>
				</div>
 			</section>
 			</div>
		)
	}

}

export default address;