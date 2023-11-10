
import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { AiFillLock, AiFillMail } from "react-icons/ai"
import { Link } from "react-router-dom"
import { ApplicationRoutes } from "../../routes"
import { BsFillPersonFill } from "react-icons/bs"
import { FiAtSign } from "react-icons/fi"

function Signup() {
    return (
        <div
            className="w-full min-h-screen bg-gradient-to-t from-black to-red-900 grid place-items-center"
        >
            <Link
                to={ApplicationRoutes.pages.login}
                className="absolute top-3 right-3"
            >
                <Button
                    fontSize="sm"
                    color="blackAlpha.900"
                    fontWeight="medium"
                    className="underline"
                >
                    Login
                </Button>
            </Link>

            <div>
                <p
                    className="text-3xl text-white font-medium text-center"
                >
                    Sign up For New Account
                </p>

                <div className="mt-8 flex flex-col gap-y-2.5">
                    <InputGroup>
                        <InputLeftElement pointerEvents="none" height="full">
                            <BsFillPersonFill className="w-5 h-5 fill-white" />
                        </InputLeftElement>
                        <Input
                            fontSize="sm"
                            size="sm"
                            color="whiteAlpha.800"
                            bgColor="whiteAlpha.100"
                            placeholder="Full Name"
                            border="none"
                            paddingBlock='6'
                            paddingInline="4"
                            rounded="lg"
                            width="sm"
                            paddingLeft="12"
                        />
                    </InputGroup>

                    <InputGroup>
                        <InputLeftElement pointerEvents="none" height="full">
                            <AiFillMail className="w-5 h-5 fill-white" />
                        </InputLeftElement>
                        <Input
                            fontSize="sm"
                            size="sm"
                            color="whiteAlpha.800"
                            bgColor="whiteAlpha.100"
                            placeholder="Email"
                            border="none"
                            paddingBlock='6'
                            paddingInline="4"
                            rounded="lg"
                            width="sm"
                            paddingLeft="12"
                        />
                    </InputGroup>

                    <InputGroup>
                        <InputLeftElement pointerEvents="none" height="full">
                            <AiFillLock className="w-5 h-5 fill-white" />
                        </InputLeftElement>
                        <Input
                            fontSize="sm"
                            size="sm"
                            color="whiteAlpha.800"
                            bgColor="whiteAlpha.100"
                            placeholder="Password"
                            border="none"
                            paddingBlock='6'
                            paddingInline="4"
                            rounded="lg"
                            width="sm"
                            paddingLeft="12"
                            type="password"
                        />
                    </InputGroup>

                    <InputGroup>
                        <InputLeftElement pointerEvents="none" height="full">
                            <FiAtSign className="w-5 h-5 stroke-white" />
                        </InputLeftElement>
                        <Input
                            fontSize="sm"
                            size="sm"
                            color="whiteAlpha.800"
                            bgColor="whiteAlpha.100"
                            placeholder="Username"
                            border="none"
                            paddingBlock='6'
                            paddingInline="4"
                            rounded="lg"
                            width="sm"
                            paddingLeft="12"
                        />
                    </InputGroup>

                    <p className="text-xs text-white/80 font-normal mt-3">
                        By Signing up, you agree to our&nbsp;
                        <span className="text-xs text-white/90 font-medium hover:underline">Term of Use</span>&nbsp;
                        and&nbsp;
                        <span className="text-xs text-white/90 font-medium hover:underline">Privacy Policy</span>
                    </p>

                    <Button
                        fontSize="sm"
                        color="blackAlpha.900"
                        fontWeight="medium"
                        mt="3"
                    >
                        Sign up
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default Signup