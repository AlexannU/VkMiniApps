import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import View from "@vkontakte/vkui/dist/components/View/View";
import "@vkontakte/vkui/dist/vkui.css";

import Home from "./panels/Home";
import Persik from "./panels/Persik";
import Result from "./panels/Result";
const TResult = [];
const questions = ["Вопрос 1", "Вопрос 2", "Вопрос 3"];
const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [fetchedUser, setUser] = useState(null);

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
      <Home id="home" go={go} fetchedUser={fetchedUser} />
      <Persik id="persik" go={go} questions={questions} res={res} />
      <Result id="result" go={go} res={TResult} />
    </View>
  );
};

export default App;
