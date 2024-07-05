import { Box, Center, Spinner, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { api } from "../api"

interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

const ContaInfo = () => { 
    const [ userData, setUserData ] = useState<null | UserData>()

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])
    

    return (
        <>
            { userData === undefined || userData === null ?
                    (  
                        <Center>
                            <Spinner size='xl' color='white'/>
                        </Center>
                    ) : 

           ( <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px" marginTop='15px' width='800px'>
            <Text fontSize='3xl' fontWeight='bold'>
                Informações do usuário
            </Text>
            <Link to='/conta/1'>
                <Text fontSize='xl'>
                   {` Nome: ${userData.name}` }
                </Text>
                <Text fontSize='xl'>
                   {` E-mail: ${userData.email}` }
                </Text>
            </Link>
            <a href='/conta/1'>
                 <strong>
                    Voltar para conta
                </strong>     
            </a>
        </Box>
        )
        
            }
        </>
    )
}

export default ContaInfo
