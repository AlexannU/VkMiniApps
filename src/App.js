import React, { useState, useEffect } from 'react';
import { View } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';

import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Test from './panels/Test'


const App = () => {
	 const [activePanel, setActivePanel] = useState('home');

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} >
			<Home id='home' go={go} />
			<Persik id='persik' go={go} />
			<Test id='Test' go={go}/>
		</View>
		
	);
}

export default App;

