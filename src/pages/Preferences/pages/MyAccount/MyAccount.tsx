
import { Button } from "@chakra-ui/react"
import getBaseUrl from "../../../../utils/base-url"
import { useEditProfileModalStore } from "../../../../stores"

function MyAccount() {

    const setIsEditProfileModalOpen = useEditProfileModalStore(selector => selector.setIsOpen)

    return (
        <div>
            <p
                className="text-2xl font-medium text-white"
            >
                My Account
            </p>

            <div className="mt-8 flex flex-col gap-y-6">

                <div>
                    <p
                        className="text-sm font-medium text-white/90 uppercase mb-2.5"
                    >
                        user profile
                    </p>

                    <div className="w-full rounded-lg bg-zinc-950 p-3.5 py-4">
                        <div className="flex gap-x-2">
                            <img
                                alt=""
                                loading="lazy"
                                src={getBaseUrl() + "/mr-taha.jpg"}
                                className="w-40 rounded-full object-center object-cover"
                            />
                            <div className="flex w-full items-center justify-between h-max pt-6">
                                <p
                                    className="text-2xl text-white font-normal"
                                >
                                    Taha Star
                                </p>

                                <Button
                                    bgColor="red.600"
                                    color="white"
                                    paddingInline="7"
                                    _hover={{
                                        bgColor: "red.700"
                                    }}
                                    size="sm"
                                    rounded="2xl"
                                    fontSize="sm"
                                    fontWeight="normal"
                                >
                                    View Profile
                                </Button>
                            </div>
                        </div>

                        <div className="w-full rounded-lg bg-white/10 p-3 mt-4">
                            <div className="flex items-center justify-between w-full">
                                <div>
                                    <p className="text-sm uppercase font-medium text-white/70">username</p>
                                    <p className="text-sm text-white/90 font-medium mt-0.5">@tahadavari</p>
                                </div>

                                <Button
                                    onClick={() => setIsEditProfileModalOpen(true)}
                                    bgColor="whiteAlpha.200"
                                    borderWidth="1px"
                                    borderColor="whiteAlpha.400"
                                    rounded="2xl"
                                    backgroundColor="transparent"
                                    fontSize="sm"
                                    size="sm"
                                    paddingInline="6"
                                    fontWeight="normal"
                                    color="white"
                                    _hover={{
                                        bgColor: "whiteAlpha.200"
                                    }}
                                    className="uppercase"
                                >
                                    edit profile
                                </Button>
                            </div>

                            <p className="text-sm uppercase font-medium text-white/70 mt-4">email</p>
                            <p className="text-sm text-white/90 font-medium mt-0.5">tahadavari1381@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div>
                    <p
                        className="text-sm font-medium text-white/90 uppercase mb-2.5"
                    >
                        subscription
                    </p>

                    <div className="w-full rounded-lg bg-zinc-950 p-3.5 py-4">
                        <p
                            className="text-xs text-white/90 font-medium"
                        >
                            you currently have a 1-Month NW Premium subscription that epires Oct 13, 2023
                        </p>

                        <Button
                            bgColor="red.600"
                            color="white"
                            paddingInline="7"
                            _hover={{
                                bgColor: "red.700"
                            }}
                            size="sm"
                            rounded="2xl"
                            fontSize="sm"
                            fontWeight="normal"
                            className="mt-4"
                        >
                            Manage Account
                        </Button>
                    </div>
                </div>

                <div>
                    <p
                        className="text-sm font-medium text-white/90 uppercase mb-2.5"
                    >
                        password
                    </p>

                    <div className="w-full rounded-lg bg-zinc-950 p-3.5 py-4">
                        <p
                            className="text-xs text-white/90 font-medium"
                        >
                            Change your password
                        </p>

                        <Button
                            bgColor="transparent"
                            borderWidth="1px"
                            borderColor="red.600"
                            color="red.600"
                            paddingInline="7"
                            _hover={{
                                bgColor: "red.600",
                                color: "white"
                            }}
                            size="sm"
                            rounded="2xl"
                            fontSize="sm"
                            fontWeight="normal"
                            className="mt-4"
                        >
                            Change
                        </Button>
                    </div>
                </div>

                <div>
                    <p
                        className="text-sm font-medium text-white/90 uppercase mb-2.5"
                    >
                        account removal
                    </p>

                    <div className="w-full rounded-lg bg-zinc-950 p-3.5 py-4">
                        <p
                            className="text-xs text-white/90 font-medium"
                        >
                            Deactivate Account
                        </p>
                        <p
                            className="text-xs text-white/50 font-medium mt-1"
                        >
                            You will have 30 days to activate your account by logging in again. after that, your account will be removed. permanently
                        </p>

                        <Button
                            bgColor="transparent"
                            borderWidth="1px"
                            borderColor="red.600"
                            color="red.600"
                            paddingInline="7"
                            _hover={{
                                bgColor: "red.600",
                                color: "white"
                            }}
                            size="sm"
                            rounded="2xl"
                            fontSize="sm"
                            fontWeight="normal"
                            className="mt-4"
                        >
                            Deactivate
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyAccount
