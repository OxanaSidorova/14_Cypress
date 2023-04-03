import { faker } from '@faker-js/faker';
import {LoginPage} from '../pages/loginPage';
// const LoginPageElements = require("../fixtures/loginPageSelectors.cy")
 
describe ("santa login -17.1", () => {
    let loginPage = new LoginPage();
    let oldPassword = "333338";
    // let newPassword =faker.internet.password(9);

    it("user cannot login with old password-UI", () => {
    // let loginPage = new LoginPage();
    // let oldPassword = "333338";
    let newPassword =faker.internet.password(9);

        
        // let newPassword =faker.internet.password(9);
        cy.log(newPassword);
        
        cy.visit(" ");
        cy.contains ("Вход и регистрация").click({force:true});
        loginPage.inputLogin("oxana.s.sidorova@gmail.com", oldPassword);
    
        cy.contains("Коробки").should("exist");
        cy.changePassword("Oxana", newPassword);
       
        cy.contains("Выйти с сайта").click();
        cy.visit(" ");
        cy.contains("Вход и регистрация").click({force: true})
        loginPage.inputLogin("oxana.s.sidorova@gmail.com", oldPassword)
        
        cy.contains("Неверное имя пользователя или пароль").should("exist");
        cy.get(":nth-child(4) > .frm").clear().type(newPassword);
        cy.get('.btn-main').click();
        cy.changePassword("Oxana", oldPassword);
    
    });

    it("user cannot login with old password - API,UI",() => {
       const selectorCookie= 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5NTAzOTUsImlhdCI6MTY4MDUyMjgzOSwiZXhwIjoxNjgzMTE0ODM5fQ.WOsYG_WjZdCJwOEKKEFuKynQ0mNc0XByc43SaPClNMI; _ohmybid_cmf=2; _pm_=n0xljc240cwlx9csc4t3jrtl63anwu7x3xl; _ym_isad=2; _ym_d=1678714925; _ym_uid=1678714925378069794'
    
        let newPassword =faker.internet.password(9);
        cy.log(newPassword);
        cy.apiLoginOldPassword("oxana.s.sidorova@gmail.com",oldPassword,selectorCookie)

        //   cy.request({
        //     method: "PUT",
        //     headers:{
        //         Cookie:
    
        //     " jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5NTAzOTUsImlhdCI6MTY4MDUyMjgzOSwiZXhwIjoxNjgzMTE0ODM5fQ.WOsYG_WjZdCJwOEKKEFuKynQ0mNc0XByc43SaPClNMI; _ohmybid_cmf=2; _pm_=n0xljc240cwlx9csc4t3jrtl63anwu7x3xl; _ym_isad=2; _ym_d=1678714925; _ym_uid=1678714925378069794"
        //  },
        //     url:"/api/account/login",
        //     body:{password:oldPassword}
        // }).then((response)=> {
        //     expect(response.status).to.equal(200);
        // });
        cy.visit(" ");
        cy.contains ("Вход и регистрация").click({force:true});
    loginPage.inputLogin("oxana.s.sidorova@gmail.com", oldPassword);
        cy.contains("Коробки").should("exist");
        cy.contains("Oxana").click({force:true});
        cy.contains("Выйти с сайта").click();
              
        cy.request({
        method: "PUT",
        headers:{
            Cookie:

        " jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ5NTAzOTUsImlhdCI6MTY4MDUyMjgzOSwiZXhwIjoxNjgzMTE0ODM5fQ.WOsYG_WjZdCJwOEKKEFuKynQ0mNc0XByc43SaPClNMI; _ohmybid_cmf=2; _pm_=n0xljc240cwlx9csc4t3jrtl63anwu7x3xl; _ym_isad=2; _ym_d=1678714925; _ym_uid=1678714925378069794"
     },
        url:"/api/account/login",
        body:{password:oldPassword}
    }).then((response)=> {
        expect(response.status).to.equal(200);
    });
        cy.visit(" ");
      loginPage.inputLogin("oxana.s.sidorova@gmail.com", oldPassword);
        cy.contains("Коробки").should("exist")
    })
})