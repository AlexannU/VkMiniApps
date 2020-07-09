import React from "react";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import { Cell, Avatar, Header } from "@vkontakte/vkui";
function Home({ id, go, fetchedUser }) {
  return (
    <Panel id={id}>
      <PanelHeader>Softskills</PanelHeader>
      {fetchedUser && (
        <Header>Добро пожаловать,{`${fetchedUser.first_name}`}!</Header>
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
