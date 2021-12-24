// document.addEventListener("DOMContentLoaded", function (event) {
//     var buttons = document.querySelectorAll(".social_share");
//     let title = 'Title'
//     let text = 'Text'
//     let options = {
//         type:        'vk',           // share type
//         fb_api_id:   '',             // Facebook API id
//         url:         'www.example.com',             // url to share
//         title:       title, // title to share
//         image:       'https://sun9-83.userapi.com/impg/mPpQp6TdAUt6atKoi63wBAcRBCikO6Oy7w6qBw/iiEKwsJGN78.jpg?size=1800x1200&quality=96&sign=9de8e5c98bcfaad66cd7f0cbb939a63f&type=album',             // image to share
//         text:        text,             // text to share
//         utm_source:  '',
//         utm_medium:  '',
//         utm_campaign:'',
//         popup_width: 1000,
//         popup_height: 1000
//       };
//     for (var i = 0; i < buttons.length; i++) {
//         buttons[i].addEventListener(
//             "click",
//             function () {
//                 return JSShare.go(this, options);
//             },
//             false
//         );
//     }
// });
var a2a_config = a2a_config || {};
a2a_config.templates = a2a_config.templates || {};
a2a_config.locale = "ru";

a2a_config.templates.vk = {
    title: "I'm interested in ${title} posted here: ${link}",
    text: "I'm interested in ${title} posted here: ${link}",
};
a2a_config.templates.whatsapp = {
    title: "I'm interested in ${title} posted here: ${link}",
    text: "I'm interested in ${title} posted here: ${link}",
};

window.onload = () => {
    let bg;
    if (window.matchMedia("(max-aspect-ratio: 5/9)").matches) {
        bg = "url(./pictures/mob_2.jpg) right / cover no-repeat";
    } else if (window.matchMedia("(max-aspect-ratio: 5/5)").matches) {
        bg = "url(./pictures/mid_2.jpg) right / cover no-repeat";
    } else {
        bg = "url(./pictures/web_2.jpg) right / cover no-repeat";
    }

    const predict_btn = document.querySelector(".predict-btn");
    const main__text = document.querySelector(".main__text");
    const back_btn = document.querySelector(".back-btn");
    let last_rand = -1;
    const predictions_text =
        "2022-й тебя пощадит&Олени тебе встретятся только в лесу и в санях Деда мороза&У тебя попросят автограф&Станешь героем новостей на нашем сайте&Кто-то за тебя калым отдаст, душу дьяволу продаст&Спрячь заначку в карман куртки — пригодится в неожиданный момент&Случится магия — ты сможешь есть и не толстеть &То что ты ищешь, уже ищет тебя. Берегитесь&Сделанное лучше идеального&Ты остановишь коронавирус, а потом проснешься&Случайная встреча изменит всю твою жизнь&Случится то, что случится. Не усложняй&Ты влюбишься!&В тебя влюбятся!&Вода из крана будет чище, чем раньше&Кажется, настало время повышения зарплаты. Может, стоит об этом намекнуть?&Стряхни пыль с загранпаспорта — пригодится!&Не вкладывай деньги в то, в чём сомневаешься. Внутреннее чутьё не подводит&Тебе подарят что-то с тигром&Сможешь позволить себе новый смартфон и сладкое на ночь&В этом году ты наконец-то начнешь новую жизнь с понедельника&Ты найдешь вторую половинку (главное, как-то объяснить это первой)&Твои финансовые проблемы закончатся. Нет финансов — нет проблем&В этом году ты наконец-то похудеешь к лету!&Найдешь то, что давно потерял. А оно тебе сейчас нужно?&Твой тик-ток наберет миллион просмотров!&Твой иммунитет достигнет таких высот, что ты забудешь даже о сезонных соплях&Ты улетишь на море. Возвращайся только, ладно? А то как мы тут без тебя?";
    const predictions = predictions_text.split("&");
    console.log(predictions);
    let images = [];
    function imagePreload() {
        for (var i = 0; i < arguments.length; i++) {
            images[i] = new Image();
            images[i].src = imagePreload.arguments[i];
        }
    }
    imagePreload("./pictures/web_1.jpg", "./pictures/web_2.jpg");
    let string =
        "Я получил предсказание на 2022 от ${link}. Получи и ты!" +
        "                 " +
        "Я получил предсказание на 2022 от ${link}. Получи и ты!";
    console.log(string);
    function predict() {
        let rand;
        do {
            rand = Math.floor(Math.random() * predictions.length);
        } while (rand == last_rand);

        last_rand = rand;
        main__text.innerHTML = predictions[rand];
        if (document.querySelector(".share").classList.contains("hidden")) {
            document.querySelector(".share").classList.remove("hidden");
        }
        predict_btn.innerHTML = "Хочу другое предсказание";
        a2a_config.templates.vk = {
            title:
                "Я получил предсказание на 2022 от ${link}. Получи и ты!\n" +
                "                   " +
                `${predictions[rand]}`,
            text:
                "Я получил предсказание на 2022 от ${link}. Получи и ты!\n" +
                "                 " +
                `${predictions[rand]}`,
        };
        a2a_config.templates.whatsapp = {
            title:
                "Я получил предсказание на 2022 от ${link}. Получи и ты!\n" +
                "                 " +
                `${predictions[rand]}`,
            text:
                "Я получил предсказание на 2022 от ${link}. Получи и ты!\n" +
                "                 " +
                `${predictions[rand]}`,
        };
        a2a_config.templates.facebook = {
            title:
                "Я получил предсказание на 2022 от ${link}. Получи и ты!\n" +
                "                 " +
                `${predictions[rand]}`,
            text:
                "Я получил предсказание на 2022 от ${link}. Получи и ты!\n" +
                "                 " +
                `${predictions[rand]}`,
            quote:
                "Я получил предсказание на 2022 от ${link}. Получи и ты!\n" +
                "                 " +
                `${predictions[rand]}`,
        };
        a2a_config.templates.odnoklassniki = {
            title:
                "Я получил предсказание на 2022 от ${link}. Получи и ты!\n" +
                "                 " +
                `${predictions[rand]}`,
            text:
                "Я получил предсказание на 2022 от ${link}. Получи и ты!\n" +
                "                 " +
                `${predictions[rand]}`,
        };
        document.body.style.background = bg;
    }

    predict_btn.addEventListener("click", predict);

    function goBack(url) {
        if (url.endsWith("/")) url = url.substring(0, url.length - 1);
        const lastSlashPosition = url.lastIndexOf("/");

        return lastSlashPosition <= 7
            ? url
            : url.substring(0, lastSlashPosition);
    }
    console.log(document.URL, goBack(document.URL));
    back_btn.href = goBack(document.URL);
};
