var number = 0;

function btnDecimal() {
  div_alteravel.innerHTML = `
      <div class="botoes">
        <h3>Selecione o tipo de base que você deseja calcular</h3>
        <section class="secBtn">
          <ul><button class="selecao">Binário</button></ul>
          <ul><button class="selecionado" onclick="btnDecimalOff()">Decimal</button></ul>
          <ul><button class="selecao">Octal</button></ul>
          <ul><button class="selecao">Hexadecimal</button></ul>
        </section>
      </div>
      <div class="calculo" id="calculos">
        <section class="selecionar">
          <p>Coloque o número decimal</p>
          <input type="number" id="iptNumber" placeholder="Ex: 30">
        </section>
        <section class="resultados" id="sec_resultados">
          <p>Binário: <span>${number.toString(2)}</span></p>
          <p>Octal: <span>${number.toString(8)}</span></p>
          <p>Hexadecimal: <span>${number.toString(16).toUpperCase()}</span></p>
        </section>
      </div>
    `;

  // Toda vez que houver alguma alteração na iptNumber, ele irei chamar a função atualizarDecimais
  iptNumber.addEventListener("input", atualizarDecimais);

  // Adicionando um innerHTML para atualizar os resultados em tempo real
  function atualizarDecimais() {
    number = Number(iptNumber.value)
    sec_resultados.innerHTML = `
      <p>Binário: <span>${number.toString(2)}</span></p>
      <p>Octal: <span>${number.toString(8)}</span></p>
      <p>Hexadecimal: <span>${number.toString(16).toUpperCase()}</span></p>
    `;
  }
}

function btnDecimalOff() {
  div_alteravel.innerHTML = `
      <div class="botoes">
        <h3>Selecione o tipo de base que você deseja calcular</h3>
        <section class="secBtn">
          <ul><button class="nSelecionado" onclick="btnBinario()">Binário</button></ul>
          <ul><button class="nSelecionado" onclick="btnDecimal()">Decimal</button></ul>
          <ul><button class="nSelecionado" onclick="btnOctal()">Octal</button></ul>
          <ul><button class="nSelecionado" onclick="btnHexadecimal()">Hexadecimal</button></ul>
        </section>
      </div>
    `;
}

function btnBinario() {
  div_alteravel.innerHTML = `
      <div class="botoes">
        <h3>Selecione o tipo de base que você deseja calcular</h3>
        <section class="secBtn">
          <ul><button class="selecionado" onclick="btnBinarioOff()">Binário</button></ul>
          <ul><button class="selecao">Decimal</button></ul>
          <ul><button class="selecao">Octal</button></ul>
          <ul><button class="selecao">Hexadecimal</button></ul>
        </section>
      </div>
      <div class="calculo" id="calculos">
        <section class="selecionar">
          <p>Coloque o número binário</p>
          <input type="number" id="iptNumber" placeholder="Ex: 1010">
        </section>
        <section class="resultados" id="sec_resultados">
          <p>Decimal: <span>${number.toString(10)}</span></p>
          <p>Octal: <span>${number.toString(8)}</span></p>
          <p>Hexadecimal: <span>${number.toString(16).toUpperCase()}</span></p>
        </section>
      </div>
    `;

  // Toda vez que houver alguma alteração na iptNumber, ele irei chamar a função atualizarBinario
  iptNumber.addEventListener("input", atualizarBinario);

  // Adicionando um innerHTML para atualizar os resultados em tempo real
  function atualizarBinario() {
    number = parseInt(iptNumber.value, 2)
    sec_resultados.innerHTML = `
      <p>Decimal: <span>${number.toString(10)}</span></p>
      <p>Octal: <span>${number.toString(8)}</span></p>
      <p>Hexadecimal: <span>${number.toString(16).toUpperCase()}</span></p>
    `;
  }
}

function btnBinarioOff() {
  div_alteravel.innerHTML = `
      <div class="botoes">
        <h3>Selecione o tipo de base que você deseja calcular</h3>
        <section class="secBtn">
          <ul><button class="nSelecionado" onclick="btnBinario()">Binário</button></ul>
          <ul><button class="nSelecionado" onclick="btnDecimal()">Decimal</button></ul>
          <ul><button class="nSelecionado" onclick="btnOctal()">Octal</button></ul>
          <ul><button class="nSelecionado" onclick="btnHexadecimal()">Hexadecimal</button></ul>
        </section>
      </div>
    `;
}

