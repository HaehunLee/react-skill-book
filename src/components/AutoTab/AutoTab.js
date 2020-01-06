/*
*   props.menu is Tab Name. (String)
*   props.contents is Tab Contents (Component)
*   
*   made by Copotter
*/

import React from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import './Tab.css';
import "react-tabs/style/react-tabs.css";

const style={
    paddingBottom:"10px",
}

const AutoTab = (props) => {
	const {menu, contents,customStyle,customTab} = props

	return(
        <Tabs 
         style={customStyle!=null?customStyle:style}
         defaultIndex={props.startTabIndex ? props.startTabIndex : 0}>
            <TabList>
    		{menu.map((list, index) => (
	    		    <Tab style={customTab!=null?customTab:{}} key={index}>{list}</Tab>	
	    	))}
            </TabList>
            {contents.map((list, index) => (
                <TabPanel key={index}>{list}</TabPanel>
            ))}
        </Tabs>
	)
}

export const AutoTab_Testmenu = ["first_tab","second_tab"];
export const AutoTab_Testcontents = ["first_page", "second_page"];


export default AutoTab;