import { Box } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";

function Maps(): JSX.Element {
    const defaultProps = {
        center: {
            lat: -7.0059124,
            lng: 110.4387237
        },
        zoom: 15
    };

    return (
        <div >
            <Box w='100%' h='100vh'>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyANrSZmh9Dzui1tXkC9H6R72Jv_03JxGcE" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    yesIWantToUseGoogleMapApiInternals
                />
            </Box >
        </div >
    );
}

export default Maps;