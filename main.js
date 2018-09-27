'use strict';
//let x= [];

document.addEventListener('DOMContentLoaded', ()=>{
    const socket = io.connect();

    const SaveConfBtn = document.getElementById('saveConf');
    SaveConfBtn.style.display = 'none';
    SaveConfBtn.addEventListener('click', (e)=>{
        if(BU.innerHTML && mod1.innerHTML && mod2.innerHTML && mod3.innerHTML && mod4.innerHTML && mod5.innerHTML){
            e.preventDefault();
            let data =[];
            data.push(BU.innerHTML);
            data.push(mod1.innerHTML);
            data.push(mod2.innerHTML);
            data.push( mod3.innerHTML);
            data.push(mod4.innerHTML);
            data.push( mod5.innerHTML);
            socket.send(data);
        }
    });
        
        socket.on('message', (data)=>{
            for (let i = 0; i < data.length; i++) {
                if(i == 0) {
                    BU.innerHTML = data[i];
                    BU.style.display = 'block';
                }
            }
            DisplayAll();
            mod1.innerHTML = data[1];
            mod2.innerHTML = data[2];
            mod3.innerHTML = data[3];
            mod4.innerHTML = data[4];
            mod5.innerHTML = data[5];
            
            for (let j = 0; j < data.length; j++) {
                for (let i = 0; i < sel.length; i++) {
                    if(sel.options[i].text == data[j]){
                        sel.removeChild(sel[i]); 
                    }
                }
            }

        });



// const button = document.getElementById('btn');
// button.addEventListener('click', function(e) {
//   console.log('button was clicked');
//   fetch('/clicked', {method: 'POST'}).then(function(response){
//     if(response.ok){
//         console.log('Click was recorded');
//         return;
//     }
//     throw new Error('Request failed.');
// })
// .catch(function(error){
//     console.log(error);
// });
// });





// Модули В/В
const IOmoduls = [{
    module: "IO",
    name: "MOPI",
    slot: "VV",
    ShS: 8,
    IShSMax: 0,
    ShOT: 0,
    ShO: 0,
    IShOMax: 0,
    ShPT: 0,
    IShPTMax: 0,
    DI: 0,
    DO: 0,
    IDOMax: 0,
    AI: 0,
    RS485: 0
},
{
    module: "IO",
    name: "MRV",
    slot: "VV",
    ShS: 0,
    IShSMax: 0,
    ShOT: 0,
    ShO: 0,
    IShOMax: 0,
    ShPT: 0,
    IShPTMax: 0,
    DI: 8,
    DO: 8,
    IDOMax: 0,
    AI: 0,
    RS485: 0
},
{
    module: "IO",
    name: "MSZU",
    slot: "VV",
    ShS: 0,
    IShSMax: 0,
    ShOT: 6,
    ShO: 0,
    IShOMax: 0,
    ShPT: 0,
    IShPTMax: 0,
    DI: 8,
    DO: 0,
    IDOMax: 0,
    AI: 0,
    RS485: 0
},
{
    module: "IO",
    name: "MIUP",
    slot: "VV",
    ShS: 0,
    IShSMax: 0,
    ShOT: 0,
    ShO: 0,
    IShOMax: 0,
    ShPT: 4,
    IShPTMax: 0,
    DI: 8,
    DO: 0,
    IDOMax: 0,
    AI: 0,
    RS485: 0
},
{
    module: "IO",
    name: "MI",
    slot: "VV",
    ShS: 4,
    IShSMax: 0,
    ShOT: 0,
    ShO: 0,
    IShOMax: 0,
    ShPT: 2,
    IShPTMax: 0,
    DI: 4,
    DO: 2,
    IDOMax: 0,
    AI: 0,
    RS485: 0
},
{
    module: "IO",
    name: "MIPT",
    slot: "VV",
    ShS: 0,
    IShSMax: 0,
    ShOT: 0,
    ShO: 0,
    IShOMax: 0,
    ShPT: 0,
    IShPTMax: 0,
    DI: 0,
    DO: 0,
    IDOMax: 0,
    AI: 4,
    RS485: 0
},
{
    module: "IO",
    name: "MPI",
    slot: "VV",
    ShS: 0,
    IShSMax: 0,
    ShOT: 0,
    ShO: 0,
    IShOMax: 0,
    ShPT: 0,
    IShPTMax: 0,
    DI: 0,
    DO: 0,
    IDOMax: 0,
    AI: 0,
    RS485: 2
}];

//Промежуточные модули
const IntermediateModules =
[
    {
        module: "Intermediate",
        name: "ogranichitel toka",
        slot: "P",
        kanali: 3,
        type: "PWR",
        naznachenie: "OT"
    },
    {
        module: "Intermediate",
        name: "Plata filtrov PF-001",
        slot: "K",
        kanali: 14,
        type: "JNC",
        naznachenie: "F"
    },
    {
        module: "Intermediate",
        name: "BIZ 7-500",
        slot: "",
        kanali: 1,
        type: "BIZ",
        naznachenie: "SV485" 
    },
    {
        module: "Intermediate",
        name: "BIZ 30-130",
        slot: "",
        kanali: 1,
        type: "BIZ",
        naznachenie: "O" 
    }
    ,
    {
        module: "Intermediate",
        name: "BIZ 30-63",
        slot: "",
        kanali: 1,
        type: "BIZ",
        naznachenie: "I" 
    }
];

//Терминальные модули
const TerminalModuls =
[
    {
        module: "TerminalModule",
        name: "USO",
        slot: 0,
        channels: 1,
        naznachenie: "O"
    }
];

// Блоки управления
const BlokiUpravleniya =
[
    {
        module: "BlokiUpravleniya",
        name: "PPKP",
        Type: "PK",
        slotVV: 5,
        slotP: 1,
        slotK: 5,
        ImaxBU: 1,
        Sbu: 12,
    },
    {
        module: "BlokiUpravleniya",
        name: "BR1",
        Type: "BR",
        slotVV: 5,
        slotP: 1,
        slotK: 5,
        ImaxBU: 1,
        Sbu: 12,
    },
    {
        module: "BlokiUpravleniya",
        name: "PUIZ",
        Type: "PUIZ",
        slotVV: 5,
        slotP: 1,
        slotK: 5,
        ImaxBU: 1,
        Sbu: 12,
    }
];

//БДУ
const BlokiDistanzionnogoUpravleniya =
[
    {
        module: "BlokiDistanzionnogoUpravleniya",
        name: "Blok BDU",
        Ex: "No",
        slotVV: 5,
        DI: 4,
        ShOT: 3
    },
    {
        module: "BlokiDistanzionnogoUpravleniya",
        name: "Blok BDU-01",
        Ex: "Yes",
        slotVV: 5,
        DI: 4,
        ShOT: 3
    }
];

//Конфигурация СПЗ
//Параметры подсистемы
let NameOfProject,
    PresenceOfARM,
    TypeOfPPKP;

//3.2.4.2	Подсистемы обнаружения признаков пожара (сигнализация)
//3.2.4.2.1	Подсистема автоматического обнаружения признаков пожара
let AutoSignalizatsiya = {
    KShS: 0,
    KMIShS: 0,
    REZShS: 0,
//Конфигурация шлейфа
    KonfShleifa:{
        TShS: 0,
        SHShS: 0,
        ExShS: false,
        TShSBIZ: "",
        KIZVShS: 1,
        ZONAShS: 1, //для безадресный
        ADRShS: "", //для безадресный
        RRIShS: false
    },

//Конфигурация извещателя при ТШС = "адресный" при ЕхШС = "Нет"
    AdrExNet:{
        TAIZV: 0,
        ZONAIZV: 1,
        ADRIZV: ""
    },

//Конфигурация извещателя при ТШС = "адресный" при ЕхШС = "да"
    AdrExDa:{
        TAIZV: 1,
        ZONAIZV: 1,
        ADRIZV: ""
        },
//Конфигурация извещателя при ТШС = "безадресный"
KonfIzvBezAdr: {
    TIZV: "",
    IOIZV: 0.0,
    IPIZV: 0.0
},
//Конфигурация извещателя при ТШС = "modbus"
KonfModbus: {
     KMBUSLNK: 0
    }
};
// 3.2.4.2.2	Подсистема ручного обнаружения признаков пожара
let RutshnayaSignalizatsiya =
{
    KShSR: 1,
    MIShSR: false,
    KMIShSR: 1,
    REZShSR: 0,
    //Конфигурация шлейфа
    KonfShleifa:{
    TShS: 1,
    ExShS: false,
    TShSBIZ: "",
    KIZVShS: 1,
    ZONAShS: 1, //для безадресный
    ADRShS: ""  //для безадресный
    },
    //Конфигурация извещателя при ТШС = "адресный" при ЕхШС = "Нет"
    AdrExNet:{
    TAIZV: 1,
    ZONAIZV: 1,
    ADRIZV: ""
    },
    
    //Конфигурация извещателя при ТШС = "адресный" при ЕхШС = "да"
    AdrExDa:{
    TAIZV: 1,
    ZONAIZV: 1,
    ADRIZV: ""
    },

    //Конфигурация извещателя при ТШС = "безадресный"
    KonfIzvBezAdr: {
    TIZV: 1,
    IOIZV: 0.0,
    IPIZV: 0.0
    }
};

//3.2.4.3	Подсистема управления пожаротушением

let UpravleniePojaroTusheniem = 
{
    KShPT: 1,
    KMIShPT: 1,
    REZShPT: 0,

    //Зона пожаротушения
    ZonaPojaroTushenia: {
        ZONAShPT: 1,
        ADRZONYPT: "",
        KShPTZONY: 1,
        KDDZONY: 0,
        KBDUZONY: 0,
        KExBDUZONY: 0,
        KExLSBDU: 0
    },

    //Шлейф управления пожаротушением
    ShleifUpravleniaPojaroTushenia: {
        ADRShPT: "",
        IPShPT: 0.0,
        ExShPT: false,
        TBIZShPT: ""
    }
};

//Подсистема управления оповещением
let UpravlenieOpovesheniem =
{
    KZONOP: 1,
    REZShO: 0,
    //Зона оповещения
    ZonaOpoveshenia: {
        ZONAShOP: 1,
        ADRShOP: "",
        KShOPZONY: 1
    },
    
    //Шлейф управления оповещением
    ShleifUpravleniaOpovesheniem: {
        KOPSh: 1,
        IPOPSh: 0.0,
        ExOPSh: false,
        TBIZOPSh: ""
    },
    
    //Оповещатель
    Opoveshatel: {
        ADROP: "",
        IPOP: 0.0
    }
};

//Подсистема формирования выходных сигналов исполнительных устройств 
//и взаимодействия со смежными подсистемами (FVSIUiVsSP)
let FVSIUiVsSP =
{
    KRVYH: 1,
    KRREZ: 0,
    //Выход сигнала управления(дискретный релейный выход)(drv)
    DRV:{
        ADRRVYKh: "",
        ExRVYKh: false,
        TBIZR: ""
    }
};

//Подсистема диагностики
let PodsysDiagnostiki = 
{
    KDVKh: 1,
    KDVKhREZ: 0,
    KAVkh: 1,
    KAVKhREZ: 0,

    //Вход дискретный
    DI:{
        ADRDVKh: "",
        ExDVKh: false,
        TBIZDVKh: ""
    },
    //Вход аналоговый
    AI:{
        ADRAVKh: "",
        ExAVKh: false,
        TBIZAVKh: ""
    }
};

//3.2.4.7	Подсистема связи с устройствами с подключением 
//по последовательному интрефейсу RS-485 ()
let ConnSysRS485 =
{
    KRS485: 0
};



let jsonData = [];
for (let index = 0; index < IOmoduls.length; index++) {
    // for(let k in IOmoduls[index]){
    //     alert(k + ": " + IOmoduls[index][k]); 
    // }
    jsonData[index] = JSON.stringify(IOmoduls[index]);
}


//РАботает для хранения информации на ПК пользователя 
//localStorage.setItem("IOmoduls", JSON.stringify(IOmoduls));
const getModuls = JSON.parse(localStorage.getItem("IOmoduls"));

// for (let i = 0; i < getModuls.length; i++) {
//     alert("Module: "+ getModuls[i].module + " Name: " + getModuls[i].name + " Slot: " + getModuls[i].slot);   
// }
function showBu(){
    // BU.innerText = BlokiUpravleniya[0].name;
    sel.style.display = 'block';  
}
const   BU = document.getElementById('ManagementBlock'),
        mod1 = document.getElementById('module#1'),
        mod2 = document.getElementById('module#2'),
        mod3 = document.getElementById('module#3'),
        mod4 = document.getElementById('module#4'),
        mod5 = document.getElementById('module#5'),
        mod1_1 = document.getElementById('module1_1'),
        mod2_2 = document.getElementById('module2_2'),
        mod3_3 = document.getElementById('module3_3'),
        mod4_4 = document.getElementById('module4_4'),
        mod5_5 = document.getElementById('module5_5'),
        PPKP = document.getElementById('PPKP'),
        Br1 = document.getElementById('BR1'),
        Puiz = document.getElementById('PUIZ'),
        sel = document.getElementById('selectBu'),
        btnSel = document.getElementById('closeSelect'),
        OT = document.getElementById('ot'),
        bdu = document.getElementById('bdu'),
        addBdu = document.getElementById('addBDU'),
        selBDU = document.getElementById('selectBDU');




        BU.addEventListener("click", ()=> { SaveConfBtn.style.display = 'block'; BU.innerHTML = BlokiUpravleniya[0].name; DisplayAll();});
        mod1.addEventListener("click", ()=>{
            sel.style.display = 'block'; 
            btnSel.style.display = 'block';
            btnSel.addEventListener("click", ()=>{ 
            sel.style.display = 'none'; 
            btnSel.style.display = 'none';
        });
            sel.onchange = ()=> {
            sel.style.display = 'none';
            btnSel.style.display = 'none';
            if(!(mod1.innerHTML === "")){
                    let oOption = document.createElement("option");
                    oOption.appendChild(document.createTextNode(mod1.innerHTML));
                    oOption.setAttribute("value", "");
                    sel.appendChild(oOption);         
                    if(mod1.innerHTML == "MIUP") OT.innerHTML = "0";           
            }
            if(sel.options[sel.selectedIndex].text == "MIUP") OT.innerHTML = "1";
            mod1.innerHTML = sel.options[sel.selectedIndex].text;
            sel.removeChild(sel[sel.selectedIndex]);
            };
        });
        mod2.addEventListener("click", ()=>{
            sel.style.display = 'block';
            btnSel.style.display = 'block';
            btnSel.addEventListener("click", ()=>{ 
            sel.style.display = 'none'; 
            btnSel.style.display = 'none';
        });  
            sel.onchange = ()=> {
            sel.style.display = 'none';
            btnSel.style.display = 'none';
            if(!(mod2.innerHTML === "")){
                let oOption = document.createElement("option");
                oOption.appendChild(document.createTextNode(mod2.innerHTML));
                oOption.setAttribute("value", "");
                sel.appendChild(oOption);    
                if(mod2.innerHTML == "MIUP") OT.innerHTML = "0";                  
            }
            if(sel.options[sel.selectedIndex].text == "MIUP") OT.innerHTML = "1";
                mod2.innerHTML = sel.options[sel.selectedIndex].text;
                sel.removeChild(sel[sel.selectedIndex]);
            };
        });
        mod3.addEventListener("click", ()=>{
            sel.style.display = 'block';  
            btnSel.style.display = 'block';
            btnSel.addEventListener("click", ()=>{ 
            sel.style.display = 'none'; 
            btnSel.style.display = 'none';
        });
            sel.onchange = ()=> {
            sel.style.display = 'none';
            btnSel.style.display = 'none';
            if(!(mod3.innerHTML === "")){
                let oOption = document.createElement("option");
                oOption.appendChild(document.createTextNode(mod3.innerHTML));
                oOption.setAttribute("value", "");
                sel.appendChild(oOption);
                if(mod3.innerHTML == "MIUP") OT.innerHTML = "0";                    
            }
            if(sel.options[sel.selectedIndex].text == "MIUP") OT.innerHTML = "1";
                mod3.innerHTML = sel.options[sel.selectedIndex].text;
                sel.removeChild(sel[sel.selectedIndex]);
            };
        });
        mod4.addEventListener("click", ()=>{
            sel.style.display = 'block'; 
            btnSel.style.display = 'block';
            btnSel.addEventListener("click", ()=>{ 
            sel.style.display = 'none'; 
            btnSel.style.display = 'none';
        }); 
            sel.onchange = ()=> {
            sel.style.display = 'none';
            btnSel.style.display = 'none';
            if(!(mod4.innerHTML === "")){
                let oOption = document.createElement("option");
                oOption.appendChild(document.createTextNode(mod4.innerHTML));
                oOption.setAttribute("value", "");
                sel.appendChild(oOption);
                if(mod4.innerHTML == "MIUP") OT.innerHTML = "0";                     
            }
            if(sel.options[sel.selectedIndex].text == "MIUP") OT.innerHTML = "1";
            mod4.innerHTML = sel.options[sel.selectedIndex].text;
            sel.removeChild(sel[sel.selectedIndex]);
            };
        });
        mod5.addEventListener("click", ()=>{
            sel.style.display = 'block';  
            btnSel.style.display = 'block';
            btnSel.addEventListener("click", ()=>{ 
            sel.style.display = 'none'; 
            btnSel.style.display = 'none';
        });
            sel.onchange = ()=> {
            sel.style.display = 'none';
            btnSel.style.display = 'none';
            if(!(mod5.innerHTML === "")){
                let oOption = document.createElement("option");
                oOption.appendChild(document.createTextNode(mod5.innerHTML));
                oOption.setAttribute("value", "");
                sel.appendChild(oOption); 
                if(mod5.innerHTML == "MIUP") OT.innerHTML = "0";                    
            }
            if(sel.options[sel.selectedIndex].text == "MIUP") OT.innerHTML = "1";
            mod5.innerHTML = sel.options[sel.selectedIndex].text;
            sel.removeChild(sel[sel.selectedIndex]);
            };
        });

        addBdu.addEventListener("click", ()=>{
            selBDU.style.display = 'block';
            btnSel.style.display = 'block';
            btnSel.addEventListener("click", ()=>{ 
            selBDU.style.display = 'none'; 
            btnSel.style.display = 'none';
        });
            selBDU.onchange = ()=>{
                selBDU.style.display = 'none';
                btnSel.style.display = 'none';
                if(!(bdu.innerHTML ==="")){
                    let oOption = document.createElement("option");
                    oOption.appendChild(document.createTextNode(bdu.innerHTML));
                    oOption.setAttribute("value", "");
                    selBDU.appendChild(oOption);                        
                }
                bdu.innerHTML = selBDU.options[selBDU.selectedIndex].text;
                selBDU.removeChild(selBDU[selBDU.selectedIndex]);
            };
        });

        mod1.style.display = 'none';
        mod2.style.display = 'none';
        mod3.style.display = 'none';
        mod4.style.display = 'none';
        mod5.style.display = 'none';

        mod1_1.style.display = 'none';
        mod2_2.style.display = 'none';
        mod3_3.style.display = 'none';
        mod4_4.style.display = 'none';
        mod5_5.style.display = 'none';

        btnSel.style.display = 'none';
        selBDU.style.display = 'none';

        document.getElementById('MOPI').innerText  = IOmoduls[0].name;
        document.getElementById('MRV').innerText  = IOmoduls[1].name;
        document.getElementById('MSZU').innerText  = IOmoduls[2].name;
        document.getElementById('MIUP').innerText  = IOmoduls[3].name;
        document.getElementById('MI').innerText  = IOmoduls[4].name;
        document.getElementById('MIPT').innerText  = IOmoduls[5].name;
        document.getElementById('MPI').innerText  = IOmoduls[6].name;
        document.getElementById('BDU').innerText = BlokiDistanzionnogoUpravleniya[0].name;
        document.getElementById('BDU-01').innerText = BlokiDistanzionnogoUpravleniya[1].name;


        function DisplayAll(){
            mod1.style.display = 'block';
            mod2.style.display = 'block';
            mod3.style.display = 'block';
            mod4.style.display = 'block';
            mod5.style.display = 'block';
    
            mod1_1.style.display = 'block';
            mod2_2.style.display = 'block';
            mod3_3.style.display = 'block';
            mod4_4.style.display = 'block';
            mod5_5.style.display = 'block';
            SaveConfBtn.style.display = 'block';
        }
        

    //     let NameOfProject,
    // PresenceOfARM,
    // TypeOfPPKP;


//Конфигурация СПЗ - Диалоговые окна
        const dialog1 = document.getElementById('dialog1'),
              dialog2 = document.getElementById('dialog2');
//        dialogPolyfill.registerDialog(dialog);
        dialog1.showModal();

        const dlg1BtnSbt = document.getElementById('btnSubmitDlg1'),
              dlg2Sbt = document.getElementById('dlg2Sbt');

        dlg1BtnSbt.addEventListener('click', (e)=>{
            const projname = document.getElementById('projectName'),
                ARM_PARUS = document.getElementById('ARM_PARUS'),
                selType = document.getElementById('selTypePPKP');
                
                if(selType.selectedIndex != 0)
                    TypeOfPPKP = selType.options[selType.selectedIndex].text;
                // selType.onchange = ()=>{
                //     TypeOfPPKP = selType.options[selType.selectedIndex].text;
                // };
            if(projname.value && TypeOfPPKP){

                if(ARM_PARUS.checked) PresenceOfARM = true;
                else  PresenceOfARM = false;

                NameOfProject = projname.value;
                
                dialog1.close();
                dialog2.showModal();
            }
            else{
                e.preventDefault();
                projname.style.color = 'red';
                projname.value = 'Неверній ввод!';
                projname.style.color = 'black';
            }            
        });

//Автоматическая сигнализация
    const bezAdr1 = document.getElementById('bezAdr1'),
    adrBIZ1 = document.getElementById('adrBIZ1'),
    bezAdr1_1 = document.getElementById('bezAdr1_1'),
    bezAdr1_2 = document.getElementById('bezAdr1_2');  
    bezAdr1.style.display = 'none';
    bezAdr1_1.style.display = 'none';
    bezAdr1_2.style.display = 'none';
    adrBIZ1.style.display = 'none';
    document.getElementById('AdrExNet1').style.display = 'none';   
    document.getElementById('AdrExDa1').style.display = 'none';  
    document.getElementById('bezAdr1').style.display = 'none';  
    document.getElementById('confModbus').style.display = 'none'; 
    
    const iKShS = document.getElementById('iKShS1'),
    iKMIShS1 = document.getElementById('iKMIShS1'),
    iREZShS1 = document.getElementById('iREZShS1'),
    typeShleifa1 = document.getElementById('typeShleifa1'),
    SKhShS1 = document.getElementById('SKhShS1'),
    iExShS1 = document.getElementById('iExShS1'),
    iTShSBIZ = document.getElementById('iTShSBIZ').style.display = 'none';   


    iExShS1.addEventListener('click', (e)=>{
        if(iExShS1.checked) AutoSignalizatsiya.KonfShleifa.ExShS = true;
        else  AutoSignalizatsiya.KonfShleifa.ExShS = false;
        adrBIZ1.style.display = 'block';
        e.preventDefault();
    });

    typeShleifa1.onchange = ()=>{
        if(typeShleifa1.selectedIndex == 1){
            bezAdr1.style.display = 'block';
            bezAdr1_1.style.display = 'block';
            bezAdr1_2.style.display = 'block';
        }
        else if(typeShleifa1.selectedIndex == 0){
            bezAdr1.style.display = 'none';
            bezAdr1_1.style.display = 'none';
            bezAdr1_2.style.display = 'none';
        }
        else{
            
        }
    };
    
        dlg2Sbt.addEventListener('click', (e)=>{

            if(parseInt(iKShS.value, 10) != NaN)
            {
                if(parseInt(iKShS.value, 10) >= 1 &&  parseInt(iKShS.value, 10) <= 640)
                    AutoSignalizatsiya.KShS = parseInt(iKShS.value, 10);
                else
                    iKShS.value("Ввод вне допустимого диапазона!");
            }
            else
                iKShS.value("Введите значение от 1 до 640!");

            if(parseInt(iKMIShS1.value, 10) != NaN)
                {
                    if(parseInt(iKMIShS1.value, 10) >= 0 &&  parseInt(iKMIShS1.value, 10) <= 32)
                        AutoSignalizatsiya.KMIShS = parseInt(iKMIShS1.value, 10);
                    else
                        iKMIShS1.value("Ввод вне допустимого диапазона!");
                }
            else
                iKMIShS1.value("Введите значение от 0 до 32!");

            
            if(parseInt(iREZShS1.value, 10) != NaN)
                {
                    if(parseInt(iREZShS1.value, 10) >= 0 &&  parseInt(iREZShS1.value, 10) <= 100)
                        AutoSignalizatsiya.REZShS = parseInt(iREZShS1.value, 10);
                    else
                        iREZShS1.value("Ввод вне допустимого диапазона!");
                }
            else
                iREZShS1.value("Введите значение от 0 до 100!");

            AutoSignalizatsiya.KonfShleifa.TShS = typeShleifa1.selectedIndex;

            if(AutoSignalizatsiya.KonfShleifa.TShS  == 1){
                bezAdr1.style.display = 'block';
                AutoSignalizatsiya.KonfShleifa.SHShS = SKhShS1.selectedIndex;
            }



            if(AutoSignalizatsiya.KonfShleifa.ExShS == true){
                if(AutoSignalizatsiya.KonfShleifa.TShS == 0){
                    
                }
            }
                

        });

      //const socket = new io.Socket('localhost', {port: 3000});
        // socket.connect();
        // socket.on('message', (data)=> {

        // })
// const popup = window.open('https://microsoft.com', 'Microsoft', 'width=400, height=400, resizable=yes');
// function closeWindow(){
//     //popup.closeWindow();
//     popup.window.close();
// }
// setTimeout(closeWindow, 10000);
// for (let index = 0; index < jsonData.length; index++) {
//     alert(jsonData[index]);
// }



//-------------------Working function------------------------------
// function download(content, fileName, contentType) {
//     var a = document.createElement("a");
//     var file = new Blob([content], {type: contentType});
//     a.href = URL.createObjectURL(file);
//     a.download = fileName;
//     a.click();
// }
// download(jsonData, 'json1.json', 'text/plain');
}, false);