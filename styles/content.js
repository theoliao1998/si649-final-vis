let $panel=$('.panel');
let started=false;
function check_if_in_view() {
	  var window_height = $(window).height();
	  var window_top_position = $(window).scrollTop();
	  var window_bottom_position = (window_top_position + window_height);
	  var $html;
	  if(!started){
      $('#chart').css('display','block');
	  	$('#explanation').css('display','block');
	  	$('#info').css('display','block');
      $('#event').css('display','none');
	  }
	  started=true;
	  // $.each($panel, function() {
	  //   var $element = $(this);
	  //   var element_height = $element.outerHeight();
	  //   var element_top_position = $element.offset().top;
	  //   var element_bottom_position = (element_top_position + element_height);

	  //   //check to see if this current container is within viewport
	  //   if ((element_bottom_position >= window_top_position) &&
	  //     (element_top_position <= window_bottom_position)) {
   //        $('#event-content').html($element.html());
	  //   } 
	  // });
	}



function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
const content_len=document.getElementById('content').children.length;
var news_range=[];

$(document).ready(function(){
  dragElement(document.getElementById('drag-text'));
  dragElement(document.getElementById('drag-img'));
  $('#container').on('scroll', check_if_in_view);
  $('#content div').each(function(){
    news_range.push([this.dataset.min,this.dataset.max]);
  });
});
  
  // $(window).trigger('scroll');



var begin = {'Afghanistan': '3/31/20', 'Albania': '3/24/20', 'Algeria': '3/12/20', 'Andorra': '3/30/20', 'Angola': '4/11/20', 'Antigua and Barbuda': '4/14/20', 'Argentina': '3/17/20', 'Armenia': '3/26/20', 'Australia': '3/1/20', 'Austria': '3/12/20', 'Azerbaijan': '3/13/20', 'Bahamas': '4/10/20', 'Bahrain': '3/16/20', 'Bangladesh': '3/18/20', 'Barbados': '4/10/20', 'Belarus': '3/31/20', 'Belgium': '3/18/20', 'Benin': '4/10/20', 'Bolivia': '4/14/20', 'Bosnia and Herzegovina': '3/27/20', 'Brazil': '3/26/20', 'Brunei': '3/28/20', 'Bulgaria': '3/21/20', 'Burkina Faso': '3/21/20', 'Burma': '4/17/20', 'Cameroon': '3/29/20', 'Chile': '3/22/20', 'China': '1/22/20', 'Colombia': '3/22/20', 'Congo (Brazzaville)': '4/10/20', 'Congo (Kinshasa)': '4/1/20', 'Costa Rica': '3/27/20', "Cote d'Ivoire": '3/29/20', 'Croatia': '3/19/20', 'Cuba': '3/27/20', 'Cyprus': '3/22/20', 'Czechia': '3/22/20', 'Denmark': '3/24/20', 'Diamond Princess': '2/26/20', 'Djibouti': '4/10/20', 'Dominican Republic': '3/24/20', 'Ecuador': '3/21/20', 'Egypt': '3/11/20', 'El Salvador': '4/10/20', 'Estonia': '3/25/20', 'Eswatini': '4/16/20', 'Ethiopia': '4/10/20', 'Finland': '3/21/20', 'France': '2/15/20', 'Gabon': '4/15/20', 'Georgia': '4/10/20', 'Germany': '3/10/20', 'Ghana': '3/31/20', 'Greece': '3/14/20', 'Guatemala': '3/25/20', 'Guinea': '4/15/20', 'Guyana': '4/10/20', 'Honduras': '3/28/20', 'Hungary': '3/21/20', 'Iceland': '3/15/20', 'India': '3/11/20', 'Indonesia': '3/14/20', 'Iran': '2/26/20', 'Iraq': '3/10/20', 'Ireland': '3/17/20', 'Israel': '3/21/20', 'Italy': '2/26/20', 'Jamaica': '4/10/20', 'Japan': '2/13/20', 'Jordan': '3/27/20', 'Kazakhstan': '3/27/20', 'Kenya': '4/1/20', 'Kosovo': '3/31/20', 'Kuwait': '4/10/20', 'Kyrgyzstan': '4/10/20', 'Latvia': '4/10/20', 'Lebanon': '3/17/20', 'Liberia': '4/10/20', 'Libya': '4/10/20', 'Liechtenstein': '4/10/20', 'Lithuania': '3/30/20', 'Luxembourg': '3/22/20', 'Malawi': '4/17/20', 'Malaysia': '3/17/20', 'Mali': '4/10/20', 'Malta': '4/10/20', 'Mauritius': '4/10/20', 'Mexico': '3/19/20', 'Moldova': '3/30/20', 'Monaco': '4/10/20', 'Montenegro': '4/10/20', 'Morocco': '3/21/20', 'Netherlands': '3/24/20', 'New Zealand': '3/29/20', 'Nicaragua': '4/12/20', 'Niger': '4/10/20', 'Nigeria': '3/27/20', 'North Macedonia': '3/26/20', 'Norway': '3/24/20', 'Oman': '3/31/20', 'Pakistan': '3/19/20', 'Panama': '3/29/20', 'Paraguay': '4/10/20', 'Peru': '3/26/20', 'Philippines': '3/17/20', 'Poland': '3/16/20', 'Portugal': '3/17/20', 'Qatar': '3/28/20', 'Romania': '3/22/20', 'Russia': '3/19/20', 'San Marino': '3/14/20', 'Saudi Arabia': '3/24/20', 'Senegal': '4/1/20', 'Serbia': '3/24/20', 'Singapore': '3/21/20', 'Slovakia': '4/1/20', 'Slovenia': '3/25/20', 'South Africa': '3/27/20', 'South Korea': '2/20/20', 'Spain': '3/10/20', 'Sri Lanka': '3/28/20', 'Sudan': '4/13/20', 'Suriname': '4/10/20', 'Sweden': '3/19/20', 'Switzerland': '3/10/20', 'Taiwan*': '2/24/20', 'Tanzania': '4/10/20', 'Thailand': '3/1/20', 'Togo': '3/31/20', 'Trinidad and Tobago': '4/11/20', 'Tunisia': '3/30/20', 'Turkey': '3/25/20', 'US': '2/29/20', 'Ukraine': '3/27/20', 'United Arab Emirates': '3/20/20', 'United Kingdom': '3/10/20', 'Uruguay': '3/31/20', 'Uzbekistan': '3/27/20', 'Venezuela': '3/27/20', 'West Bank and Gaza': '3/26/20', 'Zambia': '4/10/20'};
var cname = {'United States':'US', 'Bolivia, Plurinational State of':'Bolivia', 'Iran, Islamic Republic of':'Iran',
"Korea, Democratic People's Republic of":'North Korea',"Korea, Republic of" : 'South Korea'}

