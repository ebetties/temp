import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as d3 from 'd3';
import '../index.scss';

function MyChart2() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/budget')
            .then(response => {
                console.log('Data fetched successfully:', response.data);
                setData(response.data.myBudget);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            createChart(data);
        }
    }, [data]);

    function createChart(data) {
        var width = 720,
            height = 337,
            radius = Math.min(width, height) / 2;
    
        var color = d3.scaleOrdinal()
            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
    
        var arc = d3.arc()
            .outerRadius(radius * 0.8)
            .innerRadius(radius * 0.4);
    
        var pie = d3.pie()
            .sort(null)
            .value(function (d) { return d.budget; });
    
        var svg = d3.select("#myChart2")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    
        var arcs = svg.selectAll(".arc")
            .data(pie(data))
            .enter().append("g")
            .attr("class", "arc");
    
        arcs.append("path")
            .attr("d", arc)
            .style("fill", function (d) { return color(d.data.title); });
    
        // Adjust the position of the text
        arcs.append("text")
            .attr("transform", function (d) {
                var pos = arc.centroid(d);
                // Move the text 10 units away from the center along the radial direction
                var distance = 62;
                var angle = Math.atan2(pos[1], pos[0]);
                var x = pos[0] + distance * Math.cos(angle);
                var y = pos[1] + distance * Math.sin(angle);
                return "translate(" + x + "," + y + ")";
            })
            .attr("dy", ".35em")
            .text(function (d) { return d.data.title + " " + d.data.budget; });
    }
    

    return (
        <div id="myChart2"></div>
    );
}

export default MyChart2;