function btnOctal() {
  div_alteravel.innerHTML = `
      <div class="botoes">
        <h3>Selecione o tipo de base que você deseja calcular</h3>
        <section class="secBtn">
          <ul><button class="selecao">Binário</button></ul>
          <ul><button class="selecao">Decimal</button></ul>
          <ul><button class="selecionado" onclick="btnOctalOff()">Octal</button></ul>
          <ul><button class="selecao">Hexadecimal</button></ul>
        </section>
      </div>
      <div class="calculo" id="calculos">
        <section class="selecionar">
          <p>Coloque o número Octal</p>
          <input id="iptNumber" placeholder="Ex: 17">
        </section>
        <section class="resultados" id="sec_resultados">
          <p>Binário: <span>${number.toString(2)}</span></p>
          <p>Decimal: <span>${number.toString(10)}</span></p>
          <p>Hexadecimal: <span>${number.toString(16).toUpperCase()}</span></p>
        </section>
      </div>
    `;

  // Toda vez que houver alguma alteração na iptNumber, ele irei chamar a função atualizarOctal
  iptNumber.addEventListener("input", atualizarOctal);

  // Adicionando um innerHTML para atualizar os resultados em tempo real
  function atualizarOctal() {
    number = parseInt(iptNumber.value, 8)
    sec_resultados.innerHTML = `
      <p>Binário: <span>${number.toString(2)}</span></p>
      <p>Decimal: <span>${number.toString(10)}</span></p>
      <p>Hexadecimal: <span>${number.toString(16).toUpperCase()}</span></p>
    `;
  }
}

function btnOctalOff() {
  div_alteravel.innerHTML = `
      <div class="botoes">
        <h3>Selecione o tipo de base que você deseja calcular</h3>
        <section class="secBtn">
          <ul><button class="nSelecionado" onclick="btnBinario()">Binário</button></ul>
          <ul><button class="nSelecionado" onclick="btnDecimal()">Decimal</button></ul>
          <ul><button class="nSelecionado" onclick="btnOctal()">Octal</button></ul>
          <ul><button class="nSelecionado" onclick="btnHexadecimal()">Hexadecimal</button></ul>
        </section>
      </div>
    `;
}

function btnHexadecimal() {
  div_alteravel.innerHTML = `
      <div class="botoes">
        <h3>Selecione o tipo de base que você deseja calcular</h3>
        <section class="secBtn">
          <ul><button class="selecao">Binário</button></ul>
          <ul><button class="selecao">Decimal</button></ul>
          <ul><button class="selecao">Octal</button></ul>
          <ul><button class="selecionado" onclick="btnHexadecimalOff()">Hexadecimal</button></ul>
        </section>
      </div>

      <div class="calculo" id="calculos">
        <section class="selecionar">
          <p>Coloque o número Hexadecimal</p>
          <input id="iptNumber" placeholder="Ex: 1A">
        </section>
        <section class="resultados" id="sec_resultados">
          <p>Binário: <span>${number.toString(2)}</span></p>
          <p>Decimal: <span>${number.toString(10)}</span></p>
          <p>Octal: <span>${number.toString(16).toUpperCase()}</span></p>
        </section>
      </div>
    `;

  // Toda vez que houver alguma alteração na iptNumber, ele irei chamar a função atualizarOctal
  iptNumber.addEventListener("input", atualizarOctal);

  // Adicionando um innerHTML para atualizar os resultados em tempo real
  function atualizarOctal() {
    number = parseInt(iptNumber.value, 16)
    sec_resultados.innerHTML = `
      <p>Binário: <span>${number.toString(2)}</span></p>
      <p>Decimal: <span>${number.toString(10)}</span></p>
      <p>Octal: <span>${number.toString(8)}</span></p>
    `;
  }
}

function btnHexadecimalOff() {
  div_alteravel.innerHTML = `
      <div class="botoes">
        <h3>Selecione o tipo de base que você deseja calcular</h3>
        <section class="secBtn">
          <ul><button class="nSelecionado" onclick="btnBinario()">Binário</button></ul>
          <ul><button class="nSelecionado" onclick="btnDecimal()">Decimal</button></ul>
          <ul><button class="nSelecionado" onclick="btnOctal()">Octal</button></ul>
          <ul><button class="nSelecionado" onclick="btnHexadecimal()">Hexadecimal</button></ul>
        </section>
      </div>
    `;
}