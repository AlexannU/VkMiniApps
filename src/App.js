import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import View from "@vkontakte/vkui/dist/components/View/View";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import "@vkontakte/vkui/dist/vkui.css";

import Home from "./panels/Home";
import Persik from "./panels/Persik";
import Result from "./panels/Result";

const questions = ["Вопрос 1", "Вопрос 2", "Вопрос 3"];
const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        const schemeAttribute = document.createAttribute("scheme");
        schemeAttribute.value = data.scheme ? data.scheme : "client_light";
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
  }, []);

  const go = (e) => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
    <View activePanel={activePanel}>
      <Home id="home" go={go} />
      <Persik id="persik" go={go} questions={questions} />
      <Result id="result" go={go} />
    </View>
  );
};

export default App;
