var Staric = ""
for(var i = 1; i <= 5; i++){
    for(var j = i; j <= i; j++){
        Staric += "*"
        document.write(Staric)
    }   
document.write("<br>")
}

document.write("<br>")


for(var i = 5; i >= 1; i--){
    for(var j = 1; j<=i; j++){
        document.write("*")
}
document.write("<br>")
}

document.write("<br>")


for(var i = 1; i < 5; i++){
    for(var j = 1; j <= 5 ; j++){
        document.write("#")
}
document.write("<br>")
}
document.write("<br>")


for(var i = 1; i < 5; i++){
    for(var j = 1; j <= 5 ; j++){
        document.write("$")
}
document.write("<br>")
}

document.write("<br>")

for(var i = 1; i < 5; i++){
    for(var j = 1; j <= 5 ; j++){
        document.write("&")
}
document.write("<br>")
}

document.write("<br>")

for (var i = 1; i <= 5; i++) {
    for (k = 5; k > i; k--) {
        document.write("&nbsp;")
    }
    for (var j = 1; j <= (2 * i) - 1; j++) {
        document.write("*")

    }
    document.write("<br>")

}
document.write("<br>")

for(var i = 1; i <= 10; i++){
    for(var j = i; j <= 10-i; j++){
    document.write("*")

    }   

document.write("<br>")
}







for (var i = 1; i <= 5; i++) {
    for (k = 5; k > i; k--) {
        document.write("&nbsp;")
    }
    for (var j = 1; j <= (2 * i) - 1; j++) {
        document.write("*")

    }
    document.write("<br>")

}



for(var i = 1; i <= 10; i++){
    for(var j = i; j <= 10-i; j++){
    document.write("*")

    }   

document.write("<br>")
}



