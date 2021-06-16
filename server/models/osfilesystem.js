const express = require('express');
const path = require('path');
const osfilesystem = express();
const os = require('os');

var totalmemory = os.totalmem();
var freememory = os.freemem();
var currentuser = os.userInfo().username;
var cpuuses = os.cpus();
var uptime = os.uptime();
var oshostname = os.hostname();
var cpu_s = os.cpus();
var no_of_logical_core = 0;

cpu_s.forEach(element => {
    no_of_logical_core++;
    console.log("Logical core "
        + no_of_logical_core + " :");
    console.log(element);
});

console.log("total number of logical core is "
    + no_of_logical_core);
var total_memory = os.totalmem();
var total_mem_in_kb = total_memory / 1024;
var total_mem_in_mb = total_mem_in_kb / 1024;
var total_mem_in_gb = total_mem_in_mb / 1024;

total_mem_in_kb = Math.floor(total_mem_in_kb);
total_mem_in_mb = Math.floor(total_mem_in_mb);
total_mem_in_gb = Math.floor(total_mem_in_gb);

total_mem_in_mb = total_mem_in_mb % 1024;
total_mem_in_kb = total_mem_in_kb % 1024;
total_memory = total_memory % 1024;

// Display memory size
console.log("Total memory: " + total_mem_in_gb + "GB "
    + total_mem_in_mb + "MB " + total_mem_in_kb
    + "KB and " + total_memory + "Bytes");
console.log("Free Memory " + String(os.freemem())
    + " Bytes out of " + String(os.totalmem()) + " Bytes");


    osfilesystem.set('views', path.join(__dirname, 'views'));
    osfilesystem.set('view engine', 'jade');

    osfilesystem.get('/', function (req, res, next) {
    res.render('index', { title: "Total memory: " + total_mem_in_gb + "GB "
    + total_mem_in_mb + "MB " + total_mem_in_kb
    + "KB and " + total_memory + "Bytes" });
});
console.log(`Total Memory ${totalmemory}`);
console.log(`Free memory ${freememory}`);
console.log(`Current user ${currentuser}`);
console.log(`Cpu users ${cpuuses}`);
console.log(`Total uptime ${uptime}`);
console.log(`Host name ${oshostname}`);
module.exports = osfilesystem;

