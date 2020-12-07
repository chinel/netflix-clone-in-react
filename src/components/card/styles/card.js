import styled from "styled-components/macro";

export const Title = styled.p`
font-size: 24px;
color: #e5e5e5;
font-weight: bold;
margin-left: 56px;
margin-right: 56px;
margin-top:0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  box-sizing: border-box;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection === "row" ? "row" : "column"};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`}
  ${({ margin }) => margin && `margin: ${margin}`}

  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -150px;
    }
  }
`;

export const SubTitle = styled.p``;

export const Text = styled.p``;

export const Feature = styled.div``;

export const FeatureTitle = styled(Title)``;

export const FeatureText = styled.p``;

export const FeatureClose = styled.button``;

export const Maturity = styled.div``;

export const Content = styled.div``;

export const Meta = styled.div``;

export const Entities = styled.div``;

export const Item = styled.div``;

export const Image = styled.img``;
