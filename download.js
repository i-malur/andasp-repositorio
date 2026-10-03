const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'img');
if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir);
}

// Imagens Originais do Wikimedia Commons (Sem thumbnail, para evitar erro 400)
const images = [
    { name: 'mapa.png', url: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/S%C3%A3o_Paulo_em_S%C3%A3o_Paulo.svg' },
    
    // Cultura
    { name: 'c1.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Museu_de_Arte_de_S%C3%A3o_Paulo_Assis_Chateaubriand_-_MASP.jpg' },
    { name: 'c2.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Pinacoteca_do_Estado_de_S%C3%A3o_Paulo_-_01.jpg' },
    { name: 'c3.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Theatro_Municipal_de_S%C3%A3o_Paulo_2.jpg' },
    { name: 'c4.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Beco_do_Batman_03.jpg' },
    { name: 'c5.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Edif%C3%ADcio_Copan_-_S%C3%A3o_Paulo.jpg' },
    { name: 'c6.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Museu_Paulista_-_S%C3%A3o_Paulo_-_Brasil.jpg' },
    { name: 'c7.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Catedral_Metropolitana_de_S%C3%A3o_Paulo_1.jpg' },
    { name: 'c8.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Esta%C3%A7%C3%A3o_da_Luz_-_S%C3%A3o_Paulo_%28cropped%29.jpg' },
    { name: 'c9.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Edif%C3%ADcio_Altino_Arantes%2C_S%C3%A3o_Paulo.jpg' },
    { name: 'c10.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Bairro_da_Liberdade_-_S%C3%A3o_Paulo.jpg' },
    { name: 'c11.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Memorial_da_Am%C3%A9rica_Latina_-_S%C3%A3o_Paulo.jpg' },
    { name: 'c12.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Museu_do_Futebol_%28S%C3%A3o_Paulo%29.jpg' },
    { name: 'c13.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/S%C3%A3o_Paulo_-_CCBB_02.jpg' },
    { name: 'c14.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/MIS_S%C3%A3o_Paulo.jpg' },
    { name: 'c15.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Instituto_Tomie_Ohtake_-_S%C3%A3o_Paulo.jpg' },
    
    // Food
    { name: 'f1.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Mercado_Municipal_de_S%C3%A3o_Paulo_-_Mercad%C3%A3o.jpg' },
    { name: 'f2.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Festa_de_Nossa_Senhora_Achiropita.jpg' },
    { name: 'f3.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Eataly_S%C3%A3o_Paulo.jpg' },
    { name: 'f4.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Porco_San_Z%C3%A9_-_A_Casa_do_Porco.jpg' },
    { name: 'f5.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Famiglia_Mancini_-_Rua_Avanhandava.jpg' },
    { name: 'f6.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Rua_Oscar_Freire_-_Jardins.jpg' },
    { name: 'f7.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Padaria_tradicional_S%C3%A3o_Paulo.jpg' },
    { name: 'f8.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/1/15/DOM_restaurant_Sao_Paulo.jpg' },
    { name: 'f9.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Edif%C3%ADcio_It%C3%A1lia_-_S%C3%A3o_Paulo.jpg' },
    { name: 'f10.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Bar_Brahma_Centro.jpg' },
    { name: 'f11.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Feira_da_Pra%C3%A7a_Benedito_Calixto.jpg' },
    { name: 'f12.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Rua_dos_Pinheiros.jpg' },
    { name: 'f13.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Bairro_da_Liberdade_-_S%C3%A3o_Paulo.jpg' },
    { name: 'f14.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Churrasco_brasileiro.jpg' },
    { name: 'f15.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Gelato_Italiano.jpg' },

    // Nature
    { name: 'n1.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Parque_do_Ibirapuera_-_S%C3%A3o_Paulo%2C_Brasil.jpg' },
    { name: 'n2.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Avenida_Paulista_-_S%C3%A3o_Paulo.jpg' },
    { name: 'n3.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Jardim_Bot%C3%A2nico_de_S%C3%A3o_Paulo_01.jpg' },
    { name: 'n4.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Parque_Villa_Lobos.jpg' },
    { name: 'n5.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Parque_da_Independ%C3%AAncia.jpg' },
    { name: 'n6.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Parque_Tenente_Siqueira_Campos_%28Trianon%29.jpg' },
    { name: 'n7.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Parque_da_%C3%81gua_Branca_-_S%C3%A3o_Paulo.jpg' },
    { name: 'n8.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Horto_Florestal_de_S%C3%A3o_Paulo.jpg' },
    { name: 'n9.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Pico_do_Jaragu%C3%A1.jpg' },
    { name: 'n10.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Parque_Burle_Marx.jpg' },
    { name: 'n11.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Parque_do_Povo.jpg' },
    { name: 'n12.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Parque_Buenos_Aires.jpg' },
    { name: 'n13.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Zoologico_sao_paulo_elefante.jpg' },
    { name: 'n14.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Represa_Guarapiranga.jpg' },
    { name: 'n15.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Pedra_Grande_Cantareira.jpg' }
];

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function downloadAll() {
    let successCount = 0;

    for (const img of images) {
        const filePath = path.join(imgDir, img.name);
        try {
            console.log(`Baixando (Lento): ${img.name}...`);
            const res = await fetch(img.url, {
                headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/114.0.0.0 Safari/537.36' }
            });
            
            if (!res.ok) {
                console.error(`Erro ${res.status} ao baixar ${img.name}. Pulando.`);
                continue;
            }
            
            const arrayBuffer = await res.arrayBuffer();
            fs.writeFileSync(filePath, Buffer.from(arrayBuffer));
            console.log(`Baixado com sucesso: ${img.name}`);
            successCount++;
            
            // Pausa de 2 segundos entre cada requisição para não engatilhar Rate Limit (429) do Wikimedia
            await sleep(2000);
        } catch (e) {
            console.error(`Erro fatal ao baixar ${img.name}: ${e.message}`);
        }
    }
    console.log(`Download completo. ${successCount}/${images.length} imagens originais baixadas.`);
}

downloadAll();
