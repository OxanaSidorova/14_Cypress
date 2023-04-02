import { faker } from '@faker-js/faker';

describe ("17.2 login to Secret santa API ", () =>{

    let oldPassword = "333338";
    let email = "oxana.s.sidorova+test@gmail.com"
    const selectorCookie = "ym_uid=1678715182128092144; _ym_d=1678715182; yexp=; adtech_uid=70eda817-8a1f-479b-89e7-dc53e79cb45d%3Asanta-secret.ru; top100_id=t1.7627570.862366842.1678715184243; last_visit=1679525402950%3A%3A1679525402950; _pm_=qig4hei7uzx8wwzz70y65zg5urbpccx1sfy; t3_sid_7627570=s1.54666637.1679524543756.1679525403545.5.5; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5NTEyMjMsImlhdCI6MTY3OTkyMTY5NSwiZXhwIjoxNjgyNTEzNjk1fQ.zoVAmRaoHIEXLAiws8iHmnPmktYhOs10B4Ak0dvB2UM"
    
    
    it ( "Authorization with valid data", () => {
         cy.apiLoginOldPassword(email,oldPassword)
    

        // cy.request({
        //     method: "POST",
        //     headers:{
        //         selectorCookie },
        //     url:"/login",
        //     body:[
        //         {password:oldPassword},
        //         {email:email}
        //     ]
        // }).then((response)=> {
        //     expect(response.status).to.equal(200);
        // });
        cy.visit(" ");
        cy.contains ("Вход и регистрация").click({force:true});
        LoginPage.login("oxana.s.sidorova+test@gmail.com", oldPassword)
        cy.contains("Коробки").should("exist");
        cy.contains("oxana").click({force:true});
        cy.contains("Выйти с сайта").click();

    })
    it ( "Change password", () => {
        let newPassword =faker.internet.password(9);

        cy.apiLoginOldPassword(email,oldPassword);
        cy.request({
            method: "PUT",
            headers:{selectorCookie},
            url:"/api/account/login",
            body:{password:newPassword}
        }).then((response)=> {
            expect(response.status).to.equal(200);
            
        });
        cy.contains("Коробки").should("exist");
        cy.contains("oxana").click({force:true});
        cy.contains("Выйти с сайта").click();


    })

    it ( "Check login with New password", () => {
    })
    


    it ( "Authorisation whith blank password", () => {
    })

    it ( "Change password to Old", () => {
    })

    it ( "Checl l ogin with Old password", () => {
    })
})

   