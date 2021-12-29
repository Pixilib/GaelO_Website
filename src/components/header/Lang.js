import React, { useState } from "react";
import { Language } from '../../enums/Language';
import { Container } from 'react-bootstrap'

import i18next from "i18next"
import { useTranslation } from "react-i18next"
import Select from 'react-select'


const Lang = (props) => {

    const { t } = useTranslation();
    const options = [
        { value: Language.FR, label: <>Francais</> },
        { value: Language.EN, label: <>English</> },

    ]
    const [lang, setLang] = useState(options[0]);


    let changeLanguage = (language: any) => {
        setLang(language);
        i18next.changeLanguage(language.value)
    }


    const customStyles = {
        dropdownIndicator: () => ({
            color:'black'       
        }),

        valueContainer: (provided) => ({
            ...provided,
            paddingLeft: 15,         
        }),

       control : (provided) => ({
            ...provided,
            backgroundColor : 'none',
            border : 'none',
            boxShadow :'none',           
        }),

        indicatorSeparator : () => ({
            background: "none"
        }),

        menu : (provided) => ({
            ...provided,
            backgroundColor: "#314053" ,
            width: "150%",
            color :"#78E08F",
            //color: "#FFBA4D"
            borderRadius : 15,
        }),

        option : (provided, state) => ({
            ...provided,
            backgroundColor :" none",
            fontWeight: state.isSelected ? "bold" : "normal",
            color: state.isSelected ? "#78E08F" : "#FFBA4D",
        })
  }

    return (

        <Container className='d-flex'>
           
        <Select type="button" className="bg-transparent" styles={customStyles} isSearchable={false} options={options} value={{
            value: lang.value,
            label: <img src={t('lang.flag')} style={{ width: "100%", height: "20px" }} />
        }} onChange={changeLanguage} />

        
        
        </Container>
    )
}


export default Lang;