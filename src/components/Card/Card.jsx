import React from 'react';
import styled from 'styled-components';
import EquilibriumImg from '../../assets/images/image-equilibrium.jpg';
import AvatarImg from '../../assets/images/image-avatar.png';
import IconView from '../../assets/images/icon-view.svg';
import IconEthereum from '../../assets/images/icon-ethereum.svg';
import IconClock from '../../assets/images/icon-clock.svg';
import EquilibriumHoverImg from '../../assets/images/image-equilibrium-hover.png'

const Card = () => {
  return (
    <CardWrapper>
      <CardImageWrapper>
        <CardImage />
        <CardImageBackground>
          <ViewIcon src={IconView} alt="eyewitness" />
        </CardImageBackground>
      </CardImageWrapper>
      <Title>Equilibrium #3429</Title>
      <Description>Our Equilibrium collection promotes balance and calm.</Description>
      <InfoWrapper>
        <CounterText>
          <CounterIcon src={IconEthereum} alt="money" />
          0.041 ETH
        </CounterText>
        <DaysLeftText>
          <ClockIcon src={IconClock} alt={'clock'} /> 3 days left
        </DaysLeftText>
      </InfoWrapper>
      <Line />
      <AuthorWrapper>
        <AuthorImg src={AvatarImg} alt={'photo'} />
        <AuthorText>
          Creation of <AuthorNameText>Jules Wyvern</AuthorNameText>
        </AuthorText>
      </AuthorWrapper>
    </CardWrapper>
  );
};

export default Card;

const CardImageWrapper = styled.div`
  padding-top: 24px;
  position: relative;
`;

const CardWrapper = styled.div`
  width: 100%;
  background-color: #15263f;
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.0952917);
  border-radius: 15px;

  @media (min-width: 390px) {
    width: 350px;
    height: 596px;
  }
`;

const CardImage = styled.div`
  width: 278px;
  height: 278px;
  margin: 0 25px;
  border-radius: 8px;
  background-image: url(${EquilibriumImg});
  background-size: cover;

  @media (min-width: 390px) {
    width: 302px;
    height: 302px;
  }

  &:hover {
    background-image: url(${EquilibriumHoverImg});
  }
`;

const CardImageBackground = styled.div`
  display: none;
  margin: 24px 25px;
  width: 278px;
  height: 278px;
  background: #00fff8;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 1;

  @media (min-width: 390px) {
    width: 302px;
    height: 302px;
  }

  &:hover {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
`;

const ViewIcon = styled.img`
  width: 48px;
  height: 48px;
`;

const Title = styled.p`
  margin: 0;
  margin-top: 24px;
  margin-left: 24px;
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #ffffff;
  text-align: left;

  &:hover {
    color: #00fff8;
  }
`;

const Description = styled.p`
  margin: 0;
  margin-top: 12px;
  margin-left: 14px;
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  color: #8bacd9;

  text-align: left;

  @media (min-width: 390px) {
    margin-left: 0 24px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 24px;
`;

const CounterIcon = styled.img`
  width: 11px;
  height: 18px;
  padding-right: 6.5px;
`;

const CounterText = styled.p`
  display: flex;
  align-items: center;

  font-family: 'Outfit';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  color: #00fff8;
`;

const ClockIcon = styled.img`
  width: 16px;
  height: 16px;
  padding-right: 8px;
`;
const DaysLeftText = styled.p`
  display: flex;
  align-items: center;

  font-family: 'Outfit';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  color: #8bacd9;
`;

const Line = styled.div`
  height: 1px;
  margin: 0 25px;
  background: #2e405a;
`;

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-left: 24px;
  padding-bottom: 24px;

  @media (min-width: 390px) {
    padding-bottom: 32px;
  }
`;

const AuthorImg = styled.img`
  width: 33px;
  height: 33px;
`;

const AuthorText = styled.p`
  margin: 0;
  margin-left: 16px;
  display: flex;
  align-items: center;
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  color: #8bacd9;
`;

const AuthorNameText = styled.p`
  margin-left: 5px;
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  color: #ffffff;

  &:hover {
    color: #00fff8;
  }
`;
