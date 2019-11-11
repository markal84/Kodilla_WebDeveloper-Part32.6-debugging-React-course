import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from "./components/PlayersList/PlayersList";
import AddPlayer from "./components/AddPlayer/AddPlayer";

it('renders without crashing', () => {
  shallow(<App />);
});

it("should update player score", () => {
  const players = [
    {
      id: 1,
      name: "Kunegunda",
      score: 0
    },
    {
      id: 2,
      name: "Antoś",
      score: 0
    }
  ];
  const appComponent = shallow(<App players={[]} />);
  appComponent.setState({ players });
  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');

  onScoreUpdate(0, 5);
  const playersAfterUpdate = appComponent.state('players');

  expect(playersAfterUpdate[0].score).toEqual(5);
});

it("should add player", () => {
  const appComponent = shallow(<App player={[]} />);
  appComponent.setState({ players: [] }); //empty matrix with no players as beginning state
  const onPlayerAdd = appComponent.find(AddPlayer).prop("onPlayerAdd");
  onPlayerAdd("Ania");

  const players = appComponent.state('players');

  expect(players.length).toEqual(1);
  expect(players[0].name).toEqual("Ania");
  expect(players[0].score).toEqual(0);
});