import { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const ApplyJob = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const application = { name, email, resume, coverLetter };
    console.log("Job application submitted:", application);
    // Here you would typically send the application data to your backend server
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={6}>Apply for Job</Heading>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="resume" isRequired>
              <FormLabel>Resume</FormLabel>
              <Input type="file" value={resume} onChange={(e) => setResume(e.target.value)} />
            </FormControl>
            <FormControl id="coverLetter" isRequired>
              <FormLabel>Cover Letter</FormLabel>
              <Textarea value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="100%">Submit</Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default ApplyJob;