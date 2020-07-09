import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import View from "@vkontakte/vkui/dist/components/View/View";
import ScreenSpinner from "@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner";
import "@vkontakte/vkui/dist/vkui.css";

import Home from "./panels/Home";
import Persik from "./panels/Test";
import Result from "./panels/Result";
const TResult = [];
const questions = [
  "грамотная устная и письменная речь",
  "эмоциональный интеллект",
  "готовность работать в команде",
  "принятие критики",
  "способность сопереживать",
  "деловая этика",
  "толерантность",
  "умение слушать",
  "убеждение и аргументация",
  "нетворкинг: построение и поддержание бизнес-отношений",
  "ведение переговоров",
  "проведение презентаций",
  "базовые навыки продаж",
  "самопрезентация",
  "публичные выступления",
  "нацеленность на результат",
  "деловое письмо",
  "клиентоориентированность",
];
const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);
  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        const schemeAttribute = document.createAttribute("scheme");
        schemeAttribute.value = data.scheme ? data.scheme : "client_light";
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  const go = (e) => {
    setActivePanel(e);
  };
  const res = (e) => {
    for (let i = 0; i < e.length; i++) {
      TResult[i] = e[i];
    }
    console.log(TResult);
  };

  return (
    <View activePanel={activePanel}>
      <Home id="home" go={go} fetchedUser={fetchedUser} popout={popout} />
      <Persik id="persik" go={go} questions={questions} res={res} />
      <Result id="result" go={go} res={TResult} />
    </View>
  );
};

export default App;
