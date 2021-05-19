function genMadLib(adj1, adj2, adj3, noun1, noun2, noun3, adv){

const libs = [`There was was a ${adj1} ${noun1}. He ${adv} ran to the ${noun2}. He wanted to buy a ${adj2} ${noun3}.`,
        `I have been told that I am ${adj1}. Very ${adj1}. When I was young, I ate a ${adj2} ${noun2}. 
            It made me feel like a ${noun3}. Ever since then, my walk has been a bit ${adv}.`,
        `My dad was a ${adj1} ${noun1}. My mom was a ${adj2} ${noun2}. I ${adv} call myself a ${noun3}.`,
        `Have you ever wondered what a ${adj3} ${noun2} would look like? You must think pretty ${adv}. 
            It's kinda like you crossed a ${adj2} ${noun1} with a ${adj1} ${noun3}.`]
    const idx = Math.floor(libs.length * Math.random());
    return libs[idx]
};

export default genMadLib;