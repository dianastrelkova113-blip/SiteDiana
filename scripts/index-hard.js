const TEST = {
    title: "3-й уровень — Повышенный",
    "color" : "#2c3e50",
    Sections: [
        {
            "title": "Алгоритм фонетического разбора",
            body: [
                {
                    title: "Что такое фонетический разбор?",
                    body: "Фонетический разбор — это анализ звукового состава слова. Мы изучаем, какие звуки произносятся, сколько в слове слогов, где стоит ударение."
                },
                {
                    title: "Порядок разбора:",
                    body: "Разделить слово на слоги\nПоставить ударение\nЗаписать транскрипцию (как слово звучит)\nДать характеристику каждому звуку\nПодсчитать количество букв и звуков",
                }
            ],
            example: "мо-ло-ко́ [малако́] — 3 слога, ударение на последний слог",
            tests: [
                {
                    question: 'Сколько слогов в слове "учитель"?',
                    options: ['2 слога', '3 слога', '4 слога'],
                    answer: 1,
                    hint: 'Посчитай гласные звуки — сколько гласных, столько и слогов.'
                },
                {
                    question: 'Раздели слово "карандаш" на слоги (через дефис)',
                    answer: 'ка-ран-даш',
                    hint: 'Сколько в слове гласных? Столько же и слогов.'
                }
            ]
        },
        {
            "title": "Несовпадение букв и звуков",
            body: [
                {
                    title: "Почему букв и звуков может быть разное количество?",
                },
                {
                    title: "Звуков больше, чем букв:",
                    body: "Йотированные гласные в начале слова, после гласных и ъ, ь: ёлка [й'о́лка] — 4 буквы, 5 звуков"
                },
                {
                    title: "Букв больше, чем звуков:",
                    body: `Буквы ь и ъ не обозначают звуков: день [д'эн'] — 4 буквы, 3 звука\nНепроизносимые согласные: солнце [со́нцэ] — буква "л" не произносится`,
                },
                {
                    title: 'Одинаковое количество:',
                    body: 'стол [сто́л] — 4 буквы, 4 звука'
                }
            ],
            tests: [
                {
                    question: 'Сколько звуков в слове "конь"?',
                    options: ['2 звука', '3 звука', '4 звука'],
                    answer: 1,
                    hint: 'Буква "ь" не обозначает звука'
                },
                {
                    question: 'В каком слове звуков больше, чем букв?',
                    options: ['соль', 'ель', 'мел'],
                    answer: 1,
                    hint: 'Буква "е" в начале слова даёт два звука'
                },
                {
                    question: ['Выполни полный разбор слова "вьюга"', 'Количество букв', 'Количество звуков', 'Транскрипция'],
                    answer: ['5', '5', "[в'й'уга]"],
                    hint: `Буква "ь" не даёт звука, но после неё "ю" = [й'у]`
                }
            ]
        },
    ]
}

let testData = [];
let selectedSection = 0;
let sections = []
let headerTitle = document.getElementById("header-title");
let sectionList = document.getElementById("section-list");
let testContainer = document.getElementById("test-container");
let testHeader = document.getElementById("test-header");
let testHeaderTheory = document.getElementById("test-header-theory");
let testTheory = document.getElementById("test-theory");
let testExample = document.getElementById("test-example");
let testExampleContainer = document.getElementById("test-example-container");
let testQuestions = document.getElementById("test-questions");
let buttonNext = document.getElementById("button-next");
let body = document.body;


