import React from 'react'
import {ParagraphHeading} from "../Text";
import CardBase from "./CardBase";

const CardText = ({heading, single, children}) => (
    <CardBase noBanner={true}
              hasList={false}
              noBorder={true}
              single={single}>
        {heading && <ParagraphHeading>{heading}</ParagraphHeading>}
        {children}
    </CardBase>
);

export default CardText;