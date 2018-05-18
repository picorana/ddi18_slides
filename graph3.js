var graph2 = new GrapholScape(null,document.getElementById('cy3'),examples[0][1]);
graph2.drawDiagram(graph2.getDiagramName(0));
var ps = new PainlessSparql(graph2);

Reveal.addEventListener('slidechanged', function(event) {
  if (event.currentSlide.id === 'graph3') {
    graph2.cy.resize();
    document.getElementById('sidenav').style.display = 'block'
    ps.graph.cy.resize()
  }
  else document.getElementById('sidenav').style.display = 'none'
});

document.getElementById('sidenav').style.display = 'none'
for (var i = 0; i < document.getElementsByClassName('slidecontainer').length; i++) {
	elem = document.getElementsByClassName('slidecontainer')[i]
	elem.style.display = 'none'
}

document.getElementById('cy3').style.zIndex = '100'
document.getElementById('cy3').style.width = '100%'

document.getElementById('painless_menu').style.display = 'none'
document.getElementById('sidenav').style.backgroundColor = '#222'
document.getElementById('query_canvas').style.width = '90%'
document.getElementById('query_canvas').style.margin = '8%'
document.getElementById('sparql_textbox').style.fontWeight = 'bold'
document.getElementById('sparql_textbox').style.fontSize = 'large'
document.getElementById('sparql_textbox').style.margin = '8%'

document.getElementById('cy4').style.zIndex = '100'
document.getElementById('cy4').style.width = '0%'