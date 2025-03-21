var number = 0;
function btnDecimal() {
  div_alteravel.innerHTML = `
      <!-- Div para a criação dos botões -->
      <div class="botoes">
        <h3>Selecione o tipo de base que você deseja calcular</h3>
        <section class="secBtn">
          <ul><button class="selecao" onclick="btnBinario()">Binário</button></ul>
          <ul><button class="selecionado" onclick="btnDecimalOff()">Decimal</button></ul>
          <ul><button class="selecao" onclick="btnOctal()">Octal</button></ul>
          <ul><button class="selecao" onclick="btnHexadecimal()">Hexadecimal</button></ul>
        </section>
      </div>
      <div class="calculo" id="calculos">
        <section class="selecionar">
          <p>Colque o número decimal</p>
          <input type="number" id="iptNumber" placeholder="Ex: 30">
        </section>
        <section class="resultados">
          <p>Binário: <span id="spnBinario">${number.toString(2)}</span></p>
          <p>Octal: <span id="spnOcta">30</span></p>
          <p>Hexadecimal: <span id="spnHexa">30</span></p>
        </section>
      </div>
    `
    number = Number(iptNumber.value);
}