import { Box, CloseButton, Container, Flex, Image, Text, Link, Button, Tooltip, Divider, Grid, GridItem } from "@chakra-ui/react";
import { FaEarthAsia } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaShareSquare } from "react-icons/fa";


export const LikePeople = () => {

    return (
        <Box>
            <Text fontSize={'16px'} fontWeight={'600'} marginBottom={'8px'}>
                Thích
            </Text>

            <Text>
                Nguyễn Văn A
            </Text>

            <Text>
                Nguyễn Văn B
            </Text>

            <Text>
                Nguyễn Văn C
            </Text>

            <Text>
                Nguyễn Văn D
            </Text>
        </Box>
    )

}

export default function HomePage() {
    return (
        <Box background={'blue'} minH='100vh' marginTop={'66px'} >
            <Container maxW='container.sm' minH={'600px'} background={'white'} padding={'0'} border={'solid 6px yellow'}>
                <Box padding={'12px 16px 0px 16px'} marginBottom={'12px'}>
                    <Flex justifyContent={'space-between'} align={'center'}
                    >
                        <Flex align={'center'}>
                            <Link href='#'>
                                <Image boxSize='36px' objectFit='cover' src='https://bit.ly/dan-abramov' alt='Dan Abramov' rounded={'8px'} marginRight={'8px'} />
                            </Link>
                            <Box>
                                <Link color='#050505' fontWeight='600'
                                    _hover={{
                                        textDecoration: 'underline',
                                    }}>
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
                                    <Flex align={'center'}
                                        color='#65676B'
                                        padding='0 8px'
                                    >
                                        <FaEarthAsia />
                                    </Flex>
                                </Flex>
                            </Box>
                        </Flex>
                        <Flex align={'center'} justify={'center'}>
                            <Box>
                                <Button fontSize={'16px'} padding={'0'} borderRadius={'100px'} margin={'0'} background={"transparent"}
                                    _hover={{
                                        background: 'rgba(0, 0, 0, 0.06)'
                                    }}>
                                    <BsThreeDots />
                                </Button>
                            </Box>
                            <Box>
                                <CloseButton />
                            </Box>
                        </Flex>

                    </Flex>
                </Box>
                <Box padding={'4px 16px 16px 16px'}>
                    <Text>
                        This is the content of the post
                    </Text>
                </Box>
                <Box >
                    <Image boxSize='100%' maxH={'568px'} inset='calc(0% + 0px) calc(0% + 0px) calc(33.3333% + 1.01px)' objectFit='cover' src='https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/407361798_865260405601037_2574886706284498157_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=3635dc&_nc_ohc=8DrxGyD1kxsAX_T4DqE&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfB9CgTKUTPuVXrJgraeivrrd8IQ35Y4zfcKbvNHOtMs1w&oe=6572DB90' alt='Image of the post'
                    />
                </Box>
                <Box margin={'0px 16px'}
                    padding={'10px 0'}>
                    <Flex align={'center'} alignContent={'space-between'} justifyContent={'space-between'}>
                        <Flex color={'white'} h={'18px'} w={'18px'} borderRadius={'100px'} background={'#077BFF'} textAlign={'center'} lineHeight={'18px'} fontSize='12px' cursor={'pointer'}>
                            <Box display='block' margin='auto' >
                                <Tooltip label={<LikePeople />} placement='top'>
                                    <AiFillLike />
                                </Tooltip>
                            </Box>
                        </Flex>
                        <Flex fontWeight='400' fontSize='.8125rem'>
                            <Tooltip label={<LikePeople />} placement='top'>
                                <Link margin={'0 8px'} color='#65676B'>
                                    5 Bình luận
                                </Link>
                            </Tooltip>
                            <Tooltip label={<LikePeople />} placement='top'>
                                <Link margin={'0 8px'} color='#65676B'>
                                    5 lượt chia sẻ
                                </Link>
                            </Tooltip>
                            <Flex align={'center'} color='#65676B' padding='0 8px'>
                                <FaEarthAsia />
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
                <Box margin={'0px 12px'} >
                    <Box padding={'4px'}>
                        <Divider />
                        <Grid templateColumns='repeat(3, 1fr)'>
                            <GridItem colSpan={1} color={'#65676B'} textAlign={'center'} lineHeight={'18px'} padding={'0 12px'}>
                                <Box padding={'6px 2px'}>
                                    <Flex background={'transparent'} height={'32px'} width={'100%'} alignItems={'center'} justifyContent={'center'}
                                        lineHeight={'32px'} cursor={'pointer'} userSelect={'none'} borderRadius={'4px'} fontSize={'.9375rem'} fontWeight={'600'}
                                        _hover={{
                                            background: '#F0F2F5',
                                        }}
                                        _active={{
                                            background: '#cfe2ff',
                                        }}
                                    >
                                        <AiOutlineLike fontSize='24px' />
                                        <Text padding={'0 12px'}>
                                            Thích
                                        </Text>
                                    </Flex>
                                </Box>
                            </GridItem>
                            <GridItem colSpan={1} color={'#65676B'} textAlign={'center'} lineHeight={'18px'} padding={'0 12px'}>
                                <Box padding={'6px 2px'}>
                                    <Flex background={'transparent'} height={'32px'} width={'100%'} alignItems={'center'} justifyContent={'center'}
                                        lineHeight={'32px'} cursor={'pointer'} userSelect={'none'} borderRadius={'4px'} fontSize={'.9375rem'} fontWeight={'600'}
                                        _hover={{
                                            background: '#F0F2F5',
                                        }}
                                        _active={{
                                            background: '#cfe2ff',
                                        }}
                                    >
                                        <FaRegComment fontSize='24px' />
                                        <Text padding={'0 12px'}>
                                            Comment
                                        </Text>
                                    </Flex>
                                </Box>
                            </GridItem>
                            <GridItem colSpan={1} color={'#65676B'} textAlign={'center'} lineHeight={'18px'} padding={'0 12px'}>
                                <Box padding={'6px 2px'}>
                                    <Flex background={'transparent'} height={'32px'} width={'100%'} alignItems={'center'} justifyContent={'center'}
                                        lineHeight={'32px'} cursor={'pointer'} userSelect={'none'} borderRadius={'4px'} fontSize={'.9375rem'} fontWeight={'600'}
                                        _hover={{
                                            background: '#F0F2F5',
                                        }}
                                        _active={{
                                            background: '#cfe2ff',
                                        }}
                                    >
                                        <FaShareSquare fontSize='24px' />
                                        <Text padding={'0 12px'}>
                                            Share
                                        </Text>
                                    </Flex>
                                </Box>
                            </GridItem>

                        </Grid>
                        <Divider />
                    </Box>
                </Box>
            </Container >
        </Box >
    )
}