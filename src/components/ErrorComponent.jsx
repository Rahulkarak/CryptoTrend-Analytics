import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const ErrorComponent = ({message}) => {
   return alert(
    "Please refresh the page if the API is taking longer than expected to ensure the latest data is displayed.")
  // <Alert 
  //   status="error" 
  //   position={"fixed"} 
  //   bottom={"40"} 
  //   left={"50%"}
  //   transform={"translateX(-50%)"}
  //   w={"container.lg"}
  
  //   textColor={"green"}
  //   >

 // <AlertIcon/>

 // </Alert>
    

}

export default ErrorComponent