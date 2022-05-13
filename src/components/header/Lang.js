import React from "react";

import { Fragment, useState } from "react";
import { Language } from "../../enums/Language";

import i18next from "i18next";
import { useTranslation } from "react-i18next";
import Select from "react-select";

const Lang = () => {
  const { t } = useTranslation();
  const options = [
    { value: Language.FR, label: <>Francais</> },
    { value: Language.EN, label: <>English</> },
  ];
  const [lang, setLang] = useState(options[0]);

  let changeLanguage = (language) => {
    setLang(language);
    i18next.changeLanguage(language.value);
  };

  const customStyles = {
    dropdownIndicator: () => ({
      color: "black",
    }),

    valueContainer: (provided) => ({
      ...provided,
      paddingLeft: 15,
    }),

    control: (provided) => ({
      ...provided,
      backgroundColor: "none",
      border: "none",
      boxShadow: "none",
    }),

    indicatorSeparator: () => ({
      background: "none",
    }),

    menu: (provided) => ({
      ...provided,
      backgroundColor: "#314053",
      width: "auto",
      color: "#78E08F",
      borderRadius: 15,
    }),

    option: (provided, state) => ({
      ...provided,
      backgroundColor: " none",
      fontWeight: state.isSelected ? "bold" : "normal",
      color: state.isSelected ? "#78E08F" : "#FFBA4D",
    }),
  };

  return (
    <Fragment>
      <Select
        type="button"
        className="bg-transparent"
        styles={customStyles}
        isSearchable={false}
        options={options}
        value={{
          value: lang.value,
          label: (
            <img
              alt="language"
              src={t("lang.flag")}
              style={{ width: "20px", height: "20px" }}
            />
          ),
        }}
        onChange={changeLanguage}
      />
    </Fragment>
  );
};

export default Lang;
