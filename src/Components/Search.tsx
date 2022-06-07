import { SearchIcon } from "@chakra-ui/icons";
import { Box, HStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

export default function Search () {
	return(
		<HStack w='100%' borderBottom={'1px'} borderColor="white.500">
			<Box bg={'white.200'} pl='8px' flex='1' p={'8px 16px'} >
				<InputGroup >
					<InputLeftElement
					pointerEvents='none'
					children={<SearchIcon color='black.100'/>}
					/>
					<Input type='search' placeholder='Search or to start a new conversation' bg='white.100' />
				</InputGroup>
			</Box>
		</HStack>
	)
}