var curCountry = 'China';
var singleSelect = true;

// Copies a variable number of methods from source to target.
d3.rebind = function(target, source) {
  var i = 1, n = arguments.length, method;
  while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
  return target;
};

// Method is assumed to be a standard D3 getter-setter:
// If passed with no arguments, gets the value.
// If passed with arguments, sets the value and returns the target.
function d3_rebind(target, source, method) {
  return function() {
    var value = method.apply(source, arguments);
    return value === source ? target : value;
  };
}
WIDTH = window.innerWidth;
HEIGHT = window.innerHeight;
var margin = {top: 0, right: 0, bottom: 0, left: 0},
    width=Math.max(WIDTH,HEIGHT*1.8);
    height=WIDTH/1.8;
    // width = 1600 - margin.left - margin.right;
    // height = 750- margin.top - margin.bottom;


var svg = d3.select("#map").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height)


var color = d3.scale.linear().domain([0,0.1]).range(['#fdcf9b','#bf130d']);


var margin2 = {top: 50, right: 160, bottom: 80, left: 50},
    width2 = 600 - margin2.left - margin2.right,
    height2 = 360 - margin2.top - margin2.bottom;


var parseTime = d3.time.format("%m/%d/%Y").parse;

var x = d3.scale.linear()
    .range([0, width2]);

var y = d3.scale.linear()
    .range([height2, 0]);

var color2 = d3.scale.category10();

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .interpolate("basis")
    .x(function(d) { return x(moment(d.Date,'M/D/YY').diff(moment(begin[curCountry],'M/D/YY'),'days')); })
    .y(function(d) { return y( +d[curCountry]);});

var svg2 = d3.select("#chart").append("svg")
    // .attr("width", width2 + margin2.left + margin2.right)
    // .attr("height", +200+'px')
    .style("background-color", 'transparent')
  .append("g")
    .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

    

svg.append('rect')
    .attr('width', width )
    .attr('height', height )
    .attr('fill', 'white');

var g = svg.append("g").attr("width", width + margin.left + margin.right)
    .attr("height", height)//here
    .attr("transform", "translate(180,180)");

d3.queue()
  .defer(d3.json,"world.topojson")
  .await(ready);

var projection = d3.geo.equirectangular();

projection.scale(270);

var path = d3.geoPath()
  .projection(projection);

