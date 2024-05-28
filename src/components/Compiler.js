import React, { useEffect, useState } from 'react';
import ReactNavBar from './ReactNavBar';
import { useNavigate, useParams } from 'react-router-dom';

export default function Compiler(props) {
    const nav = useNavigate();
    const params = useParams()
    const [language, setLanguage] = useState(params.language.toLocaleLowerCase());

    useEffect(() => {
        // Navigate to '/codeItYourSelf' when the component mounts
        nav(`/codeItYourSelf/${language}`);

        // Set the language when props.LangName changes
        // const languageName=language.toLowerCase();
        // setLanguage(languageName);
    }, [nav, props.LangName]);

    const link = `https://onecompiler.com/embed/${language}`;

    return (
        <div className='Compiler'>
            <ReactNavBar />
            <iframe
                title="Compiler"
                src={link}
                style={{ width: '100vw', height: '100vh', border: 'none', paddingTop: "80px" }}
            />
        </div>
    );
}
