// Charger et insérer le header dynamiquement
fetch('https://harg2001.github.io/common/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;

    // Now that the header is loaded, find the 'face' element and update it
    var faces = Array("( ͡° ͜ʖ ͡°)", "¯\_(ツ)_/¯", "ヽ༼ຈل͜ຈ༽ﾉ", "ಠ_ಠ", "¯\(°_o)/¯", "( ﾟдﾟ)", "இдஇ", "(≧▽≦)", "(´_ゝ`)", "´• ل •`", "ʕ•ᴥ•ʔ", "ᶘᵒᴥᵒᶅ", "[̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅]", "/̵͇/'̿'̿ ̿ ̿̿ ̿̿ ̿ ̿̿ ̿̿", "(▀̿̿Ĺ̯̿▀̿ ̿)", "凸-_-凸", "(ㆁωㆁ*)", "(•ө•)♡", "(/◕ヮ◕)/", "(^_^.)",
    "(◉ω◉)", "^오^", "(*´∀｀)", "•̀.̫•́✧", "(๑´ڡ`๑)", "(・∀・)", "༼ ºلº ༽", "ლ(´ڡ`ლ)", "(･ิω･ิ)", "ヽ(^o^)丿", "(*^_^*)", "٩(♡ε♡ )۶", "(๑•̀ㅂ•́)ﻭ✧", "(๑˃̵ᴗ˂̵)ﻭ", "(^o^)", "(✿◠‿◠)", "(＾ｕ＾)", "(-_-;)", "^_^;", "(^o^;", "(ーー;)", "('・ω・')",
    "(；´Д｀)", "(；･`д･´)", "(´-﹏-`；)", "m(_ _;)m", "( ﾟдﾟ)", "(゜o゜)", "＿|￣|○", "(T_T)", "(｡ŏ﹏ŏ)", "( ･ั﹏･ั)", "(¯―¯٥)", "(｡>﹏<｡)", "(ಥ﹏ಥ)", "༼ಢ_ಢ༽", "(๑´•.̫ • `๑)", "(-̩̩-̩̩͡_-̩̩-̩̩͡)", "(;´༎ຶД༎ຶ`)", "'ㅂ'", "'ㅅ'", "-ㅅ-", "(︶^︶)", "→_→",
    "(・へ・)", "(~_~メ)", "(ノಠ益ಠ)", "Ƹ̵̡Ӝ̵̨̄Ʒ", "囧", "◕‿◕", "ó_ò", "♪♫*•♪");
    var pickone = faces[Math.floor(Math.random()*faces.length)];
    document.getElementById('face').innerText = pickone;
  });
