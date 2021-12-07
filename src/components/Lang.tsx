import React, { ChangeEvent, useState } from "react";
import { Language } from '../enums/Language';
import i18next from "i18next";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";






const Lang = (props: any) => {
    const { t } = useTranslation();
    const [lang, setLang] = useState('EN');


    let changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        let language = event.target.value;
        setLang(language);
        i18next.changeLanguage(language)
    }
        
 //<Dropdown onSelect={changeLanguage} value={lang}>
    return (
        <Dropdown >
            <Dropdown.Toggle    className="bg-transparent border-0 shadow-none">
                
            </Dropdown.Toggle>
            <Dropdown.Menu    >
                <Dropdown.Item  value={Language.FR} >Francais</Dropdown.Item>
                <Dropdown.Item  value={Language.EN} >English</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
export default Lang;