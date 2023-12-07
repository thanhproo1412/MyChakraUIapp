"use client"
import { Box, CloseButton, Container, Flex, Image, Text, Link, Button, Tooltip, Divider, Grid, GridItem, Collapse, forwardRef, FormControl, Input, Textarea } from "@chakra-ui/react";
import { FaEarthAsia } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaShareSquare } from "react-icons/fa";
import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { IoSend } from "react-icons/io5";


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

    const [show, setShow] = useState(false)

    const showMoreComment = () => setShow(!show)

    return (
        <Box background={'blue'} minH='100vh' marginTop={'66px'} >
            {/* Facebook Post */}
            <Container maxW='container.sm' minH={'600px'} background={'white'} padding={'0'} border={'solid 6px yellow'}>
                {/* Post information ------------------------------------------------------------------------------------------- */}
                <Flex justifyContent={'space-between'} padding={'12px 16px 0px 16px'} marginBottom={'12px'}>
                    <Flex align={'center'}>
                        <Link href='#'>
                            <Image boxSize='36px' objectFit='cover' src='https://bit.ly/dan-abramov' alt='Dan Abramov' rounded={'8px'} marginRight={'8px'} />
                        </Link>
                        <Box>
                            <UnderlineLink color='#050505' fontWeight='600'>
                                Testing VN Jobs
                            </UnderlineLink>
                            <Flex fontWeight='400' fontSize='.8125rem' color='#65676B'>
                                <UnderlineLink>Name Name Name</UnderlineLink>
                                <Text as='span' margin={'0 6px'}>
                                    -
                                </Text>
                                <UnderlineLink>Time post</UnderlineLink>
                                <Flex align={'center'} padding='0 8px'>
                                    <FaEarthAsia />
                                </Flex>
                            </Flex>
                        </Box>
                    </Flex>
                    <Flex align={'center'} >
                        <Button fontSize={'16px'} padding={'0'} borderRadius={'100px'} margin={'0'} background={"transparent"}
                            _hover={{
                                background: 'rgba(0, 0, 0, 0.06)'
                            }}>
                            <BsThreeDots />
                        </Button>
                        <Box>
                            <CloseButton />
                        </Box>
                    </Flex>
                </Flex>
                {/* This is the content of the post  ------------------------------------------------------------------------------*/}
                <Box padding={'4px 16px 16px 16px'}>
                    <Text>Thanh long trong mì cũng hay nhưng :</Text>
                </Box>
                {/* This is the image of the post ------------------------------------------------------------------------------ */}
                <Image boxSize='100%' maxH={'568px'} inset='calc(0% + 0px) calc(0% + 0px) calc(33.3333% + 1.01px)' objectFit='cover' src='https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/407361798_865260405601037_2574886706284498157_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=3635dc&_nc_ohc=8DrxGyD1kxsAX_T4DqE&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfB9CgTKUTPuVXrJgraeivrrd8IQ35Y4zfcKbvNHOtMs1w&oe=6572DB90' alt='Image of the post'
                />
                {/* Like, comment status --------------------------------------------------------------------------------------- */}
                <Flex align={'center'} alignContent={'space-between'} justifyContent={'space-between'} margin={'0px 16px'} padding={'10px 0'}>
                    <Tooltip label={<LikePeople />} placement='top'>
                        <Flex color={'white'} h={'18px'} w={'18px'} borderRadius={'100px'} background={'#077BFF'} fontSize='12px' cursor={'pointer'}>
                            <Box display='block' margin='auto' >
                                <AiFillLike />
                            </Box>
                        </Flex>
                    </Tooltip>
                    <Flex fontWeight='400' fontSize='.8125rem' color='#65676B'>
                        <Tooltip label={<LikePeople />} placement='top'>
                            <UnderlineLink margin={'0 8px'} >
                                5 Bình luận
                            </UnderlineLink>
                        </Tooltip>
                        <Tooltip label={<LikePeople />} placement='top'>
                            <UnderlineLink margin={'0 8px'} >
                                5 lượt chia sẻ
                            </UnderlineLink>
                        </Tooltip>
                    </Flex>
                </Flex>
                {/* Button like, comment ... --------------------------------------------------------------------------------------*/}
                <Box padding={'4px'} margin={'0px 12px'}>
                    <Divider />
                    <Grid templateColumns='repeat(3, 1fr)' color={'#65676B'} textAlign={'center'} lineHeight={'18px'}>
                        <GridItem colSpan={1} padding={'0 12px'}>
                            <Flex padding={'6px 2px'} background={'transparent'} height={'32px'} width={'100%'} alignItems={'center'} justifyContent={'center'}
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
                        </GridItem>
                        <GridItem colSpan={1} padding={'0 12px'}>
                            <Flex padding={'6px 2px'} background={'transparent'} height={'32px'} width={'100%'} alignItems={'center'} justifyContent={'center'}
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
                        </GridItem>
                        <GridItem colSpan={1} padding={'0 12px'}>
                            <Flex padding={'6px 2px'} background={'transparent'} height={'32px'} width={'100%'} alignItems={'center'} justifyContent={'center'}
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
                        </GridItem>

                    </Grid>
                    <Divider />
                </Box>
                {/* This is the comment of the post  ------------------------------------------------------------------------------*/}
                <Box padding={'4px 16px 16px 16px'}>
                    <UnderlineLink fontSize='.9375rem' onClick={showMoreComment} mt='1rem' color='#65676B'>
                        {show ? 'Ẩn bớt' : 'Xem thêm'}  bình luận
                    </UnderlineLink>

                </Box>
                {/* Comment ------------------------------------------------------------------------------------------- */}
                <Flex padding={'12px 16px 0px 16px'} marginBottom={'12px'}>
                    <Link h='36px' w='36px' href='#' padding={'0'} marginRight={'8px'}>
                        <Image maxW='36px' objectFit='contain' src='https://bit.ly/dan-abramov' alt='Dan Abramov' rounded={'22px'} padding={'0'} />
                    </Link>
                    <Box >
                        <Box position='relative'>
                            <Box padding={'8px 12px'} borderRadius={'8px'} bg={'#E4E6EB'} >
                                <UnderlineLink fontSize='.8125rem' fontWeight={'600'}>
                                    Aline Tran
                                </UnderlineLink>
                                <Text fontSize={'.9375r'} fontWeight={'400'}>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</Text>
                            </Box>
                            <Flex right='2px' bottom='-11px' position='absolute' alignItems={'center'}>
                                <Box borderTopLeftRadius={'100px'} borderBottomLeftRadius='100px' background={'white'} padding='2px'>
                                    <Flex color={'white'} h={'18px'} w={'18px'} fontSize='12px' cursor={'pointer'} background={'#0B7BFE'} borderRadius='100px'>
                                        <Box display='block' margin='auto' >
                                            <AiFillLike />
                                        </Box>
                                    </Flex>
                                </Box>
                                <Box background={'white'} padding='2px'>
                                    <Flex color={'white'} h={'18px'} w={'18px'} fontSize='12px' cursor={'pointer'} background={'#FB4462'} borderRadius='100px'>
                                        <Box display='block' margin='auto' >
                                            <FaHeart />
                                        </Box>
                                    </Flex>
                                </Box>
                                <Box borderTopRightRadius={'100px'} borderBottomRightRadius='100px' background={'white'} padding='2px'>
                                    <Flex h={'18px'} w={'18px'} fontSize='12px' cursor={'pointer'} >
                                        <Tooltip label={<LikePeople />} placement='top'>
                                            <UnderlineLink >42</UnderlineLink>
                                        </Tooltip>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                        <Flex>
                            <Flex fontWeight='400' fontSize='.8125rem' color='#65676B' paddingTop='3px 4px 0px 4px'>
                                <UnderlineLink margin='0px 8px'>6 giờ</UnderlineLink>
                                <UnderlineLink margin='0px 8px' fontWeight='600'>Thích</UnderlineLink>
                                <UnderlineLink margin='0px 8px' fontWeight='600'>Phản hồi</UnderlineLink>
                            </Flex>
                        </Flex>
                    </Box>

                </Flex>
                {/* Input Comment ------------------------------------------------------------------------------------------- */}
                <Flex padding={'12px 16px 0px 16px'} marginBottom={'12px'}>
                    <Link h='36px' w='36px' href='#' padding={'0'} marginRight={'8px'}>
                        <Image maxW='36px' objectFit='contain' src='https://bit.ly/dan-abramov' alt='Dan Abramov' rounded={'22px'} padding={'0'} />
                    </Link>
                    <Box padding={'8px 12px'} borderRadius={'8px'} bg={'#E4E6EB'} width={'100%'} >
                        <UnderlineLink fontSize='.8125rem' fontWeight={'600'}>
                            Aline Tran
                        </UnderlineLink>
                        <Box position='relative'>
                            <Box as='button' padding='8px' color='pink' position='absolute' bottom='0' right='0' zIndex={'2'}>
                                <IoSend />
                            </Box>
                            <Textarea placeholder='Here is a sample placeholder' />
                        </Box>
                    </Box>
                </Flex>
            </Container >
            <Box h={'800px'} textAlign={'center'} lineHeight={'800px'} fontSize={'200px'}>Test Div</Box>
        </Box >
    )
}


export const UnderlineLink = forwardRef(({ children, href, onClick, ...props }, ref) => {
    return (
        <Link ref={ref} href={href} {...props} onClick={onClick}
            userSelect={'none'}>
            {children}
        </Link>
    );
});
