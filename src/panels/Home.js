import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import {
  Div,
  Group,
  Button,
  PanelHeader,
  Panel,
  Header,
} from "@vkontakte/vkui";
async function getSomeInfo() {
  const response = await axios.get("http://localhost:5000/api/find");
  console.log(response.data);
}
function Home({ id, go, fetchedUser, isNewUser }) {
  if (isNewUser) {
    return (
      <Panel id={id}>
        <PanelHeader>Проверь свои навыки</PanelHeader>
        {fetchedUser && (
          <Header>Добро пожаловать, {`${fetchedUser.first_name}`}!</Header>
        )}
        <Group title="Navigation Example">
          <Div>
            <Button size="xl" level="2" onClick={() => go("test")}>
              Ну даввай давай
            </Button>
          </Div>
          <Div>
            <Button size="xl" level="2" onClick={() => getSomeInfo()}>
              получаем данные
            </Button>
          </Div>
        </Group>
      </Panel>
    );
  }
  return (
    <Panel id={id}>
      <PanelHeader>Проверь свои навыки</PanelHeader>
      <Header>ТАК ТАК ТАК, тебе уже хватит</Header>
    </Panel>
  );
}

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.object.isRequired,
  isNewUser: PropTypes.bool.isRequired,
};

export default Home;
