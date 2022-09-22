import {Box, Flex, IconButton, Link, ListItem, UnorderedList} from "@chakra-ui/react";
import {ChevronUpIcon} from "@chakra-ui/icons";

export const Credits = () => {
  return (
      <Box
          id={'credits'}
          w={'full'}
          pt={'75px'}
          bg={'linear-gradient(0deg, rgba(9,0,47,1) 0%, rgba(61,54,92,1) 55%, rgba(116,116,116,0.9416141456582633) 100%)'}
      >
          <Flex
              direction={'column'}
              gap={5}
              pb={7}
              align={'center'}
          >
              <Box fontSize={'45px'} fontWeight={'extrabold'} >Credits</Box>
              <UnorderedList>
                  <ListItem textAlign={'start'}>
                      First leaves background image by <Link
                      href="https://www.freepik.com/free-vector/realistic-tropical-leaves-background_14064229.htm?query=leaves%20background&collectionId=1074&&position=9&from_view=collections#position=9">
                      Freepik
                      </Link>
                  </ListItem>
                  <ListItem textAlign={'start'}>
                      First Bird : <Link href="https://storyset.com/animal">
                          Animal illustrations by Storyset
                      </Link>
                  </ListItem>
                  <ListItem textAlign={'start'}>
                      All "My Projects" section was illustrated by myself
                  </ListItem>
              </UnorderedList>
          </Flex>
          <IconButton
              as={"a"} href={'#home'}
              position={'absolute'} bottom={0} right={0}
              m={5} aria-label={'go back up'}
              size={'lg'}
              icon={<ChevronUpIcon />} colorScheme={'blackAlpha'} isRound
          />
      </Box>
  )
}