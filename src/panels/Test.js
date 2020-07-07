import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';

import { Panel, PanelHeader, Header, Group, Cell, Radio, Div } from '@vkontakte/vkui';

import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';



const osName = platform();

const Test = props =>(
    <Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
            Test
		</PanelHeader>
        <Div style={{textAlign: 'center'}}>Вопрос 1
            <Div style={{display: 'flex'}}>
                <Radio name="radio" value="1">1</Radio>
                <Radio name="radio" value="2">2</Radio>
                <Radio name="radio" value="3">3</Radio>
                <Radio name="radio" value="4">4</Radio>
                <Radio name="radio" value="5">5</Radio>
            </Div>
        </Div>
        <Div style={{textAlign: 'center'}}>Вопрос 2</Div>
		<Div style={{display: 'flex'}}>
            <Radio name="radio" value="1">1</Radio>
            <Radio name="radio" value="2">2</Radio>
            <Radio name="radio" value="3">3</Radio>
            <Radio name="radio" value="4">4</Radio>
            <Radio name="radio" value="5">5</Radio>
        </Div>
	</Panel>
)

Test.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Test;