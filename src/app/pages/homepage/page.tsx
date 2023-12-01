import { Box, CloseButton, Container, Flex, Image, Text, Link } from "@chakra-ui/react";
import { FaEarthAsia } from "react-icons/fa6";

export default function HomePage() {
    return (
        <Box background={'blue'} minH='100vh'>
            <Container maxW='container.sm' minH={'600px'} background={'#ffa7a7'} padding={'16px'} marginTop={'66px'}>
                <Flex
                    justifyContent={'space-between'}
                    align={'center'}

                >
                    <Flex align={'center'}>
                        <Image
                            boxSize='36px'
                            objectFit='cover'
                            src='https://bit.ly/dan-abramov'
                            alt='Dan Abramov'
                            rounded={'4px'}
                            marginRight={'8px'}
                        />
                        <Box>
                            <Link
                                color='#050505'
                                fontWeight='600'
                                _hover={
                                    {
                                        textDecoration: 'underline',
                                    }
                                }
                            >
                                Testing VN Jobs
                            </Link>
                            <Flex
                                fontWeight='400'
                                fontSize='.8125rem'

                            >
                                <Link
                                    color='#65676B'>
                                    Name Name Name
                                </Link>
                                <Text
                                    as='span'
                                    // lineHeight='1.2308'
                                    margin={'0 6px'}
                                >
                                    -
                                </Text>
                                <Link
                                    color='#65676B'
                                >
                                    Time post
                                </Link>
                                <Text
                                    color='#65676B'
                                >
                                    <FaEarthAsia />
                                </Text>
                            </Flex>
                        </Box>
                    </Flex>
                    <Box>
                        <CloseButton />
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}