import React, { useState } from 'react';
import { Button, Grid,Center} from '@chakra-ui/react';

const FilterBy = () => {
 
    const [buttons, setButtons] = useState([
        { id: 0, label: "All", value: true },
        { id: 1, label: "Active", value: false },
        { id: 2, label: "Offline", value: false }, 
        { id: 3, label: "Archived", value: false }
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
      }

  return (
    <Grid templateColumns='repeat(4, 1fr)' backgroundColor="gray.50" width="302px" height="44px" borderRadius="12px" padding="4px 12px 4px 12px" margin="0px 32px 0px 32px">
      {buttons.map((button, index) => (
        <Center         >
        <Button
          h="32px"
          backgroundColor={button.value == true ? "white" : "gray.50"}
          color={button.value == true ? "gray.700" : "gray.500"}
          key={`${button.label}-${index}`}
          onClick={() => 
            handleButtonsChange({ buttons, setButtons })(button.label)
          }
          fontSize="13px"
          borderRadius="8px"
          fontWeight="medium"
  
                  >
          {button.label}
        </Button>
        </Center>
      ))}
</Grid>
  );
};
 
export default FilterBy; 