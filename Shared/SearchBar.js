import React from "react";
import { VStack, Input, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, Divider, Heading, Image } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { View } from "react-native";
const SearchBar = () => {
    return (
        <Center flex={1} px="2">
            <VStack
                my="4"
                space={5}
                w="100%"
                maxW="300px"
                divider={
                    <Box px="2">
                        <Divider />
                    </Box>
                }
            >
                <VStack w="100%" space={5} alignSelf="center">
                    <Input placeholder="Search Products" width="100%" borderRadius="4" py="3" px="1" fontSize="14" InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} />
                </VStack>
            </VStack>
        </Center>
    );
};
export default SearchBar;
