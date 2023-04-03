import { faker } from '@faker-js/faker';
import {LoginPage} from '../pages/loginPage';

describe ("17.2 login to Secret santa API ", () =>{
    let loginPage = new LoginPage();

    let oldPassword = "333338";
    let email = "oxana.s.sidorova@gmail.com"
    let blankPassword = " "
    const selectorCookie = "ym_uid=1678715182128092144; _ym_d=1678715182; yexp=; adtech_uid=70eda817-8a1f-479b-89e7-dc53e79cb45d%3Asanta-secret.ru; top100_id=t1.7627570.862366842.1678715184243; last_visit=1679525402950%3A%3A1679525402950; _pm_=qig4hei7uzx8wwzz70y65zg5urbpccx1sfy; t3_sid_7627570=s1.54666637.1679524543756.1679525403545.5.5; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5NTEyMjMsImlhdCI6MTY3OTkyMTY5NSwiZXhwIjoxNjgyNTEzNjk1fQ.zoVAmRaoHIEXLAiws8iHmnPmktYhOs10B4Ak0dvB2UM"
    let newPassword =faker.internet.password(9);
    
    it ( "Authorization with valid data", () => {
         cy.apiLoginOldPassword(email,oldPassword,selectorCookie)
    
        cy.visit(" ");
        cy.contains ("Вход и регистрация").click({force:true});
        loginPage.inputLogin("oxana.s.sidorova@gmail.com", oldPassword)
        cy.contains("Коробки").should("exist");
        cy.contains("Oxana").click({force:true});
        cy.contains("Выйти с сайта").click();

    })
    it ( "Change password", () => {
        // let newPassword =faker.internet.password(9);

        cy.apiLoginOldPassword (email,oldPassword,selectorCookie);
        // cy.request({
        //     method: "PUT",
        //     headers:{selectorCookie},
        //     url:"/api/account/login",
        //     body:{password:newPassword}
        // }).then((response)=> {
        //     expect(response.status).to.equal(200);
            
        // });
        cy.contains("Коробки").should("exist");
        cy.changePassword("Oxana", newPassword);
       
        cy.contains("Выйти с сайта").click();


    })

    it ( "Check login with New password", () => {
   
        cy.request({
            method: "POST",
            headers:{
                selectorCookie },
            url:"/login",
            body:[
                {password:newPassword},
                {email:email}
            ]
        }).then((response)=> {
            expect(response.status).to.equal(200);
        });
        cy.contains("Коробки").should("exist");
        cy.contains("Oxana").click({force:true});
        cy.contains("Выйти с сайта").click();
 })

    it ( "Authorisation whith blank password", () => {
        cy.request({
            method: "POST",
            headers:{
                selectorCookie },
            url:"/login",
            body:[
                {password:blankPassword},
                {email:email}
            ]

    }).then((response)=> {
        expect(response.status).to.equal(400);
    });

    it ( "Change password to Old", () => {

        cy.request({
            method: "POST",
            headers:{
                selectorCookie },
            url:"/login",
            body:[
                {password:newPassword},
                {email:email}
            ]
        }).then((response)=> {
            expect(response.status).to.equal(200);
        });
        cy.contains("Коробки").should("exist");
        cy.changePassword("Oxana", oldPassword);
       
        cy.contains("Выйти с сайта").click();

    })

    it ( "Checl login with Old password", () => {
        cy.apiLoginOldPassword(email,oldPassword,selectorCookie)
        cy.visit(" ");
        cy.contains ("Вход и регистрация").click({force:true});
        loginPage.inputLogin("oxana.s.sidorova@gmail.com", oldPassword)
        cy.contains("Коробки").should("exist");
        cy.contains("Oxana").click({force:true});
        cy.contains("Выйти с сайта").click();
    
    })
})
})

   