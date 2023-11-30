'use client';
import Link from 'next/link'
// import styles from './globals.css'
import { Box, ChakraProvider } from '@chakra-ui/react'
// 1. Import the extendTheme function
import theme from './theme.tsx'
import { Button } from '@chakra-ui/react'


export default function Home() {

  return (

    <ChakraProvider theme={theme}>
      <Button fontSize={'xl'}>
        <Link href="pages/homepage">Go to Home page</Link>
      </Button>

      <Box
        as='button'
        height='24px'
        lineHeight='1.2'
        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
        border='1px'
        px='8px'
        borderRadius='2px'
        fontSize='14px'
        fontWeight='semibold'
        bg='#f5f6f7'
        borderColor='primary'
        color='primary'
        _hover={{ bg: '#ebedf0' }}
        _active={{
          bg: '#dddfe2',
          transform: 'scale(0.98)',
          borderColor: '#bec3c9',
        }}
        _focus={{
          boxShadow:
            '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
        }}
      >
        <Link href="pages/homepage">Go to Home page</Link>
      </Box>
    </ChakraProvider>

  )

}