const initTest = (section) =>{

    testHeader.innerHTML = ``
    testTheory.innerHTML = ``
    testExample.innerHTML = ``
    testQuestions.innerHTML = ``

    sections.forEach((section, index) => {
        if(index == selectedSection){
            section.classList.add("selected");
            console.log(section);
            
        }
        else{
            section.classList.remove("selected");
        }
    })
    
    testHeader.textContent = section.title; //Алгоритм фонетического разбора
    
    section.body.forEach(block => {
        let h3 = document.createElement("h3");
        h3.textContent = block.title;
        testTheory.appendChild(h3);

        if(block.body){
            block.body.split("\n").forEach(paragraph => {
                let p = document.createElement("p");
                p.textContent = paragraph;
                testTheory.appendChild(p);
            });
        }
    })
    if(section.example){
        testExample.textContent = section.example;
    }
    else{
        testExampleContainer.style.display = "none";
    }

    for (let i = 0; i < section.tests.length; i++) {

        let testDataItem = {
            options: [],
        };

        let testItem = document.createElement("li");
        testItem.classList.add("test-item");
        
        //Заголовок: Задание №
        let span = document.createElement("span");
        span.textContent = `Задание ${i + 1}`;
        testItem.appendChild(span);

        //Вопрос
        let question = document.createElement("p");
        question.textContent = section.tests[i].question;
        testItem.appendChild(question);

        //Кнопки
        let buttonsLayout = document.createElement("div");
        buttonsLayout.classList.add("buttons-layout");

        //Кнопка проверить
        let buttonCheck = document.createElement("button");
        buttonCheck.textContent = "Проверить";
        
        buttonCheck.disabled = true;
        buttonsLayout.appendChild(buttonCheck);

        //Кнопка подсказка
        let buttonhint = document.createElement("button");
        buttonhint.textContent = "Показать подсказку";
        buttonhint.onclick = () => {
            if(!hint.classList.contains("show")){
                hint.classList.add("show")
                buttonhint.textContent = "Скрыть подсказку";
            }
            else{
                hint.classList.remove("show")
                buttonhint.textContent = "Показать подсказку";
            }
        }
        buttonsLayout.appendChild(buttonhint);

        

        //Варианты ответа
        if(section.tests[i].options){
            let optionsList = document.createElement("ul");
            optionsList.classList.add("options-list");

            for (let j = 0; j < section.tests[i].options.length; j++) {
                let optionItem = document.createElement("li");
                let label = document.createElement("label");
                let radioBtn = document.createElement("input");
                radioBtn.type = "radio";
                radioBtn.name = `question-${i}`;

                testDataItem.options.push(radioBtn);

                label.appendChild(radioBtn);
                let awnserText = document.createElement("span");
                awnserText.textContent = section.tests[i].options[j];
                label.appendChild(awnserText);

                radioBtn.onchange = () => {
                    testDataItem.userAnswer = j;
                    buttonCheck.disabled = false;
                }

                optionItem.appendChild(label);

                optionsList.appendChild(optionItem);
            }
            testItem.appendChild(optionsList);
            buttonCheck.onclick = (e) =>{
                if(testDataItem.userAnswer == section.tests[i].answer){
                    confetti({
                        position: { x: e.clientX, y: e.clientY }
                    });
                    hint.classList.add("correct");
                    hint.textContent = "✓ Правильно!";
                    buttonCheck.style.display = "none";
                    buttonhint.style.display = "none";
                    testDataItem.options.forEach(option => {
                        option.disabled = true;
                        if(option.checked){
                            option.parentElement.classList.add("correct");
                        }
                    });
                }
                else{
                    hint.classList.add("wrong");
                    hint.textContent = "✗ Неправильно! Поробуй ещё раз.";
                    buttonCheck.disabled = true;
                    buttonhint.style.display = "none";
                    testDataItem.options.forEach(option => {
                        option.disabled = true;
                        if(option.checked){
                            option.parentElement.classList.add("wrong");
                        }
                    });
                    let x = 100;
                    let interval = setInterval(() => {
                        hint.style.cssText = `--x: ${x}%;`
                        x = x - 2;
                    }, 100);
                    setTimeout(() => {
                        x = 100;
                        clearInterval(interval);
                        hint.classList.remove("wrong");
                        buttonCheck.textContent = "Проверить"
                        buttonhint.style.display = "block";
                        testDataItem.options.forEach(option => {
                            option.disabled = false;
                            if(option.checked){
                                option.parentElement.classList.remove("wrong");
                            }
                            option.checked = false;
                        });
                        hint.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fec800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" data-fg-czc624="6.16:6.5972:/src/app/components/exercises/MultipleChoice.tsx:107:13:3505:68:e:Lightbulb::::::DclZ" data-fgid-czc624=":r12j:"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
                        
                        ${section.tests[i].hint}`;
                    }, 5000);
                }
                
            }
        }
        //Ответ письменный
        else{
            let input = document.createElement("input");
            input.type = "text";
            input.placeholder = "Введите ответ";
            testDataItem.options.push(input)
            testItem.appendChild(input);
            
            input.oninput = () => {
                testDataItem.userAnswer = input.value;
                buttonCheck.disabled = input.value.length == 0;
            }
            buttonCheck.onclick = (e) =>{
                if(testDataItem.userAnswer.toLowerCase() == section.tests[i].answer.toLowerCase()){
                    confetti({
                        position: { x: e.clientX, y: e.clientY }
                    });
                    hint.classList.add("correct");
                    hint.textContent = "✓ Правильно!";
                    buttonCheck.style.display = "none";
                    buttonhint.style.display = "none";
                    input.classList.add("correct");
                    input.disabled = true;
                }
                else{
                    hint.classList.add("wrong");
                    hint.textContent = "✗ Неправильно! Поробуй ещё раз.";
                    buttonCheck.disabled = true;
                    buttonhint.style.display = "none";
                    input.classList.add("wrong");
                    input.disabled = true;
                    let x = 100;
                    let interval = setInterval(() => {
                        hint.style.cssText = `--x: ${x}%;`
                        x = x - 2;
                    }, 100);
                    setTimeout(() => {
                        x = 100;
                        clearInterval(interval);
                        hint.classList.remove("wrong");
                        buttonCheck.textContent = "Проверить"
                        buttonhint.style.display = "block";
                        input.classList.remove("wrong");
                        input.value = "";
                        input.disabled = false;
                        hint.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fec800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" data-fg-czc624="6.16:6.5972:/src/app/components/exercises/MultipleChoice.tsx:107:13:3505:68:e:Lightbulb::::::DclZ" data-fgid-czc624=":r12j:"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
                        
                        ${section.tests[i].hint}`;
                    }, 5000);
                }

                
            }

        }

        //Подсказка
        let hint = document.createElement("span");
        hint.classList.add("hint");
        hint.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fec800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" data-fg-czc624="6.16:6.5972:/src/app/components/exercises/MultipleChoice.tsx:107:13:3505:68:e:Lightbulb::::::DclZ" data-fgid-czc624=":r12j:"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
        
        ${section.tests[i].hint}`;
        testItem.appendChild(hint);


        testData.push(testDataItem);
        testItem.appendChild(buttonsLayout);
        
        testQuestions.appendChild(testItem);

    }
    console.log(testData);
}






headerTitle.textContent = TEST.title;
body.style.cssText = `--bg-color: ${TEST.color};`;
TEST.Sections.forEach((section, index) => {
    let sectionItem = document.createElement("li");
    sectionItem.classList.add("section-item");
    

    let title = document.createElement("button");
    title.textContent = section.title;
    sectionItem.appendChild(title);
    title.onclick = () => {
        if(selectedSection == index)return
        selectedSection = index;
        initTest(section);
    }

    sectionList.appendChild(sectionItem);
    sections.push(sectionItem)
})

testHeaderTheory.onClick = () => {};

initTest(TEST.Sections[0]);

nextSection = () => {
    if(selectedSection < TEST.Sections.length - 1){
        selectedSection++;
        initTest(TEST.Sections[selectedSection]);
    }
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

