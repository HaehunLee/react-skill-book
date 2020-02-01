import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './AppShell.css'

const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
      marginRight: 'auto'
    },
};

class AppShell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
    }
    handleDrawerToggle = () => this.setState({toggle: !this.state.toggle})
    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.root}>
                    <AppBar position="static">
                        <IconButton className={classes.menuButton} color="inherit" onClick={this.handleDrawerToggle}>
                            <MenuIcon/>
                        </IconButton>
                    </AppBar>
                    <Drawer open={this.state.toggle} className="rsbDrawer">
                        <MenuItem onClick={this.handleDrawerToggle}>
                            <Link component={RouterLink} to="/lv1">
                                Lv1. React
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={this.handleDrawerToggle}>
                            <Link component={RouterLink} to="/lv2">
                                Lv2. JSX
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={this.handleDrawerToggle}>
                            <Link component={RouterLink} to="/lv3">
                                Lv3. Component
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={this.handleDrawerToggle}>
                            <Link component={RouterLink} to="/skill/mobx">
                                MobX
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={this.handleDrawerToggle}>
                            <Link component={RouterLink} to="/lv4">
                                Lv3. LifeCycle
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={this.handleDrawerToggle}>
                            <Link component={RouterLink} to="/skill/materialui">
                                Material-UI
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={this.handleDrawerToggle}>
                            <Link component={RouterLink} to="/skill/reactrouterdom">
                                React-router-dom
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={this.handleDrawerToggle}>
                            <Link component={RouterLink} to="/skill/reactrouterdom2">
                                React-router-dom2
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={this.handleDrawerToggle}>
                            <Link component={RouterLink} to="/skill/redux">
                                Redux
                            </Link>
                        </MenuItem>
                    </Drawer>
                </div>
                <div id="content" style={{margin: 'auto', marginTop: '20px'}}>
                    {React.cloneElement(this.props.children)}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(AppShell);