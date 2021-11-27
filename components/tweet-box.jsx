import {
  Box,
  IconButton,
  Text,
  Skeleton,
  Button,
  Flex,
  HStack,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { FiShare2 as ShareIcon } from 'react-icons/fi'
import { FiBookmark as SaveIcon } from 'react-icons/fi'
import LoginModal from './login-modal'
import LinkCopiedModal from './link-copied-modal'
import SaveWalkthroughModal from './save-walkthrough-modal'
import { useState } from 'react'

import { Tweet } from '../react-static-tweets'
import { API_URL } from 'lib/api'
const FEEDBACK_URL = API_URL + '/api/feedback'

export default function TweetList({
  session,
  tweetObj,
  isTweetSaved: isTweetSavedFromParent,
}) {
  const [isTweetSaved, setIsTweetSaved] = useState(isTweetSavedFromParent)
  const toast = useToast()
  const {
    isOpen: isOpenLoginModal,
    onOpen: onOpenLoginModal,
    onClose: onCloseLoginModal,
  } = useDisclosure()
  const {
    isOpen: isOpenLinkCopiedModal,
    onOpen: onOpenLinkCopiedModal,
    onClose: onCloseLinkCopiedModal,
  } = useDisclosure()
  const {
    isOpen: isOpenSaveWalkthroughModal,
    onOpen: onOpenSaveWalkthroughModal,
    onClose: onCloseSaveWalkthroughModal,
  } = useDisclosure()

  const handleSaveClick = async (tweetObj, isTweetSaved) => {
    if (!session) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tweetId: tweetObj.tweet_id,
          action: 'save_not_logged_in',
        }),
      }
      fetch(FEEDBACK_URL, requestOptions)
      return onOpenLoginModal()
    } else {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: session.user.userId,
          tweetId: tweetObj.tweet_id,
          action: 'save',
          value: isTweetSaved ? '-1' : '1',
        }),
      }
      await fetch(FEEDBACK_URL, requestOptions)
      if (
        !isTweetSaved &&
        !localStorage.getItem('isSaveWalkthroughModalDisplayed')
      ) {
        onOpenSaveWalkthroughModal()
        localStorage.setItem('isSaveWalkthroughModalDisplayed', true)
      }
      setIsTweetSaved(!isTweetSaved)
      toast({
        title: isTweetSaved ? `Removed` : `Saved`,
        status: 'success',
        isClosable: true,
        duration: 2000,
      })
    }
  }

  const sendClickFeedback = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: session ? session.user.userId : null,
        tweetId: tweetObj.tweet_id,
        action: 'click',
      }),
    }
    fetch(FEEDBACK_URL, requestOptions)
  }

  return (
    <Box rounded="md" p="4" bg="white" border="1px" borderColor="gray.100">
      <Flex justify="flex-end" mb="4">
        <Button
          size="sm"
          variant="outline"
          bg="#FAFAFA"
          fontWeight="normal"
          onClick={() => handleSaveClick(tweetObj, isTweetSaved)}
        >
          {isTweetSaved ? (
            <>
              Remove&nbsp;
              <SaveIcon color="#ECC94B" fill="#ECC94B" />
            </>
          ) : (
            <>
              Save for later&nbsp;
              <SaveIcon />
            </>
          )}
        </Button>
      </Flex>
      <Box onClick={() => sendClickFeedback()}>
        <Tweet id={tweetObj.tweet_id} ast={tweetObj.tweet_ast} />
      </Box>
      <HStack mt="4">
        <Button
          color="yellow.400"
          border="2px"
          borderColor="yellow.400"
          _hover={{ bg: 'yellow.400', color: '#FFF' }}
          variant="outline"
          w="full"
          onClick={() => {
            if (tweetObj.urls[0]) {
              window.open(tweetObj.urls[0])
            } else {
              window.open(tweetObj.tweet_url)
            }
            return sendClickFeedback()
          }}
        >
          Apply Now
        </Button>

        <IconButton
          variant="outline"
          icon={<ShareIcon />}
          bg="#FAFAFA"
          onClick={async () => {
            if (navigator.share) {
              navigator.share({
                text:
                  `Hey, I came across this remote opportunity that might be relevant for you.\n` +
                  `Do check it out and other great remote opportunities at YellowJobs!\n`,
                url: tweetObj.tweet_url,
              })
            } else if (navigator.clipboard) {
              await navigator.clipboard.writeText(tweetObj.tweet_url)
              onOpenLinkCopiedModal()
            }

            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                userId: session ? session.user.userId : null,
                tweetId: tweetObj.tweet_id,
                action: 'share',
              }),
            }
            fetch(FEEDBACK_URL, requestOptions)
          }}
        />
      </HStack>
      <LoginModal
        isOpen={isOpenLoginModal}
        onClose={onCloseLoginModal}
        action="saveTweet"
      />
      <LinkCopiedModal
        isOpen={isOpenLinkCopiedModal}
        onClose={onCloseLinkCopiedModal}
      />
      <SaveWalkthroughModal
        isOpen={isOpenSaveWalkthroughModal}
        onClose={onCloseSaveWalkthroughModal}
      />
    </Box>
  )
}
