import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(50, 50, 50, 0.5);
  color: white;
`;

const Window = styled.div`
  max-height: calc(100vh - 100px);
  max-width: 800px;
  background-color: black;
  border: solid 1px white;
  margin: 100px auto;
`;

const TopBar = styled.div`
  display: flex;
  border-bottom: solid 1px white;
  justify-content: space-between;
  padding: 10px 15px 10px;
  text-align: right;
`;

const Close = styled.a`
  cursor: pointer;
  text-align: right;
`;

const Text = styled.div`
  max-height: calc(100vh - 150px);
  padding: 0px 15px 10px 15px;
  line-height: 16pt;
  overflow-y: scroll;
`;

const Quote = styled.p`
  font-weight: bold;
`;

const Modal = ({ onClick }) => (
  <Container onClick={onClick}>
    <Window>
      <TopBar>
        Screen Time
        <Close onClick={onClick}>close</Close>
      </TopBar>
      <Text>
        <p>
          This project generates art based on your screen time data from iOS
          (after 12.0).
        </p>
        <p>
          Data can be found at Settings -> Screen Time -> See Full Activity.
          Enter your top 3 categories, pickups per day, and notifications per
          day. Over the following seconds, each pickup becomes a nexus for the
          notifications that motivated it and the screen time categories which
          followed.
        </p>
        <Quote>
          “Seventy-nine percent of smartphone owners check their device within
          fifteen minutes of waking up every morning.” - Nir Eyal
        </Quote>
        <p>
          The amount of time we spend on our phones, and the amount of
          distraciton they cause is more than we realize. People may disagree
          with the detrimental effects, or the degree to which we should be
          concerned. I hope that through my visualization I can argue that
          hours/day is not the only metric that should be considered when
          analyzing phone usage--our day is comprised of potentially hundreds of
          micro-interactions that accumulate to hours of time. This time is
          distributed across a number of potential app categories (some
          considered better or worse than others). Every push notification we
          receive is an attempt by our phone to distract. Our digital products
          are increasingly designed to keep us hooked, using variable reward
          systems to build habitual relationships.
        </p>

        <Quote>
          “Forming habits is imperative for the survival of many products.”
        </Quote>

        <Quote>
          “Through consecutive Hook cycles, successful products reach their
          ultimate goal of unprompted user engagement, bringing users back
          repeatedly, without depending on costly advertising or aggressive
          messaging.”
        </Quote>

        <p>As a result,</p>

        <Quote>
          “A 2011 university study suggested people check their phones
          thirty-four times per day. However, industry insiders believe that
          number is closer to an astounding 150 daily sessions.”
        </Quote>
      </Text>
    </Window>
  </Container>
);

export default Modal;
