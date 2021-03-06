import {ApiCard} from '../index'
import {NavLink} from 'react-router-dom'
import AddIcon from '../../Images/iconAdd.svg'
import './cards.scss'

const ApiCardContainer = ({modelName, apiCalls}) => {


    return (
        <div className='gray_container'>

            <div className='d-flex justify-content-between'>
                <h2>{modelName}</h2>
                <NavLink to="/create_api"><img className='crudIcon' src={AddIcon} alt='add' /></NavLink>
            </div>

            {apiCalls.map(({id,httpType,link,info,reqHeader,reqVal,resBody,darkColor,lightColor}) => <ApiCard key={id} id={id} httpType={httpType} link={link} info={info} reqHeader={reqHeader} reqVal={reqVal} resBody={resBody} darkColor={darkColor} lightColor={lightColor} />)}            
        </div>
    )
}

export default ApiCardContainer