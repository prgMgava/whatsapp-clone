import { ChatIcon, SearchIcon, SpinnerIcon } from "@chakra-ui/icons";
import { Avatar, Box, Divider, Flex, HStack, IconButton, Input, InputGroup, InputLeftElement, StackDivider, VStack } from "@chakra-ui/react";
import { ThreeDots } from "../Custom/Icon/customIcons";

export default function Sidebar() {
	return (
		<VStack w='35%' maxW='415px' h='100%' borderRight={'1px'} borderColor='white.500'>
				<Flex h='60px' alignItems={'center'} justifyContent='space-between' w='100%'>
					<Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' cursor={'pointer'} ml='16px' mt='8px' title='My perfil'/>
					{/* TODO: badge? */}
					<HStack>
						<IconButton aria-label="Donut" icon={<SpinnerIcon/>} variant='unstyled' color={'black.100'} title='Status'/>
						<IconButton aria-label="Chat" icon={<ChatIcon/>} variant='unstyled' color={'black.100'} title='New Chat'/>
						<IconButton aria-label="Three Dots" icon={<ThreeDots/>} variant='unstyled' color={'black.100'} title='More'/>
					</HStack>
				</Flex>
				<HStack w='100%' borderBottom={'1px'} borderColor="white.500">
					<Box bg={'white.200'} pl='8px' flex='1' p={'8px 16px'} >
						<InputGroup >
							<InputLeftElement
							pointerEvents='none'
							children={<SearchIcon color='black.100'/>}
							/>
							<Input type='text' placeholder='Search or to start a new conversation' bg='white.100' />
						</InputGroup>
					</Box>
				</HStack>
				<h1>chats</h1>
		</VStack>
	)
}