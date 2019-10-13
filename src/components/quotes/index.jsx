import React from "react";
import Ticker from "react-ticker";
import styled from "styled-components";

import gradient from "./gradient.svg";

const Container = styled.div`
  position: absolute;
  height: 20px;
  bottom: 30px;
  left: 0;
  right: 0;
`;

const Quote = styled.p`
  color: white;
  margin-right: 30px;
`;

const Gradient = styled.img.attrs({ src: gradient, alt: "" })`
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const quotes = [
  `“Seventy-nine percent of smartphone owners check their device within 
  fifteen minutes of waking up every morning.” (Eyal, 2014)`,
  `“Forming habits is imperative for the survival of many products.” (Eyal, 2014)`,
  `“Through consecutive Hook cycles, successful products reach their 
  ultimate goal of unprompted user engagement, bringing users back
  repeatedly, without depending on costly advertising or aggressive
  messaging.” (Eyal, 2014)`,
  `"A 2011 university study suggested people check their phones
  thirty-four times per day. However, industry insiders believe that
  number is closer to an astounding 150 daily sessions.” (Eyal, 2014)`,
  `“Furthermore, the overall time spent on Facebook increased by 566%
  from 2007 to 2008.” (Kuss & Griffiths, 2011)`,
  `“Fully one-third of Americans say they would rather give up sex than
  lose their cell phones.” (Eyal, 2014)`,
  `“For these young people, new digital technologies are primary
  mediators of human-to-human connections.” (Palfrey & Gasser, 2016)`,
  `"They have created a 24/7 network that blends the human with the technological to a degree that
  people have never before experienced, and it is transforming human
  relationships in fundamental ways." (Palfrey & Gasser, 2016)`,
  `“In 2015, the average US teenage spent about nine hours per day using
  various digital devices, according to a study by Common Sense
  Media.”(Palfrey & Gasser, 2016)`,
  `“The mass appeal of social networks on the Internet could potentially
  be a cause for concern, particularly when attending to the gradually
  increasing amounts of time people spend online.” (Kuss & Griffiths,
    2011)`
];

const Quotes = () => {
  return (
    <Container>
      <Ticker offset={"100%"}>
        {({ index }) => <Quote>{quotes[(index % quotes.length) - 1]}</Quote>}
      </Ticker>
      <Gradient />
    </Container>
  );
};

export default Quotes;
