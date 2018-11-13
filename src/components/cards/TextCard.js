import React, {Fragment} from 'react'
import {ParagraphHeading} from "../Text";
import CardBase from "./CardBase";
import * as Text from "../Text";

const TextLines = ({ text }) => (
    <Fragment>
        {text.map(( line,key) => { return <Text.P key={key}> {line} </Text.P>; } )}
    </Fragment>
);

const TextCard = ({heading, single, text}) => (
    <CardBase noBanner={true}
              hasList={false}
              single={single}>
        {heading && <ParagraphHeading>{heading}</ParagraphHeading>}
        <TextLines text={text}/>
    </CardBase>
);

export default TextCard;