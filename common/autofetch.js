  document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelectorAll('[id$="-placeholder"]'); // tous les élément dont id se termine par -placeholder
    
    list.forEach(el => {
      const name = el.id.replace(/-placeholder$/, '');
      if (!name) return;
	  
      const url = `https://harg2001.github.io/common/${name}.html`;
      
      fetch(url)
        .then(response => {
          if (!response.ok) throw new Error(`Erreur de chargement : ${url}`);
          return response.text();
        })
        .then(html => {
          el.innerHTML = html;
        })
        .catch(err => {
          console.error(err);
          el.innerHTML = '<!-- Échec de chargement -->';
        });
    });
	
	// Now that the header is loaded, find the 'face' element and update it
    var faces = Array("( ͡° ͜ʖ ͡°)", "¯\_(ツ)_/¯", "ヽ༼ຈل͜ຈ༽ﾉ", "ಠ_ಠ", "¯\(°_o)/¯", "( ﾟдﾟ)", "இдஇ", "(≧▽≦)", "(´_ゝ`)", "´• ل •`", "ʕ•ᴥ•ʔ", "ᶘᵒᴥᵒᶅ", "[̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅]", "/̵͇/'̿'̿ ̿ ̿̿ ̿̿ ̿ ̿̿ ̿̿", "(▀̿̿Ĺ̯̿▀̿ ̿)", "凸-_-凸", "(ㆁωㆁ*)", "(•ө•)♡", "(/◕ヮ◕)/", "(^_^.)",
    "(◉ω◉)", "^오^", "(*´∀｀)", "•̀.̫•́✧", "(๑´ڡ`๑)", "(・∀・)", "༼ ºلº ༽", "ლ(´ڡ`ლ)", "ヽ(^o^)丿", "(*^_^*)", "٩(♡ε♡ )۶", "(๑•̀ㅂ•́)ﻭ✧", "(๑˃̵ᴗ˂̵)ﻭ", "(^o^)", "(✿◠‿◠)", "(＾ｕ＾)", "(-_-;)", "^_^;", "(^o^;", "(ーー;)", "('・ω・')",
    "(；´Д｀)", "(；･`д･´)", "(´-﹏-`；)", "m(_ _;)m", "( ﾟдﾟ)", "(゜o゜)", "＿|￣|○", "(T_T)", "(｡ŏ﹏ŏ)", "(¯―¯٥)", "(｡>﹏<｡)", "(ಥ﹏ಥ)", "༼ಢ_ಢ༽", "(๑´•.̫ • `๑)", "(-̩̩-̩̩͡_-̩̩-̩̩͡)", "'ㅂ'", "'ㅅ'", "-ㅅ-", "(︶^︶)", "→_→",
    "(・へ・)", "(~_~メ)", "(ノಠ益ಠ)", "Ƹ̵̡Ӝ̵̨̄Ʒ", "囧", "◕‿◕", "ó_ò", "♪♫*•♪");
    var pickone = faces[Math.floor(Math.random()*faces.length)];
    document.getElementById('face').innerText = pickone;
	console.log("document.getElementById('face').innerText");
	console.log(pickone);
	console.log(document.getElementById('face').innerText);
	
  });
