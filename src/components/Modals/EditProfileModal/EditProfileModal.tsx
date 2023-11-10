

import {
    Modal, ModalContent, ModalOverlay, ModalCloseButton, ModalHeader, ModalBody, Button, Input, Textarea, Switch
} from "@chakra-ui/react"
import { useEditProfileModalStore } from "../../../stores"
import getBaseUrl from "../../../utils/base-url"

function EditProfileModal() {

    const isOpen = useEditProfileModalStore(selector => selector.isOpen)
    const setIsOpen = useEditProfileModalStore(selector => selector.setIsOpen)

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            size={["full", "xl", "2xl"]}
            scrollBehavior="inside"
        >

            <ModalOverlay bgColor="blackAlpha.800" className="backdrop-blur-[2px]" />

            <ModalContent className="!bg-zinc-800">

                <ModalHeader fontSize="lg" color="whiteAlpha.800" fontWeight="normal">Edit your profile</ModalHeader>

                <ModalCloseButton
                    color="whiteAlpha.800"
                    _hover={{
                        bgColor: "whiteAlpha.200"
                    }}
                />

                <ModalBody pb="8">

                    <p
                        className="text-xs text-white/70 font-normal mb-3"
                    >
                        profile photo
                    </p>

                    <div className="w-full grid grid-cols-1 max-lg:place-items-center lg:grid-cols-[4fr_10fr] gap-4">

                        <div>

                            <img
                                alt=""
                                loading="lazy"
                                src={getBaseUrl() + "/mr-taha.jpg"}
                                className="w-full max-w-xs aspect-square rounded-xl"
                            />

                            <Button
                                fontSize="sm"
                                bgColor="transparent"
                                color="red.500"
                                rounded="lg"
                                _hover={{
                                    bgColor: "whiteAlpha.100",
                                    color: "whiteAlpha.900"
                                }}
                                width="full"
                                mt="3"
                                size="sm"
                                fontWeight="normal"
                            >
                                Remove
                            </Button>
                        </div>

                        <div>
                            <p className="text-xs text-white/70 font-normal mb-2">First name</p>
                            <Input
                                fontSize="sm"
                                size="sm"
                                color="whiteAlpha.800"
                                bgColor="transparent"
                                placeholder="First name"
                                borderColor="whiteAlpha.400"
                                paddingBlock='5'
                                paddingInline="4"
                                rounded="lg"
                                width="sm"
                                mb="7"
                            />

                            <p className="text-xs text-white/70 font-normal mb-2">Last name</p>
                            <Input
                                fontSize="sm"
                                size="sm"
                                color="whiteAlpha.800"
                                bgColor="transparent"
                                placeholder="Last name"
                                borderColor="whiteAlpha.400"
                                paddingBlock='5'
                                paddingInline="4"
                                rounded="lg"
                                width="sm"
                                mb="7"
                            />

                            <p className="text-xs text-white/70 font-normal mb-2">Email</p>
                            <Input
                                fontSize="sm"
                                size="sm"
                                color="whiteAlpha.800"
                                bgColor="transparent"
                                placeholder="Email"
                                borderColor="whiteAlpha.400"
                                paddingBlock='5'
                                paddingInline="4"
                                rounded="lg"
                                width="sm"
                                mb="7"
                            />

                            <p className="text-xs text-white/70 font-normal mb-2">User name</p>
                            <Input
                                fontSize="sm"
                                size="sm"
                                color="whiteAlpha.800"
                                bgColor="transparent"
                                placeholder="User name"
                                borderColor="whiteAlpha.400"
                                paddingBlock='5'
                                paddingInline="4"
                                rounded="lg"
                                width="sm"
                                mb="7"
                            />

                            <p className="text-xs text-white/70 font-normal mb-2">Bio</p>
                            <Textarea
                                fontSize="sm"
                                size="sm"
                                color="whiteAlpha.800"
                                bgColor="transparent"
                                placeholder="Bio"
                                borderColor="whiteAlpha.400"
                                paddingBlock='5'
                                paddingInline="4"
                                rounded="lg"
                                width="sm"
                                mb="7"
                            ></Textarea>

                            <div className="flex items-center justify-between mb-7">
                                <p
                                    className="text-xs font-normal text-white/70"
                                >
                                    Send occasional emails notifications about new musics
                                </p>

                                <Switch colorScheme="red" />
                            </div>

                            <div className="flex items-center justify-between mb-7">
                                <p
                                    className="text-xs font-normal text-white/70"
                                >
                                    Send email notifications about artists that you follow
                                </p>

                                <Switch colorScheme="red" />
                            </div>

                            <p
                                className="text-xs text-white underline mb-7"
                            >
                                Change password
                            </p>

                            <div className="mb-7 flex items-center gap-x-3">
                                <Button
                                    bgColor="whiteAlpha.200"
                                    color="whiteAlpha.900"
                                    fontWeight="normal"
                                    _hover={{
                                        bgColor: "whiteAlpha.300"
                                    }}
                                    _active={{
                                        bgColor: "whiteAlpha.100"
                                    }}
                                    fontSize="xs"
                                >
                                    Cancel
                                </Button>

                                <Button
                                    fontWeight="normal"
                                    fontSize="xs"
                                    colorScheme="green"
                                >
                                    Save Changes
                                </Button>
                            </div>
                        </div>

                    </div>

                </ModalBody>

            </ModalContent>

        </Modal>
    )
}

export default EditProfileModal