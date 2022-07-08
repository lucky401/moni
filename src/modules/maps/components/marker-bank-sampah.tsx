import {
    Popover,
    PopoverTrigger,
    Button,
    PopoverContent,
    PopoverHeader,
    PopoverArrow,
    PopoverCloseButton,
    PopoverBody,
    Text,
    Box,
    Tag,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

interface Props {
    nama: string;
    alamat: string;
    kelurahan: string;
    kecamatan: string;
    isActive: boolean;
    lat: string;
    lng: string;
}

function Marker({
    nama,
    alamat,
    kelurahan,
    kecamatan,
    isActive,
}: Props): JSX.Element {
    return (
        <Popover isLazy>
            <PopoverTrigger>
                <Button colorScheme="transparent">
                    <DeleteIcon w={5} h={5} color="teal.500" />
                </Button>
            </PopoverTrigger>
            <PopoverContent fontSize="sm">
                <PopoverHeader fontWeight="semibold">{nama}</PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                    <Text>Alamat : {alamat} </Text>
                    <Text>Kelurahan : {kelurahan} </Text>
                    <Text>Kecamatan : {kecamatan} </Text>
                    <Box>
                        <Text>
                            Status :{' '}
                            {isActive === true ? (
                                <Tag size="sm" variant="solid" colorScheme="teal">
                                    Buka
                                </Tag>
                            ) : (
                                <Tag size="sm" variant="solid" colorScheme="gray">
                                    Tutup
                                </Tag>
                            )}{' '}
                        </Text>
                    </Box>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
}

export default Marker;
