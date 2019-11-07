import React from 'react';
import { shallow } from 'enzyme';
import Player from './Player';

it('renders without crashing', () => {
  shallow(<Player />);
});

it('renders correct name', () => {
    const playerNamePassed = 'Ania';
    const playerComponent = shallow(<Player name={playerNamePassed} />);
  
    const playerNameRendered = playerComponent.find('.Player__name').text();
  
    expect(playerNameRendered).toEqual(playerNamePassed);
  });

  it('renders correct score', () => { //player score exercise
    const playerScorePassed = 4;

    const playerComponent = shallow(<Player score={playerScorePassed} />);

    const playerScoreRendered = Number( //to convert text to number to display score as number
        playerComponent.find('.Player__score').text()
    );

    expect(playerScoreRendered).toEqual(playerScorePassed);
}); 

it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);
  
    const plusButton = playerComponent.find('.Player__button').at(0); // .at(i) function make .Player__button unique for a testing, without changing className of button, becasue it can't pass test on two buttons 
  
    plusButton.simulate('click');
  
    expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
  });

  it('should call onPlayerScoreChange with - 1 when minus button is clicked', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);
  
    const plusButton = playerComponent.find('.Player__button').at(1); // .at(i) function make .Player__button unique for a testing, without changing className of button, becasue it can't pass test on two buttons 
  
    plusButton.simulate('click');
  
    expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
  });