customElements.define('modal-content', class ModalContent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <ion-header translucent>
          <ion-toolbar>
            <ion-title>About Me</ion-title>
            <ion-buttons slot="end">
              <ion-button onclick="dismissModal()">Close</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content fullscreen>
          <ion-list>
            <ion-item>
              <ion-label>
                <h2><strong>I am a Software Dev.</strong></h2>
                <p>Web Development & Augmented/Virtual reality. <br> I like making stuff that draws people in.</p>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-label>
                <h2><strong>I like:</strong></h2>
									<ul>
										<li> Music (I really listen to everything) </li>
										<p> Currently on a goth rock and trap vibe.
										<br>
										<br>
										<li> Food (I will try anything) </li>
										<br>
										<li> Vidya Games (Video Games) </li>
										<p> Honestly I just like fighting Games. <em>League is cool too.</em> </p>
										<br>
									</ul>
              </ion-label>
          </ion-list>
        </ion-content>
      `;
    }
  });
  let currentModal = null;
  const controller = document.querySelector('#abt-me-controller');
  const button = document.querySelector("#about-btn");
  if(button) button.addEventListener('click', createModal);
  else console.log('Modal button NOT WORKING!!!!');

  if(!controller) console.log('Controller is not working');
  
  function createModal() {
    controller.create({
      component: 'modal-content'
    }).then(modal => {
        console.log('does this work?');
      modal.present();
      currentModal = modal;
    });
  }
  
  function dismissModal() {
    if (currentModal) {
      currentModal.dismiss().then(() => { currentModal = null; });
    }
  }