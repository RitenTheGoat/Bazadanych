const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const { createConnection } = require('net')

const app = express()

app.use(cors())

var con = mysql.createConnection({

    host:"localhost",
    user: "root",
    password: "",
    database: "baza"
})

con.connect(function(err){
    if(err){ 
        console.log(err)
    }
    console.log("Połończono") 

})





app.get("/", function(req,res){

    res.send("ok")


})


app.get("/select", function(req,res){
    const sql = "SELECT * FROM tabela1"
    con.query(sql, function(err, result,fields){
        if(err){
            console.log(err)
        }
        console.log(fields)
        res.send(result)
        
    })
})

app.get("/add/:imie/:nazwisko/:klasa", function(req,res){

    const imie = req.params.imie
    const nazwisko = req.params.nazwisko
    const klasa = req.params.klasa
    
    const sql = `INSERT INTO tabela1 (imie,nazwisko,klasa) VALUES ('${imie}','${nazwisko}','${klasa}' )`
    con.query(sql, function(err, result, fields){
        if(err){
            console.log(err)
            res.send("nie dodano")
        }res.send("dodano")
    })









})

app.get("/select2", function(req,res){
    const sql = "SELECT * FROM tabela2"
    con.query(sql, function(err, result,fields){
        if(err){
            console.log(err)
        }
        console.log(fields)
        res.send(result)
        
    })
})

app.get("/add2/:imie/:nazwisko/:klasa", function(req,res){

    const imie = req.params.imie
    const nazwisko = req.params.nazwisko
    const klasa = req.params.klasa
    
    const sql = `INSERT INTO tabela2 (imie,nazwisko,klasa) VALUES ('${imie}','${nazwisko}','${klasa}' )`
    con.query(sql, function(err, result, fields){
        if(err){
            console.log(err)
            res.send("nie dodano")
        }res.send("dodano")
    })









})








app.listen(3000)
