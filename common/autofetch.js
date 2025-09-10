class ShareActions extends HTMLElement {
  constructor() {
    super();
  }

  // Returns a url prop value or the current page url as a fallback
  get url() {
    return this.getAttribute("url") || window.location.href;
  }

  // Returns a title prop value or the page <title>
  get title() {
    return this.getAttribute("title") || document.title;
  }

  // Looks for a meta description and extracts the value if it is found. Returns an empty string if not
  get description() {
    const metaDescriptionElement = document.querySelector(
      'meta[name="description"]'
    );

    return metaDescriptionElement
      ? metaDescriptionElement.getAttribute("content")
      : "";
  }

  // Determine if this browser can use the share API
  get hasShareSupport() {
    return navigator.share;
  }

  // Determine if this browser can use the clipboard API
  get hasClipboardSupport() {
    return navigator.clipboard;
  }

  // Takes the event trigger context (<button>), triggers the share API, then passes that
  // context and alert text to the renderAlert method
  triggerShare(context) {
    var messages = Array("I liked what i saw here ", "I'll tell you this ", "Spread the word ", "Sharing is caring ", "You'll love this ",
      "This is awesome ", "My satisfaction increased with this ", "One more step to achieve immortality ", "I dare you to click this "
    );
      var pickone = messages[Math.floor(Math.random()*messages.length)];
    navigator
      .share({
        title: pickone, // this.title,
        url: this.url,
        // text: this.description // To enable after adding description on all pages.
        // TODO try to add an image file to use as cover (include CTA)
      })
      .then(() => {
        this.renderAlert("Thanks!", context);
      })
      .catch((error) => console.error("Error sharing", error));
  }

  // Takes the event trigger context (<button>), triggers the clipboard API, then passes that
  // context and alert text to the renderAlert method
  copyToClipboard(context) {
    navigator.clipboard
      .writeText(this.url)
      .then(() => {
        this.renderAlert("Copied!", context);
      })
      .catch((error) => console.error(error));
  }

  // Takes message text, the event context and an optional millisecond value for clearing the
  // alert. It then renders that as a sibling (to the button) alert element *or* a local alert
  // element to this component. If neither are available, nothing happens here.
  renderAlert(text, context, clearTime = 3000) {
    const alert = context
      ? context.nextElementSibling
      : this.querySelector('[role="alert"]');

    if (alert) {
      alert.innerText = text;

      setTimeout(() => {
        alert.innerText = "";
      }, clearTime);
    }
  }

  // Takes an event, works out the method based on the trigger's 'data-method' attribute
  // then invokes the right event handler
  handleClick(event) {
    const method = event.currentTarget.dataset.method;

    switch (method) {
      case "share":
        this.triggerShare(event.currentTarget);
        return;
      case "clipboard":
        this.copyToClipboard(event.currentTarget);
        return;
    }
  }

  // Finds all buttons and attaches a click event to our handler
  assignEvents() {
    const buttons = this.querySelectorAll("button");

    if (buttons.length) {
      buttons.forEach((button) =>
        // Without doing this approach of invoking the event handler and instead
        // passing the function right in `this.handleClick` the following won't work:
        // 1. 'this' is out of scope so the trigger methods can't be found in our event handler
        // 2. event.currentTarget doesn't work which is needed to ensure the event trigger and not its children
        //    is always the correct target in our handler
        button.addEventListener("click", (event) => this.handleClick(event))
      );
    }
  }

  connectedCallback() {
    // No support is available for either share or clipboard APIs so we bail out here
    // and let the component's child HTML take over
    if (!this.hasShareSupport && !this.hasClipboardSupport) {
      console.log("No support so revert to MVE");
      return;
    }

    var messages = Array("Share if you like", "Tell your friends about this!", "Spread the word", "Sharing is caring", "Your friends will love this! Share it",
      "Share this page with a friend.", "Love this? Share it with your network!", "Found this awesome? Share it on social media!", "Help others by sharing this page with your community.",
      "Sharing can increase the satisfaction of your daily life", "Share is a way to achieve immortality.", "No joy without sharing.", "Life is all about sharing.", "Share if you dare"
    );
      var pickone = messages[Math.floor(Math.random()*messages.length)];

    // Support of at least one API is available so now we render those buttons conditionally
    this.innerHTML = `
      <ul class="share-actions cluster" role="list">
        ${
          this.hasShareSupport
            ? `
          <li>
            <button class="button" data-method="share">${pickone}</button>
            <div role="alert"></div>
          </li>
        `
            : ""
        }
      </ul>
    `;

    // Copy URL disabled.

    /*
    ${
          this.hasClipboardSupport
            ? `
          <li>
            <button class="button" data-method="clipboard">Copy URL</button>
            <div role="alert"></div>
          </li>
        `
            : ""
        }
    */

    // Buttons are now rendered so we can assign the events
    this.assignEvents();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelectorAll('[id$="-placeholder"]'); // tous les élément dont id se termine par -placeholder
  
  list.forEach(el => {
    const name = el.id.replace(/-placeholder$/, '');
    if (!name) return;
  
  var origin = window.location.origin
  if(origin == 'file://')
    origin = 'https://harg2001.github.io'

  var url = `${origin}/common/${name}.html`;
  if(name.includes("/"))
  url = `${origin}/${name}.html`;
    
    fetch(url)
      .then(response => {
        if (!response.ok) 
      throw new Error(`Erreur de chargement : ${url}`);
        return response.text();
      })
      .then(html => {
        el.innerHTML = html;
    
      const face = el.querySelector('#face');
      if (face) {
      // Now that the header is loaded, find the 'face' element and update it
      var faces = Array("( ͡° ͜ʖ ͡°)", "¯\_(ツ)_/¯", "ヽ༼ຈل͜ຈ༽ﾉ", "ಠ_ಠ", "¯\(°_o)/¯", "( ﾟдﾟ)", "இдஇ", "(≧▽≦)", "(´_ゝ`)", "´• ل •`", "ʕ•ᴥ•ʔ", "ᶘᵒᴥᵒᶅ", "(▀̿̿Ĺ̯̿▀̿ ̿)", "(ㆁωㆁ*)", "(•ө•)♡", "(/◕ヮ◕)/", "(^_^.)",
      "(◉ω◉)", "^오^", "(*´∀｀)", "•̀.̫•́✧", "(๑´ڡ`๑)", "(・∀・)", "༼ ºلº ༽", "ლ(´ڡ`ლ)", "ヽ(^o^)丿", "(*^_^*)", "٩(♡ε♡ )۶", "(๑•̀ㅂ•́)ﻭ✧", "(๑˃̵ᴗ˂̵)ﻭ", "(^o^)", "(✿◠‿◠)", "(＾ｕ＾)", "(-_-;)", "^_^;", "(^o^;", "(ーー;)", "('・ω・')",
      "(；´Д｀)", "(；･`д･´)", "(´-﹏-`；)", "m(_ _;)m", "( ﾟдﾟ)", "(゜o゜)", "(T_T)", "(｡ŏ﹏ŏ)", "(¯―¯٥)", "(｡>﹏<｡)", "(ಥ﹏ಥ)", "༼ಢ_ಢ༽", "(๑´•.̫ • `๑)", "(-̩̩-̩̩͡_-̩̩-̩̩͡)", "'ㅂ'", "'ㅅ'", "-ㅅ-", "(︶^︶)", "→_→",
      "(・へ・)", "(~_~メ)", "(ノಠ益ಠ)", "囧", "◕‿◕", "ó_ò", "♪♫*•♪", "◝(ᵔᗜᵔ)◜", "(🌸◠‿◠)", "(ง ˃ ³ ˂)ว", "( ͡ᵔ ͜ʖ ͡ᵔ )", "(⌐■_■)");
      var pickone = faces[Math.floor(Math.random()*faces.length)];
      face.innerText = pickone;
      }

      const share = el.querySelector('share-actions');
      if (share) {
        // Now that the footer is loaded, find the 'share-actions' element and update it
        customElements.define("share-actions", ShareActions);
      }
    
      })
      .catch(err => {
        console.error(err);
        el.innerHTML = '<!-- Échec de chargement -->';
      });
  });

});