var zoom = d3.behavior.zoom()
      .on('zoom',function(){
        g.attr('transform','translate(' + 
          d3.event.translate.join(',') + ')scale(' + d3.event.scale + ')');
        g.selectAll('path')
          .attr('d',path.projection(projection));
});

function ready(error, data){
    // console.log(data);
    var countries = topojson.feature(data, data.objects.countries).features;
    g.selectAll('.country')
      .data(countries)
      .enter().append('path')
      .attr('class','country')
      .attr('d', path)
      .attr("id", function(d) { 
        // console.log(d);
        return (d["properties"]["name"] in cname) ? cname[d["properties"]["name"]] : d["properties"]["name"]; })
      .on('click', function(d){
        if(d3.select(this).classed('selected')==false){
          svg2.selectAll(".line").style('stroke','gray');
          svg2.selectAll(".line").style('opacity','0.1');
          if(curCountry!='China' && curCountry!='Italy'){
            svg2.selectAll(".c_"+curCountry.split(' ').join('_')).remove();
          }
        curCountry = this.id;

        d3.select('.selected').classed('selected',false);
        d3.select(this).classed('selected',true); //if directly change 'fill', it will be overwritten by css
        
        var bounds = path.bounds(d),
            dx = bounds[1][0] - bounds[0][0],
            dy = bounds[1][1] - bounds[0][1],
            X = (bounds[0][0] + bounds[1][0]) / 2 + (curCountry=='US'?-460:0),
            Y = (bounds[0][1] + bounds[1][1]) / 2,
            scale = Math.max(1, Math.min(8, 1.5 / Math.max(dx / width, dy / height))),
            translate = [width / 2 - scale * X + 600, height / 2 - scale * Y+200];

        svg.transition()
            .duration(3000)
            .call(zoom.translate(translate).scale(scale).event);
        } else{
          d3.select('.selected').classed('selected',false);
          if(curCountry!='China' && curCountry!='Italy'){
            svg.selectAll(".c_"+curCountry.split(' ').join('_')).remove();
          }
          svg.transition()
            .duration(3000) //here
            .call(zoom.translate([180,180]).scale(1).event);
        }
      })
    svg.call(zoom);
    
  d3.csv("./data/covid_19_clean_complete.csv")
    .row(function(d) {
      return {
        "Province/State":d["Country/Region"]!='Taiwan*'?d["Province/State"]:'Taiwan',
        "Country/Region":d["Country/Region"]!='Taiwan*'?d["Country/Region"]:'China (Taiwan)',
        lat: parseFloat(d.Lat),
        lng: parseFloat(d.Long),
        date: moment(d.Date,"MM/DD/YYYY").diff(moment('1/22/20',"MM/DD/YYYY"),'days'),
        number: parseFloat(d.Confirmed),
        deaths: parseFloat(d.Deaths),
        recovered: parseFloat(d.Recovered)
      };
    })
    .get(function(err, rows) {
    	if (err) return console.error(err);

      window.site_data = rows;
    });

    d3.csv('./data/test.csv').get(function(err, rows) {
    	if (err) return console.error(err);

      window.line_data = rows;
    });

    // document.querySelector('body').addEventListener("scroll", function(){
    //   document.getElementById('China').dispatchEvent(new MouseEvent("click"));
    // })
    // setTimeout(function(){ document.getElementById('China').dispatchEvent(new MouseEvent("click")); }, 100);
    
}

var stored = {};


var displaySites = function(data) {
  var sites = g.selectAll(".site")
      .data(data, function(d) {
        return d.number;
      });
  
  sites.enter().append("circle")
      .attr("class", "site")
      .attr("cx", function(d) {
        return projection([d.lng, d.lat])[0];
      })
      .attr("cy", function(d) {
        return projection([d.lng, d.lat])[1];
      })
      // .attr('v',function(d){
      //   return d["Country/Region"];
      // })
      .attr('fill', function(d){
        var value = d.number > 0 ? (d.deaths)/(d.number) : 0; 
        return color(value)
      })
      .on('click', function(d) {
        let cid = d["Country/Region"]!='China (Taiwan)'?d["Country/Region"].split(' ').join('_'):'Taiwan';
        document.getElementById(cid).dispatchEvent(new MouseEvent("click")); 
      })
      .transition().duration(10)
      .attr("r", function(d) {
        // console.log(d.number);
        return Math.sqrt(d.number) / 15;
      });
      
    sites.on('mouseover', function(d) {
          d3.select(this).style('opacity', '1'); 
          d3.select('#p_s').text(d["Province/State"]);
          d3.select('#c_r').text(d["Country/Region"]);
          // d3.select('#date').text(d.Date);
          d3.select('#confirmed').text(d.number);
          d3.select('#deaths').text(d.deaths);
          d3.select('#recovered').text(d.recovered);
          d3.select('#tooltip')
            .style('left', (d3.event.pageX + 20) + 'px')
            .style('top', (d3.event.pageY - 80) + 'px')
            .style('display', 'block')
            .style('opacity', '1')
        });
        //Add Event Listeners | mouseout
      sites.on('mouseout', function(d) { 
          d3.select(this).style('opacity', '0.5');
          d3.select('#tooltip')
            .style('display', 'none');
        });

 sites.exit()
    .attr('fill', function(d){
        var value = d.number > 0 ? (d.deaths)/(d.number) : 0; 
        return color(value)
      })
    .transition().duration(10)
    .attr("r", function(d) {
        return Math.sqrt(d.number) / 15;
      })
      .remove();
};


