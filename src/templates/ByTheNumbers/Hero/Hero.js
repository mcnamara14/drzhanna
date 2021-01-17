import React from 'react';
import Button from '../../../components/Button/Button';

import { Section, InnerContainer, Title } from './styles';

const Hero = () => {
  return (
    <Section type="flex" justify="center">
      <InnerContainer xs={22} lg={10}>
        <h1>
          <span>By</span> The Numbers
        </h1>
        <p>
          <span>
            Under $5 to buy; Under 20 minutes to make; and Under 300 cal. to
            eat; Recipe for Success!
          </span>
        </p>
        <p>
          These recipes are not only fast and low cal, they are really good! The
          most important part of successful weight loss program is not feeling
          hungry, but eating fewer calories usually means giving up portions.
          With these low calorie recipes you can have both amazing taste and
          good size portions, actually great size portions! So you will never be
          hungry, yet you will eat a lot fewer calories. What more can one ask
          for!
        </p>
        <a
          href="https://www.amazon.com/Numbers-Under-Minutes-Recipe-Success/dp/1736334409"
          target="_blank"
        >
          <Button title="BY THE BOOK" margin="30px 0 0 0" />
        </a>
      </InnerContainer>
    </Section>
  );
};

export default Hero;
