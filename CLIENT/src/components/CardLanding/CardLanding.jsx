import React from 'react'
// import img1 from '../../assets/image/images-libro.jpg'
// import img2 from '../../assets/image/libro-22.jpg'
// import img3 from '../../assets/image/libro-abierto.jpg'
// import style from '../CardLanding/CardLanding.module.css'

// export default function CardLanding() {
//   return (
//     <div className={style.container}>
//       <div className={style.card1}>
//         <img src={img1} alt="Not Found" />
//         <p>Importancia de la lectura</p>
//         <div className={style.card2}>
//           <img src={img2} alt="Img not found" />
//           <p>Leer hace bien</p>
//           <div className={style.card3}>
//             <img src={img3} alt="Not Found" />
//             <p>Los niños deben crecer leyendo</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// import { Card, CardBody, CardFooter, Stack, Heading, Image, Text } from '@chakra-ui/react'

// export default function CardLanding() {
//     return (

//         <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
//             <Stack direction={{ base: 'column', sm: 'row' }}>
//                 <Image
//                     objectFit='cover'
//                     maxW={{ base: '100%', sm: '200px' }}
//                     src='src\assets\image\libro-abierto.jpg'
//                     alt='Caffe Latte'
//                 />
//                 <Stack textAlign='center'>
//                     <Heading size='md' mt='18px'>Los beneficios de la lectura</Heading>
//                     <Text py='20'>
//                         Aprender a leer, a escribir, a alfabetizarse es, antes que nada, aprender a leer el mundo, comprender su contexto y no apenas una manipulación mecánica de palabras, sino, sobre todo, una relación dinámica que une el lenguaje con la realidad.
//                     </Text>
//                 </Stack>
//             </Stack>
//         </Card>
        
        
//     )
// }
// import { Card, Stack, Image, Heading, Text } from '@chakra-ui/react';
    
//     export default function CardLanding()
//      {
//         return (
//             <>
//                 <Card direction={{ base: 'column', sm: 'row' }}
//                     overflow='hidden'
//                     variant='outline'>
//                     <Stack direction={{ base: 'column', sm: 'row' }}>
//                         <Stack textAlign='center' py={{ base: '20px', sm: 0 }} mt={{ base: '20px', sm: 0 }}>
//                             <Heading size='md' mt= '20px'>La importancia de la lectura</Heading>
//                             <Text py='20'>
//                                 Aprender a leer, a escribir, a alfabetizarse es, antes que nada, aprender a leer el mundo, comprender su contexto y no apenas una manipulación mecánica de palabras, sino, sobre todo, una relación dinámica que une el lenguaje con la realidad.
//                             </Text>
//                         </Stack>
//                         <Image
//                             objectFit='cover'
//                             maxW={{ base: '100%', sm: '200px' }}
//                             src='src\assets\image\libro-abierto.jpg'
//                             alt='Caffe Latte'
//                         />
//                     </Stack>
//                 </Card>
//                 <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' mt='20px'>
//                     <Stack direction={{ base: 'column', sm: 'row' }}>
//                         <Image
//                             objectFit='cover'
//                             maxW={{ base: '100%', sm: '200px' }}
//                             src='src\assets\image\libros.jpeg'
//                             alt='Caffe Latte'
//                         />
//                         <Stack textAlign='center' py={{ base: '20px', sm: 0 }} mt={{ base: '20px', sm: 0 }}>
//                             <Heading size='md' mt= '20px'>Estás en el lugar correcto</Heading>
//                             <Text py='20'>
//                                 Leer no sólo es un buen hábito, sino que te brinda conocimiento, leer mejora tu comprensión lectora, leer ayuda a tu redacción y a tu ortografía. Leer te abre mundos nuevos que antes no conocías, leer es poder vivir una vida que nunca tendrás, leer es abrir paso a tu imaginación.
//                             </Text>
//                         </Stack>
//                     </Stack>
//                 </Card>
//             </>
            
//         );
//     }
// import { Card, Stack, Image, Heading, Text } from '@chakra-ui/react';

