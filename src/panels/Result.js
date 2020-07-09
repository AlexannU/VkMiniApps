import React from "react";
import PropTypes from "prop-types";
import { Div, Panel, PanelHeader, Button } from "@vkontakte/vkui";

function Result(props) {
  console.log(props);
  return (
    <Panel id={props.id}>
      <PanelHeader>Example</PanelHeader>
      <Div>
        <Button size="xl" level="2" onClick={() => props.go("home")}>
          Home
        </Button>
      </Div>
      <Div>Поздрввляю, ты завалил тест без вариантов ответа</Div>
      <Div>Твой результат {props.res}</Div>
    </Panel>
  );
}
Result.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};
export default Result;
