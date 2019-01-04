const elements = document.querySelectorAll(`input`);

function handle(){
    const suffix = this.dataset.sizing || ` `;
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

elements.forEach((e) => e.addEventListener(`change`, handle ));
elements.forEach((e) => e.addEventListener(`mousemove`,handle ));