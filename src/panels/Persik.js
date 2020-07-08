import React from "react";
import PropTypes from "prop-types";
import { platform, IOS } from "@vkontakte/vkui";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import { Radio, FormLayout, Div, Button } from "@vkontakte/vkui";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";

import persik from "../img/persik.png";
import "./Persik.css";

const osName = platform();
function Persik(props) {
  let TestResult = [];
  let questions = props.questions;
  questions = questions.map((el, index) => {
    return (
      <Div key={index}>
        <Div>{el}</Div>
        <form>
          <div>
            <Radio
              name="radio"
              value="1"
              onChange={() => (TestResult[index] = 1)}
            >
              О чем идет речь
            </Radio>
            <Radio
              name="radio"
              value="2"
              onChange={() => (TestResult[index] = 2)}
            >
              Имею представление
            </Radio>
            <Radio
              name="radio"
              value="3"
              onChange={() => (TestResult[index] = 3)}
            >
              Нормаааально
            </Radio>
            <Radio
              name="radio"
              value="3"
              onChange={() => (TestResult[index] = 4)}
            >
              Владею этим навыком
            </Radio>
            <Radio
              name="radio"
              value="3"
              onChange={() => (TestResult[index] = 5)}
            >
              Иисус
            </Radio>
          </div>
        </form>
      </Div>
    );
  });
  return (
    <Panel id={props.id}>
      <PanelHeader
        left={
          <PanelHeaderButton onClick={props.go} data-to="home">
            {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
          </PanelHeaderButton>
        }
      >
        Persik
      </PanelHeader>
      <img className="Persik" src={persik} alt="Persik The Cat" />
      {questions}

      <Div>
        <Button
          size="xl"
          mode="commerce"
          onMouseOver={(e) => {
            e.preventDefault();
            console.log(TestResult);
          }}
          onClick={props.go}
          data-to="result"
        >
          Подвести итог
        </Button>
      </Div>
    </Panel>
  );
}

Persik.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
};

export default Persik;
