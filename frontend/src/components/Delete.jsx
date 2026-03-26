import { React, useState, useEffect } from "react"
import AxiosInstance from "./Axios"
import { Box, Typography } from "@mui/material"
import AddBoxIcon from '@mui/icons-material/AddBox';
import Button from '@mui/material/Button';
import { useNavigate,useParams } from 'react-router-dom'
import MyMessage from "./forms/Message";








const Delete =() =>{

        const navigate = useNavigate()

    
    
 const MyParameter = useParams()
    const MyId =MyParameter.id

    console.log("MyId",MyId)



        const [message, setMessage] = useState([])
    
     const [myData,setMyData] = useState({
              name: '',
                description: '',
                country: '',
                league: '',
                attendance: 0,
                city: '',
                characteristic: [],
    
        })
            console.log("my Data",myData)


      const GetData = () => {
       

           AxiosInstance.get(`footballclub/${MyId}/`).then((res) => {
                setMyData(res.data)
    
            })
    }
    useEffect(() => {
        GetData()
    }, [])

    const DeleteRecord =(event)=>{
        event.preventDefault()
        AxiosInstance.delete(`footballclub/${MyId}/`).then((res)=>{
        setMessage( 
             <MyMessage
                 messageText={"you succesfully deleted data to the database"}
                 messagecolor={"black"}
             />)
                        setTimeout(()=>{
                            navigate('/')},2000)
                        
                    
    } )
}

    return(
        <div>
            <form onSubmit={DeleteRecord}>
          <Box className={"TopBar"}>
                    {message}
                    <AddBoxIcon />
                    <Typography sx={{ marginLeft: '15px', fontWeight: 'bold' }} variant="subtitle2">Are you sure to Delete this club!</Typography>

                </Box>

                                <Box className={"TextBox"}>

                                    <Typography>You will be Deleting club <strong>{myData.name}</strong> from <strong>{myData.city}</strong></Typography>
                                </Box>

                

                  <Box sx={{ marginTop: '30px' }}>

                            <Button type="submit" variant="contained" fullWidth>Delete club</Button>
                        </Box>
         </form>               
        </div>
    )
}

export default Delete