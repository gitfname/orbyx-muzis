
import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { AiFillLock, AiFillMail } from "react-icons/ai"
import { Link } from "react-router-dom"
import { ApplicationRoutes } from "../../routes"

function Login() {
    return (
        <div
            className="w-full min-h-screen bg-gradient-to-t from-black to-red-900 grid place-items-center"
        >
            <Link
                to={ApplicationRoutes.pages.signup}
                className="absolute top-3 right-3"
            >
                <Button
                    fontSize="sm"
                    color="blackAlpha.900"
                    fontWeight="medium"
                    className="underline"
                >
                    Sign up For New Account
                </Button>
            </Link>

            <div>
                <p
                    className="text-3xl text-white font-medium text-center"
                >
                    Login
                </p>

                <div className="mt-8 flex flex-col gap-y-2.5">
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

                    <Link
                        to={ApplicationRoutes.pages.forgotPassword}
                        className="text-xs text-white/90 font-normal underline mt-3"
                    >
                        Forgot Password
                    </Link>

                    <Button
                        fontSize="sm"
                        color="blackAlpha.900"
                        fontWeight="medium"
                        mt="3"
                    >
                        Login
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default Login