import React, { useState } from "react";
import { Language } from '../../enums/Language';
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
            padding: 5,
            color:'black'
            
        }),

       control : (provided) => ({
            ...provided,
            backgroundColor : 'none',
            borderColor : 'transparent',
            boxShadow :'black',     

            ':hover' :{ 
                borderColor:"black"
            }
        }),

        indicatorSeparator : () => ({
            background: "none"
        }),

        menu : (provided) => ({
            ...provided,
            backgroundColor:"none",
            
        }),


  }


    return (
        <Select className="bg-transparent" styles={customStyles} isSearchable={false} options={options} value={{
            value: lang.value,
            label: <img src={t('lang.flag')} style={{ width: "20px", height: "20px" }} />
        }} onChange={changeLanguage} />
    )
}
export default Lang;