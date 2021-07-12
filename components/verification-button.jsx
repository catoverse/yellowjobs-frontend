import React, { useState } from 'react';
import { Center, Button, ButtonGroup } from '@chakra-ui/react'
import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa'
import { API_URL } from 'lib/api'

export default function VerificationButton(props) {
    const [isDone, setIsDone] = useState(false);
    function verifiedTweet(isAccepted, id) {

        console.log(id, isAccepted);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ auth: "xyz", tweetId: id, accepted: isAccepted ? "approved" : "rejected" })
        };
        fetch(`${API_URL}/api/verify`, requestOptions)
        // .then(response => response.json())
        // .then(data => console.log(data));

        setIsDone(true);
    }
    return (

        <Center mb="2rem" mt="0.5rem">
            <Button mr="1rem" size="lg" leftIcon={<FaRegThumbsUp />} isDisabled={isDone} colorScheme="green" onClick={() => verifiedTweet(true, props.id)}>Approve</Button>
            <Button ml="1rem" size="lg" leftIcon={<FaRegThumbsDown />} colorScheme="red" isDisabled={isDone} onClick={() => verifiedTweet(false, props.id)} >Reject</Button>
        </Center>

    )
}