// export default function CardLanding() {
//     return (
//         <>
//             <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
//                 <Stack direction={{ base: 'column', sm: 'row' }}>
//                     <Stack textAlign='center' py={{ base: '20px', sm: 0 }} mt={{ base: '20px', sm: 0 }}>
//                         <Heading size='md' mt='20px'>La importancia de la lectura</Heading>
//                         <Text py='20'>
//                             Aprender a leer, a escribir, a alfabetizarse es, antes que nada, aprender a leer el mundo, comprender su contexto y no apenas una manipulación mecánica de palabras, sino, sobre todo, una relación dinámica que une el lenguaje con la realidad.
//                         </Text>
//                     </Stack>
//                     <Image
//                         objectFit='cover'
//                         maxW={{ base: '100%', sm: '200px' }}
//                         src='src\assets\image\libro-abierto.jpg'
//                         alt='Caffe Latte'
//                     />
//                 </Stack>
//             </Card>
//             <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' mt='40px'>
//                 <Stack direction={{ base: 'column', sm: 'row' }}>
//                     <Image
//                         objectFit='cover'
//                         maxW={{ base: '100%', sm: '200px' }}
//                         src='src\assets\image\libros.jpeg'
//                         alt='Caffe Latte'
//                     />
//                     <Stack textAlign='center' py={{ base: '20px', sm: 0 }} mt={{ base: '20px', sm: 0 }}>
//                         <Heading size='md' mt='20px'>Estás en el lugar correcto</Heading>
//                         <Text py='20'>
//                             Leer no sólo es un buen hábito, sino que te brinda conocimiento, leer mejora tu comprensión lectora, leer ayuda a tu redacción y a tu ortografía. Leer te abre mundos nuevos que antes no conocías, leer es poder vivir una vida que nunca tendrás, leer es abrir paso a tu imaginación.
//                         </Text>
//                     </Stack>
//                 </Stack>
//             </Card>
//             <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' mt='40px'>
//                 <Stack direction={{ base: 'column', sm: 'row' }}>
//                     <Image
//                         objectFit='cover'
//                         maxW={{ base: '100%', sm: '200px' }}
//                         src='src\assets\image\mujer-leyendo.jpg'
//                         alt='Mujer leyendo'
//                     />
//                     <Stack textAlign='center' py={{ base: '20px', sm: 0 }} mt={{ base: '20px', sm: 0 }}>
//                         <Heading size='md' mt='20px'>Descubre nuevos mundos</Heading>
//                         <Text py='20'>
//                             La lectura es una de las mejores maneras de descubrir nuevos mundos y experiencias sin salir de casa. Al leer, puedes viajar a lugares lejanos, aprender de culturas diferentes y sumergirte en historias emocionantes.
//                         </Text>
//                     </Stack>
//                 </Stack>
//             </Card>
//         </>
//     );
// }
// import { Card, Stack, Image, Heading, Text } from '@chakra-ui/react';

// export default function CardLanding() {
//     return (
//         <>
//             <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
//                 <Stack direction={{ base: 'column', sm: 'row' }}>
//                     <Stack textAlign='center' py={{ base: '20px', sm: 0 }} mt={{ base: '20px', sm: 0 }}>
//                         <Heading size='md' mt='20px'>La importancia de la lectura</Heading>
//                         <Text py='20'>
//                             Aprender a leer, a escribir, a alfabetizarse es, antes que nada, aprender a leer el mundo, comprender su contexto y no apenas una manipulación mecánica de palabras, sino, sobre todo, una relación dinámica que une el lenguaje con la realidad.
//                         </Text>
//                     </Stack>
//                     <Image
//                         objectFit='cover'
//                         maxW={{ base: '100%', sm: '200px' }}
//                         src='src\assets\image\libro-abierto.jpg'
//                         alt='Caffe Latte'
//                     />
//                 </Stack>
//             </Card>
//             <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' mt='40px'>
//                 <Stack direction={{ base: 'column', sm: 'row' }}>
//                     <Stack textAlign='center' py={{ base: '20px', sm: 0 }} mt={{ base: '20px', sm: 0 }}>
//                         <Heading size='md' mt='20px'>Estás en el lugar correcto</Heading>
//                         <Text py='20'>
//                             Leer no sólo es un buen hábito, sino que te brinda conocimiento, leer mejora tu comprensión lectora, leer ayuda a tu redacción y a tu ortografía. Leer te abre mundos nuevos que antes no conocías, leer es poder vivir una vida que nunca tendrás, leer es abrir paso a tu imaginación.
//                         </Text>
//                     </Stack>
//                     <Image
//                         objectFit='cover'
//                         maxW={{ base: '100%', sm: '200px' }}
//                         src='src\assets\image\libros.jpeg'
//                         alt='Caffe Latte'
//                     />
//                 </Stack>
//             </Card>
//             <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' mt='40px'>
//                 <Stack direction={{ base: 'column', sm: 'row' }}>
//                     <Image
//                         objectFit='cover'
//                         maxW={{ base: '100%', sm: '200px' }}
//                         src='src\assets\image\mujer-leyendo.jpg'
//                         alt='Mujer leyendo'
//                     />
//                     <Stack textAlign='center' py={{ base: '20px', sm: 0 }} mt={{ base: '20px', sm: 0 }}>
//                         <Heading size='md' mt='20px'>Descubre nuevos mundos</Heading>
//                         <Text py='20'>
//                             La lectura es una de las mejores maneras de descubrir nuevos mundos y experiencias sin salir de casa. Al leer, puedes viajar a lugares lejanos, aprender de culturas diferentes y sumergirte en historias emocionantes.
//                         </Text>
//                     </Stack>
//                 </Stack>
//             </Card>
//         </>
//     );
// }
import { Card, Stack, Image, Heading, Text } from '@chakra-ui/react';

export default function CardLanding() {
    return (
        <>
            <Card direction={{ base: 'column', sm: 'row-reverse' }} overflow='hidden' variant='outline'>
                <Stack direction={{ base: 'column', sm: 'row' }}>
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src='src\assets\image\libro-abierto.jpg'
                        alt='Caffe Latte'
                    />
                    <Stack textAlign='center' py={{ base: '20px', sm: 0 }} mt={{ base: '20px', sm: 0 }}>
                        <Heading size='md' mt='20px'>La importancia de la lectura</Heading>
                        <Text py='20'>
                            Aprender a leer, a escribir, a alfabetizarse es, antes que nada, aprender a leer el mundo, comprender su contexto y no apenas una manipulación mecánica de palabras, sino, sobre todo, una relación dinámica que une el lenguaje con la realidad.
                        </Text>
                    </Stack>
                </Stack>
            </Card>
            <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' mt='40px'>
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
            <Card direction={{ base: 'column', sm: 'row-reverse' }} overflow='hidden' variant='outline' mt='40px'>
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
        </>
    );
}