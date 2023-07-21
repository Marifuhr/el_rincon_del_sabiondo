import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#dfece2",
      secondary: "#70a57b",
      tertiary: "#428c51",
    },
  },
  styles: {
    global: {
      body: {
        bg: "#dfece2",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        color: "white",
        bg: "#70a57b",
        textDecoration: "none",
        _hover: {
          color: "white",
          transform: "translateY(-2px)",
          boxShadow: "lg",
          textDecoration: "none",
        },
      },
      sizes: {
        sm: {
          margin: "5px",
        },
      },
    },
    Link: {
      baseStyle: {
        color: "inherit",
        textDecoration: "underline",
        _hover: {
          color: "inherit",
          textDecoration: "underline",
        },
      },
    },
  },
});

export default theme;
