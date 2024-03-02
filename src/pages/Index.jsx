import React, { useState } from "react";
import { Box, Container, Heading, Text, VStack, Input, Button, useToast, Image, Link } from "@chakra-ui/react";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const toast = useToast();

  const handleSignUp = () => {
    // Simulate signing up for newsletter
    toast({
      title: "Signed Up!",
      description: "You've successfully signed up for our newsletter.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    setEmail(""); // Clear the input field
  };

  const TableOfContents = () => (
    <VStack align="start" spacing={4} mr={10}>
      <Link href="#introduction" color="teal.500">
        Introduction
      </Link>
      <Link href="#research" color="teal.500">
        Research
      </Link>
      <Link href="#nootropics" color="teal.500">
        'Smart Drugs'
      </Link>
      <Link href="#newsletter" color="teal.500">
        Newsletter
      </Link>
    </VStack>
  );

  return (
    <Container maxW="container.xl" display="flex">
      <TableOfContents />
      <VStack spacing={8} py={10} w="full">
        <Heading as="h1" size="2xl" textAlign="center">
          The Future of Neuroscience
        </Heading>
        <Image borderRadius="md" src="https://images.unsplash.com/photo-1549925245-f20a1bac6454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXVyb3NjaWVuY2V8ZW58MHx8fHwxNzA5MzczNTEwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Neuroscience Research" />
        <Text textAlign="justify" fontSize="lg">
          Neuroscience, the study of the nervous system, is an interdisciplinary field that combines biology, chemistry, computer science, engineering, medicine, and allied disciplines. However, recent advancements propose that we can push the boundaries of neuroscience further with the introduction of certain substances that can enhance cognitive functions and potentially repair neurological damage.
        </Text>
        <Text textAlign="justify" fontSize="lg">
          These substances, often referred to as nootropics or 'smart drugs', are thought to have the potential to improve memory, creativity, and motivation in healthy individuals. While the research is still in its early stages, preliminary studies have shown promising results in both animal models and small-scale human studies. With a better understanding of how these substances interact with the brain, we could usher in a new era of neuroscience that not only helps individuals with cognitive impairments but also enhances the cognitive capabilities of the general population.
        </Text>
        <Box as="form" w="100%" maxW="400px">
          <VStack spacing={4}>
            <Heading as="h3" size="lg">
              Stay Updated
            </Heading>
            <Text>Sign up for our newsletter to learn more about the latest developments in neuroscience.</Text>
            <Input placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} size="md" />
            <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid" onClick={handleSignUp} isFullWidth>
              Sign Up <FaPaperPlane />
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
