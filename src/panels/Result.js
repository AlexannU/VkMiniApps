import React from "react";
import PropTypes from "prop-types";
import {
  Div,
  Panel,
  PanelHeader,
  Button,
  Group,
  InfoRow,
  Progress,
} from "@vkontakte/vkui";

function Result(props) {
  console.log(props);
  let sum = 0;
  for (let i = 0; i < props.res.length; i++) {
    sum += props.res[i];
  }
  let resultat = Math.round((sum / props.res.length / 5) * 100);
  return (
    <Panel id={props.id}>
      <PanelHeader>Тест</PanelHeader>
      <Div>
        <Button size="xl" level="2" onClick={() => props.go("home")}>
          Home
        </Button>
      </Div>
      <Div>Поздрввляю, ты завалил тест без вариантов ответа</Div>
      <Div>Твой результат {resultat}</Div>
      <Group>
        <Div>
          <InfoRow header="Ваши умения в этой сфере">
            <Progress value={resultat} />
          </InfoRow>
        </Div>
      </Group>
    </Panel>
  );
}
Result.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};
export default Result;
