import Footer from "../Footer/Footer";
import ButtonVolver from "../../elements/ButtonVolver";
import {
  Box,
  Flex,
  chakra,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapPin,
  FaSuitcase,
  FaTwitter,
} from "react-icons/fa";
import linkedinImage from "../../assets/image/Linkedin_Henry1.png";
import "./contacto.css";
import peruImage from "../../assets/image/peru.png";
import argentinaImage from "../../assets/image/argentina.png";
import venezuelaImage from "../../assets/image/venezuela.png";
import armandoImage from "../../assets/image/armando.png";

export default function contacto() {
  return (
    <div id="top">
      <ButtonVolver />
      <Flex
        _dark={{
          bg: "#3e3e3e",
        }}
        p={30}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          backgroundImage={linkedinImage}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          borderRadius={"5px"}
          _dark={{
            bg: "gray.800",
          }}
        >
          <Box
            maxW="10xl"
            w={{
              md: "3xl",
              lg: "4xl",
            }}
            mx="auto"
            py={{
              base: 12,
              lg: 16,
            }}
            px={{
              base: 4,
              lg: 8,
            }}
            display={{
              lg: "flex",
            }}
            alignItems={{
              lg: "center",
            }}
            justifyContent={{
              lg: "space-between",
            }}
          >
            <chakra.h2
              fontSize={{
                base: "3xl",
                sm: "4xl",
              }}
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="shorter"
              color="gray.900"
              _dark={{
                color: "gray.100",
              }}
            >
              <chakra.span display="block">
                En Camino para ser un . . .
              </chakra.span>
              <chakra.span
                display="block"
                color="brand.600"
                _dark={{
                  color: "gray.500",
                }}
              >
                Desarrollador Full Stack
              </chakra.span>
            </chakra.h2>
            <Stack
              direction={{
                base: "column",
                sm: "row",
              }}
              mt={{
                base: 8,
                lg: 0,
              }}
              flexShrink={{
                lg: 0,
              }}
            >
              <Link
                w={["full", "auto"]}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={10}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                shadow="md"
                color="white"
                bg="#70a57b"
                _hover={{
                  bg: "black",
                  color: "yellow.100",
                }}
              >
                <a
                  href="https://www.soyhenry.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ir a Henry
                </a>
              </Link>
            </Stack>
          </Box>
        </Box>
      </Flex>
      ;
      <Flex
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        gap={4}
        justifyContent="center"
        alignItems="center"
        bg="transparent"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={30}
        w="full"
      >
        <Flex
          boxShadow={
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
          }
          rounded="lg"
          bg="#70a57b"
          _dark={{
            bg: "gray.800",
          }}
          mb={8}
          direction="column"
          alignItems="center"
          justifyContent="center"
          _hover={{
            transform: "scale(1.01)",
          }}
        >
          <Box
            bg="transparent"
            boxShadow={
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
            }
            _dark={{
              bg: "#3e3e3e",
            }}
            style={{
              backgroundImage: `url(${linkedinImage})`,
              backgroundSize: "cover",
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
            }}
            height="100%"
            width="100%"
            borderRadius="lg"
            p={8}
            display="flex"
            alignItems="left"
          >
            <Image
              src="https://images.unsplash.com/photo-1623930154261-37f8b293c059?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="Profile Picture"
              borderRadius="full"
              boxSize="150px"
              boxShadow={
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
              }
              border="3px solid"
              mb={-20}
              borderColor="gray.800"
              _dark={{
                borderColor: "gray.200",
              }}
            />
          </Box>
          <Box
            gridColumn="span 8"
            p={4}
            width="full"
            height="full"
            borderRadius="lg"
            textAlign="left"
            mt={5}
          >
            <Text
              fontSize="4xl"
              fontWeight="bold"
              color="white"
              _dark={{
                color: "white",
              }}
            >
              Blenda
              <br />
              Reyes
            </Text>
            <HStack
              spacing={6}
              color="gray.800"
              _dark={{
                color: "gray.200",
              }}
            >
              <FaSuitcase size={20} />
              <Text
                fontSize="1xl"
                fontWeight="bold"
                color="gray.800"
                _dark={{
                  color: "gray.200",
                }}
              >
                Full Stack Developer
              </Text>
            </HStack>
            <HStack
              spacing={6}
              color="gray.700"
              _dark={{
                color: "gray.200",
              }}
            >
              <FaMapPin size={20} />
              <Text
                fontSize="lg"
                fontWeight={"bold"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                Perú
                <img src={peruImage} width={"50px"} height={"50px"}></img>
              </Text>
            </HStack>
            <HStack
              spacing={6}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Link href="mailto:correo@example.com" isExternal>
                <Tooltip label="Enviar correo electrónico" placement="top">
                  <FaEnvelope size={30} className="social-icon" />
                </Tooltip>
              </Link>
              <Link href="https://github.com/tu_usuario_github" isExternal>
                <Tooltip label="Visitar GitHub" placement="top">
                  <FaGithub size={30} className="social-icon" />
                </Tooltip>
              </Link>
              <Link
                href="https://www.linkedin.com/in/tu_perfil_linkedin"
                isExternal
              >
                <Tooltip label="Visitar LinkedIn" placement="top">
                  <FaLinkedin size={30} className="social-icon" />
                </Tooltip>
              </Link>
              <Link href="https://twitter.com/tu_usuario_twitter" isExternal>
                <Tooltip label="Visitar Twitter" placement="top">
                  <FaTwitter size={30} className="social-icon" />
                </Tooltip>
              </Link>
            </HStack>
          </Box>
        </Flex>

        <Flex
          boxShadow={
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
          }
          rounded="lg"
          bg="#70a57b"
          _dark={{
            bg: "gray.800",
          }}
          mb={8}
          direction="column"
          alignItems="center"
          justifyContent="center"
          _hover={{
            transform: "scale(1.01)",
          }}
        >
          <Box
            bg="transparent"
            boxShadow={
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
            }
            _dark={{
              bg: "#3e3e3e",
            }}
            style={{
              backgroundImage: `url(${linkedinImage})`,
              backgroundSize: "cover",
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
            }}
            height="100%"
            width="100%"
            borderRadius="lg"
            p={8}
            display="flex"
            alignItems="left"
          >
            <Image
              src="https://images.unsplash.com/photo-1623930154261-37f8b293c059?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="Profile Picture"
              borderRadius="full"
              boxSize="150px"
              boxShadow={
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
              }
              border="3px solid"
              mb={-20}
              borderColor="gray.800"
              _dark={{
                borderColor: "gray.200",
              }}
            />
          </Box>
          <Box
            gridColumn="span 8"
            p={4}
            width="full"
            height="full"
            borderRadius="lg"
            textAlign="left"
            mt={5}
          >
            <Text
              fontSize="4xl"
              fontWeight="bold"
              color="white"
              _dark={{
                color: "white",
              }}
            >
              Elizabeth
              <br />
              Ponce
            </Text>
            <HStack
              spacing={6}
              color="gray.800"
              _dark={{
                color: "gray.200",
              }}
            >
              <FaSuitcase size={20} />
              <Text
                fontSize="1xl"
                fontWeight="bold"
                color="gray.800"
                _dark={{
                  color: "gray.200",
                }}
              >
                Full Stack Developer
              </Text>
            </HStack>
            <HStack
              spacing={6}
              color="gray.700"
              _dark={{
                color: "gray.200",
              }}
            >
              <FaMapPin size={20} />
              <Text
                fontSize="lg"
                fontWeight={"bold"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                Argentina
                <img src={argentinaImage} width={"50px"} height={"50px"}></img>
              </Text>
            </HStack>
            <HStack
              spacing={6}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Link href="mailto:correo@example.com" isExternal>
                <Tooltip label="Enviar correo electrónico" placement="top">
                  <FaEnvelope size={30} className="social-icon" />
                </Tooltip>
              </Link>
              <Link href="https://github.com/tu_usuario_github" isExternal>
                <Tooltip label="Visitar GitHub" placement="top">
                  <FaGithub size={30} className="social-icon" />
                </Tooltip>
              </Link>
              <Link
                href="https://www.linkedin.com/in/tu_perfil_linkedin"
                isExternal
              >
                <Tooltip label="Visitar LinkedIn" placement="top">
                  <FaLinkedin size={30} className="social-icon" />
                </Tooltip>
              </Link>
              <Link href="https://twitter.com/tu_usuario_twitter" isExternal>
                <Tooltip label="Visitar Twitter" placement="top">
                  <FaTwitter size={30} className="social-icon" />
                </Tooltip>
              </Link>
            </HStack>
          </Box>
        </Flex>

        <Flex
          boxShadow={
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
          }
          rounded="lg"
          bg="#70a57b"
          _dark={{
            bg: "gray.800",
          }}
          mb={8}
          direction="column"
          alignItems="center"
          justifyContent="center"
          _hover={{
            transform: "scale(1.01)",
          }}
        >
          <Box
            bg="transparent"
            boxShadow={
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
            }
            _dark={{
              bg: "#3e3e3e",
            }}
            style={{
              backgroundImage: `url(${linkedinImage})`,
              backgroundSize: "cover",
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
            }}
            height="100%"
            width="100%"
            borderRadius="lg"
            p={8}
            display="flex"
            alignItems="left"
          >
            <Image
              src="https://images.unsplash.com/photo-1623930154261-37f8b293c059?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="Profile Picture"
              borderRadius="full"
              boxSize="150px"
              boxShadow={
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
              }
              border="3px solid"
              mb={-20}
              borderColor="gray.800"
              _dark={{
                borderColor: "gray.200",
              }}
            />
          </Box>
          <Box
            gridColumn="span 8"
            p={4}
            width="full"
            height="full"
            borderRadius="lg"
            textAlign="left"
            mt={5}
          >
            <Text
              fontSize="4xl"
              fontWeight="bold"
              color="white"
              _dark={{
                color: "white",
              }}
            >
              Maria
              <br />
              Fhur
            </Text>
            <HStack
              spacing={6}
              color="gray.800"
              _dark={{
                color: "gray.200",
              }}
            >
              <FaSuitcase size={20} />
              <Text
                fontSize="1xl"
                fontWeight="bold"
                color="gray.800"
                _dark={{
                  color: "gray.200",
                }}
              >
                Full Stack Developer
              </Text>
            </HStack>
            <HStack
              spacing={6}
              color="gray.700"
              _dark={{
                color: "gray.200",
              }}
            >
              <FaMapPin size={20} />
              <Text
                fontSize="lg"
                fontWeight={"bold"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                Argentina
                <img src={argentinaImage} width={"50px"} height={"50px"}></img>
              </Text>
            </HStack>
            <HStack
              spacing={6}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Link href="mailto:correo@example.com" isExternal>
                <Tooltip label="Enviar correo electrónico" placement="top">
                  <FaEnvelope size={30} className="social-icon" />
                </Tooltip>
              </Link>
              <Link href="https://github.com/tu_usuario_github" isExternal>
                <Tooltip label="Visitar GitHub" placement="top">
                  <FaGithub size={30} className="social-icon" />
                </Tooltip>
              </Link>
              <Link
                href="https://www.linkedin.com/in/tu_perfil_linkedin"
                isExternal
              >
                <Tooltip label="Visitar LinkedIn" placement="top">
                  <FaLinkedin size={30} className="social-icon" />
                </Tooltip>
              </Link>
              <Link href="https://twitter.com/tu_usuario_twitter" isExternal>
                <Tooltip label="Visitar Twitter" placement="top">
                  <FaTwitter size={30} className="social-icon" />
                </Tooltip>
              </Link>
            </HStack>
          </Box>
        </Flex>

        <Flex
          boxShadow={
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
          }
          rounded="lg"
          bg="#70a57b"
          _dark={{
            bg: "gray.800",
          }}
          mb={8}
          direction="column"
          alignItems="center"
          justifyContent="center"
          _hover={{
            transform: "scale(1.01)",
          }}
        >
          <Box
            bg="transparent"
            boxShadow={
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
            }
            _dark={{
              bg: "#3e3e3e",
            }}
            style={{
              backgroundImage: `url(${linkedinImage})`,
              backgroundSize: "cover",
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
            }}
            height="100%"
            width="100%"
            borderRadius="lg"
            p={8}
            display="flex"
            alignItems="left"
          >
            <Image
              src={armandoImage}
              alt="Profile Picture"
              borderRadius="full"
              boxSize="150px"
              boxShadow={
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
              }
              border="3px solid"
              mb={-20}
              borderColor="gray.800"
              _dark={{
                borderColor: "gray.200",
              }}
            />
          </Box>
          <Box
            gridColumn="span 8"
            p={4}
            width="full"
            height="full"
            borderRadius="lg"
            textAlign="left"
            mt={5}
          >
            <Text
              fontSize="4xl"
              fontWeight="bold"
              color="white"
              _dark={{
                color: "white",
              }}
            >
              Armando
              <br />
              Martínez
            </Text>
            <HStack
              spacing={6}
              color="gray.800"
              _dark={{
                color: "gray.200",
              }}
            >
              <FaSuitcase size={20} />
              <Text
                fontSize="1xl"
                fontWeight="bold"
                color="gray.800"
                _dark={{
                  color: "gray.200",
                }}
              >
                Full Stack Developer
              </Text>
            </HStack>
            <HStack
              spacing={6}
              color="gray.700"
              _dark={{
                color: "gray.200",
              }}
            >
              <FaMapPin size={20} />
              <Text
                fontSize="lg"
                fontWeight={"bold"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                Venezuela
                <img src={venezuelaImage} width={"60px"} height={"60px"}></img>
              </Text>
            </HStack>
            <HStack
              spacing={6}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Link href="alemar.martinez16@gmail.com" isExternal>
                <Tooltip label="Enviar correo electrónico" placement="top">
                  <FaEnvelope size={30} className="social-icon" />
                </Tooltip>
              </Link>
              <Link href="https://github.com/Alemar16" isExternal>
                <Tooltip label="Visitar GitHub" placement="top">
                  <FaGithub size={30} className="social-icon" />
                </Tooltip>
              </Link>
              <Link
                href="www.linkedin.com/in/armando-martínez-zambrano-51a714247"
                isExternal
              >
                <Tooltip label="Visitar LinkedIn" placement="top">
                  <FaLinkedin size={30} className="social-icon" />
                </Tooltip>
              </Link>
              <Link href="https://twitter.com/TheArmandoMarti" isExternal>
                <Tooltip label="Visitar Twitter" placement="top">
                  <FaTwitter size={30} className="social-icon" />
                </Tooltip>
              </Link>
            </HStack>
          </Box>
        </Flex>

        <Flex
          boxShadow={
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
          }
          rounded="lg"
          bg="#70a57b"
          _dark={{
            bg: "gray.800",
          }}
          mb={8}
          direction="column"
          alignItems="center"
          justifyContent="center"
          _hover={{
            transform: "scale(1.01)",
          }}
        >
          <Box
            bg="transparent"
            boxShadow={
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
            }
            _dark={{
              bg: "#3e3e3e",
            }}
            style={{
              backgroundImage: `url(${linkedinImage})`,
              backgroundSize: "cover",
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
            }}
            height="100%"
            width="100%"
            borderRadius="lg"
            p={8}
            display="flex"
            alignItems="left"
          >
            <Image
              src="https://images.unsplash.com/photo-1623930154261-37f8b293c059?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="Profile Picture"
              borderRadius="full"
              boxSize="150px"
              boxShadow={
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
              }
              border="3px solid"
              mb={-20}
              borderColor="gray.800"
              _dark={{
                borderColor: "gray.200",
              }}
            />
          </Box>
          <Box
            gridColumn="span 8"
            p={4}
            width="full"
            height="full"
            borderRadius="lg"
            textAlign="left"
            mt={5}
          >
            <Text
              fontSize="4xl"
              fontWeight="bold"
              color="white"
              _dark={{
                color: "white",
              }}
            >
              Mauro
              <br />
              Alasia
            </Text>
            <HStack
              spacing={6}
              color="gray.800"
              _dark={{
                color: "gray.200",
              }}
            >
              <FaSuitcase size={20} />
              <Text
                fontSize="1xl"
                fontWeight="bold"
                color="gray.800"
                _dark={{
                  color: "gray.200",
                }}
              >
                Full Stack Developer
              </Text>
            </HStack>
            <HStack
              spacing={6}
              color="gray.700"
              _dark={{
                color: "gray.200",
              }}
            >
              <FaMapPin size={20} />
              <Text
                fontSize="lg"
                fontWeight={"bold"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                Argentina
                <img src={argentinaImage} width={"50px"} height={"50px"}></img>
              </Text>
            </HStack>
            <HStack
              spacing={6}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Link href="mailto:correo@example.com" isExternal>
                <Tooltip label="Enviar correo electrónico" placement="top">
                  <FaEnvelope size={30} className="social-icon" />
                </Tooltip>
              </Link>
              <Link href="https://github.com/tu_usuario_github" isExternal>
                <Tooltip label="Visitar GitHub" placement="top">
                  <FaGithub size={30} className="social-icon" />
                </Tooltip>
              </Link>
              <Link
                href="https://www.linkedin.com/in/tu_perfil_linkedin"
                isExternal
              >
                <Tooltip label="Visitar LinkedIn" placement="top">
                  <FaLinkedin size={30} className="social-icon" />
                </Tooltip>
              </Link>
              <Link href="https://twitter.com/tu_usuario_twitter" isExternal>
                <Tooltip label="Visitar Twitter" placement="top">
                  <FaTwitter size={30} className="social-icon" />
                </Tooltip>
              </Link>
            </HStack>
          </Box>
        </Flex>

        <Flex
          boxShadow={
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
          }
          rounded="lg"
          bg="#70a57b"
          _dark={{
            bg: "gray.800",
          }}
          mb={8}
          direction="column"
          alignItems="center"
          justifyContent="center"
          _hover={{
            transform: "scale(1.01)",
          }}
        >
          <Box
            bg="transparent"
            boxShadow={
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
            }
            _dark={{
              bg: "#3e3e3e",
            }}
            style={{
              backgroundImage: `url(${linkedinImage})`,
              backgroundSize: "cover",
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
            }}
            height="100%"
            width="100%"
            borderRadius="lg"
            p={8}
            display="flex"
            alignItems="left"
          >
            <Image
              src="https://images.unsplash.com/photo-1623930154261-37f8b293c059?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="Profile Picture"
              borderRadius="full"
              boxSize="150px"
              boxShadow={
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
              }
              border="3px solid"
              mb={-20}
              borderColor="gray.800"
              _dark={{
                borderColor: "gray.200",
              }}
            />
          </Box>
          <Box
            gridColumn="span 8"
            p={4}
            width="full"
            height="full"
            borderRadius="lg"
            textAlign="left"
            mt={5}
          >
            <Text
              fontSize="4xl"
              fontWeight="bold"
              color="white"
              _dark={{
                color: "white",
              }}
            >
              Mauro
              <br />
              Melgarejo
            </Text>
            <HStack
              spacing={6}
              color="gray.800"
              _dark={{
                color: "gray.200",
              }}
            >
              <FaSuitcase size={20} />
              <Text
                fontSize="1xl"
                fontWeight="bold"
                color="gray.800"
                _dark={{
                  color: "gray.200",
                }}
              >
                Full Stack Developer
              </Text>
            </HStack>
            <HStack
              spacing={6}
              color="gray.700"
              _dark={{
                color: "gray.200",
              }}
            >
              <FaMapPin size={20} />
              <Text
                fontSize="lg"
                fontWeight={"bold"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                Argentina
                <img src={argentinaImage} width={"50px"} height={"50px"}></img>
              </Text>
            </HStack>
            <HStack
              spacing={6}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Link href="mailto:correo@example.com" isExternal>
                <Tooltip label="Enviar correo electrónico" placement="top">
                  <FaEnvelope size={30} className="social-icon" />
                </Tooltip>
              </Link>
              <Link href="https://github.com/tu_usuario_github" isExternal>
                <Tooltip label="Visitar GitHub" placement="top">
                  <FaGithub size={30} className="social-icon" />
                </Tooltip>
              </Link>
              <Link
                href="https://www.linkedin.com/in/tu_perfil_linkedin"
                isExternal
              >
                <Tooltip label="Visitar LinkedIn" placement="top">
                  <FaLinkedin size={30} className="social-icon" />
                </Tooltip>
              </Link>
              <Link href="https://twitter.com/tu_usuario_twitter" isExternal>
                <Tooltip label="Visitar Twitter" placement="top">
                  <FaTwitter size={30} className="social-icon" />
                </Tooltip>
              </Link>
            </HStack>
          </Box>
        </Flex>

        <Flex
          boxShadow={
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
          }
          rounded="lg"
          bg="#70a57b"
          _dark={{
            bg: "gray.800",
          }}
          mb={8}
          direction="column"
          alignItems="center"
          justifyContent="center"
          _hover={{
            transform: "scale(1.01)",
          }}
        >
          <Box
            bg="transparent"
            boxShadow={
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
            }
            _dark={{
              bg: "#3e3e3e",
            }}
            style={{
              backgroundImage: `url(${linkedinImage})`,
              backgroundSize: "cover",
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
            }}
            height="100%"
            width="100%"
            borderRadius="lg"
            p={8}
            display="flex"
            alignItems="left"
          >
            <Image
              src="https://images.unsplash.com/photo-1623930154261-37f8b293c059?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="Profile Picture"
              borderRadius="full"
              boxSize="150px"
              boxShadow={
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
              }
              border="3px solid"
              mb={-20}
              borderColor="gray.800"
              _dark={{
                borderColor: "gray.200",
              }}
            />
          </Box>
          <Box
            gridColumn="span 8"
            p={4}
            width="full"
            height="full"
            borderRadius="lg"
            textAlign="left"
            mt={5}
          >
            <Text
              fontSize="4xl"
              fontWeight="bold"
              color="white"
              _dark={{
                color: "white",
              }}
            >
              Rodrigo
              <br />
              Bonetto
            </Text>
            <HStack
              spacing={6}
              color="gray.800"
              _dark={{
                color: "gray.200",
              }}
            >
              <FaSuitcase size={20} />
              <Text
                fontSize="1xl"
                fontWeight="bold"
                color="gray.800"
                _dark={{
                  color: "gray.200",
                }}
              >
                Full Stack Developer
              </Text>
            </HStack>
            <HStack
              spacing={6}
              color="gray.700"
              _dark={{
                color: "gray.200",
              }}
            >
              <FaMapPin size={20} />
              <Text
                fontSize="lg"
                fontWeight={"bold"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                Argentina
                <img src={argentinaImage} width={"50px"} height={"50px"}></img>
              </Text>
            </HStack>
            <HStack
              spacing={6}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Link href="mailto:correo@example.com" isExternal>
                <Tooltip label="Enviar correo electrónico" placement="top">
                  <FaEnvelope size={30} className="social-icon" />
                </Tooltip>
              </Link>
              <Link href="https://github.com/tu_usuario_github" isExternal>
                <Tooltip label="Visitar GitHub" placement="top">
                  <FaGithub size={30} className="social-icon" />
                </Tooltip>
              </Link>
              <Link
                href="https://www.linkedin.com/in/tu_perfil_linkedin"
                isExternal
              >
                <Tooltip label="Visitar LinkedIn" placement="top">
                  <FaLinkedin size={30} className="social-icon" />
                </Tooltip>
              </Link>
              <Link href="https://twitter.com/tu_usuario_twitter" isExternal>
                <Tooltip label="Visitar Twitter" placement="top">
                  <FaTwitter size={30} className="social-icon" />
                </Tooltip>
              </Link>
            </HStack>
          </Box>
        </Flex>

        <Flex
          boxShadow={
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
          }
          rounded="lg"
          bg="#70a57b"
          _dark={{
            bg: "gray.800",
          }}
          mb={8}
          direction="column"
          alignItems="center"
          justifyContent="center"
          _hover={{
            transform: "scale(1.01)",
          }}
        >
          <Box
            bg="transparent"
            boxShadow={
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
            }
            _dark={{
              bg: "#3e3e3e",
            }}
            style={{
              backgroundImage: `url(${linkedinImage})`,
              backgroundSize: "cover",
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
            }}
            height="100%"
            width="100%"
            borderRadius="lg"
            p={8}
            display="flex"
            alignItems="left"
          >
            <Image
              src="https://images.unsplash.com/photo-1623930154261-37f8b293c059?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="Profile Picture"
              borderRadius="full"
              boxSize="150px"
              boxShadow={
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
              }
              border="3px solid"
              mb={-20}
              borderColor="gray.800"
              _dark={{
                borderColor: "gray.200",
              }}
            />
          </Box>
          <Box
            gridColumn="span 8"
            p={4}
            width="full"
            height="full"
            borderRadius="lg"
            textAlign="left"
            mt={5}
          >
            <Text
              fontSize="4xl"
              fontWeight="bold"
              color="white"
              _dark={{
                color: "white",
              }}
            >
              David
              <br />
              Bulla
            </Text>
            <HStack
              spacing={6}
              color="gray.800"
              _dark={{
                color: "gray.200",
              }}
            >
              <FaSuitcase size={20} />
              <Text
                fontSize="1xl"
                fontWeight="bold"
                color="gray.800"
                _dark={{
                  color: "gray.200",
                }}
              >
                Full Stack Developer
              </Text>
            </HStack>
            <HStack
              spacing={6}
              color="gray.700"
              _dark={{
                color: "gray.200",
              }}
            >
              <FaMapPin size={20} />
              <Text
                fontSize="lg"
                fontWeight={"bold"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                Colombia
                <img src={peruImage} width={"50px"} height={"50px"}></img>
              </Text>
            </HStack>
            <HStack
              spacing={6}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Link href="mailto:correo@example.com" isExternal>
                <Tooltip label="Enviar correo electrónico" placement="top">
                  <FaEnvelope size={30} className="social-icon" />
                </Tooltip>
              </Link>
              <Link href="https://github.com/tu_usuario_github" isExternal>
                <Tooltip label="Visitar GitHub" placement="top">
                  <FaGithub size={30} className="social-icon" />
                </Tooltip>
              </Link>
              <Link
                href="https://www.linkedin.com/in/tu_perfil_linkedin"
                isExternal
              >
                <Tooltip label="Visitar LinkedIn" placement="top">
                  <FaLinkedin size={30} className="social-icon" />
                </Tooltip>
              </Link>
              <Link href="https://twitter.com/tu_usuario_twitter" isExternal>
                <Tooltip label="Visitar Twitter" placement="top">
                  <FaTwitter size={30} className="social-icon" />
                </Tooltip>
              </Link>
            </HStack>
          </Box>
        </Flex>
      </Flex>
      ;
      <Footer />
    </div>
  );
}
