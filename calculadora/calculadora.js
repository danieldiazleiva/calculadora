var cont=0;
var cont1=0;
var cont2=0;
var numero1=0;
var numero2=0;
var texto=[""];
function tex(tbot)
{

if(isNaN(tbot)==false && cont==0)
    {
    numero1 = numero1*10+tbot;
    texto[0] = numero1; 
    document.getElementById("textocaja").value=texto;
    
    }
else
{
    
    cont=1;
    if(tbot!="r")
    {
        if(tbot!="=" )
        {

            if(cont2==0)
            {
                if(isNaN(tbot)==true)
                 {
                    texto.push("");
                    texto[1]=tbot;
                    cont2=1;
                    document.getElementById("textocaja").value=texto.join("");
                    texto.push("")
                 }
            }
            else
            {
                if(isNaN(tbot)==false)
                 {
                    numero2 = numero2*10+tbot;
                    texto[2]=numero2;
                    document.getElementById("textocaja").value=texto.join("");
                    cont1=0;
                 }
            }
        }
        else
        {
            if(cont1==0)
            {
            if(texto[1]=="+") 
            var res=numero1+numero2;
            if(texto[1]=="*") 
            var res=numero1*numero2;
            if(texto[1]=="/") 
            var res=numero1/numero2;
            if(texto[1]=="-") 
            var res=numero1-numero2;
            numero1=res;
            document.getElementById("textocaja").value=res;
            cont=1;
            cont1=1;
            cont2=0;
            numero2=0;
            texto=[res];
            }
        }
    }
    else
    {
        numero1=0;
        numero2=0;
        cont=0;
        cont2=0
        texto=[""];
        document.getElementById("textocaja").value=texto;
    }
}
}


