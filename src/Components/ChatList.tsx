import { Box } from "@chakra-ui/react"
import { useState } from "react"
import ChatListItem from "./ChatListItem"

export default function ChatList() {

	const [chatList, setChatList ] = useState([{},{}])
	return (
		<Box bg={'white.100'} w='100%'>
			{chatList.map((chat, key) => (
				<ChatListItem key={key}/>
			))}
		</Box>
	)
}