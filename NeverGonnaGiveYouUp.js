async function enviarTexto(texto){
    const linhas = texto.split(/[\n\t]+/).map(linha => linha.trim()).filter(linha => linha);
    main = document.querySelector("#main");
    areaTexto = main.querySelector("div[contenteditable='true']");
    if (!areaTexto) throw new Error("Não foi possível encontrar uma conversa");

    for(let linha of linhas){
        console.log(linha);
        areaTexto.focus();
        document.execCommand("insertText", false, linha);
        areaTexto.dispatchEvent(new Event("input", {bubbles: true}));

        setTimeout(() => {
            (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-testid="send-container"]`)).click();}, 1000);
        
            if(linhas.indexOf(linha) != linhas.length - 1){
                await new Promise(resolve => setTimeout(resolve, 500));
            }
    }
    return linhas.length;
}

enviarTexto(`
We're no strangers to love
You know the rules and so do I
A full commitments what I'm thinking of
You wouldn't get this from any other guy

I just wanna tell you how I'm feeling
Gotta make you understand

Never gonna give you up
Never gonna let you down
Never gonna turn around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

We've known each other for so long
Your heart's been aching
But you're too shy to say it
Inside we both know what's been going on
We know the game and we're gonna play it

And if you ask me how I'm feeling
Don't tell me you're too blind to see

Never gonna give you up
Never gonna let you down
Never gonna turn around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

Never gonna give you up
Never gonna let you down
Never gonna turn around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

Ooh (give you up)
Ooh (give you up)
Never gonna give, never gonna give (ooh, give you up)
Never gonna give, never gonna give (ooh, give you up)

We've known each other for so long
Your heart's been aching
But you're too shy to say it
Inside we both know what's been going on
We know the game and we're gonna play it

I just wanna tell you how I'm feeling
Gotta make you understand

Never gonna give you up
Never gonna let you down
Never gonna turn around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

Never gonna give you up
Never gonna let you down
Never gonna turn around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

Never gonna give you up
Never gonna let you down
Never gonna turn around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you`)