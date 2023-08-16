import React, {useState} from 'react'
import moment from 'moment'
import axios from 'axios'
import styled from 'styled-components'
import SocialLinks from '../components/socialLinks'
import  {faComment, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ContactMe = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ sucesso, setSucesso ] = useState(false);
    const [ erro, setErro ] = useState(false);

    const resetForm = () => {
        setName('');
        setEmail('')
        setMessage('')
    }

    const contactMeHandler = (e) => {
        e.preventDefault()

        if ( name === '' || email === '' || message === '') {
            setErro(true)
            return
        }

        axios.post('/api/sendemail', {
            name: name,
            email: email,
            message: message,
            date: moment().format('DD/MM/YYYY, hh:mm')
        }).then((result) => {
            //console.log(result)
            setSucesso(true);
            resetForm()
        })
        .catch((err) => {
            setErro(true)
            console.log(err)
        })
    }

    return(
        <>
        <Section>
            <Size>
                <Title>
                    <span>Keep in touch</span>
                    <span>Choose the best way for you</span>
                </Title>

                <SocialLinks size={'4x'}/>
            </Size>
             <Box>
                <Form onSubmit={contactMeHandler}>
                    <FormTitle> Leave Me A Message <FontAwesomeIcon icon={faComment} size='1x'/> </FormTitle>
                    <UserBox>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => {setName(e.target.value)}}
                            />
                        <Label>Name</Label>
                    </UserBox>
                    <UserBox>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                        />
                        <Label>Email</Label>
                    </UserBox>
                    <UserBox>
                        <textarea
                            rows='5'
                            required
                            value={message}
                            onChange={(e) => {setMessage(e.target.value)}}
                        />
                        <Label>Message</Label>
                    </UserBox>
                    <button type="submit"> SEND <FontAwesomeIcon icon={faPaperPlane} fade size='1x' /> <span/></button>
                    {sucesso && <FeedbackForm>Message sent successfully :)</FeedbackForm>}
                    {erro && <FeedbackFormBad>oh no, there was an error :( try again!</FeedbackFormBad>}
                </Form>
             </Box>

        </Section>
        </>
    )
}

const Section = styled.div`
    display: flex;
    place-content: center;
    height: 100vh;
    align-self: center;
    justify-content: space-evenly;
    align-self: center;
    align-items: center;

    @media (max-width: 1024px){
        flex-direction: column;
        height: auto;
        margin: 7rem 0 1.5rem 0;
        gap: 3rem;
    }

`



const Size = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    width: 100%;
    gap: 3rem;

    div:nth-child(2) {
        width: 100%;
        place-content: center;
        gap: 3rem;

        @media (max-width: 767px){
            margin: 0;

            svg{
                font-size: 3rem;
            }
        }
    }

`

const FormTitle = styled.span`
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 3rem;
        justify-content: center;
        font-size: 18pt;

        @media (max-width: 767px){
            font-size: 14pt
        }
        
`

const FeedbackForm = styled.h4`
    margin: 1rem;
    text-align: center;
    font-weight: 500;
    font-style: italic;
    color: #8bf38b;
`

const FeedbackFormBad = styled.h4`
    margin: 1rem;
    text-align: center;
    font-weight: 500;
    font-style: italic;
    color: rgb(157 37 37);
`
const Title = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 28pt;
    text-align: center;

    span:first-child {
        font-weight: bold;
        text-shadow: 1px 1px black;
    }

    @media (max-width: 767px){
        font-size: 22pt
    }
`  

const Label = styled.label` 
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        pointer-events: none;
        transition: .5s;

        @media (max-width: 767px){
            font-size: 10pt
        }
`  

const UserBox = styled.div` 
    position: relative;
    width: 80%;
    margin: 0 auto;

    input, textarea{
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid ${props => props.theme.fontColor};
        outline: none;
        background: transparent;

        @media (max-width: 767px){
            font-size: 10pt;
        }
    }

        input:focus ${Label},
        input:valid ${Label}{
        top: -20px;
        left: 0;
        color: #bdb8b8;
        font-size: 12px;
    }
`  

const Form = styled.form`
    margin: 0px auto;
    position: relative;
    padding: 70px 5px;
    width: 60%;
    border-radius: 2pc;
    background: linear-gradient(36deg, rgb(181, 98, 151) 0%, rgb(120, 150, 189) 100%);
    filter: drop-shadow(black 2px 4px 6px);

/*     :before{
        content: "or";
        position: absolute;
        right: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 45px 0 45px 45px;
        border-color: #2c3e50 transparent transparent transparent;

        transform: translateX(-50%) translateY(100%) rotate(45deg);;
    }
 */
    @media (max-width: 1500px) {
        padding: 4rem;
        font-size: 1rem;
    }

    @media (max-width: 767px) {
            padding: 2rem 1rem;
            width: 100%;
    }
`;

const Box = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    place-content: center;
    //box-shadow: rgba(0, 0, 0, 0.6) 0px 15px 25px;
    //clip-path: polygon(0 60.00px,60.00px 0,100% 0,100% calc(100% - 60.00px),calc(100% - 60.00px) 100%,0 100%);


    input:focus ~ label,
    input:valid ~ label,
    textarea:focus ~ label,
    textarea:valid ~ label {
        top: -20px;
        left: 0;
        color: #bdb8b8;
        font-size: 12px;
    }

    button{
        color: ${props => props.theme.fontColor};
        display: flex;
        padding: 10px 20px;
        font-size: 16px;
        text-decoration: none;
        overflow: hidden;
        transition: all 0.5s ease 0s;
        margin-top: 1rem;
        letter-spacing: 1px;
        border-radius: 13px;
        background: none;
        border: none;
        margin: 0 auto;
        gap: 8px;
    }

    button:hover{
        cursor: pointer;
        filter: drop-shadow(2px 4px 6px black);
    }

    @keyframes btn {
        0% {
            left: -100%;
        }

        50%, 100% {
            left: 100%;
        }
    }

    button span:nth-child(1){
        position: absolute;
        bottom: 2px;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #507DB9);
        animation: btn 2s linear infinite;
    }
`

export default ContactMe