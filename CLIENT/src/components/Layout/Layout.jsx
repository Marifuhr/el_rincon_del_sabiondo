import { Box } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <Box bg='#70a57b5d' minHeight="100vh">
      {children}
    </Box>
  );
};

export default Layout;