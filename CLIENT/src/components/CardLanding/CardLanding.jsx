import React from 'react'

import { Card, Stack, Image, Heading, Text } from '@chakra-ui/react';

export default function CardLanding() {
    return (
        <Stack maxW="6xl" mx="auto" px={5}>
            <Card boxShadow="0 1px 15px rgba(0,0,0,0.3)" style={{ backgroundColor: " #9685855f" }} direction={{ base: 'column', sm: 'row-reverse' }}
                overflow='hidden'
                variant='outline'>
                <Stack direction={{ base: 'column', sm: 'row' }}>
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src='src\assets\image\libro-abierto.jpg'
                        alt='Caffe Latte'
                    />
                    <Stack textAlign='center'
                        py={{ base: '20px', sm: 0 }}
                        mt={{ base: '20px', sm: 0 }}>
                        <Heading size='md' mt='20px'>La importancia de la lectura</Heading>
                        <Text py='20'>
                            Aprender a leer, a escribir, a alfabetizarse es, antes que nada, aprender a leer el mundo, comprender su contexto y no apenas una manipulación mecánica de palabras, sino, sobre todo, una relación dinámica que une el lenguaje con la realidad.
                        </Text>
                    </Stack>
                </Stack>
            </Card>
            <Card boxShadow="0 1px 15px rgba(0,0,0,0.3)" style={{ backgroundColor: " #9685855f" }} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' mt='40px'>
                <Stack direction={{ base: 'column', sm: 'row-reverse' }}>
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src='src\assets\image\libros.jpeg'
                        alt='Caffe Latte'
                    />
                    <Stack textAlign='center' py={{ base: '20px', sm: 0 }} mt={{ base: '20px', sm: 0 }}>
                        <Heading size='md' mt='20px'>Estás en el lugar correcto</Heading>
                        <Text py='20'>
                            Leer no sólo es un buen hábito, sino que te brinda conocimiento, leer mejora tu comprensión lectora, leer ayuda a tu redacción y a tu ortografía. Leer te abre mundos nuevos que antes no conocías, leer es poder vivir una vida que nunca tendrás, leer es abrir paso a tu imaginación.
                        </Text>
                    </Stack>
                </Stack>
            </Card>
            <Card boxShadow="0 1px 15px rgba(0,0,0,0.3)" style={{ backgroundColor: " #9685855f" }} direction={{ base: 'column', sm: 'row-reverse' }} overflow='hidden' variant='outline' mt='40px'>
                <Stack direction={{ base: 'column', sm: 'row' }}>
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src='src\assets\image\libro.secreto.jpeg'
                        alt='Mujer leyendo'
                    />
                    <Stack textAlign='center' py={{ base: '20px', sm: 0 }} mt={{ base: '20px', sm: 0 }}>
                        <Heading size='md' mt='20px'>Descubre nuevos mundos</Heading>
                        <Text py='20'>
                            Te ayuda a moverte por el mundo con mayor facilidad. La capacidad de leer otorga al lector no solo habilidades de vida necesarias y horas de disfrute literario, sino también una mayor capacidad intelectual y capacidad para desarrollar el cerebro. La #lectura nos hace más inteligentes.
                        </Text>
                    </Stack>
                </Stack>
            </Card>
        </Stack>
    );
}