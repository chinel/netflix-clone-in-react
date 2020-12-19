import React from "react";
import { render } from "@testing-library/react";
import { Profiles } from "../../components";

describe("<Profiles />", () => {
  it("renders the <Profiles /> with populated data", () => {
    const { container, getByText } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture
              src="/images/nelly.png"
              data-testid="profile-picture"
            />
            <Profiles.Name>Nelly Kally</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );
  });
});
