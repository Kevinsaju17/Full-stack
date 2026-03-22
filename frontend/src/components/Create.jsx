import { React, useState, useEffect } from "react"
import AxiosInstance from "./Axios"
import { Box, Typography } from "@mui/material"
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextForm from "./forms/TextForm";
import SelectForm from "./forms/selectform";
import MultiSelectForm from "./forms/MultiSelectForm";
import DescriptionForm from "./forms/DescriptionForm";
import Button from '@mui/material/Button';
import { useFormik } from 'formik';



const Create = () => {

    const [country, setCountry] = useState([])
    const [league, setLeague] = useState([])
    const [characteristic, setCharacteristic] = useState([])


    console.log("Country", country)
    console.log("League", league)
    console.log("Characteristic", characteristic)

    const GetData = () => {
        AxiosInstance.get('country/').then((res) => {
            setCountry(res.data)

        })

        AxiosInstance.get('league/').then((res) => {
            setLeague(res.data)

        })

        AxiosInstance.get('characteristic/').then((res) => {
            setCharacteristic(res.data)

        })
    }
    useEffect(() => {
        GetData()
    }, [])

    const formik = useFormik({
        initialValues: {
            name: 'nac',
            description: '',
            country: '',
            league: '',
            attendance: '',
            city: '',
            characteristic: [],
        },

        onSubmit: (values) => {
    AxiosInstance.post('footballclub/', values)
        .then(() => {
            console.log("successful data submission")
        })
        .catch((error) => {
            console.log("ERROR DATA:", error.response.data)  // ← now you'll see the actual error
        })
}
    })






    console.log("Formik Values", formik.values)


    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Box className={"TopBar"}>
                    <AddBoxIcon />
                    <Typography sx={{ marginLeft: '15px', fontWeight: 'bold' }} variant="subtitle2">create a new club!</Typography>

                </Box>

                <Box className={"FormBox"}>

                    <Box className={"FormArea"}>
                        <TextForm label={"Club Name"}
                            name='name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        <Box sx={{ marginTop: '30px' }}>
                            <TextForm
                                label={"City"}
                                name='city'
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Box>


                        <Box sx={{ marginTop: '30px' }}>

                            <SelectForm
                                label={"League"}
                                options={league}
                                name='league'
                                value={formik.values.league}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}

                            />


                        </Box>
                        <Box sx={{ marginTop: '30px' }}>

                            <Button type="submit" variant="contained" fullWidth>Submit Data</Button>
                        </Box>


                    </Box>









                    <Box className={"FormArea"}>
                        <SelectForm
                            label={"Country"}
                            options={country}
                            name='country'
                            value={formik.values.country}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <Box sx={{ marginTop: '30px' }}>

                            <TextForm label={"Attendance"}
                                name='attendance'
                                value={formik.values.attendance}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />

                        </Box>
                        <Box sx={{ marginTop: '30px' }}>

                            <MultiSelectForm
                                label={"Characteristic"}
                                options={characteristic}
                                name='characteristic'
                                value={formik.values.characteristic}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Box>

                    </Box>






                    <Box className={"FormArea"}>
                        <DescriptionForm
                            label={"Description"}
                            rows={9}
                            
                            name='description'
                            value={formik.values.description}
                            onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                        />

                    </Box>


                </Box>


            </form>
        </div>
    )
}

export default Create
