import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import './pages.scss'



const useStyles = makeStyles(theme => ({
    textfield: {
        width:'100%',
        marginBottom: theme.spacing(2)
    },
    addbutton: {
        marginTop: theme.spacing(3)
    }
}))



const CreateAPI = () => {

    const classes = useStyles()

    const [reqField, setReqField] = useState('')
    const handleReqFieldChange = e => setReqField(e.target.value)

    return (
        <div className='container' style={{marginTop:'3rem', height:'75vh'}}>
            <h1 className='formHeader'>Create API</h1>
            <TextField className={classes.textfield} id="http-type" label="HTTP Type ..." variant="outlined" />
            <TextField className={classes.textfield} id="link" label="Link ..." variant="outlined" />

            <FormControl variant="outlined" className={classes.textfield}>
                <InputLabel id="reqField">Request Field ...</InputLabel>
                <Select labelId="reqField" label='Request Field ...' // id="reqField"
                    value={reqField} onChange={handleReqFieldChange} >
                    <MenuItem value={'files'}>Files</MenuItem>
                    <MenuItem value={'params'}>Params</MenuItem>
                    <MenuItem value={'queries'}>Queries</MenuItem>
                    <MenuItem value={'header'}>Header</MenuItem>
                    <MenuItem value={'body'}>Body</MenuItem>
                </Select>
            </FormControl>

            <TextField className={classes.textfield} id="reqVal" label="Field Generated based on Request Field ..." variant="outlined" multiline />
            <TextField className={classes.textfield} id="reqBody" label="Response Body ..." variant="outlined" multiline />
            <NavLink to="/adddocs">
                <Button variant="contained" color="primary" className={classes.addbutton} >ADD API</Button>  
            </NavLink>          
        </div>
    )
}

export default CreateAPI