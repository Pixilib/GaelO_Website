import React, { ChangeEvent, useState } from "react";
import { Language } from '../enums/Language';
import i18next from "i18next";

import '../assets/css/lang.css';




const Lang = (props: any) => {

    const [lang, setLang] = useState('EN');


    let changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        let language = event.target.value;
        setLang(language);
        i18next.changeLanguage(language)
    }

    return (
        <div>
            <div >
                <select value={lang} name="language" onChange={changeLanguage}>
                    <option value={Language.FR}>FR</option>
                    <option value={Language.EN}>EN</option>
                </select>
            </div>
        </div>
    )
}

export default Lang;