import { Container, Text, VStack, Heading, Box, Button, HStack, IconButton } from "@chakra-ui/react";
import { FaBriefcase, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={6}>Job Listing Website</Heading>
        <Text fontSize="lg" textAlign="center">Find your dream job or post a job listing to find the perfect candidate.</Text>
        <HStack spacing={4} mt={6}>
          <Button leftIcon={<FaBriefcase />} colorScheme="teal" variant="solid" size="lg">
            Browse Jobs
          </Button>
          <Button leftIcon={<FaPlus />} colorScheme="teal" variant="outline" size="lg">
            Post a Job
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;