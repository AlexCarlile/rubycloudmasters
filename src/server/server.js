const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3001; // Порт, на котором будет работать ваш сервер


// Middleware для обработки JSON данных
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://ruby-df8fd.web.app');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json());


// Массив для хранения объектов с данными формы
let formDataArray = [];

// Обработчик для приема данных формы
// app.post('/submit-form', async (req, res) => {
//     try {
//         // Здесь вы можете сохранить данные в базу данных или выполнить другие операции, необходимые для вашего приложения
//         const formData = req.body.formData;

//         // Добавляем новый объект с данными формы в массив
//         formDataArray.push(formData);
//         saveFormDataToFile();
//         // appendFormDataToFile(formData);
//         // После обработки данных формы, отправляем ответ клиенту
//         res.send({ success: true });
//     } catch (error) {
//         console.error('Ошибка обработки формы:', error);
//         res.status(500).send({ success: false, error: 'Ошибка обработки формы' });
//     }
// });

app.post('/submit-form', async (req, res) => {
    try {
        const formData = req.body;

        // Отправляем данные в Telegram
        await axios.post('https://api.telegram.org/bot5833589689:AAEWS3ZpVbP29jyX0MYsrcRX0VWDFTo-bMY/sendMessage', {
            chat_id: '134761197',
            text: `New form submission:\nCompany Name: ${formData.companyName}\nContact Person: ${formData.contactPerson}\n...` // Вставьте необходимые данные из формы
        });

        res.status(200).send('Form data sent to Telegram successfully.');
    } catch (error) {
        console.error('Error submitting form data to Telegram:', error);
        res.status(500).send('Error submitting form data to Telegram.');
    }
});

// Запись массива с данными формы в файл data.js
function saveFormDataToFile() {
    fs.writeFile('data.js', `const formDataArray = ${JSON.stringify(formDataArray)};`, (err) => {
        if (err) {
            console.error('Ошибка записи данных в файл:', err);
        } else {
            console.log('Данные успешно записаны в файл data.js');
        }
    });
}

// Обработчик для отправки письма через API Unisender
// app.post('/send-email-via-unisender', async (req, res) => {
//     try {
//         const { formData } = req.body;

//         const apiKey = '61hccq5z9559haiph6yhdj6iddkws7197663uhfo';
//         const url = 'https://api.unisender.com/ru/api/sendEmail?format=json&';

//         const data = {
//             api_key: apiKey,
//             email: 'selykov1998@gmail.com',
//             sender_name: 'MedGuru',
//             sender_email: 'mail@medguru.studio',
//             subject: 'Новая заявка с вашего сайта',
//             body: JSON.stringify(formData),
//             list_id: '2625', // Замените YOUR_LIST_ID на ID вашего списка рассылки в Unisender
//         };

//         const response = await axios.post(url, data);
//         console.log('Письмо успешно отправлено:', response.data);

//         res.send({ success: true });
//     } catch (error) {
//         console.error('Ошибка отправки письма через Unisender:', error);
//         res.status(500).send({ success: false, error: 'Ошибка отправки письма через Unisender' });
//     }
// });

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на порте ${port}`);
});