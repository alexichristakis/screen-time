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
  margin-left: 20px;
  font-weight: bold;
`;

const Italic = styled.span`
  font-style: italic;
`;

const Modal = ({ onClick }) => (
  <Container onClick={onClick}>
    <Window>
      <TopBar>
        <span>
          Screen Time — <Italic>the pickup problem</Italic>
        </span>
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
          In my generative art visualization, each pickup, each notification,
          and quantity of minutes are represented as dots (all color-coded by
          their type). To represent the various types of phone sessions,
          notifications and time are attracted to pickups. They’re distributed
          randomly across the pickups, and then rendered as independent
          simulations on the same canvas. Each phone session becomes a small
          cluster of dots with a single pickup. The animation is timed so that
          the a single session is added at a time, with its dots spread randomly
          across the whole display, resulting in a series of particles quickly
          clustering and organizing out of the initial chaos.
        </p>

        <p>
          I encourage you to play around with different values.{" "}
          <Italic>
            Explore how your visualization changes as you reduce or increase
            your pickups.
          </Italic>
        </p>

        <p>
          The amount of time we spend on our phones, and the amount of
          distraction they cause is more than we realize. People may disagree
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
          and not necessarily detract from one’s attentiveness. The definition
          of “screen time” is enormously broad, and with the proliferation of
          digital devices in the 21st century, it’s nearly impossible to do
          productive work without one.
        </p>

        <p>
          Even when examining an individual’s online usage it’s hard to grossly
          label it all as negative. Obviously not all screen time is “bad”, and
          the breakdown given by Screen Time by app category is helpful in
          diagnosing how a user may fall on the spectrum from meaningless time
          wasting (via social media, games, etc.) to what is considered more
          “thoughtful” content consumption (news reading, google searches, email
          sending etc.). But even the category of social media can’t entirely be
          spun with a negative valence.
        </p>

        <p>
          The original goal of social platforms was to connect humans with each
          other, and truly no products are more effective at doing so than apps
          like Facebook and Instagram. They also provide havens for those
          experiencing difficulties outside of the digital realm. Countless
          communities exist across forums like Reddit, Groups (from Facebook),
          and others, that provide unquantifiable support.
        </p>

        <Quote>
          “A 2011 university study suggested people check their phones
          thirty-four times per day. However, industry insiders believe that
          number is closer to an astounding 150 daily sessions.” (Eyal, 2014)
        </Quote>

        <p>
          Yet at the same time, 3 hours of phone usage divided across 200
          pickups is less than one minute spent per phone session on average.
          Even if those 3 hours are all in a category or usage undeniably
          “positive,” when it’s partitioned into micro-sessions it cannot
          provide the same value as fewer longer sessions, and still disrupts
          interactions in the physical world. While it’s easy to feel good
          learning that you spend an average of 1.5 hours on “Reading &
          Reference” a day—a category associated with news apps—if the average
          length of each session isn’t enough to read a single article the
          meaning of the time has to be reconsidered. My inspiration for this
          project came from these alternative considerations of our usage
          sessions, and how there’s more to the story of phone addiction that a
          single metric of hours in a day.
        </p>

        <p>
          Through exploring other possibilities for the visualization provided
          by Screen Time, I developed my own product for digesting the data. It
          builds on the idea of centering the discussion around the number of
          pickups a user has by distributing screen time usage and notifications
          amongst pickups as a way to emulate phone sessions. Each pickup is to
          serve a purpose: to check an email, read text messages, browse
          Facebook, read an article etc., and is prompted by some number of
          notifications calling for the user’s attention. Therefore it’s
          interesting to represent screen time usage around this premise of
          usage sessions, where the density of time spent in each app category
          can be explored across phone pickups. It’s also important to note that
          a pickup is defined by any trigger to turn the display on, and thus
          doesn’t have to go beyond the phone’s lock-screen.
        </p>

        <p>
          It's important to note that my algorithm to distribute minutes from
          each category between pickups is random, and could easily misrepresent
          what the user’s patterns actually are.
        </p>

        <Quote>
          “Through consecutive Hook cycles, successful products reach their
          ultimate goal of unprompted user engagement, bringing users back
          repeatedly, without depending on costly advertising or aggressive
          messaging.” (Eyal, 2014)
        </Quote>
      </Text>
    </Window>
  </Container>
);

export default Modal;
