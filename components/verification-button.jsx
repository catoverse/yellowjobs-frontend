import React, { useState } from 'react';
import { Button,ButtonGroup } from '@chakra-ui/react'

import { API_URL } from 'lib/api'

export default function VerificationButton(props) {
    const [isDone, setIsDone] = useState(false);
    function verifiedTweet(isAccepted,id){
        
        console.log(id,isAccepted);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ auth: "xyz", tweetId:id , accepted:isAccepted?"approved":"rejected"})
    };
    fetch(`${API_URL}/api/verify`, requestOptions)
        // .then(response => response.json())
        // .then(data => console.log(data));

        setIsDone(true);
    }
    return(    
            <ButtonGroup variant="outline" spacing="6" isDisabled={isDone}>
                <Button colorScheme="green" onClick={() =>verifiedTweet(true,props.id)}>Approve</Button>
                <Button colorScheme="red" onClick={() =>verifiedTweet(false,props.id)} >Reject</Button>
            </ButtonGroup>
    )
}