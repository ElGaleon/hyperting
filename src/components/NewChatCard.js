import { Container, Text, Stack} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons' 

const NewChatCard = () => {
  
  return (
   <Container width={'94px'} height={'100px'} borderRadius={'16px'} boxShadow={'0px 1px 4px rgba(0, 0, 0, 0.05), 0px 6px 24px rgba(0, 0, 0, 0.04), inset 0px 1px 1px rgba(0, 0, 0, 0.04);'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} marginRight={'8px'} marginLeft={'0px'}>
       
            <Stack>
                <Container width={'40px'} height={'40px'} border={'1px'} borderColor={'gray.300'} borderRadius={'100%'} justifyContent={'center'} alignItems={'center'} display={'flex'} borderStyle={'dotted'}>
                <AddIcon color={'gray.500'}/>
                </Container>
                
            </Stack>
            <Text color={'gray.600'} fontSize={'14px'} width={'70px'} align={'center'}>New chat</Text>

   </Container>
 );
};
 
export default NewChatCard; 