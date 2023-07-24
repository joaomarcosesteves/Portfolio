import React, {useState} from 'react'
import moment from 'moment'
import styled from 'styled-components'
import  {faGithub, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons'
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

    const contactMeHandler = async (e) => {
        e.preventDefault()

        if ( name === '' || email === '' || message === '') {
            setErro(true)
            return
        }

        const data = {
            Nome: name,
            Email: email,
            Mensagem: message,
            Data: moment().format('DD/MM/YYYY'),
        }

        if (data) {
            console.log(data)
            resetForm();
        }
        else {
            console.log("Erro, favor tentar novamente!")
            setErro(true)
        }
    }

    return(
        <>
        <Section>
            <Size>
                <Title>
                    <span>Keep in touch</span>
                    <span>Choose the best way for you</span>
                </Title>

                <Show>
                    <a href='https://www.linkedin.com/in/joao-marcos-esteves-pereira-a5b2b317a/'> 
                            <FontAwesomeIcon icon={faLinkedin} size='4x' />
                    </a>
                    <a href='https://github.com/joaomarcosesteves'> 
                        <FontAwesomeIcon icon={faGithub} size='4x' />
                    </a>
                </Show>
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
                    {sucesso && <h4>Mensagem enviada com sucesso!</h4>}
                    {erro && <h4>Ocorreu um erro, por favor envie novamente!</h4>}
                </Form>
             </Box>

        </Section>
        </>
    )
}

const Section = styled.div`
    display: flex;
    place-content: center;
    height: 91vh;
    align-self: center;
    justify-content: space-evenly;
    align-self: center;
    align-items: center;

`

const Size = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    width: 100%;
    gap: 3rem;

`

const FormTitle = styled.span`
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 3rem;
        justify-content: center;
        font-size: 18pt;

`
const Title = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 28pt;
`  

const Label = styled.label` 
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        pointer-events: none;
        transition: .5s;
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
    }

        input:focus ${Label},
        input:valid ${Label}{
        top: -20px;
        left: 0;
        color: #bdb8b8;
        font-size: 12px;
    }
`  
const Show = styled.div`    
    display: flex;
    align-self: center;
    gap: 3rem;
    font-size: 16px;
    -webkit-box-align: center;
    align-items: center;

    svg {
        color: ${props => props.theme.fontColor};
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