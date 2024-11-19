'use client'

import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Container,
    Grid
} from '@chakra-ui/react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'

const data = [
    {
        isNew: true,
        imageURL:
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
        name: 'Wayfarer Classic',
        price: 4.5,
        rating: 4.2,
        numReviews: 34,
        urlProduct: '/pages/shop/productDetail'
    },
    {
        isNew: true,
        imageURL:
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
        name: 'Wayfarer Classic',
        price: 4.5,
        rating: 4.2,
        numReviews: 34,
        urlProduct: '/pages/shop/productDetail'
    },
    {
        isNew: true,
        imageURL:
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
        name: 'Wayfarer Classic',
        price: 4.5,
        rating: 4.2,
        numReviews: 34,
        urlProduct: '/pages/shop/productDetail'
    }, {
        isNew: true,
        imageURL:
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
        name: 'Wayfarer Classic',
        price: 4.5,
        rating: 4.2,
        numReviews: 34,
        urlProduct: '/pages/shop/productDetail'
    },
]

interface RatingProps {
    rating: number
    numReviews: number
}

function Rating({ rating, numReviews }: RatingProps) {
    return (
        <Box display="flex" alignItems="center">
            {Array(5)
                .fill('')
                .map((_, i) => {
                    const roundedRating = Math.round(rating * 2) / 2
                    if (roundedRating - i >= 1) {
                        return (
                            <BsStarFill
                                key={i}
                                style={{ marginLeft: '1' }}
                                color={i < rating ? 'teal.500' : 'gray.300'}
                            />
                        )
                    }
                    if (roundedRating - i === 0.5) {
                        return <BsStarHalf key={i} style={{ marginLeft: '1' }} />
                    }
                    return <BsStar key={i} style={{ marginLeft: '1' }} />
                })}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {numReviews} review{numReviews > 1 && 's'}
            </Box>
        </Box>
    )
}

function Shop() {
    return (
        <Container maxW="container.xl" p={4} mt='3em' mb='1em'>
            <Grid
                templateColumns={{
                    base: "repeat(1, 1fr)", // 1 column on extra-small screens
                    sm: "repeat(2, 1fr)",   // 2 columns on small screens
                    md: "repeat(2, 1fr)",   // 2 columns on medium screens
                    lg: "repeat(3, 1fr)",   // 3 columns on large screens
                    xl: "repeat(4, 1fr)",   // 4 columns on extra-large screens
                }}
                gap={6}
            >
                {data.map((item, index) => (
                    <Box
                        key={index}
                        bg={useColorModeValue("white", "gray.800")}
                        borderWidth="1px"
                        rounded="lg"
                        shadow="lg"
                        overflow="hidden"
                        p={4}
                        transition="all 0.3s ease-in-out" // Smooth transition effect
                        _hover={{
                            transform: "scale(1.05)",       // Slightly increase size
                            boxShadow: "xl",               // Add a larger shadow
                        }}
                    >
                        {/* {item.isNew && (
                            <Circle
                                size="10px"
                                position="absolute"
                                top={2}
                                right={2}
                                bg="red.200"
                            />
                        )} */}
                        <a href={item.urlProduct}>
                            <Image
                                src={item.imageURL}
                                alt={`Picture of ${item.name}`}
                                roundedTop="lg"
                                w="full"
                                h="200px"
                                objectFit="cover"
                            />
                        </a>
                        <Box mt={4}>
                            <Box display="flex" alignItems="baseline">
                                {item.isNew && (
                                    <Badge
                                        rounded="full"
                                        px={2}
                                        fontSize="0.8em"
                                        colorScheme="red"
                                    >
                                        New
                                    </Badge>
                                )}
                            </Box>
                            <Flex
                                mt={2}
                                justifyContent="space-between"
                                alignContent="center"
                            >
                                <a href={item.urlProduct}>
                                    <Box
                                        fontSize="lg"
                                        fontWeight="semibold"
                                        as="h4"
                                        lineHeight="tight"
                                        isTruncated
                                        _hover={{
                                            textDecoration: "underline",
                                            color: "teal.500",
                                        }}
                                    >
                                        {item.name}
                                    </Box>
                                </a>
                                <Tooltip
                                    label="Add to cart"
                                    bg="white"
                                    placement="top"
                                    color="gray.800"
                                    fontSize="1.2em"
                                >
                                    <chakra.a href="#" display="flex">
                                        <Icon
                                            as={FiShoppingCart}
                                            h={6}
                                            w={6}
                                            alignSelf="center"
                                        />
                                    </chakra.a>
                                </Tooltip>
                            </Flex>
                            <Flex mt={2} justifyContent="space-between" alignContent="center">
                                <Rating
                                    rating={item.rating}
                                    numReviews={item.numReviews}
                                />
                                <Box
                                    fontSize="lg"
                                    color={useColorModeValue("gray.800", "white")}
                                >
                                    <Box as="span" color="gray.600" fontSize="sm">
                                        £
                                    </Box>
                                    {item.price.toFixed(2)}
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                ))}
            </Grid>
        </Container>
    );
}





export default Shop