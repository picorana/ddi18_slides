var graph = new GrapholScape(null,document.getElementById('cy2'),examples[5][1]);
graph.drawDiagram(graph.getDiagramName(0));
graph.cy.center()
console.log(graph)

Reveal.addEventListener('slidechanged', function(event) {
  if (event.currentSlide.id === 'graph2') {
    graph.cy.resize();
    //cy2.layout({name:'grid'}).run();
  }
});

document.getElementById('cy2').style.zIndex = '100'