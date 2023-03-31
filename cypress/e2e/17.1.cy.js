import { faker } from '@faker-js/faker';
import {LoginPage} from '../pages/loginPage';
// const LoginPageElements = require("../fixtures/loginPageSelectors.cy")
 
describe ("santa login -17.1", () => {
    let LoginPage = new LoginPage();
    let oldPassword = "test11111";

    it("user cannot login with old password-UI", () => {
        
        let newPassword =faker.internet.password(9);
        cy.log(newPassword);
        
        cy.visit(" ");
        cy.contains ("Вход и регистрация").click({force:true});
        LoginPage.login("oxana.s.sidorova+test@gmail.com", oldPassword)
    
        cy.contains("Коробки").should("exist");
        cy.changePassword("oxana", newPassword);
       
        cy.contains("Выйти с сайта").click();
        cy.visit(" ");
        cy.contains("Вход и регистрация").click({force: true})
        LoginPage.login("oxana.s.sidorova+test@gmail.com", oldPassword)
        
         cy.get('.layout-row-end > .btn-service').click();
        // cy.get(loginPageElements.loginButton).click();
        cy.contains("Неверное имя пользователя или пароль").should("exist");
        cy.get(":nth-child(4) > .frm").clear().type(newPassword);
        cy.get('.btn-main').click();
        cy.changePassword("oxana", oldPassword);
    
    });

    it.only("user cannot login with old password - API,UI",() => {
        let newPassword =faker.internet.password(9);
        cy.log(newPassword);

        cy.request({
            method: "PUT",
            headers:{
                Cookie:
    
            " _ym_uid=1678715182128092144; _ym_d=1678715182; yexp=; adtech_uid=70eda817-8a1f-479b-89e7-dc53e79cb45d%3Asanta-secret.ru; top100_id=t1.7627570.862366842.1678715184243; last_visit=1679525402950%3A%3A1679525402950; _pm_=qig4hei7uzx8wwzz70y65zg5urbpccx1sfy; t3_sid_7627570=s1.54666637.1679524543756.1679525403545.5.5; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5NTEyMjMsImlhdCI6MTY3OTkyMTY5NSwiZXhwIjoxNjgyNTEzNjk1fQ.zoVAmRaoHIEXLAiws8iHmnPmktYhOs10B4Ak0dvB2UM"
        },
            url:"/api/account/login",
            body:{password:newPassword}
        }).then((response)=> {
            expect(response.status).to.equal(200);
        });
        cy.visit(" ");
        cy.contains ("Вход и регистрация").click({force:true});
        LoginPage.login("oxana.s.sidorova+test@gmail.com", newPassword)
        cy.contains("Коробки").should("exist");
        cy.contains("oxana").click({force:true});
        cy.contains("Выйти с сайта").click();
              
        cy.request({
            method: "PUT",
            headers:{
                Cookie:
            "_ym_uid=1678715182128092144; _ym_d=1678715182; yexp=; adtech_uid=70eda817-8a1f-479b-89e7-dc53e79cb45d%3Asanta-secret.ru; top100_id=t1.7627570.862366842.1678715184243; last_visit=1679525402950%3A%3A1679525402950; _pm_=qig4hei7uzx8wwzz70y65zg5urbpccx1sfy; t3_sid_7627570=s1.54666637.1679524543756.1679525403545.5.5; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5NTEyMjMsImlhdCI6MTY3OTkyMTY5NSwiZXhwIjoxNjgyNTEzNjk1fQ.zoVAmRaoHIEXLAiws8iHmnPmktYhOs10B4Ak0dvB2UM"
            },
            url:"/api/account/login",
            body:{password:oldPassword}
        }).then((response)=> {
            expect(response.status).to.equal(200);
        });
        cy.visit(" ");
        LoginPage.login("oxana.s.sidorova+test@gmail.com", oldPassword);
        cy.contains("Коробки").should("exist")
    })
})