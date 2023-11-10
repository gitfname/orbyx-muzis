

import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { AiFillLock, AiFillMail } from "react-icons/ai"
import { Link } from "react-router-dom"
import { ApplicationRoutes } from "../../routes"

function VerifyEmail() {
    return (
        <div
            className="w-full min-h-screen bg-gradient-to-t from-black to-red-900 grid place-items-center"
        >
            <div>
                <p
                    className="text-3xl text-white font-medium text-center"
                >
                    Verify Email
                </p>

                <div className="mt-8 flex flex-col gap-y-2.5">
                    <div className="flex items-center gap-x-3">
                        <Input
                            fontSize="sm"
                            size="sm"
                            color="whiteAlpha.800"
                            bgColor="whiteAlpha.100"
                            border="none"
                            rounded="lg"
                            width="12"
                            height="12"
                            textAlign="center"
                            maxLength={1}
                        />
                        <Input
                            fontSize="sm"
                            size="sm"
                            color="whiteAlpha.800"
                            bgColor="whiteAlpha.100"
                            border="none"
                            rounded="lg"
                            width="12"
                            height="12"
                            textAlign="center"
                            maxLength={1}
                        />
                        <Input
                            fontSize="sm"
                            size="sm"
                            color="whiteAlpha.800"
                            bgColor="whiteAlpha.100"
                            border="none"
                            rounded="lg"
                            width="12"
                            height="12"
                            textAlign="center"
                            maxLength={1}
                        />
                        <Input
                            fontSize="sm"
                            size="sm"
                            color="whiteAlpha.800"
                            bgColor="whiteAlpha.100"
                            border="none"
                            rounded="lg"
                            width="12"
                            height="12"
                            textAlign="center"
                            maxLength={1}
                        />
                        <Input
                            fontSize="sm"
                            size="sm"
                            color="whiteAlpha.800"
                            bgColor="whiteAlpha.100"
                            border="none"
                            rounded="lg"
                            width="12"
                            height="12"
                            textAlign="center"
                            maxLength={1}
                        />
                    </div>

                    <Button
                        fontSize="sm"
                        color="blackAlpha.900"
                        fontWeight="medium"
                        mt="3"
                    >
                        Verify
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default VerifyEmail