x.domain([0,40]);

y.domain([0,9]);

svg2.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height2 + ")")
    .call(xAxis)
    .append("text")
    .attr("x", '320px')
    .attr("dy", "40px")
    .style("text-anchor", "end")
    .text("Days after first 3 recoveries")
    .attr("font-weight", 'bold');

svg2.append("g")
    .attr("class", "y axis")
    .call(yAxis)
  .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "-40px")
    .style("text-anchor", "end")
    .text("Recorded Deaths / Recorded Recoveries")
    .attr("font-weight", 'bold');

var drawline = function(data, country) {

  
  // svg2.append("line")
  //       .attr(
  //       {
  //           "class":"horizontalGrid",
  //           "x1" : 0,
  //           "x2" : width,
  //           "y1" : y(0),
  //           "y2" : y(0),
  //           "fill" : "none",
  //           "shape-rendering" : "crispEdges",
  //           "stroke" : "black",
  //           "stroke-width" : "1px",
  //           "stroke-dasharray": ("3, 3")
  //       });

  var c = svg2.selectAll(".c_"+curCountry.split(' ').join('_'))
      .data(data);

    
    c.remove()

    c.enter().append("g")
      .attr("class", "c_"+curCountry.split(' ').join('_')).append("path")
      .datum(data)
      .attr("class", "line")
      .style("stroke", 'red' )
      .attr('fill','none')
      // .transition()
      //   .ease("linear")
      //   .duration(10)
      .attr("d", function(d) { return line(d); })
      // .attr("data-legend",function(d) { return d.name})
      // .style("stroke", function(d) { return color(d.name); });
  
  c.exit()
  .attr('fill','none')
  // .transition()
  //       .ease("linear")
  //       .duration(5)
    .attr("d", function(d) { return line(d); })
    .style("stroke", 'red ')
      .remove();
  
  t = c.selectAll('text').data(data);
  t.remove();
  t.enter().append('text')
      // .datum(data)
      .attr("transform", function(d) { return "translate(" + x(+moment(d.Date,'M/D/YY').diff(moment(begin[curCountry],'M/D/YY'),'days')) + "," 
        + y(d[curCountry] != 'inf' ? +d[curCountry] : 0) + ")"; })
      .attr("x", 3)
      .attr("dy", curCountry =='China' ? "-5px": "0px")
      .text(function(d, i) {return i == t.length-1 ? 
       (curCountry =='China' ? 'Mainland China':curCountry):'';})
      .attr('font-size','15px')
      .attr('fill', curCountry =='China' || curCountry == 'Italy' ? 'gray':'black');
  
  // t.each(function(d, i) {
  //   d3.select(this).text(i == t.length-1 ? curCountry:'');
  // });
  
  t.exit()
    // .transition()
    // .duration(5)
    .text(curCountry)
      .remove();


  // legend = svg.append("g")
  //   .attr("class","legend")
  //   .attr("transform","translate(50,30)")
  //   .style("font-size","12px")
  //   .call(d3.legend)

  // setTimeout(function() { 
  //   legend
  //     .style("font-size","20px")
  //     .attr("data-style-padding",10)
  //     .call(d3.legend)
  // },1000)

};

var minDate = 0;
var maxDate = moment('4/18/20', "MM/DD/YYYY").diff(moment('1/22/20', "MM/DD/YYYY"),'days');

