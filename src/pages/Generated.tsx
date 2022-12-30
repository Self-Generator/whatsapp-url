import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import CopyCode from "../utils/Copy";

export const Generate = () => {

    useEffect(() => {
        Prism.highlightAll();
        document.title = "AppScript";
    }, []);

    //read full url
    const url1 = window.location.href;

    //split url by /
    const urlSplit = url1.split("/");

    //get last item in array
    const number = urlSplit[urlSplit.length - 2];
    const message = urlSplit[urlSplit.length - 1];

    const output =
        `
api.whatsapp.com/send?phone=91${number}&text=${message}

`
    const url = 'https://api.whatsapp.com/send?phone=91' + number + '&text=' + message

    return (
        <div>
            <span className="anchor"></span>
            <form className="contactForm" >
                <h1>
                    <img alt="a" id="hrtLogo" src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/Logo/Whatsapp.svg" draggable="false" />
                    <span className='mr-5'></span> whatsapp-url
                </h1>

                <pre>
                    <code className={'language-js'}>
                        {output}
                    </code>
                </pre>

                <button className='blueBackground mt-4' id="cpy" onClick={() => CopyCode(output)}>
                    Copy
                    <i className="fa-regular fa-copy"></i>
                </button>

                <a className='btn-accent green blk mt-4' href={url} target="_blank">
                    Open
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </form>
        </div>
    )
}   
