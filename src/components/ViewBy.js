import React, { useState } from 'react';
import { Grid,Center, IconButton} from '@chakra-ui/react';
import { HamburgerIcon } from "@chakra-ui/icons";
import { MdViewModule } from "react-icons/md";
import useMediaQuery from '../MediaQuery';
 
const ViewBy = () => {
  const isDesktop = useMediaQuery('(min-width: 480px)');
 
    const [buttons, setButtons] = useState([
        { id: 0, label: 'list', value: false},
        { id: 1, label: 'grid', value: true},
      ]);

      const handleButtonsChange = ({
        buttons,
        setButtons,
        handleButtonsChange
      }) => label => {
        const newButtonsState = buttons.map(button => {
            if (button.label === label) {
                return (button = { label: button.label, value: true });
              }
              return {
                label: button.label,
                value: false
              };
        });
        setButtons(newButtonsState);
        console.log(buttons);
      }
      

  return (
    <Grid templateColumns='repeat(2, 1fr)' backgroundColor="gray.50" width={'94px'} height={"40px"} borderRadius="12px" padding={'6px'}>
      {buttons.map((button) => (
        <Center         >
        <IconButton
          h="28px"
          w='37.5px'
          backgroundColor={button.value == true ? "white" : "gray.50"}
          color={button.value == true ? "gray.700" : "gray.500"}
          key={button.id}
          icon={button.label === "list" ? <HamburgerIcon/> : <MdViewModule size={'20px'}/>}
          onClick={() => 
            handleButtonsChange({ buttons, setButtons })(button.label)
          }
          fontSize="13px"
          borderRadius="8px"
          fontWeight="medium"
  
                  >
          {button.label}
        </IconButton>
        </Center>
      ))}
</Grid>
  );
};
 
export default ViewBy; 