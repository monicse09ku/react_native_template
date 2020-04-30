import React, { Component } from 'react';
import { Drawer } from 'native-base';
import SideBar from './Siderbar';

export default class Drawermenu extends Component {
    render() {

        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar navigator={this.navigator} />}
                onClose={() => this.closeDrawer()} >
                <SideBar/>
            </Drawer>
        );
    }
}