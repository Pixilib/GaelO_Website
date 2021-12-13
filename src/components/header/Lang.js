import React, {  useState } from "react";
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
        indicatorContainer: (provided, state) => ({
            ...provided,
            
            color : 'black',
          
            Color: state.isFocused ? 'red' : 'blue' ,
          
          }),
        dropdownIndicator: (provided, state) => ({
          ...provided,
          
          color : 'black',
        
          Color: state.isFocused ? 'red' : 'blue' ,
        
        }),
        control:(provided,state) => ({
            ...provided,
            borderColor : 'transparent',

            backgroundColor: 'transparent',
        }),
        border: (provided,state) => ({
            ...provided,

            backgroundColor: 'transparent',
        }),
        indicatorSeparator:(provided,state) => ({
            ...provided,

            backgroundColor: 'transparent',
        }),

        singleValue: (provided, state) => {
        
          
      
          return { ...provided };
        }
      }
      


    
    return (
        <Select styles={customStyles} isSearchable={false} options={options} value={{
            value: lang.value,
            label: <img src={t('lang.flag')} style={{width: "20px", height: "20px"}}/>
        }}  onChange={changeLanguage} />
    )
}
export default Lang;