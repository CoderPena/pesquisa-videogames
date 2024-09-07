// Array de objetos contendo dados sobre diferentes consoles de videogame.
// Cada objeto inclui o título do console, links relacionados, descrição, detalhes adicionais e tags associadas.

let dados = [
    {
        titulo: "Atari",
        titulo_link: "https://atari.com/",
        descricao: "O Atari foi um dos pioneiros dos videogames, marcando a infância de muitas pessoas. Com gráficos simples, mas viciantes, e uma jogabilidade inovadora para a época, o Atari 2600 revolucionou a indústria e deixou um legado que perdura até hoje, inspirando novas gerações de jogadores.",
        detalhes: "Atari Jogos online",
        detalhes_link: "https://www.atari2600.com.br/",
        tags: "clássico nostálgico retro legado arcade"
    },
    {
        titulo: "PlayStation",
        titulo_link: "https://www.playstation.com/",
        descricao: "O PlayStation da Sony marcou a transição para os jogos em 3D, oferecendo uma biblioteca de jogos diversificada e gráficos impressionantes para a época. Títulos como Final Fantasy VII, Gran Turismo e Resident Evil se tornaram verdadeiros clássicos.",
        detalhes: "PlayStation Store",
        detalhes_link: "https://store.playstation.com/pt-br/pages/latest",
        tags: "imersão inovação franquias icônicas tecnologia"
    },
    {
        titulo: "Nintendo 64",
        titulo_link: "https://www.nintendo.com/",
        descricao: "O Nintendo 64 revolucionou os gráficos 3D em consoles domésticos, com jogos icônicos como Super Mario 64 e The Legend of Zelda: Ocarina of Time. Seu controle analógico e cartuchos de 64 bits proporcionaram uma experiência de jogo única e memorável.",
        detalhes: "Jogos N64",
        detalhes_link: "https://www.jogos360.com.br/nintendo_64/",
        tags: "revolução inovação retro cartucho clássico"
    },
    {
        titulo: "Nintendo Switch",
        titulo_link: "https://www.nintendo.com/switch/",
        descricao: "O Nintendo Switch revolucionou a indústria com sua portabilidade e versatilidade, permitindo jogar tanto em casa quanto em qualquer lugar. Com títulos exclusivos como The Legend of Zelda: Breath of the Wild e Mario Kart 8 Deluxe, o Switch conquistou jogadores de todas as idades.",
        detalhes: "Nintendo eShop",
        detalhes_link: "https://www.nintendo.com.br/store/",
        tags: "híbrido inovador flexível contemporâneo popular"
    },
    {
        titulo: "Xbox Series X/S",
        titulo_link: "https://www.xbox.com/",
        descricao: "A nova geração da Microsoft, Xbox Series X/S, oferece gráficos de última geração, tempo de carregamento rápido e compatibilidade com jogos de gerações anteriores. Com o Game Pass, os jogadores têm acesso a uma vasta biblioteca de jogos.",
        detalhes: "Xbox Game Pass",
        detalhes_link: "https://www.xbox.com/game-pass",
        tags: "next-gen performance acessibilidade streaming futuro"
    },
    {
        titulo: "Sega Mega Drive",
        titulo_link: "https://www.sega.com/",
        descricao: "O Mega Drive, conhecido como Genesis nos Estados Unidos, foi um dos principais concorrentes do Super Nintendo, com clássicos como Sonic the Hedgehog e Streets of Rage. Seu sucesso marcou uma geração de jogadores.",
        detalhes: "Jogos Mega Drive",
        detalhes_link: "https://www.retrogames.com.br/consoles/sega-mega-drive",
        tags: "competição ícone nostálgico arcade popularidade"
    },
    {
        titulo: "Super Nintendo Entertainment System (SNES)",
        titulo_link: "https://www.nintendo.com/",
        descricao: "O Super Nintendo, ou Super NES, foi um dos consoles mais populares de sua época, com gráficos aprimorados e jogos icônicos como Super Mario World e The Legend of Zelda: A Link to the Past.",
        detalhes: "Jogos SNES",
        detalhes_link: "https://www.retrogames.com.br/consoles/super-nintendo",
        tags: "sucesso consagrado inovação pixel arte era 16-bit"
    },
    {
        titulo: "PlayStation Portable (PSP)",
        titulo_link: "https://www.playstation.com/pt-br/psp/",
        descricao: "O PSP foi um dos consoles portáteis mais populares da Sony, oferecendo jogos de alta qualidade em uma plataforma portátil. Com uma tela brilhante e controles precisos, o PSP conquistou muitos jogadores.",
        detalhes: "Jogos clássicos da PlayStation",
        detalhes_link: "https://store.playstation.com/pt-br/home",
        tags: "mobilidade entretenimento design portátil portátil"
    },
    {
        titulo: "Nintendo 3DS",
        titulo_link: "https://www.nintendo.com/3ds/",
        descricao: "O Nintendo 3DS trouxe a tecnologia 3D para os consoles portáteis, oferecendo uma experiência visual única. Com jogos como The Legend of Zelda: A Link Between Worlds e Pokémon X/Y, o 3DS foi um grande sucesso.",
        detalhes: "Jogos em 3D sem óculos",
        detalhes_link: "https://www.nintendo.com.br/store/",
        tags: "imersão portátil evolução efeito estereoscópico"
    },
    {
        titulo: "Xbox 360",
        titulo_link: "https://www.xbox.com/",
        descricao: "O Xbox 360 foi um dos consoles mais vendidos da Microsoft, com uma biblioteca de jogos extensa e serviços online inovadores como a Xbox Live. Títulos como Halo e Gears of War marcaram a geração.",
        detalhes: "Xbox Live Gold",
        detalhes_link: "https://www.xbox.com/live",
        tags: "multiplayer comunidade serviço online impacto"
    },
    {
        titulo: "PlayStation 2",
        titulo_link: "https://www.playstation.com/pt-br/ps2/",
        descricao: "O PlayStation 2 foi o console mais vendido da história, com uma biblioteca de jogos gigantesca e uma grande variedade de gêneros. Títulos como Grand Theft Auto III e Metal Gear Solid 2 marcaram época.",
        detalhes: "Jogos clássicos e retrocompatibilidade",
        detalhes_link: "https://store.playstation.com/pt-br/home",
        tags: "best-seller diversidade influência legado console"
    },
    {
        titulo: "Nintendo Wii",
        titulo_link: "https://www.nintendo.com/wii/",
        descricao: "O Wii revolucionou a indústria com seus controles de movimento, tornando os jogos mais acessíveis e divertidos para todos. Títulos como Wii Sports e Mario Kart Wii foram grandes sucessos.",
        detalhes: "Jogos com controles de movimento",
        detalhes_link: "https://www.nintendo.com.br/store/",
        tags: "acessibilidade movimento familiar diversão interatividade"
    },
    {
        titulo: "Xbox One",
        titulo_link: "https://www.xbox.com/",
        descricao: "O Xbox One foi o sucessor do Xbox 360, oferecendo recursos como jogos em nuvem e streaming de vídeo. Títulos como Halo 5: Guardians e Forza Motorsport 6 marcaram a geração.",
        detalhes: "Xbox Live Gold e backward compatibility",
        detalhes_link: "https://www.xbox.com/live",
        tags: "inovação conectividade flexibilidade entretenimento digital"
    },
    {
        titulo: "Sega Saturn",
        titulo_link: "https://www.sega.com/",
        descricao: "O Sega Saturn foi um console de 32 bits que competiu com o PlayStation e o Nintendo 64, oferecendo jogos com gráficos avançados para a época. Títulos como Virtua Fighter 2 e Nights into Dreams marcaram a geração.",
        detalhes: "Jogos com gráficos 3D avançados",
        detalhes_link: "https://www.retrogames.com.br/consoles/sega-saturn",
        tags: "pioneirismo desafio gráficos sofisticados mercado competitivo"
    },
    {
        titulo: "Game Boy Advance",
        titulo_link: "https://www.nintendo.com/",
        descricao: "O Game Boy Advance foi um dos consoles portáteis mais populares da Nintendo, com uma biblioteca de jogos extensa e uma tela colorida. Títulos como The Legend of Zelda: The Minish Cap e Metroid Fusion foram grandes sucessos.",
        detalhes: "Jogos clássicos portáteis",
        detalhes_link: "https://www.nintendo.com.br/store/",
        tags: "portabilidade clássico aventura pixel-art inovação portátil"
    }
];
