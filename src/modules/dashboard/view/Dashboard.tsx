import {
    Box,
    Container,
    Grid,
    Heading,
    SimpleGrid,
    Flex,
    Text,
} from '@chakra-ui/react';
import { FiMap } from 'react-icons/fi';
import { RiGroupLine, RiBankLine } from 'react-icons/ri';
import ChartTotalSampah from '../components/line-chart';
import ChartSampahOlahan from '../components/pie-chart';
import dataBankSampah from '../../../lib/storage/data-bank-sampah.json';
import dataAnggota from '../../../lib/storage/data-anggota.json';
import Card from '../components/card';

const dataCard = [
    {
        id: '1',
        title: 'Total Rumah yang Termonitor',
        total: dataBankSampah.length,
        icon: FiMap,
        href: '/maps',
    },
    {
        id: '2',
        title: 'Total Satgas',
        total: dataAnggota.length,
        icon: RiGroupLine,
        href: '/anggota',
    },
    {
        id: '3',
        title: 'Total Bank Sampah',
        total: dataBankSampah.length,
        icon: RiBankLine,
        href: '/dashboard',
    },
];

function Dashboard(): JSX.Element {
    return (
        <Container maxW="100%" centerContent>
            <Box padding="4" color="black" w="100%" px="50">
                <Heading size="lg" fontSize="36px" textAlign="center" my={100}>
                    DASHBOARD
                </Heading>
                <Flex flexDirection="column" pt={{ base: '20px', md: '10px' }}>
                    <SimpleGrid columns={{ sm: 1, md: 3, xl: 3 }} spacing="24px" mb="20px">
                        {dataCard.map(item => {
                            return (
                                <Card
                                    key={item.id}
                                    icon={item.icon}
                                    title={item.title}
                                    total={item.total}
                                />
                            );
                        })}
                    </SimpleGrid>
                    <Grid
                        templateColumns={{ sm: '1fr', lg: '2fr 1fr' }}
                        templateRows={{ lg: 'repeat(2, auto)' }}
                        gap="20px"
                    >
                        <Box p="0px" maxW={{ sm: '320px', md: '100%' }}>
                            <Flex direction="column" mb="40px" p="28px 0px 0px 22px">
                                <Text fontSize="lg" fontWeight="bold" mb="6px">
                                    Sampah yang masuk
                                </Text>
                                <Text fontSize="sm">
                                    <Text as="span" color="green.400" fontWeight="bold">
                                        (+5) more{' '}
                                    </Text>
                                    in 2022
                                </Text>
                            </Flex>
                            <Box minH="300px">
                                <ChartTotalSampah />
                            </Box>
                        </Box>
                        <Box p="0px" maxW={{ sm: '320px', md: '100%' }}>
                            <Flex direction="column" mb="40px" p="28px 0px 0px 22px">
                                <Text color="gray.400" fontSize="sm" fontWeight="bold" mb="6px">
                                    Total
                                </Text>
                                <Text fontSize="lg" fontWeight="bold">
                                    Sampah yang Diolah
                                </Text>
                            </Flex>
                            <Box minH="300px">
                                <ChartSampahOlahan />
                            </Box>
                        </Box>
                    </Grid>
                </Flex>
            </Box>
        </Container>
    );
}

export default Dashboard;
