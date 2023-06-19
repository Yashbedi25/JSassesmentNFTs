
/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs =[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_nature,_languageSpeak,_height) {
    const NFT={
        "name":_name,
        "Nature":_nature,
        "languageSpeak":_languageSpeak,
        "Height":_height

    }
    NFTs.push(NFT);
    console.log("Minter : "+_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<NFTs.length;i++){
        console.log("\nID: \t\t\t"+(i+1));
        console.log("Name: \t\t\t"+NFTs[i].name);
        console.log("Nature: \t\t"+NFTs[i].Nature);
        console.log("LanguageSpeak:\t"+NFTs[i].languageSpeak);
        console.log("Height: \t\t"+NFTs[i].Height);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal No. of NFT's : "+NFTs.length)
}

// call your functions below this line
mintNFT("Roshan","Excelent","Sanskrit",180);
mintNFT("Yash","VeryGood","Hindi",170);
mintNFT("Rohit","Excelent","English",175);
listNFTs();
getTotalSupply();
