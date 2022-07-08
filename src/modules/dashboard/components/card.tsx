import { Box, Circle, Icon, LinkBox, Flex, Stat, StatLabel, StatNumber } from "@chakra-ui/react";

interface Props {
    key: string;
    icon: any;
    title: string;
    total: string | number;
}

function Card({ key,
    icon,
    title,
    total,
}: Props): JSX.Element {
    return (
        <LinkBox>
            <Box minH='125px' key={key} p={3}
                border="1px solid"
                borderColor="gray.300"
                borderRadius="md"
                minHeight="75px"
                _hover={{
                    borderColor: 'gray.300',
                    cursor: 'pointer',
                    backgroundColor: 'gray.100',
                }}>
                <Flex direction='column'>
                    <Flex
                        flexDirection='row'
                        align='center'
                        justify='center'
                        w='100%'
                    >
                        <Stat me='auto'>
                            <StatLabel
                                fontSize='xs'
                                color='gray.400'
                                fontWeight='bold'
                                textTransform='uppercase'>
                                {title}
                            </StatLabel>
                            <Flex>
                                <StatNumber fontSize='3xl' fontWeight='bold'>
                                    {total}
                                </StatNumber>
                            </Flex>
                        </Stat>
                        <Circle size='3em' bg='teal.600' color='white'>
                            <Icon boxSize="1em" as={icon} display="block" />
                        </Circle>
                    </Flex>
                </Flex>
            </Box>
        </LinkBox>

    );
}

export default Card;