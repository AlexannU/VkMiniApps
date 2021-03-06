import React from "react";
import PropTypes from "prop-types";
import {
  platform,
  IOS,
  PanelHeader,
  Panel,
  PanelHeaderButton,
  Radio,
  Div,
  Button,
} from "@vkontakte/vkui";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";

import "./Radio.css";

const osName = platform();

function Test(props) {
  let TestResult = [];
  let questions = props.questions;
  questions = questions.map((el, index) => {
    return (
      <Div key={index}>
        <Div>{el}</Div>
        <form>
          <div>
            <Radio
              className="form_radio_btn"
              name="radio"
              value="1"
              onChange={() => (TestResult[index] = 1)}
            >
              1
            </Radio>
            <Radio
              className="form_radio_btn"
              name="radio"
              value="2"
              onChange={() => (TestResult[index] = 2)}
            >
              2
            </Radio>
            <Radio
              className="form_radio_btn"
              name="radio"
              value="5"
              onChange={() => (TestResult[index] = 3)}
            >
              3
            </Radio>
            <Radio
              className="form_radio_btn"
              name="radio"
              value="4"
              onChange={() => (TestResult[index] = 4)}
            >
              4
            </Radio>
            <Radio
              className="form_radio_btn"
              name="radio"
              value="5"
              onChange={() => (TestResult[index] = 5)}
            >
              5
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
          <PanelHeaderButton onClick={() => props.go("home")}>
            {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
          </PanelHeaderButton>
        }
      >
        Тест
      </PanelHeader>
      {questions}

      <Div>
        <Button
          size="xl"
          mode="commerce"
          onClick={(e) => {
            e.preventDefault();
            props.res(TestResult);
            props.go("result");
          }}
        >
          Отправить результат
        </Button>
      </Div>
    </Panel>
  );
}

Test.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
};

export default Test;
