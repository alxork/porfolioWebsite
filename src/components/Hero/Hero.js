import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = props => (
  <Section row nopadding>
    <LeftSection main center>
      <SectionTitle>
        Welcome to <br />
        My Personal Developer Portfolio
      </SectionTitle>
      <SectionText>
        Realment encara no tinc clar cap a on vull anar a parar amb tot això
        però espero anar-ho veient a mesura que milloro les meves habilitats.
      </SectionText>
      <Button onClick={()=>{window.location = 'https://google.com'}}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
