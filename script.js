document.getElementById("nfsForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Pegando os valores do formulario
  const valorVenda = parseFloat(document.getElementById("valorVenda").value);
  const itensVendidos = document.getElementById("itensVendidos").value;
  const irpf = parseFloat(document.getElementById("irpf").value) / 100;
  const pis = parseFloat(document.getElementById("pis").value) / 100;
  const cofins = parseFloat(document.getElementById("cofins").value) / 100;
  const inss = parseFloat(document.getElementById("inss").value) / 100;
  const issqn = parseFloat(document.getElementById("issqn").value) / 100;

  // Calculo dos impostos
  const valorIRPF = valorVenda * irpf;
  const valorPIS = valorVenda * pis;
  const valorCOFINS = valorVenda * cofins;
  const valorINSS = valorVenda * inss;
  const valorISSQN = valorVenda * issqn;

  const totalImpostos =
    valorIRPF + valorPIS + valorCOFINS + valorINSS + valorISSQN;
  const valorLiquido = valorVenda - totalImpostos;

  // Exibindo os valores dos resultados
  document.getElementById("nfValorVenda").value = valorVenda.toFixed(2);
  document.getElementById("nfItensVendidos").value = itensVendidos;
  document.getElementById("nfIRPF").value = valorIRPF.toFixed(2);
  document.getElementById("nfPIS").value = valorPIS.toFixed(2);
  document.getElementById("nfCOFINS").value = valorCOFINS.toFixed(2);
  document.getElementById("nfINSS").value = valorINSS.toFixed(2);
  document.getElementById("nfISSQN").value = valorISSQN.toFixed(2);
  document.getElementById("nfTotalImpostos").value = totalImpostos.toFixed(2);
  document.getElementById("nfValorLiquido").value = valorLiquido.toFixed(2);

  // Exibindo a nota fiscal
  document.getElementById("notaFiscal").style.display = "block";
});
