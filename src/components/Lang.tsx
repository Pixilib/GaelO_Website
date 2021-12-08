import React, { ChangeEvent, useState, Component } from "react";
import { Language } from '../enums/Language';
import i18next from "i18next";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import  Flag  from "../../src/assets/images/english.png"
import Select from 'react-select'






const Lang = (props: any) => {


    const { t } = useTranslation();
    const options = [
        { value: Language.FR, label: <>Francais</> },
        { value: Language.EN, label: <>English</> },

    ]
    const [lang, setLang] = useState(options[0]);


    let changeLanguage = (language: any) => {
        console.log(language)
        setLang(language);
        i18next.changeLanguage(language.value)
    }


       
    
    return (
        <Select className="styleSelect" isSearchable={false} options={options} value={{
            value: lang.value,
            label: <img src={t('lang.flag')} style={{width: "20px", height: "20px"}}/>
        }}  onChange={changeLanguage} />
    )
}
export default Lang;