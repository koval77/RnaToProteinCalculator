 var sliced=[];
        var aminoacid=[];

    function checkIfIsStart(thisstr){
        if(thisstr.includes("AUG")){
            console.log("aug jest included");
        }
        else {
            console.log("aug not included");
        }
    }
    function trans(codon){
//                        for(var t=aminoacid.length;t=0;t--){aminoacid.pop();}
        switch(codon){
            case ("UUU"):
            case ("UUC"):
                aminoacid.push("Phe");
                break;
            case ("UUA"):
            case ("UUG"):
                aminoacid.push("Leu");
                break;
            case ("CUU"):
            case ("CUC"):
            case ("CUA"):
            case ("CUG"):
                aminoacid.push("Leu");
                break;
            case ("AUU"):
            case ("AUC"):
            case ("AUA"):
                aminoacid.push("Ile");
                break;
            case ("AUG"):
                aminoacid.push("Met");
                break;
            case ("GUA"):
            case ("GUG"):
            case ("GUC"):
            case ("GUU"):
                aminoacid.push("Val");
                break;
            case ("UCU"):
            case ("UCC"):
            case ("UCA"):
            case ("UCG"):
            case ("AGU"):
            case ("AGC"):
                aminoacid.push("Ser");
                break;
            case ("CCA"):
            case ("CCU"):
            case ("CCG"):
            case ("CCC"):
                aminoacid.push("Pro");
                break;
            case ("ACA"):
            case ("ACU"):
            case ("ACG"):
            case ("ACC"):
                aminoacid.push("Thr");
                break;
            case ("GCA"):
            case ("GCU"):
            case ("GCG"):
            case ("GCC"):
                aminoacid.push("Ala");
                break;
            case ("UAU"):
            case ("UAC"):
                aminoacid.push("Tyr");
                break;
            case ("UAA"):
            case ("UAG"):
            case ("UGA"):
                aminoacid.push("STOP\n");
                break;
            case ("CAU"):
            case ("CAC"):
                aminoacid.push("His");
                break;
            case ("CAA"):
            case ("CAG"):
                aminoacid.push("Gin");
                break;
            case ("AAU"):
            case ("AAC"):
                aminoacid.push("Asn");
                break;
            case ("AAA"):
            case ("AAG"):
                aminoacid.push("Lys");
                break;
            case ("GAU"):
            case ("GAC"):
                aminoacid.push("Asp");
                break;
            case ("GAA"):
            case ("GAG"):
                aminoacid.push("Glu");
                break;
            case ("UGU"):
            case ("UGC"):
                aminoacid.push("Cys");
                break;
            case ("UGG"):
                aminoacid.push("Trp");
                break;
            case ("CGU"):
            case ("CGC"):
            case ("CGA"):
            case ("CGG"):
            case ("AGA"):
            case ("AGG"):
                aminoacid.push("Arg");
                break;
            case ("GGU"):
            case ("GGC"):
            case ("GGG"):
            case ("GGA"):
                aminoacid.push("Gly");
                break;
            default:
                aminoacid.push("--NOT A CORRECT CODON--");
        }
    }

    function translaterna(){
        sliced=[];
        var pr='uuuaugucuucuucuuauuauuauuag';
        var rrnnaa=document.getElementById('rna');
        rrnnaa.value=rrnnaa.value.toUpperCase();
        checkIfIsStart(rrnnaa.value);
        var start=rrnnaa.value.indexOf("AUG");
        var slicingstart=rrnnaa.value.slice(start);
        //Hearth of this program
        for(var i=0;i<slicingstart.length;i=i+3){
            sliced.push(slicingstart[i]+slicingstart[i+1]+slicingstart[i+2]);
        }
        aminoacid=[];
        console.log(sliced);
        for(var a=0;a<=sliced.length;a++){
            trans(sliced[a])
        }

        console.log(aminoacid);
        document.getElementById('pos').innerHTML='Position of start codon: '+start;
        document.getElementById('translated').innerHTML=' Translated part: '+slicingstart
        document.getElementById('result').innerHTML='\n'+'\nAminoacids:\n '+aminoacid+'\n';
    }
    function onMsDw(obj){
          obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Tadam!!!";
        obj.style.border="25px 56px 54px 54px"
    }
        function onMsUp(obj){
              obj.style.backgroundColor="#4e4Aa8";
  obj.innerHTML="Try again!";
            obj.style.border="5px 6px 4px 4px"
        }
