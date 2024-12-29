describe("OrderPizza Tests", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/");
      cy.get('[data-cy="home-button"]').click();
    });
  
    it("Ad inputuna metin girilmesi", () => {
      cy.get('[data-cy="input-username"]')
        .type("John Doe")
        .should("have.value", "John Doe");
    });
  
    it("Birden fazla malzeme seçilebilir", () => {
      const malzemeler = ["Pepperoni", "Sosis", "Kanada Jambonu", "Mısır"];
  
      malzemeler.forEach((malzeme) => {
        cy.get(`[data-cy="checkboxes"][id="${malzeme}"]`)
          .check()
          .should("be.checked");
      });
    });
  
    it("Formu başarıyla gönderebilir", () => {
      cy.get('[data-cy="input-username"]').type("John Doe");
      cy.get('[data-cy="checkboxes"][id="Pepperoni"]').check();
      cy.get('[data-cy="checkboxes"][id="Sosis"]').check();
      cy.get('[data-cy="checkboxes"][id="Kanada Jambonu"]').check();
      cy.get('[data-cy="checkboxes"][id="Mısır"]').check();
      cy.get('[data-cy="textarea-order-note"]').type("Ekstra peynir ekleyin lütfen.");
  
      cy.contains("+").click();
      cy.get('[data-cy="submit-button"]').should("not.be.disabled").click();
  
      // Başarı mesajının görünmesi
      cy.contains("TEBRİKLER!").should("exist");
      cy.contains("SİPARİŞİNİZ ALINDI!").should("exist");
    });
  });
  