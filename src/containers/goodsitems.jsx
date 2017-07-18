import React, {Component} from 'react';
import $ from 'jquery';
import api from '../config/api';

import { fetchPosts } from '../redux/actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';

require('../style/goodslist.css');

import GoodsDescripts from '../components/goodsdescripts';

class GoodsItem extends Component {

    constructor(props) {
        super(props);

        this.props = {
            goods: []
        }
    }

    componentDidMount() {

        // 通过调用 connect() 注入:
        const { dispatch , goods } = this.props;

        $('.tabs a').on('click', function () {
            $('.tabs .active').removeClass('active');
            let Index = $(this).index();
            $('.tabs a').eq(Index).addClass('active');
        })

        let params = {
            "url": 'http://mobile.vision-world.cn:8080/mobile-web-trade/ws/mobile/v1/goods/originList',
            "method": 'post',
            "params": {
                "userId": 0,
            }
        };

        dispatch(fetchPosts(params));

    }


    render() {
        const { goods } = this.props;
        return (
            <div >
                <div className="tabs">
                    <a href="javascript:void (0)" className="active">默认222</a>
                    <a href="javascript:void (0)" className="tabs-price">价格</a>
                    <a href="javascript:void (0)"><Link  to = "/" >销量</Link></a>
                </div>
                <GoodsDescripts goods={ goods.items }/>
            </div>
        )
    }

}

function select(state) {
    return {
        goods : state.goodslist
    }
}
//react-redux 提供了两个重要的对象， Provider 和 connect ，前者使 React 组件可被连接（connectable），后者把 React 组件和 Redux 的 store 真正连接起来。
//任何一个从 connect() 包装好的组件都可以得到一个 dispatch 方法作为组件的 props，以及得到全局 state 中所需的任何内容。 connect() 的唯一参数是 selector。此方法可以从 Redux store 接收到全局的 state，然后返回组件中需要的 props。最简单的情况下，可以返回一个初始的 state （例如，返回认证方法），但最好先将其进行转化。
export default  connect(select)(GoodsItem)