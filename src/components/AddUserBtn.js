import React, {useEffect, useState } from 'react';
import { AddIcon } from '@chakra-ui/icons' 
import {Colors} from '../Colors'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Radio, RadioGroup, Button, ModalFooter, FormControl, FormLabel, Input, Stack, Alert, AlertIcon, AlertDescription, AlertTitle, Spacer, useToast, FormErrorMessage} from '@chakra-ui/react';
import createUser from '../createUser';
import fetchUsers from '../fetchUsers';
  
function AddUserBtn() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [genderValue, setGenderValue] = useState('female')
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('')
    const [emailAlreadyTaken, setEmailAlreadyTaken] = useState(false);

    const handleNameInputChange = (e) => setNameInput(e.target.value);
    const handleEmailInputChange = (e) => setEmailInput(e.target.value);
 
    var isError = null;

    return (
      <>
        <Button h='44px' w='134px' borderRadius="13px" rightIcon={<AddIcon/>} color="white" backgroundColor={Colors.primary} boxShadow={'0px 4px 12px 2px rgba(0, 0, 0, 0.06);'}
        _hover={{
          background: Colors.primary_hover,
        }}
        onClick={onOpen}
     >
        Add new
        </Button>
  
        <Modal size={'xs'} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add new user</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form id='add_user_form' onSubmit={(event) => {
                
                event.preventDefault(); }}>
                <FormControl>
                  <FormLabel as={'legend'}></FormLabel>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" placeholder='Enter your name' marginBottom={'16px'} value={nameInput} onChange={handleNameInputChange}/>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder='Enter your email' marginBottom={'16px'} onChange={handleEmailInputChange} value={emailInput}/>
                  {(emailAlreadyTaken) ?  (<FormErrorMessage>The email has been already used</FormErrorMessage>) : (null)}
                  <FormLabel as={'label'}>Gender</FormLabel>
                  <RadioGroup onChange={setGenderValue} value={genderValue}>
                  <Stack direction='row'>
                    <Radio value='female' colorScheme={'purple'}>Female</Radio>
                    <Radio value='male' colorScheme={'purple'}>Male</Radio>
                  </Stack>
                </RadioGroup>
                </FormControl>
               
              </form>
                
            </ModalBody>
  
            <ModalFooter>
              <Button bgColor={Colors.primary} color={'white'} mr={3}  onClick={() => {
                const newUser = {
                  name: nameInput, 
                  email: emailInput, 
                  gender: genderValue, 
                  status: (Math.round(Math.random()) === 1) ? 'active' : 'inactive'
                }
                
               
                const response = Promise.resolve(createUser(newUser));
                response.then((res) => {
                  console.log(res);
                  if(res.email !== undefined)
                    setEmailInput('');
                    setNameInput('');
                    onClose();
                    fetchUsers(15, 1);
                });
                
                
                
              }}>
                Create
              </Button>
              <Button variant='ghost' onClick={onClose} color={Colors.primary}>Cancel</Button>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default AddUserBtn