var myslider = d3.slider()
  .axis(true).min(minDate).max(maxDate).step(1)
  .on("slide", function(evt, value) {
    // console.log('y:'+timeConverter(value));
    $('#event-content').html('');
    document.getElementById('curDate').textContent = moment('1/22/20', "M/D/YY").add(Math.floor(value),'days').format('MMM Do, YYYY');
    var newData = _(site_data).filter( function(site) {
      // console.log(site_data);
      return site.date == Math.floor(value);
    })
    newData.sort(function (a, b){
      return d3.descending(a.number,b.number);
    })
    // console.log("New set size ", newData.length);

    displaySites(newData);

    var newData2 = _(line_data).filter( function(line) {
      // console.log(site_data);
      return moment(line.Date, "M/D/YY") <= moment('1/22/20', "M/D/YY").add(Math.floor(value),'days') && moment(line.Date, "M/D/YY") >= moment(begin[curCountry], "M/D/YY");
    });
    newData2.sort(function (a, b){
      return d3.ascending(moment(a.Date, "M/D/YY"),moment(b.Date, "M/D/YY"));
    })

    drawline(newData2,curCountry);
  });

  d3.select('#slider3').call(myslider);

var container = d3.select('#container');
var content = d3.select('#content');

var SCROLL_LENGTH = content.node().getBoundingClientRect().height - HEIGHT;
var scrollTop = 0;
var newScrollTop = 0;
container
  		.on("scroll.scroller", function() {
      	newScrollTop = container.node().scrollTop
});

var time = d3.scale.linear()
    	.domain([0, SCROLL_LENGTH])
    	.range([minDate, maxDate])
      .clamp(true);



var render = function() {
    if (scrollTop !== newScrollTop) {
      $('#legend-svg').css('display','block');
      scrollTop = newScrollTop;
      var val = time(scrollTop);
      var curMoment=moment('1/22/20', "M/D/YY").add(Math.floor(val),'days');
      document.getElementById('curDate').textContent = curMoment.format('MMM Do, YYYY');
      //get and display current news
      if($('#content')){
        const curDate=curMoment.format("M/DD/YY");
        const news_len=news_range.length;
        var news_id=-1;
        for(var i=0; i<news_len ;i++){
          if(curDate >= news_range[i][0] && curDate < news_range[i][1]){
            news_id=i;break;
          }
        }
        if(curDate>=news_range[news_len-1][1]){
          $('#drag-text').css('display','none');
          $('#drag-img').css({'display':'none'});
        } else if(news_id != -1){
          var r=Math.floor(Math.random() * Math.floor(10))/10+1;//random number between 1-2
          var item=document.getElementById('content').children[news_id];
          $('#drag-text').html(item.innerHTML);
          $('#drag-text').css({'display':'block','opacity':'1'});
          if(item.dataset.imgSrc){
            $('#drag-img img').attr('src',item.dataset.imgSrc);
            if(item.dataset.imgUrl){ 
              $('#drag-img a').attr('href',item.dataset.imgUrl);
              $('#drag-img a').css('display','inline-block');
            }
            $('#drag-img').css({'display':'block','opacity':'1'});
          } else {
            $('#drag-img').css({'display':'none'});
            $('#drag-img img').attr('src','');
            $('#drag-img a').css('display','none');
          }
        } else {
          $('#drag-text').css('opacity','0');
          $('#drag-img').css({'display':'none'});
        }
      }
      else{
        $('#drag-text').css('display','none');
        $('#drag-img').css({'display':'none'});
      }
      

      if(val>=30 && val < 68){
        if  (curCountry != 'Italy')
        document.getElementById('Italy').dispatchEvent(new MouseEvent("click"));
      } else if (val < 30){
        // curCountry = 'China';
        // d3.select("#Korea_Republic_of").classed('selected',false);
        if  (d3.select('#China').classed('selected') == false)
        document.getElementById('China').dispatchEvent(new MouseEvent("click"));
      } else{
        document.getElementById("slider3").style.display = "block";
        
        d3.select('.selected').classed('selected',false);

        svg.transition()
            .duration(3000)//here
            .call(zoom.translate([180,180]).scale(1).event);

        document.getElementById("container").style.display = "none";
      }
      myslider.value(val);
      var newData = _(site_data).filter( function(site) {
      // console.log(site_data);
        return site.date == Math.floor(val);
      })
      newData.sort(function (a, b){
        return d3.descending(a.number,b.number);
      })
    // console.log("New set size ", newData.length);

      displaySites(newData);

      var newData2 = _(line_data).filter( function(line) {
      // console.log(site_data);
        return moment(line.Date, "M/D/YY") <= moment('1/22/20', "M/D/YY").add(Math.floor(val),'days') && moment(line.Date, "M/D/YY") >= moment(begin[curCountry], "M/D/YY");
      });
      newData2.sort(function (a, b){
        return d3.ascending(moment(a.Date, "M/D/YY"),moment(b.Date, "M/D/YY"));
      })

      drawline(newData2,curCountry);
  }
  
  window.requestAnimationFrame(render);
}
window.requestAnimationFrame(render);

// window.onresize = setDimensions;
