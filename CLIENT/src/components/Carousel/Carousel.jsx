import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import image1 from "../../assets/carousel_imagen/Carrusel10.jpg";
import image2 from "../../assets/carousel_imagen/Carrusel9.jpg";
import image3 from "../../assets/carousel_imagen/Carrusel8.jpg";
import image4 from "../../assets/carousel_imagen/Carrusel6.jpg";
import image5 from "../../assets/carousel_imagen/Carrusel4.png";
import logo1 from "../../assets/image/Logo.png";
import { Link } from "react-router-dom";

export default function MyCarouser() {
  const [showCarousel, setShowCarousel] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setShowCarousel(window.innerWidth >= 700);
    };

    handleResize(); // Verificar el estado inicial en el montaje del componente

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "brand.tertiary",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "brand.primary",
    },
  };
  const slides = [
    {
      img: image1,
      logo: logo1,
    },
    {
      img: image2,
    },
    {
      img: image3,
    },
    {
      img: image4,
    },
    {
      img: image5,
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  return (
    <>
      {showCarousel && (
        <Box
          w="full"
          overflow="hidden"
          alignItems="center"
          justifyContent="center"
          border="none"
          m={0}
        >
          <Flex
            w="full"
            pos="relative"
            overflow="hidden"
            h="300px"
            boxShadow="md"
          >
            <Flex
              w="100%"
              mb={"8"}
              _dark={{
                bg: "#3e3e3e",
              }}
              p={0}
              alignItems="center"
              justifyContent="center"
            >
              <Flex w="full" pos="relative" overflow="hidden" h="300px">
                <Flex h="300px" w="full" {...carouselStyle}>
                  {slides.map((slide, sid) => (
                    <Box
                      key={`slide-${sid}`}
                      boxSize="full"
                      shadow="md"
                      flex="none"
                    >
                      <Text
                        color="white"
                        fontSize="xs"
                        p="8px 12px"
                        pos="absolute"
                        top="0"
                      >
                        {sid + 1} / {slidesCount}
                      </Text>
                      <Link to="/home">
                        <Image
                          src={slide.img}
                          alt="carousel image"
                          boxSize="auto"
                          h="300px"
                          w="full"
                          backgroundSize="cover"
                        />
                      </Link>
                      {slide.logo && (
                        <Image
                          src={slide.logo}
                          alt="Logo"
                          boxSize="50px"
                          pos={slide.logoPosition || "absolute"}
                          top={slide.logoTop || "20px"}
                          right={slide.logoRight || "10px"}
                        />
                      )}
                      <Stack
                        p="8px 12px"
                        pos="absolute"
                        bottom="24px"
                        textAlign="left"
                        w="full"
                        mb="8"
                        color="white"
                      >
                        <Text fontSize="2xl">{slide.label}</Text>
                        <Text fontSize="lg">{slide.description}</Text>
                      </Stack>
                    </Box>
                  ))}
                </Flex>
                <Text {...arrowStyles} left="0" onClick={prevSlide}>
                  &#10094;
                </Text>
                <Text {...arrowStyles} right="0" onClick={nextSlide}>
                  &#10095;
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      )}
    </>
  );
}
