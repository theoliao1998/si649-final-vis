var scales = {
    'puOr11': ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],
    'spectral8': ['#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#e6f598', '#abdda4', '#66c2a5', '#3288bd'],
    'redBlackGreen': ['#ff0000', '#AA0000', '#550000', '#005500', '#00AA00', '#00ff00'],
    'viridis': ["#440154","#440256","#450457","#450559","#46075a","#46085c","#460a5d","#460b5e","#470d60","#470e61","#471063","#471164","#471365","#481467","#481668","#481769","#48186a","#481a6c","#481b6d","#481c6e","#481d6f","#481f70","#482071","#482173","#482374","#482475","#482576","#482677","#482878","#482979","#472a7a","#472c7a","#472d7b","#472e7c","#472f7d","#46307e","#46327e","#46337f","#463480","#453581","#453781","#453882","#443983","#443a83","#443b84","#433d84","#433e85","#423f85","#424086","#424186","#414287","#414487","#404588","#404688","#3f4788","#3f4889","#3e4989","#3e4a89","#3e4c8a","#3d4d8a","#3d4e8a","#3c4f8a","#3c508b","#3b518b","#3b528b","#3a538b","#3a548c","#39558c","#39568c","#38588c","#38598c","#375a8c","#375b8d","#365c8d","#365d8d","#355e8d","#355f8d","#34608d","#34618d","#33628d","#33638d","#32648e","#32658e","#31668e","#31678e","#31688e","#30698e","#306a8e","#2f6b8e","#2f6c8e","#2e6d8e","#2e6e8e","#2e6f8e","#2d708e","#2d718e","#2c718e","#2c728e","#2c738e","#2b748e","#2b758e","#2a768e","#2a778e","#2a788e","#29798e","#297a8e","#297b8e","#287c8e","#287d8e","#277e8e","#277f8e","#27808e","#26818e","#26828e","#26828e","#25838e","#25848e","#25858e","#24868e","#24878e","#23888e","#23898e","#238a8d","#228b8d","#228c8d","#228d8d","#218e8d","#218f8d","#21908d","#21918c","#20928c","#20928c","#20938c","#1f948c","#1f958b","#1f968b","#1f978b","#1f988b","#1f998a","#1f9a8a","#1e9b8a","#1e9c89","#1e9d89","#1f9e89","#1f9f88","#1fa088","#1fa188","#1fa187","#1fa287","#20a386","#20a486","#21a585","#21a685","#22a785","#22a884","#23a983","#24aa83","#25ab82","#25ac82","#26ad81","#27ad81","#28ae80","#29af7f","#2ab07f","#2cb17e","#2db27d","#2eb37c","#2fb47c","#31b57b","#32b67a","#34b679","#35b779","#37b878","#38b977","#3aba76","#3bbb75","#3dbc74","#3fbc73","#40bd72","#42be71","#44bf70","#46c06f","#48c16e","#4ac16d","#4cc26c","#4ec36b","#50c46a","#52c569","#54c568","#56c667","#58c765","#5ac864","#5cc863","#5ec962","#60ca60","#63cb5f","#65cb5e","#67cc5c","#69cd5b","#6ccd5a","#6ece58","#70cf57","#73d056","#75d054","#77d153","#7ad151","#7cd250","#7fd34e","#81d34d","#84d44b","#86d549","#89d548","#8bd646","#8ed645","#90d743","#93d741","#95d840","#98d83e","#9bd93c","#9dd93b","#a0da39","#a2da37","#a5db36","#a8db34","#aadc32","#addc30","#b0dd2f","#b2dd2d","#b5de2b","#b8de29","#bade28","#bddf26","#c0df25","#c2df23","#c5e021","#c8e020","#cae11f","#cde11d","#d0e11c","#d2e21b","#d5e21a","#d8e219","#dae319","#dde318","#dfe318","#e2e418","#e5e419","#e7e419","#eae51a","#ece51b","#efe51c","#f1e51d","#f4e61e","#f6e620","#f8e621","#fbe723","#fde725"]
};

var fullWidth = 600;
var fullHeight = 200;
var margin = { top: 20, bottom: 20, left: 30, right: 20 };
var width = fullWidth - margin.left - margin.right;
var height = fullHeight - margin.top - margin.bottom;

// add the legend now
var legendFullHeight = 65;
var legendFullWidth = fullWidth;

var legendMargin = { top: 20, bottom: 20, left: 5, right: 20 };

// use same margins as main plot
var legendWidth = legendFullWidth - legendMargin.left - legendMargin.right;
var legendHeight = legendFullHeight - legendMargin.top - legendMargin.bottom;

var legendSvg = d3.select('#legend-svg')
    .attr('width', legendFullWidth)
    .attr('height', legendFullHeight)
    .append('g')
    .attr('transform', 'translate(' + legendMargin.left + ',' +
    legendMargin.top + ')');

updateColourScale(['#fdcf9b','#bf130d']);

// update the colour scale, restyle the plot points and legend
function updateColourScale(scale) {
    // create colour scale
    var colorScale = d3.scale.linear()
        .domain(linspace(-3, 3, scale.length))
        .range(scale);

    // style points
    d3.selectAll('circle')
        .attr('fill', function(d) {
            return colorScale(d.z);
        });

    // clear current legend
    legendSvg.selectAll('*').remove();

    // append gradient bar
    var gradient = legendSvg.append('defs')
        .append('linearGradient')
        .attr('id', 'gradient')
        .attr('x1', '0%') // bottom
        .attr('y1', '0%')
        .attr('x2', '100%') // to top
        .attr('y2', '0%')
        .attr('spreadMethod', 'pad');

    // programatically generate the gradient for the legend
    // this creates an array of [pct, colour] pairs as stop
    // values for legend
    var pct = linspace(0, 100, scale.length).map(function(d) {
        return Math.round(d) + '%';
    });

    var colourPct = d3.zip(pct, scale);

    colourPct.forEach(function(d) {
        gradient.append('stop')
            .attr('offset', d[0])
            .attr('stop-color', d[1])
            .attr('stop-opacity', 1);
    });

    var rect = legendSvg.append('rect')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('width', legendWidth)
        .attr('height', legendHeight)
        .style('fill', 'url(#gradient)');

    legendSvg.append("text")
        .attr("x", '88px')
        .attr("dy", "-2px")
        .style("text-anchor", "end")
        .text("Death Rate")
        .attr("font-weight", 'bold')
        .attr('fill','black');
    
    // create a scale and axis for the legend
    var legendScale = d3.scale.linear()
        .domain([0,0.1])
        .range([0,legendWidth]);

    var legendAxis = d3.svg.axis()
        .scale(legendScale)
        .orient("bottom")
        .tickValues(d3.range(0,0.11,0.01))
        .tickFormat(d3.format(".0%"));

    legendSvg.append("g")
        .attr("class", "legend axis")
        .attr("transform", "translate(0," + legendHeight + ")")
        .call(legendAxis);
}

function linspace(start, end, n) {
    var out = [];
    var delta = (end - start) / (n - 1);

    var i = 0;
    while(i < (n - 1)) {
        out.push(start + (i * delta));
        i++;
    }

    out.push(end);
    return out;
}