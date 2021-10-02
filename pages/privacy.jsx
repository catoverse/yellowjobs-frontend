import {
  Container,
  Flex,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import Footer from 'components/footer'
import Navbar from 'components/navbar'

const PrivacyPage = () => {
  return (
    <>
      <Flex direction="column" h="100vh">
        <Navbar />
        <Container
          flex="1"
          maxW="container.xl"
          px={[6, 12, 16, 32]}
          py="12"
          bg="white"
        >
          <Heading as="h1">Privacy Policy</Heading>
          <Text mt="2">
            YellowJobs is an aggregator of remote hiring tweets. Our Privacy
            Policy (“Privacy Policy”) is designed to help you understand how we
            collect, use and share your personal information and to assist you
            in exercising the privacy rights available to you. We care for your
            privacy and it's our main concern for us to respect your privacy and
            protecting your privacy is important to us.
          </Text>

          <Heading as="h2" size="lg" mt="4">
            Information we collect
          </Heading>
          <Heading as="h3" size="md" mt="4">
            Personal Data
          </Heading>
          <Text mt="2">
            While using our Service, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you ("Personal Data"). Personally identifiable information
            may include, but is not limited to:
          </Text>
          <UnorderedList ml="8">
            <ListItem>Name and Email address via Google login</ListItem>
          </UnorderedList>

          <Heading as="h3" size="md" mt="4">
            Metadata
          </Heading>
          <Text mt="2">
            While using our platform, we also collect some metadata to provide
            seamless experience to everyone. We log few events and we're trying
            hard to give you the control to this mechanism. To give you a
            glimpse, these are some of the events we listen to —
          </Text>
          <UnorderedList ml="8">
            <ListItem>Click on Tweet</ListItem>
            <ListItem>Save Tweet</ListItem>
            <ListItem>Share Tweet</ListItem>
          </UnorderedList>
          <Text mt="2">
            We post this information to our API here —{' '}
            <Link
              href="http://api.yellowjobs.org"
              isExternal
              color="yellow.500"
            >
              api.yellowjobs.org
            </Link>
          </Text>

          <Heading as="h2" size="lg" mt="4">
            How we use your information
          </Heading>
          <Text mt="2">We uses the collected data for various purposes:</Text>
          <UnorderedList ml="8">
            <ListItem>To provide and maintain our Service</ListItem>
            <ListItem>
              To allow you to participate in interactive features of our Service
              when you choose to do so
            </ListItem>
            <ListItem>To provide customer support</ListItem>
            <ListItem>
              To gather analysis or valuable information so that we can improve
              our Service
            </ListItem>
            <ListItem>To monitor the usage of our Service</ListItem>
            <ListItem>To detect, prevent and address technical issues</ListItem>
          </UnorderedList>

          <Heading as="h2" size="lg" mt="4">
            Whom we share your information?
          </Heading>

          <Heading as="h3" size="md" mt="4">
            Legal Requirements
          </Heading>
          <Text mt="2">
            We may disclose your Personal Data in the good faith belief that
            such action is necessary to:
          </Text>
          <UnorderedList ml="8">
            <ListItem>To comply with a legal obligation</ListItem>
            <ListItem>
              To protect and defend the rights or property of our app
            </ListItem>
            <ListItem>
              To prevent or investigate possible wrongdoing in connection with
              the Service
            </ListItem>
            <ListItem>
              To protect the personal safety of users of the Service or the
              public
            </ListItem>
            <ListItem>To protect against legal liability</ListItem>
          </UnorderedList>

          <Heading as="h2" size="lg" mt="4">
            Security of Data
          </Heading>
          <Text mt="2">
            The security of your data is important to us but remember that no
            method of transmission over the Internet or method of electronic
            storage is 100% secure. While we strive to use commercially
            acceptable means to protect your Personal Data, we cannot guarantee
            its absolute security.
          </Text>

          <Heading as="h2" size="lg" mt="4">
            Service Providers
          </Heading>
          <Text mt="2">
            We may employ third party companies and individuals to facilitate
            our Service ("Service Providers"), provide the Service on our
            behalf, perform Service-related services or assist us in analysing
            how our Service is used. These third parties have access to your
            Personal Data only to perform these tasks on our behalf and are
            obligated not to disclose or use it for any other purpose.
          </Text>

          <Heading as="h2" size="lg" mt="4">
            Changes to This Privacy Policy
          </Heading>
          <Text mt="2">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            We will let you know via email and/or a prominent notice on our
            Service, prior to the change becoming effective and update the
            "effective date" at the top of this Privacy Policy. You are advised
            to review this Privacy Policy periodically for any changes. Changes
            to this Privacy Policy are effective when they are posted on this
            page.
          </Text>

          <Heading as="h2" size="lg" mt="4">
            Contact us
          </Heading>
          <Text mt="2">
            It should be noted that whether or not to send us your feedback or
            bug report is a completely voluntary initiative upon your own
            decision. If you have concern about your Personal Identifiable
            Information is being misused, or if you want further information
            about our privacy policy and what it means, please feel free to
            email us at,{' '}
            <Link href="mailto:dev@cato.tv" isExternal color="yellow.500">
              dev@cato.tv
            </Link>{' '}
            we will endeavour to provide clear answers to your questions in a
            timely manner.
          </Text>
        </Container>
        <Footer />
      </Flex>
    </>
  )
}

export default PrivacyPage
