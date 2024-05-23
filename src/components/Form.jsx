import { React, useState, useEffect } from 'react';
import TextInput from './formComponents/TextInput';
import ContactInfoInput from './formComponents/ContactInfoInput';
import { awardsList } from './databases/awardsList';
import NominationDropdown from './formComponents/NominationDropdown';
import SubmitButton from './formComponents/SubmitButton';
import Checkbox from './formComponents/Checkbox';
import axios from 'axios'; // Подключаем axios для отправки POST запросов
import ReCAPTCHA from 'react-google-recaptcha';


export default function Form() {

    const [companyName, setCompanyName] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [phone, setPhone] = useState('+7');
    const [email, setEmail] = useState('');
    const [selectedNomination, setSelectedNomination] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const [isFilled, setIsFilled] = useState(true)
    const [filledCheck, setFilledCheck] = useState(true)
    const [success, setSuccess] = useState(false)

    const [captchaToken, setCaptchaToken] = useState(null);

    const checkFields = () => {
        if (
            companyName.trim() !== '' &&
            contactPerson.trim() !== '' &&
            phone.trim() !== '' &&
            email.trim() !== '' &&
            selectedNomination.trim() !== '' &&
            projectDescription.trim() !== '' &&
            isCheckboxChecked !== false &&
            captchaToken !== null
        ) {
            setIsFilled(true);
        } else {
            setIsFilled(false);
        }
    };

    useEffect(() => {
        checkFields();
    }, [companyName, contactPerson, phone, email, selectedNomination, projectDescription, isCheckboxChecked, captchaToken]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!isFilled) {
            setFilledCheck(false)
            setSuccess(false)
            // alert('Заполните все поля');
            return;
        }
        else {
            setFilledCheck(true)
            try {
                // Отправляем данные на свой сервер
                await axios.post('https://selyukov1998.pythonanywhere.com/submit-form', {
                    formData: {
                        companyName,
                        contactPerson,
                        phone,
                        email,
                        selectedNomination,
                        projectDescription,
                        isCheckboxChecked,
                        recaptchaResponse: captchaToken // Добавляем токен reCAPTCHA в данные формы
                    }
                });
        
                console.log('Письмо успешно отправлено');
            } catch (error) {
                console.error('Ошибка отправки письма через Unisender:', error);
            }
        
            // Очищаем состояние формы после отправки
            setCompanyName('');
            setContactPerson('');
            setPhone('+7');
            setEmail('');
            setSelectedNomination('');
            setProjectDescription('');
            setIsCheckboxChecked(false);

            setSuccess(true)

            setIsFilled(true)
            setFilledCheck(true)

            setCaptchaToken(null)
        }
    };
  
    return (
        <div id="5" className="form-container container">
            <div className="item-title flex">
                <h2 className="section-title">
                    оставить заявку на участие
                </h2>
                <svg width="27" height="28" className="arrow" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.03455L25.5 26.0303M25.5 26.0303V0.969604M25.5 26.0303H0.5" stroke="white" strokeWidth="2"/>
                </svg>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <form className="form flex" onSubmit={handleSubmit}>
                    <TextInput 
                        value={companyName}
                        filledCheck={filledCheck}
                        onChange={setCompanyName}
                        name={"Название фармкомпании*"}
                    />
                    <TextInput 
                        value={contactPerson}
                        filledCheck={filledCheck}
                        onChange={setContactPerson}
                        name={"ФИО контактного лица*"}
                    />
                    <ContactInfoInput 
                        filledCheck={filledCheck}
                        phone={phone} 
                        email={email} 
                        onPhoneChange={setPhone} 
                        onEmailChange={setEmail}/>
                    <NominationDropdown     
                        filledCheck={filledCheck}
                        nominations={awardsList} 
                        selectedNomination={selectedNomination} 
                        onSelectNomination={setSelectedNomination}
                    />
                    <TextInput 
                        value={projectDescription}
                        filledCheck={filledCheck}
                        onChange={setProjectDescription}
                        name={"Описание кейса компании (вставить ссылку)*"}
                    />
                    <SubmitButton 
                        onClick={handleSubmit}
                        filledCheck={filledCheck}
                        success={success}
                    />
                    <div style={{display: 'flex', width: '100%', justifyContent:'end', paddingTop: '20px'}}>
                        <ReCAPTCHA 
                            sitekey="6Lf02-QpAAAAABgxIuQ_mJjjYk5dygUUKCObwEnt"
                            onChange={(val) => setCaptchaToken(val)}
                            theme="dark"
                        />
                    </div>

                    <Checkbox 
                        filledCheck={filledCheck}
                        checked={isCheckboxChecked} 
                        onChange={setIsCheckboxChecked}
                    />

                </form>
            </div>
        </div>
  )
}
