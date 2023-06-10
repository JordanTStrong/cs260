class App {
    constructor() {
      document.querySelectorAll('.game-button').forEach((el, i) => {
        if (i < btnDescriptions.length) {
          this.buttons.set(el.id, new Button(btnDescriptions[i], el));
        }
      });
    }
  
    async getPlayerName() {
      const playerNameEl = document.querySelector('.player-name');
      playerNameEl.textContent = await this.retrievePlayerName();
    }
  
    retrievePlayerName() {
      return localStorage.getItem('userName') ?? 'Mystery player';
    }
  }
  
  const appInstance = new App();
  appInstance.getPlayerName();
  