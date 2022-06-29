import { Box } from '@chakra-ui/react';
import GoogleMapReact from 'google-map-react';
import MarkerBankSamapah from '../components/marker-bank-sampah';
import MarkerAnggota from '../components/marker-anggota';
import dataBankSampah from '../../../lib/storage/data-bank-sampah.json';
import dataAnggota from '../../../lib/storage/data-anggota.json';

function Maps(): JSX.Element {
    const defaultProps = {
        center: {
            lat: -7.0059124,
            lng: 110.4387237,
        },
        zoom: 15,
    };

    return (
        <Box w="100%" h="100vh">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyANrSZmh9Dzui1tXkC9H6R72Jv_03JxGcE' }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                options={{
                    fullscreenControl: false,
                    minZoom: 15,
                    maxZoom: 18,
                }}
                yesIWantToUseGoogleMapApiInternals
                resetBoundsOnResize
            >
                {dataBankSampah.map(item => {
                    return (
                        <MarkerBankSamapah
                            lat={item.koordinat.lat}
                            lng={item.koordinat.lng}
                            nama={item.nama}
                            alamat={item.lokasi.alamat}
                            kelurahan={item.lokasi.kelurahan}
                            kecamatan={item.lokasi.kecamatan}
                            isActive={item.isActive}
                        />
                    );
                })}
                {dataAnggota
                    .filter(item => item.isActive === true)
                    .map(item => {
                        return (
                            <MarkerAnggota
                                lat={item.koordinat.lat}
                                lng={item.koordinat.lng}
                                nama={item.nama}
                                alamat={item.lokasi.alamat}
                                kelurahan={item.lokasi.kelurahan}
                                kecamatan={item.lokasi.kecamatan}
                                isActive={item.isActive}
                            />
                        );
                    })}
            </GoogleMapReact>
        </Box>
    );
}

export default Maps;
