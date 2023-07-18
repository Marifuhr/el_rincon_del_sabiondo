import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#dfece2",
      secondary: "#70a57b",
    },
  },
  styles: {
    global: {
      body: {
        bg: "#dfece2",
      },
    },
  },
});

export default theme;
