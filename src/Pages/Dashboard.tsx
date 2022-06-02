import { Flex, HStack, Box, Container, VStack, StackDivider } from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";

export default function Dashboard() {
	return (
		<HStack w='100%' h={'100vh'} bg='white.350'>
			<Sidebar/>
			<Box>content area</Box>
		</HStack>
	)
}