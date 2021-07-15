(()=>{"use strict";const n="https://pokeapi.co/api/v2/pokemon/",e=async e=>{const a=e?`${n}${e}`:n;try{const n=await fetch(a);return await n.json()}catch(n){console.log("Fetch Error",n)}},a=function(n){return n.charAt(0).toUpperCase()+n.slice(1)};let t=[];const s=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",i=()=>'\n    <div class="error404">\n      <h2>Error 404</h2>\n    </div>\n  ',c={"/":async()=>{for(let n=1;n<=151;n++){let a=await e(n);t.push(a)}return`\n      <div class="pokémon">\n      ${t.map((n=>`\n        <article class="pokémon-item item-${n.types[0].type.name}">\n          <a href="/#/${n.id}">\n            <div class="img-container">\n              <img src="${n.sprites.front_default}" alt="${a(n.name)}">\n            </div>\n            <span class="number">\n              #${n.id.toString().padStart(3,"0")}\n            </span>\n            <h2>${a(n.name)}</h2>\n            <div class="pokémon-type">\n            <h3 class="type-${n.types[0].type.name}">\n              ${a(n.types[0].type.name)}\n            </h3>\n              ${n.types[1]?`<div class="separator"></div><h3 class="type-${n.types[1].type.name}">${a(n.types[1].type.name)}</h3>`:""}\n            </div>\n          </a>\n        </article>\n        `)).join("")}\n      </div>\n    `},"/:id":async()=>{const n=s(),t=await e(n);return`\n    <div class="pokémon-inner">\n      <article class="pokémon-card item-${t.types[0].type.name}">\n        <div class="img-container">\n          <img src="${t.sprites.front_default}" alt="${t.name}">\n        </div>\n        <h2>\n          Name\n        </h2>\n        <h3>\n          ${a(t.name)}\n        </h3>\n      </article>\n      <article class="pokémon-card item-${t.types[0].type.name}">\n        <h3>\n          Number: \n        </h3>\n          <span class="number">\n            #${t.id.toString().padStart(3,"0")}\n          </span>\n        <h3>\n          Types:\n        </h3>\n        <div class="pokémon-type">\n          <span class="type-${t.types[0].type.name}">\n            ${a(t.types[0].type.name)}\n          </span>\n          ${t.types[1]?`<span class="type-${t.types[1].type.name}">${a(t.types[1].type.name)}</span>`:""} \n        </div>\n        <h3>\n          Abilities: \n        </h3>\n            <h4>\n              ${a(t.abilities[0].ability.name)}\n            </h4>\n            ${t.abilities[1]?`<h4>${a(t.abilities[1].ability.name)}</h4>`:""}\n      </article>\n    </div>\n  `},"/contact":"Contact"},o=async()=>{const n=document.getElementById("header"),e=document.getElementById("content");n.innerHTML=await'\n    <div class="header-main">\n      <div class="header-logo">\n        <h1>\n          <a href="SPA-JS/">\n            Pokidex.co\n          </a>\n        </h1>\n      </div>\n      <div class="header-nav">\n        <a href="#/about/">\n          About\n        </a>\n      </div>\n    </div>\n  ';let a=s(),t=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(a),o=c[t]?c[t]:i;e.innerHTML=await o()};window.addEventListener("load",o),window.addEventListener("hashchange",o)})();