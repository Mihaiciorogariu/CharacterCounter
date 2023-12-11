function checkVowels()
{
    let text=document.getElementById("inputText").value;
    let vowelCount=0;

    text=text.toLowerCase()

    for(let i=0; i<text.length;i++)
    {
        let char=text.charAt(i);
        if(isVowel(char))
        {
            vowelCount++;
        }

    }

    const result=document.getElementById('result');
    result.textContent='Total Vowels: '+ vowelCount;

}

function isVowel(char)
{
    const vowels=['a','e','i','o','u'];
    return vowels.includes(char);
}


function checkConsonants()
{
    let text=document.getElementById("inputText").value;
    let consonantCount=0;

    text=text.toLowerCase()

    for(let i=0; i<text.length;i++)
    {
        let char=text.charAt(i);
        if(!isVowel(char) && char >='a' && char <='z')
        {
            consonantCount++;
        }

    }

    const result=document.getElementById('result');
    result.textContent='Total Consonants: '+ consonantCount;

}

function countCharacters()
{
    let text=document.getElementById("inputText").value;
    let charCount=0;

    text=text.toLowerCase()

    for(let i=0; i<text.length;i++)
    {
        let char=text.charAt(i);
        if(char >='a' && char <='z')
        {
            charCount++;
        }

    }

    const result=document.getElementById('result');
    result.textContent='Total Characters: '+ charCount;

}

function countAllCharacters() {
    let text = document.getElementById("inputText").value;
    let charCountAll = text.length; // All characters are counted, including spaces and punctuation

    const result = document.getElementById('result');
    result.textContent = 'All Characters: ' + charCountAll;
}

function countNum()
{
    let text=document.getElementById("inputText").value;
    let numCount=0;

    text=text.toLowerCase()

    for(let i=0; i<text.length;i++)
    {
        let char=text.charAt(i);
        if(char >=1 && char <=9)
        {
            numCount++;
        }

    }

    const result=document.getElementById('result');
    result.textContent='Total Numeric Characters: '+ numCount;

}