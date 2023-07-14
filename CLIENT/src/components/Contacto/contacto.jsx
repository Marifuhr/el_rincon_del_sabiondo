import Footer from "../Footer/Footer";
import ButtonVolver from "../../elements/ButtonVolver";
import {
  Box,
  Flex,
  HStack,
  Image,
  Link,
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

export default function contacto() {
  return (
    <div>
      <ButtonVolver />
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
          shadow="lg"
          rounded="lg"
          bg="#70a57b"
          _dark={{
            bg: "gray.800",
          }}
          mb={8}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            bg="transparent"
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
              shadow="lg"
              border="5px solid"
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
          shadow="lg"
          rounded="lg"
          bg="#70a57b"
          _dark={{
            bg: "gray.800",
          }}
          mb={8}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            bg="transparent"
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
              shadow="lg"
              border="5px solid"
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
          shadow="lg"
          rounded="lg"
          bg="#70a57b"
          _dark={{
            bg: "gray.800",
          }}
          mb={8}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            bg="transparent"
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
              shadow="lg"
              border="5px solid"
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
          shadow="lg"
          rounded="lg"
          bg="#70a57b"
          _dark={{
            bg: "gray.800",
          }}
          mb={8}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            bg="transparent"
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
              shadow="lg"
              border="5px solid"
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
          shadow="lg"
          rounded="lg"
          bg="#70a57b"
          _dark={{
            bg: "gray.800",
          }}
          mb={8}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            bg="transparent"
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
              shadow="lg"
              border="5px solid"
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
          shadow="lg"
          rounded="lg"
          bg="#70a57b"
          _dark={{
            bg: "gray.800",
          }}
          mb={8}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            bg="transparent"
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
              shadow="lg"
              border="5px solid"
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
          shadow="lg"
          rounded="lg"
          bg="#70a57b"
          _dark={{
            bg: "gray.800",
          }}
          mb={8}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            bg="transparent"
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
              shadow="lg"
              border="5px solid"
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
          shadow="lg"
          rounded="lg"
          bg="#70a57b"
          _dark={{
            bg: "gray.800",
          }}
          mb={8}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            bg="transparent"
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
              shadow="lg"
              border="5px solid"
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
