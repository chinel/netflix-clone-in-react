import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Player } from "../../components";

describe("<Player />", () => {
  it("render the <Player /> with a bunny video", () => {
    const { container, getByText, queryByTestId } = render(
      <Player>
        <Player.Button />
        <Player.Video src="/videos/bunny.mp4" />
      </Player>
    );

    expect(queryByTestId("player")).toBeFalsy();
    fireEvent.click(getByText("Play"));

    expect(queryByTestId("player")).toBeTruthy();
    fireEvent.click(queryByTestId("player")); //this clicks the player component which is more of like click outside the component and it sets it to falsy

    expect(queryByTestId("player")).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
