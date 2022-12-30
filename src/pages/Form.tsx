import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const Form = () => {

    useEffect(() => {
        document.title = "Form"
    })

    const navigate = useNavigate()

    const schema = yup.object().shape({
        number: yup.string().required().length(10),
        message: yup.string().required()
    })

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: any) => {
        console.log(data)
        navigate(`/whatsapp-url/Generate/${data.number}/${data.message}`)
    }

    return (
        <div>
            <span className="anchor"></span>
            <form className="contactForm" onSubmit={handleSubmit(onSubmit)}  >
                <h1>
                    <img alt="a" id="hrtLogo" src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/Logo/Whatsapp.svg" draggable="false" />
                    <span className='mr-5'></span> whatsapp-url
                </h1>
                <input type="number" placeholder="Enter the Phone Number with Code" {...register('number')} />
                <input type="text" placeholder="Enter the Message" {...register('message')} />

                <button className='blueBackground' type='submit'>
                    Generate
                    <i className="fa-solid fa-play"></i>
                </button>
            </form>
        </div>
    );
}
