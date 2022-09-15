let sout = "";
sout += "(table)"
for (let i = 1; i <= 9; i++){
    sout += "<tr>";
    for (let j=2; j <= 9 ; j++)
        sout += "<td>" +j+ "*" +i+ "=" + (i * j) + "</td>"
    sout +="</tr> "+" <br>"

}
sout +="</table>";
document.write(soult);