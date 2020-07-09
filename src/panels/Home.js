import React from "react";
import PropTypes from "prop-types";
import {
  Div,
  Group,
  Button,
  PanelHeader,
  Panel,
  Header,
} from "@vkontakte/vkui";

function Home({ id, go, fetchedUser }) {
  return (
    <Panel id={id}>
      <PanelHeader>Проверь свои навыки</PanelHeader>
      {fetchedUser && (
        <Header>Добро пожаловать, {`${fetchedUser.first_name}`}!</Header>
      )}
      <Group title="Navigation Example">
        <Div>
          <Button size="xl" level="2" onClick={() => go("persik")}>
            Ну даввай давай
          </Button>
        </Div>
      </Group>
    </Panel>
  );
}

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.object.isRequired,
};

export default Home;
