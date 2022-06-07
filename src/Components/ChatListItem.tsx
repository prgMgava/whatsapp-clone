import { Avatar, Box, Flex, HStack, Text, VStack } from "@chakra-ui/react"

interface ChatListItemInterface {
	key: number
}

export default function ChatListItem(key:ChatListItemInterface) {
	return (
		<Flex w='100%' gap={'16px'} borderBottom="solid" borderWidth={'1px'} cursor='pointer' h='70px' borderColor={'white.300'} pr='15px' mr='15px' _hover={{background: "white.250"}}>
			<Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' cursor={'pointer'} ml='16px' mt='8px' title='My perfil'/>
			<HStack w='100%' alignItems={'flex-start'} pt='8px'>
				<VStack flex='1' alignItems={'start'}>
					<Text fontSize={'17px'} color='black.900' justifySelf={'flex-end'}>Mateus Gava</Text>
					<Flex>
						<Text as='p' fontSize={'14px'} color="black.200" w='100%' noOfLines={1}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa possimus, quibusdam maiores sed a facere minima dolores natus explicabo voluptates iure quaerat reiciendis cumque voluptas dolorem. Libero iusto nam fugiat.
						</Text>
					</Flex>
				</VStack>
				<Box as='span' alignSelf={'start'} fontSize='12px' color={'black.200'}>19:00</Box>
			</HStack>
		</Flex>
	)
}