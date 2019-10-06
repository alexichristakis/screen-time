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
  max-height: calc(100vh - 200px);
  max-width: 800px;
  background-color: black;
  border: solid 1px white;
  margin: 100px auto 200px auto;
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
  max-height: calc(100vh - 250px);
  padding: 0px 15px 10px 15px;
  line-height: 16pt;
  overflow-y: scroll;
`;

const Quote = styled.p`
  /* font-size: 16pt; */
  margin-left: 20px;
  /* margin-right: 40px; */
  /* font-style: italic; */
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
          fifteen minutes of waking up every morning.” (Eyal, 2014)
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
          (Eyal, 2014)
        </Quote>

        <p>
          Most of our digital products depend upon continued user engagement, to
          draw more revenue from ad impressions. They're incentivized to harness
          as much of our attention as possible.
        </p>

        <p>
          I think the most important aspect of our phone usage (which is often
          under-discussed) is the way in which we’re distracted and interrupted.
          Spending multiple hours a day on a device can be extremely productive,
          and not detract from one’s attentiveness by way of overstimulating.
          Obviously not all screen time is “bad”, and the breakdown by app
          category is helpful in diagnosing how a user may fall on the spectrum
          from meaningless time wasting (via social media, games, etc.) to
          thoughtful content consumption (news reading, google searches, email
          sending etc.). But at the same time, 3 hours of phone usage divided
          across 200 pickups is less than a minute per phone session on average.
          While it’s easy to feel good about 1.5 hours of “reading & reference”
          — a category associated with news apps — when the average length of
          each session is hardly enough to read a single article the meaning of
          the time has to be reconsidered.
        </p>

        <p>
          It's important to note that my algorithm to distribute minutes from
          each category between pickups is random, and could easily misrepresent
          what the user’s patterns actually are. Below are some other quotes and
          excerpts that insired this project.
        </p>

        <Quote>
          “Through consecutive Hook cycles, successful products reach their
          ultimate goal of unprompted user engagement, bringing users back
          repeatedly, without depending on costly advertising or aggressive
          messaging.” (Eyal, 2014)
        </Quote>

        <Quote>
          “A 2011 university study suggested people check their phones
          thirty-four times per day. However, industry insiders believe that
          number is closer to an astounding 150 daily sessions.” (Eyal, 2014)
        </Quote>

        <Quote>
          “Furthermore, the overall time spent on Facebook increased by 566%
          from 2007 to 2008.” (Kuss & Griffiths, 2011)
        </Quote>

        <Quote>
          “Fully one-third of Americans say they would rather give up sex than
          lose their cell phones.” (Eyal, 2014)
        </Quote>

        <Quote>
          “For these young people, new digital technologies are primary
          mediators of human-to-human connections. They have created a 24/7
          network that blends the human with the technological to a degree that
          people have never before experienced, and it is transforming human
          relationships in fundamental ways.” (Palfrey & Gasser, 2016)
        </Quote>

        <Quote>
          “In 2015, the average US teenage spent about nine hours per day using
          various digital devices, according to a study by Common Sense
          Media.”(Palfrey & Gasser, 2016)
        </Quote>

        <Quote>
          “The mass appeal of social networks on the Internet could potentially
          be a cause for concern, particularly when attending to the gradually
          increasing amounts of time people spend online.” (Kuss & Griffiths,
          2011)
        </Quote>
      </Text>
    </Window>
  </Container>
);

export default Modal;
