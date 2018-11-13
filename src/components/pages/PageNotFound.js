// const propTypes = {
//     location: PropTypes.object.isRequired,
// };
import React from 'react'
import * as Text from '../Text'
export default function PageNotFound({ location }) {
    return (
            <Text.P>
                Page not found - the path, {location.pathname},
            did not match any React Router routes.
            </Text.P>
    );
}