const HTML_CONTACT_INFO = `<h1> HI <h1>`;
const HTML_ABOUT_ME = `
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
							<p> Honestly I just like fighting games. <em>League is cool too.</em> </p>
              <br>
            </ul>
      <ion-item>
        <ion-text color="dark">
      <h2><strong>I am currently learning:</strong><h2><p> Front-end & UI/UX.<br> Also mobile development. <br>Also more entertaintment based technologies.<br> Also whatever catches my interest.</p>
        </ion-text>
      </ion-item>
      <ion-item>
        <ion-label>
          <img src="7.gif" />
        </ion-label>
      </ion-item>

      <ion-item>
      <em> If so, click the person icon after closing this. </em>
      </ion-item>

    </ion-list>
  </ion-content>
`;
customElements.define('modal-content', class ModalContent extends HTMLElement {
    connectedCallback() {
      //this.innerHTML = htmlContent;
    }
  });
  let currentModal = null;
  const controller = document.querySelector('#abt-me-controller');
  const toastController = document.querySelector('#sad-controller')
  const abtBtn = document.querySelector("#about-btn");
  const contactBtn = document.querySelector('#contact-info');
  const sadBtn = document.querySelector('#sad-btn');
  abtBtn.addEventListener('click', () => createModal(HTML_ABOUT_ME));
  contactBtn.addEventListener('click', () => createModal(HTML_CONTACT_INFO));
  sadBtn.addEventListener('click', handleButtonClick);
  
  function createModal(htmlContent) {
    controller.create({
      component: 'modal-content'
    }).then(modal => {
      modal.present();
      currentModal = modal;
      this.innerHTML = htmlContent;
    });
    this.innerHTML = htmlContent;
  }
  
  function dismissModal() {
    if (currentModal) {
      currentModal.dismiss().then(() => { currentModal = null; });
    }
  }

  function handleButtonClick() {
    toastController.create({
      color: 'dark',
      duration: 5000,
      message: 'Don\'t be sad. I hope you find your happiness.',
      showCloseButton: true
    }).then(toast => {
      toast.present();
    });
  }