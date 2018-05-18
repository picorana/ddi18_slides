var cy1 = cytoscape({

	 container: document.getElementById('cy1'), // container to render in

	  elements: [ // list of graph elements to start with
	    { // node a
	      data: { id: 'veicolo', shape: 'rectangle', fillColor: '#fff', height:40, width:100 }
	    },
	    { // node b
	      data: { id: 'b', shape: 'rectangle', fillColor: '#fff', height:40, width:100 }
	    },
	    { // edge ab
	      data: { id: 'ab', source: 'veicolo', target: 'b' }
	    }
	  ],

	  style: [ // the stylesheet for the graph
	    {
	      selector: 'node',
	      style: {
	         'height' : 'data(height)',
	          'width' : 'data(width)',
	          'background-color': 'data(fillColor)',
	          'shape': 'data(shape)',
	          'border-width': 1,
	          'border-color': '#000',
	          'border-style': 'solid',
			  'font-size' : 12,
			  'label' : 'data(id)',
			  'text-valign' : 'center'
	      }
	    },

	    {
	      selector: 'edge',
	      style: {
	        'width': 1,
	          'line-color': '#fff',
	          //'target-arrow-color': '#000',
	          //'target-arrow-shape': 'data(target_arrow)',
	          //'target-arrow-fill': 'data(arrow_fill)',
	          //'line-style' : 'data(style)',
	          'curve-style' : 'bezier',
			'arrow-scale' : 1.3,
			'border-width': 1,
	          'border-color': '#fff',
	          'border-style': 'solid',
	      }
	    }
	  ]

	});

Reveal.addEventListener('slidechanged', function(event) {
  if (event.currentSlide.id === 'graph1') {
    cy1.resize();
    cy1.layout({name:'grid'}).run();
  }
});

document.getElementById('cy1').style.zIndex = '100'